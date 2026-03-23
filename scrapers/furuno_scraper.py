#!/usr/bin/env python3
"""
Furuno Product Scraper for Humanloop Maritime
Extracts product data, specs, and manual links from furunousa.com
"""

import asyncio
import json
import re
import httpx
from pathlib import Path
from typing import Optional

BASE_URL = "https://www.furunousa.com/en"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# Known product categories and their URLs
PRODUCT_CATEGORIES = {
    "radars": f"{BASE_URL}/products/radars",
    "navnet_mfds": f"{BASE_URL}/products/navnet_mfds",
    "sonar": f"{BASE_URL}/products/sonar",
    "instruments": f"{BASE_URL}/products/instruments",
    "gps": f"{BASE_URL}/products/gps",
    "ais": f"{BASE_URL}/products/ais",
    "communications": f"{BASE_URL}/products/communications",
}

# Known product models mentioned in docs
KNOWN_PRODUCTS = [
    "far1523", "far1518", "far2127", "far3000",
    "tzt22x", "tzt15x", "tzt9", 
    "dff3d", "csh8lmk2",
    "fi70", "rd50",
    "gp170", "gp39", "navpilot",
    "fs1575", "fs2075",
]


async def fetch_page(url: str, client: httpx.AsyncClient) -> Optional[str]:
    """Fetch a single page with error handling"""
    try:
        response = await client.get(url, headers=HEADERS, timeout=30.0)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None


def parse_product_data(html: str, url: str) -> dict:
    """Parse product information from HTML"""
    # This is a simplified parser - in production would use BeautifulSoup
    data = {
        "url": url,
        "name": extract_title(html),
        "description": extract_description(html),
        "features": extract_features(html),
        "specs": extract_specs(html),
        "manual_url": extract_manual_link(html),
    }
    return data


def extract_title(html: str) -> str:
    """Extract product title"""
    match = re.search(r'<h1[^>]*>([^<]+)</h1>', html, re.IGNORECASE)
    return match.group(1).strip() if match else ""


def extract_description(html: str) -> str:
    """Extract product description"""
    # Look for common description patterns
    patterns = [
        r'<meta name="description" content="([^"]+)"',
        r'<p[^>]*class="[^"]*description[^"]*"[^>]*>([^<]+)</p>',
    ]
    for pattern in patterns:
        match = re.search(pattern, html, re.IGNORECASE)
        if match:
            return match.group(1).strip()
    return ""


def extract_features(html: str) -> list:
    """Extract product features"""
    features = []
    # Look for feature lists in the HTML
    feature_pattern = r'<li[^>]*>([^<]+)</li>'
    matches = re.findall(feature_pattern, html)
    for match in matches[:10]:  # Limit to 10 features
        clean = re.sub(r'<[^>]+>', '', match).strip()
        if clean and len(clean) > 10:
            features.append(clean)
    return features


def extract_specs(html: str) -> dict:
    """Extract technical specifications"""
    specs = {}
    # Look for specification tables
    spec_pattern = r'<td[^>]*class="[^"]*spec[^"]*"[^>]*>([^<]+)</td>\s*<td[^>]*>([^<]+)</td>'
    matches = re.findall(spec_pattern, html, re.IGNORECASE)
    for key, value in matches:
        specs[key.strip()] = value.strip()
    return specs


def extract_manual_link(html: str) -> Optional[str]:
    """Extract manual/PDF link"""
    patterns = [
        r'href="([^"]*\.pdf[^"]*)"[^>]*>.*?manual',
        r'href="([^"]*manuals?[^"]*)"',
        r'data-manual="([^"]+)"',
    ]
    for pattern in patterns:
        match = re.search(pattern, html, re.IGNORECASE)
        if match:
            return match.group(1)
    return None


async def scrape_product(model: str, client: httpx.AsyncClient) -> Optional[dict]:
    """Scrape a specific product page"""
    url = f"{BASE_URL}/products/{model}"
    html = await fetch_page(url, client)
    if not html:
        return None
    
    data = parse_product_data(html, url)
    data["model"] = model
    return data


async def scrape_category(category: str, client: httpx.AsyncClient) -> list:
    """Scrape all products in a category"""
    url = PRODUCT_CATEGORIES.get(category, f"{BASE_URL}/products/{category}")
    html = await fetch_page(url, client)
    if not html:
        return []
    
    products = []
    # Find all product links on the page
    link_pattern = r'href="(/en/products/[^"]+)"'
    links = set(re.findall(link_pattern, html))
    
    for link in links:
        full_url = f"https://www.furunousa.com{link}"
        product_html = await fetch_page(full_url, client)
        if product_html:
            data = parse_product_data(product_html, full_url)
            products.append(data)
    
    return products


async def main():
    """Main scraping function"""
    print("Starting Furuno scraper for Humanloop Maritime...")
    
    async with httpx.AsyncClient() as client:
        all_products = []
        
        # Scrape known products
        print("\n[1/3] Scraping known product models...")
        for model in KNOWN_PRODUCTS:
            print(f"  - {model}")
            data = await scrape_product(model, client)
            if data:
                all_products.append(data)
        
        # Scrape categories
        print("\n[2/3] Scraping product categories...")
        for category in PRODUCT_CATEGORIES.keys():
            print(f"  - {category}")
            products = await scrape_category(category, client)
            all_products.extend(products)
        
        # Save results
        print(f"\n[3/3] Saving {len(all_products)} products...")
        output_dir = Path(__file__).parent.parent / "data"
        output_dir.mkdir(exist_ok=True)
        
        output_file = output_dir / "furno_products.json"
        with open(output_file, "w") as f:
            json.dump(all_products, f, indent=2)
        
        print(f"\n✅ Data saved to: {output_file}")
        print(f"Total products scraped: {len(all_products)}")


if __name__ == "__main__":
    asyncio.run(main())

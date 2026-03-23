-- Humanloop Maritime - zvec Database Schema
-- SQLite with vector search for marine technical services

-- Enable vector search extension
.load zvec

-- ============================================
-- TABLES
-- ============================================

-- Equipment brands
CREATE TABLE brands (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    website TEXT,
    description TEXT,
    logo_url TEXT
);

-- Equipment models
CREATE TABLE equipment (
    id INTEGER PRIMARY KEY,
    brand_id INTEGER REFERENCES brands(id),
    model TEXT NOT NULL,
    category TEXT NOT NULL,  -- radar, sonar, gps, ais, radio, etc.
    description TEXT,
    specs_json TEXT,  -- JSON for flexible specs
    manual_url TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create vector column for equipment embeddings
CREATE VECTOR TABLE equipment_embeddings (
    equipment_id INTEGER REFERENCES equipment(id),
    embedding VECTOR(1536)  -- OpenAI embedding dimension
);

-- Technical skills
CREATE TABLE skills (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    description TEXT,
    certifications_required TEXT  -- JSON array
);

-- Equipment-Skill relationships
CREATE TABLE equipment_skills (
    equipment_id INTEGER REFERENCES equipment(id),
    skill_id INTEGER REFERENCES skills(id),
    PRIMARY KEY (equipment_id, skill_id)
);

-- Technicians
CREATE TABLE technicians (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    location_lat REAL,
    location_lon REAL,
    location_name TEXT,  -- "Valparaíso, Chile" or "Miami, FL"
    bio TEXT,
    hourly_rate REAL,
    rating REAL DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    verified BOOLEAN DEFAULT FALSE,
    certifications_json TEXT,  -- JSON array of certifications
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Technician skills
CREATE TABLE technician_skills (
    technician_id INTEGER REFERENCES technicians(id),
    skill_id INTEGER REFERENCES skills(id),
    proficiency_level TEXT CHECK(proficiency_level IN ('basic', 'intermediate', 'expert')),
    PRIMARY KEY (technician_id, skill_id)
);

-- Service requests
CREATE TABLE service_requests (
    id INTEGER PRIMARY KEY,
    vessel_name TEXT,
    vessel_type TEXT,
    location_lat REAL,
    location_lon REAL,
    location_name TEXT,
    equipment_category TEXT,
    equipment_model TEXT,
    issue_description TEXT,
    urgency TEXT CHECK(urgency IN ('low', 'normal', 'high', 'emergency')),
    status TEXT DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Service jobs (matched to technician)
CREATE TABLE service_jobs (
    id INTEGER PRIMARY KEY,
    request_id INTEGER REFERENCES service_requests(id),
    technician_id INTEGER REFERENCES technicians(id),
    status TEXT DEFAULT 'proposed',
    proposed_price REAL,
    estimated_duration TEXT,
    scheduled_at TIMESTAMP,
    completed_at TIMESTAMP,
    actual_price REAL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
    id INTEGER PRIMARY KEY,
    job_id INTEGER REFERENCES service_jobs(id),
    technician_id INTEGER REFERENCES technicians(id),
    rating INTEGER CHECK(rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- VECTOR SEARCH INDEXES
-- ============================================

-- Create HNSW index on equipment embeddings
CREATE INDEX idx_equipment_embeddings_hnsw 
ON equipment_embeddings 
USING HNSW(embedding);

-- ============================================
-- SAMPLE DATA
-- ============================================

-- Brands
INSERT INTO brands (name, website, description) VALUES
('Furuno', 'https://www.furunousa.com', 'Leading marine electronics manufacturer specializing in radar, sonar, and navigation systems'),
('Raymarine', 'https://www.raymarine.com', 'Marine electronics brand offering chartplotters, sonar, and communication systems'),
('JRC', 'https://www.jrc.jp', 'Japanese marine electronics and navigation equipment manufacturer'),
('ICOM', 'https://www.icomamerica.com', 'Professional marine VHF/HF radio communications');

-- Equipment (sample)
INSERT INTO equipment (brand_id, model, category, description, manual_url) VALUES
(1, 'FAR-1523', 'radar', 'Commercial radar with Automatic Clutter Elimination (ACE) and Target Analyzer', 'https://www.furunousa.com/en/products/far1523'),
(1, 'FAR-1518', 'radar', 'Enterprise radar with simple user interface and excellent target detection', 'https://www.furunousa.com/en/products/far1518'),
(1, 'TZT22X', 'mfd', 'NavNet TZtouchXL MFD with TZ MAPS and BathyVision', 'https://www.furunousa.com/en/products/tzt22x'),
(1, 'DFF3D', 'sonar', 'Multibeam sonar with 120-degree port-to-starboard coverage', 'https://www.furunousa.com/en/products/dff3d'),
(1, 'GP-170', 'gps', 'BAM-ready GPS navigator for ocean-going ships', 'https://www.furunousa.com/en/products/gp170');

-- Skills
INSERT INTO skills (name, category, description, certifications_required) VALUES
('Radar Installation', 'radar', 'Install and configure marine radar systems', '["NMEA Certified", "Furuno Certified"]'),
('Radar Calibration', 'radar', 'Calibrate radar antenna and display settings', '["NMEA Certified"]'),
('GMDSS Maintenance', 'communications', 'Maintain GMDSS emergency communication systems', '["GMDSS Certified", "SOLAS Compliant"]'),
('AIS Diagnostics', 'ais', 'Diagnose and repair AIS transponders', '["NMEA Certified"]'),
('GPS Repair', 'gps', 'Repair and calibrate GPS navigation systems', '["NMEA Certified"]'),
('Echosounder Calibration', 'sonar', 'Calibrate fish finders and depth sounders', '["NMEA Certified"]'),
('VHF Radio Installation', 'communications', 'Install marine VHF/HF radio systems', '["FCC Licensed", "GMDSS Certified"]');

-- ============================================
-- USEFUL QUERIES
-- ============================================

-- Find technicians by skill with vector similarity
-- SELECT t.*, 
--        vec_distance_l2(e.embedding, query_embedding) as distance
-- FROM technicians t
-- JOIN technician_skills ts ON t.id = ts.technician_id
-- JOIN skills s ON ts.skill_id = s.id
-- JOIN equipment_embeddings e ON e.equipment_id = (SELECT id FROM equipment WHERE model = 'FAR-1523')
-- WHERE s.name = 'Radar Installation'
-- ORDER BY distance
-- LIMIT 10;

-- Search equipment by description similarity
-- SELECT e.*, 
--        vec_distance_l2(ee.embedding, query_embedding) as distance
-- FROM equipment e
-- JOIN equipment_embeddings ee ON e.id = ee.equipment_id
-- WHERE e.category = 'radar'
-- ORDER BY distance
-- LIMIT 10;

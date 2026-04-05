-- FakeNews Detector Schema for Supabase
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT,
  url TEXT,
  published_at TIMESTAMP,
  image_url TEXT,
  content TEXT,
  ai_verdict JSONB,
  ai_analyzed_at TIMESTAMP,
  human_votes_count INT DEFAULT 0,
  real_votes INT DEFAULT 0,
  fake_votes INT DEFAULT 0,
  final_verdict JSONB,
  status VARCHAR(20) DEFAULT pending,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id UUID REFERENCES news(id) ON DELETE CASCADE,
  vote BOOLEAN NOT NULL,
  justification TEXT,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(news_id, email)
);

CREATE TABLE IF NOT EXISTS featured_justifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id UUID REFERENCES news(id) ON DELETE CASCADE,
  vote_id UUID REFERENCES votes(id) ON DELETE CASCADE,
  is_featured BOOLEAN DEFAULT false,
  featured_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS daily_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_date DATE UNIQUE,
  news_summary JSONB,
  total_news INT DEFAULT 0,
  total_votes INT DEFAULT 0,
  generated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_news_status ON news(status);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_votes_news ON votes(news_id);
CREATE INDEX IF NOT EXISTS idx_votes_email ON votes(email);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read news" ON news FOR SELECT USING (true);
CREATE POLICY "Public can read votes" ON votes FOR SELECT USING (true);
CREATE POLICY "Public can insert votes" ON votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert subscriptions" ON subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can read subscriptions" ON subscriptions FOR SELECT USING (true);
CREATE POLICY "Admin can update news" ON news FOR UPDATE USING (true);
CREATE POLICY "Admin can insert news" ON news FOR INSERT WITH CHECK (true);

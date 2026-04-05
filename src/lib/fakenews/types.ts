export interface NewsItem {
  id: string;
  title: string;
  source: string | null;
  url: string | null;
  published_at: string | null;
  image_url: string | null;
  content: string | null;
  ai_verdict: AIVerdict | null;
  ai_analyzed_at: string | null;
  human_votes_count: number;
  real_votes: number;
  fake_votes: number;
  final_verdict: FinalVerdict | null;
  status: "pending" | "analyzed" | "completed";
  created_at: string;
  updated_at: string;
}

export interface AIVerdict {
  verdict: "REAL" | "FAKE" | "PARTIALLY_REAL" | "UNVERIFIABLE";
  confidence: number;
  facts: VerifiableFact[];
  sources: string[];
  explanation: string;
  warning_signs: string[];
}

export interface VerifiableFact {
  claim: string;
  verdict: "VERIFIED" | "FALSE" | "UNVERIFIABLE";
  source?: string;
  details: string;
}

export interface FinalVerdict {
  verdict: "REAL" | "FAKE";
  confidence: number;
  explanation: string;
  recommendation: string;
}

export interface Vote {
  id: string;
  news_id: string;
  vote: boolean;
  justification: string | null;
  email: string;
  created_at: string;
}

export interface DailyReport {
  id: string;
  report_date: string;
  news_summary: { analyzed: string[]; fake: string[]; real: string[] };
  total_news: number;
  total_votes: number;
  generated_at: string;
}

export interface Subscription {
  id: string;
  email: string;
  is_active: boolean;
  created_at: string;
}

export interface NewsListResponse {
  news: NewsItem[];
  total: number;
  page: number;
  pageSize: number;
}

export interface VoteRequest {
  vote: boolean;
  justification?: string;
  email: string;
}

export interface DailyDigestResponse {
  success: boolean;
  report?: DailyReport;
  emails_sent?: number;
}

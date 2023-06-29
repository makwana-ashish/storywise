export type WebEvent = {
  session_id: string;
  path: string;
  timestamp?: Date | null;
  ip?: string | null;
  user_agent?: string | null;
  user_agent_enriched?: Record<string, any> | null;
  referrer?: string | null;
  language?: string | null;
  country?: string | null;
  browser?: Record<string, any> | null;
  os?: Record<string, any> | null;
  device?: Record<string, any> | null;
  device_type?: string | null;
};
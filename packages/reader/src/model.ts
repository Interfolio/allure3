export interface ExecutorInfo {
  name: string;
  type: string;
  url: string;
  buildOrder: number;
  buildName: string;
  buildUrl: string;
  reportName: string;
  reportUrl: string;
}

export interface Category {
  name: string;
  description?: string;
  descriptionHtml?: string;
  messageRegex?: string;
  traceRegex?: string;
  matchedStatuses: string[];
  flaky?: boolean;
}

export type EnvironmentInfo = Record<string, string | undefined>;

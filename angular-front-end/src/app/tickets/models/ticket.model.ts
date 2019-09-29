export interface Ticket {
  id?: number;
  owner?: string;
  url?: string;
  type: 'bug' | 'process-related' | 'UX issue';
  status: 'ready' | 'draft';
  subject: string;
  body: string;
}

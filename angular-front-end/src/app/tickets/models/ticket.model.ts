export interface Ticket {
  type: 'bug' | 'process-related' | 'UX issue';
  status: 'ready' | 'draft';
  subject: string;
  body: string;
}

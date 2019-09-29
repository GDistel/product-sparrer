export interface Ticket {
  id: number;
  type: 'bug' | 'process-related' | 'UX issue';
  status: 'ready' | 'draft';
  subject: string;
  body: string;
}

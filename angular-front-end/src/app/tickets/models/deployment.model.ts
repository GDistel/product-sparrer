export interface Deployment {
  id?: number;
  owner?: string;
  url?: string;
  destinatary: string;
  deploy: boolean;
}

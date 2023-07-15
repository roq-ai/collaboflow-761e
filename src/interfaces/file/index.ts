import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FileInterface {
  id?: string;
  name: string;
  path: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface FileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  path?: string;
  user_id?: string;
  organization_id?: string;
}

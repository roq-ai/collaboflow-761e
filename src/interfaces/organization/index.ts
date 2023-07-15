import { FileInterface } from 'interfaces/file';
import { TaskInterface } from 'interfaces/task';
import { VideoConferenceInterface } from 'interfaces/video-conference';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  file?: FileInterface[];
  task?: TaskInterface[];
  video_conference?: VideoConferenceInterface[];
  user?: UserInterface;
  _count?: {
    file?: number;
    task?: number;
    video_conference?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

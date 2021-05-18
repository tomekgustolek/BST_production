import { Photo } from "./photo";

export interface User {
  id: number;
  userName: string;
  lastActive: Date;
  photoUrl: string;
  city: string;
  introduction?: string;
  photos?: Photo[];
  roles?: string[];
}

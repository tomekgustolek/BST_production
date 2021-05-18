import { Training } from "./training";

export interface Plan {
  name: string;
  photoUrl: string;
  trainings: Training[];
}

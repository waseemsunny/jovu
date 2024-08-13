import { User } from "../user/User";

export type Testimonial = {
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

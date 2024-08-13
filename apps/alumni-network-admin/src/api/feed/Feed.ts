import { User } from "../user/User";

export type Feed = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

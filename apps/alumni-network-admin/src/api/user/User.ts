import { Feed } from "../feed/Feed";
import { JsonValue } from "type-fest";
import { Testimonial } from "../testimonial/Testimonial";

export type User = {
  createdAt: Date;
  email: string | null;
  feeds?: Array<Feed>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  testimonials?: Array<Testimonial>;
  updatedAt: Date;
  username: string;
};

import { FeedUpdateManyWithoutUsersInput } from "./FeedUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TestimonialUpdateManyWithoutUsersInput } from "./TestimonialUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  feeds?: FeedUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  testimonials?: TestimonialUpdateManyWithoutUsersInput;
  username?: string;
};

import { FeedCreateNestedManyWithoutUsersInput } from "./FeedCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TestimonialCreateNestedManyWithoutUsersInput } from "./TestimonialCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  feeds?: FeedCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  testimonials?: TestimonialCreateNestedManyWithoutUsersInput;
  username: string;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestimonialCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};

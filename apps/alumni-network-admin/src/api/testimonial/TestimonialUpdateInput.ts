import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestimonialUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};

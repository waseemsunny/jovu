import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedCreateInput = {
  user?: UserWhereUniqueInput | null;
};

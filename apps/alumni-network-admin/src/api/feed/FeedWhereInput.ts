import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

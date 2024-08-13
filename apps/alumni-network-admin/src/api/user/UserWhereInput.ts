import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedListRelationFilter } from "../feed/FeedListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TestimonialListRelationFilter } from "../testimonial/TestimonialListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  feeds?: FeedListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  testimonials?: TestimonialListRelationFilter;
  username?: StringFilter;
};

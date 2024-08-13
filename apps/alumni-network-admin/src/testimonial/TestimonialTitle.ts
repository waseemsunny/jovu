import { Testimonial as TTestimonial } from "../api/testimonial/Testimonial";

export const TESTIMONIAL_TITLE_FIELD = "id";

export const TestimonialTitle = (record: TTestimonial): string => {
  return record.id?.toString() || String(record.id);
};

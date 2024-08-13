/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  MaxLength,
  IsEnum,
} from "class-validator";
import { FeedUpdateManyWithoutUsersInput } from "./FeedUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { EnumUserRole } from "./EnumUserRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TestimonialUpdateManyWithoutUsersInput } from "./TestimonialUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeedUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  feeds?: FeedUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => TestimonialUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TestimonialUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TestimonialUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  testimonials?: TestimonialUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };

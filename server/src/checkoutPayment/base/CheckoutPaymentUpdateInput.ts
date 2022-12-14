/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsDate,
  IsBoolean,
} from "class-validator";
import { PsychotherapistWhereUniqueInput } from "../../psychotherapist/base/PsychotherapistWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class CheckoutPaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  month?: number | null;

  @ApiProperty({
    required: false,
    type: () => PsychotherapistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PsychotherapistWhereUniqueInput)
  @IsOptional()
  @Field(() => PsychotherapistWhereUniqueInput, {
    nullable: true,
  })
  psychoId?: PsychotherapistWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  resloveDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  resolved?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number | null;
}
export { CheckoutPaymentUpdateInput };

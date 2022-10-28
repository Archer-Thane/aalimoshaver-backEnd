/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentPaymentType } from "./EnumPaymentPaymentType";
import { Session } from "../../session/base/Session";
import { EnumPaymentStatus } from "./EnumPaymentStatus";
import { Tax } from "../../tax/base/Tax";
@ObjectType()
class Payment {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cost!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  desc!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumPaymentPaymentType,
    isArray: true,
  })
  @IsEnum(EnumPaymentPaymentType, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumPaymentPaymentType], {
    nullable: true,
  })
  paymentType?: Array<"Cash" | "Card" | "CardToCard" | "Unpaid">;

  @ApiProperty({
    required: false,
    type: () => Session,
  })
  @ValidateNested()
  @Type(() => Session)
  @IsOptional()
  sessionId?: Session | null;

  @ApiProperty({
    required: false,
    type: () => [Session],
  })
  @ValidateNested()
  @Type(() => Session)
  @IsOptional()
  sessions?: Array<Session>;

  @ApiProperty({
    required: false,
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "PaidOff" | "Unpaid" | null;

  @ApiProperty({
    required: false,
    type: () => Tax,
  })
  @ValidateNested()
  @Type(() => Tax)
  @IsOptional()
  taxId?: Tax | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Payment };

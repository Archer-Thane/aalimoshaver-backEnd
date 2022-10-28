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
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsInt,
} from "class-validator";
import { CheckoutPayment } from "../../checkoutPayment/base/CheckoutPayment";
import { Type } from "class-transformer";
import { Patient } from "../../patient/base/Patient";
import { PsychoSchedule } from "../../psychoSchedule/base/PsychoSchedule";
import { Session } from "../../session/base/Session";
import { WaitingList } from "../../waitingList/base/WaitingList";
@ObjectType()
class Psychotherapist {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cardNumber!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CheckoutPayment],
  })
  @ValidateNested()
  @Type(() => CheckoutPayment)
  @IsOptional()
  checkoutPayments?: Array<CheckoutPayment>;

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
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Patient],
  })
  @ValidateNested()
  @Type(() => Patient)
  @IsOptional()
  patients?: Array<Patient>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerHour!: number | null;

  @ApiProperty({
    required: false,
    type: () => [PsychoSchedule],
  })
  @ValidateNested()
  @Type(() => PsychoSchedule)
  @IsOptional()
  psychoSchedules?: Array<PsychoSchedule>;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shabaNumber!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalSessionsCount!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalSessionsLength!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [WaitingList],
  })
  @ValidateNested()
  @Type(() => WaitingList)
  @IsOptional()
  waitingLists?: Array<WaitingList>;
}
export { Psychotherapist };

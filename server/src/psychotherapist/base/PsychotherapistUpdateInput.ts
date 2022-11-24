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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CheckoutPaymentUpdateManyWithoutPsychotherapistsInput } from "./CheckoutPaymentUpdateManyWithoutPsychotherapistsInput";
import { Type } from "class-transformer";
import { PatientUpdateManyWithoutPsychotherapistsInput } from "./PatientUpdateManyWithoutPsychotherapistsInput";
import { PsychoScheduleUpdateManyWithoutPsychotherapistsInput } from "./PsychoScheduleUpdateManyWithoutPsychotherapistsInput";
import { SessionUpdateManyWithoutPsychotherapistsInput } from "./SessionUpdateManyWithoutPsychotherapistsInput";
import { WaitingListUpdateManyWithoutPsychotherapistsInput } from "./WaitingListUpdateManyWithoutPsychotherapistsInput";
@InputType()
class PsychotherapistUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cardNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => CheckoutPaymentUpdateManyWithoutPsychotherapistsInput,
  })
  @ValidateNested()
  @Type(() => CheckoutPaymentUpdateManyWithoutPsychotherapistsInput)
  @IsOptional()
  @Field(() => CheckoutPaymentUpdateManyWithoutPsychotherapistsInput, {
    nullable: true,
  })
  checkoutPayments?: CheckoutPaymentUpdateManyWithoutPsychotherapistsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
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
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => PatientUpdateManyWithoutPsychotherapistsInput,
  })
  @ValidateNested()
  @Type(() => PatientUpdateManyWithoutPsychotherapistsInput)
  @IsOptional()
  @Field(() => PatientUpdateManyWithoutPsychotherapistsInput, {
    nullable: true,
  })
  patients?: PatientUpdateManyWithoutPsychotherapistsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerHour?: number | null;

  @ApiProperty({
    required: false,
    type: () => PsychoScheduleUpdateManyWithoutPsychotherapistsInput,
  })
  @ValidateNested()
  @Type(() => PsychoScheduleUpdateManyWithoutPsychotherapistsInput)
  @IsOptional()
  @Field(() => PsychoScheduleUpdateManyWithoutPsychotherapistsInput, {
    nullable: true,
  })
  psychoSchedules?: PsychoScheduleUpdateManyWithoutPsychotherapistsInput;

  @ApiProperty({
    required: false,
    type: () => SessionUpdateManyWithoutPsychotherapistsInput,
  })
  @ValidateNested()
  @Type(() => SessionUpdateManyWithoutPsychotherapistsInput)
  @IsOptional()
  @Field(() => SessionUpdateManyWithoutPsychotherapistsInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutPsychotherapistsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shabaNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalSessionsCount?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalSessionsLength?: number | null;

  @ApiProperty({
    required: false,
    type: () => WaitingListUpdateManyWithoutPsychotherapistsInput,
  })
  @ValidateNested()
  @Type(() => WaitingListUpdateManyWithoutPsychotherapistsInput)
  @IsOptional()
  @Field(() => WaitingListUpdateManyWithoutPsychotherapistsInput, {
    nullable: true,
  })
  waitingLists?: WaitingListUpdateManyWithoutPsychotherapistsInput;
}
export { PsychotherapistUpdateInput };
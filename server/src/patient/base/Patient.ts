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
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Psychotherapist } from "../../psychotherapist/base/Psychotherapist";
import { EnumPatientGender } from "./EnumPatientGender";
import { PatientGroup } from "../../patientGroup/base/PatientGroup";
import { PatientTrait } from "../../patientTrait/base/PatientTrait";
import { Questionaire } from "../../questionaire/base/Questionaire";
import { Session } from "../../session/base/Session";
import { EnumPatientStatus } from "./EnumPatientStatus";
@ObjectType()
class Patient {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Psychotherapist],
  })
  @ValidateNested()
  @Type(() => Psychotherapist)
  @IsOptional()
  currentPsychoId?: Array<Psychotherapist>;

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
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  discount!: number | null;

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
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Other" | "NA" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hasPsychotherapist!: boolean | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastSessionTime!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [PatientGroup],
  })
  @ValidateNested()
  @Type(() => PatientGroup)
  @IsOptional()
  patientGroups?: Array<PatientGroup>;

  @ApiProperty({
    required: false,
    type: () => [PatientTrait],
  })
  @ValidateNested()
  @Type(() => PatientTrait)
  @IsOptional()
  patientTraits?: Array<PatientTrait>;

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
    type: () => [Questionaire],
  })
  @ValidateNested()
  @Type(() => Questionaire)
  @IsOptional()
  questionaires?: Array<Questionaire>;

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
    enum: EnumPatientStatus,
  })
  @IsEnum(EnumPatientStatus)
  @IsOptional()
  @Field(() => EnumPatientStatus, {
    nullable: true,
  })
  status?:
    | "HasNoPsychotherapist"
    | "OnReserveList"
    | "InsideSchedule"
    | "HasOneSession"
    | "HasThreeSessions"
    | "HasSixSessions"
    | "MoreThanSixSessions"
    | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalSessionsLength!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Patient };

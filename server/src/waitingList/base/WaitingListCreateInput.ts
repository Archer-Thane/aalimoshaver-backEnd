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
  IsBoolean,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { PsychotherapistWhereUniqueInput } from "../../psychotherapist/base/PsychotherapistWhereUniqueInput";
@InputType()
class WaitingListCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  callCounts?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isEmergency?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFirstSession?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastRequestTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  patientId?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  priority?: number | null;

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
}
export { WaitingListCreateInput };

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
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PsychotherapistWhereUniqueInput } from "../../psychotherapist/base/PsychotherapistWhereUniqueInput";
import { SessionCreateNestedManyWithoutPsychoSchedulesInput } from "./SessionCreateNestedManyWithoutPsychoSchedulesInput";
@InputType()
class PsychoScheduleCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  beginTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  day?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

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
    type: () => SessionCreateNestedManyWithoutPsychoSchedulesInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutPsychoSchedulesInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutPsychoSchedulesInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutPsychoSchedulesInput;
}
export { PsychoScheduleCreateInput };
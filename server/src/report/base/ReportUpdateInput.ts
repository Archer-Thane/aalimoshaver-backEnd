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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { SessionUpdateManyWithoutReportsInput } from "./SessionUpdateManyWithoutReportsInput";
import { Type } from "class-transformer";
@InputType()
class ReportUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  desc?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sessionNumber?: number | null;

  @ApiProperty({
    required: false,
    type: () => SessionUpdateManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => SessionUpdateManyWithoutReportsInput)
  @IsOptional()
  @Field(() => SessionUpdateManyWithoutReportsInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { ReportUpdateInput };
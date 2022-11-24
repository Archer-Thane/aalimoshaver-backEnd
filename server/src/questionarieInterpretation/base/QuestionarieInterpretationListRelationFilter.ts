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
import { QuestionarieInterpretationWhereInput } from "./QuestionarieInterpretationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestionarieInterpretationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestionarieInterpretationWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionarieInterpretationWhereInput)
  @IsOptional()
  @Field(() => QuestionarieInterpretationWhereInput, {
    nullable: true,
  })
  every?: QuestionarieInterpretationWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionarieInterpretationWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionarieInterpretationWhereInput)
  @IsOptional()
  @Field(() => QuestionarieInterpretationWhereInput, {
    nullable: true,
  })
  some?: QuestionarieInterpretationWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionarieInterpretationWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionarieInterpretationWhereInput)
  @IsOptional()
  @Field(() => QuestionarieInterpretationWhereInput, {
    nullable: true,
  })
  none?: QuestionarieInterpretationWhereInput;
}
export { QuestionarieInterpretationListRelationFilter };

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
import { PatientTraitWhereInput } from "./PatientTraitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PatientTraitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PatientTraitWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientTraitWhereInput)
  @IsOptional()
  @Field(() => PatientTraitWhereInput, {
    nullable: true,
  })
  every?: PatientTraitWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientTraitWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientTraitWhereInput)
  @IsOptional()
  @Field(() => PatientTraitWhereInput, {
    nullable: true,
  })
  some?: PatientTraitWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientTraitWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientTraitWhereInput)
  @IsOptional()
  @Field(() => PatientTraitWhereInput, {
    nullable: true,
  })
  none?: PatientTraitWhereInput;
}
export { PatientTraitListRelationFilter };
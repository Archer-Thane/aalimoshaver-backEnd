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
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsEnum,
} from "class-validator";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumPatientTraitTraitType } from "./EnumPatientTraitTraitType";
@InputType()
class PatientTraitUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patientId?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  severity?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPatientTraitTraitType,
  })
  @IsEnum(EnumPatientTraitTraitType)
  @IsOptional()
  @Field(() => EnumPatientTraitTraitType, {
    nullable: true,
  })
  traitType?: "Positive" | "Negative" | null;
}
export { PatientTraitUpdateInput };
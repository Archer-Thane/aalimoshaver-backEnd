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
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Payment } from "../../payment/base/Payment";
import { EnumTaxStatus } from "./EnumTaxStatus";
@ObjectType()
class Tax {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payments?: Array<Payment>;

  @ApiProperty({
    required: false,
    enum: EnumTaxStatus,
  })
  @IsEnum(EnumTaxStatus)
  @IsOptional()
  @Field(() => EnumTaxStatus, {
    nullable: true,
  })
  status?: "Unpaid" | "Paid" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Tax };

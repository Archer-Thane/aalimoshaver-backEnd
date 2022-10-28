/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CheckoutPaymentWhereInput } from "./CheckoutPaymentWhereInput";
import { Type } from "class-transformer";
import { CheckoutPaymentOrderByInput } from "./CheckoutPaymentOrderByInput";

@ArgsType()
class CheckoutPaymentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CheckoutPaymentWhereInput,
  })
  @Field(() => CheckoutPaymentWhereInput, { nullable: true })
  @Type(() => CheckoutPaymentWhereInput)
  where?: CheckoutPaymentWhereInput;

  @ApiProperty({
    required: false,
    type: [CheckoutPaymentOrderByInput],
  })
  @Field(() => [CheckoutPaymentOrderByInput], { nullable: true })
  @Type(() => CheckoutPaymentOrderByInput)
  orderBy?: Array<CheckoutPaymentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CheckoutPaymentFindManyArgs };

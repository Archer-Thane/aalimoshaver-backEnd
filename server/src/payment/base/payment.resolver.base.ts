/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePaymentArgs } from "./CreatePaymentArgs";
import { UpdatePaymentArgs } from "./UpdatePaymentArgs";
import { DeletePaymentArgs } from "./DeletePaymentArgs";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentFindUniqueArgs } from "./PaymentFindUniqueArgs";
import { Payment } from "./Payment";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { Tax } from "../../tax/base/Tax";
import { PaymentService } from "../payment.service";

@graphql.Resolver(() => Payment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PaymentResolverBase {
  constructor(
    protected readonly service: PaymentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async _paymentsMeta(
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Payment])
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async payments(
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Payment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "own",
  })
  async payment(
    @graphql.Args() args: PaymentFindUniqueArgs
  ): Promise<Payment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "create",
    possession: "any",
  })
  async createPayment(
    @graphql.Args() args: CreatePaymentArgs
  ): Promise<Payment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        sessionId: args.data.sessionId
          ? {
              connect: args.data.sessionId,
            }
          : undefined,

        taxId: args.data.taxId
          ? {
              connect: args.data.taxId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "update",
    possession: "any",
  })
  async updatePayment(
    @graphql.Args() args: UpdatePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          sessionId: args.data.sessionId
            ? {
                connect: args.data.sessionId,
              }
            : undefined,

          taxId: args.data.taxId
            ? {
                connect: args.data.taxId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "delete",
    possession: "any",
  })
  async deletePayment(
    @graphql.Args() args: DeletePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Session])
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async sessions(
    @graphql.Parent() parent: Payment,
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    const results = await this.service.findSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Session, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async sessionId(@graphql.Parent() parent: Payment): Promise<Session | null> {
    const result = await this.service.getSessionId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tax, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "read",
    possession: "any",
  })
  async taxId(@graphql.Parent() parent: Payment): Promise<Tax | null> {
    const result = await this.service.getTaxId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

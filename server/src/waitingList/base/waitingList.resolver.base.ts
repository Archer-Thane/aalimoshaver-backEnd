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
import { CreateWaitingListArgs } from "./CreateWaitingListArgs";
import { UpdateWaitingListArgs } from "./UpdateWaitingListArgs";
import { DeleteWaitingListArgs } from "./DeleteWaitingListArgs";
import { WaitingListFindManyArgs } from "./WaitingListFindManyArgs";
import { WaitingListFindUniqueArgs } from "./WaitingListFindUniqueArgs";
import { WaitingList } from "./WaitingList";
import { Psychotherapist } from "../../psychotherapist/base/Psychotherapist";
import { WaitingListService } from "../waitingList.service";

@graphql.Resolver(() => WaitingList)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WaitingListResolverBase {
  constructor(
    protected readonly service: WaitingListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "read",
    possession: "any",
  })
  async _waitingListsMeta(
    @graphql.Args() args: WaitingListFindManyArgs
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
  @graphql.Query(() => [WaitingList])
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "read",
    possession: "any",
  })
  async waitingLists(
    @graphql.Args() args: WaitingListFindManyArgs
  ): Promise<WaitingList[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WaitingList, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "read",
    possession: "own",
  })
  async waitingList(
    @graphql.Args() args: WaitingListFindUniqueArgs
  ): Promise<WaitingList | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WaitingList)
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "create",
    possession: "any",
  })
  async createWaitingList(
    @graphql.Args() args: CreateWaitingListArgs
  ): Promise<WaitingList> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        psychoId: args.data.psychoId
          ? {
              connect: args.data.psychoId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WaitingList)
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "update",
    possession: "any",
  })
  async updateWaitingList(
    @graphql.Args() args: UpdateWaitingListArgs
  ): Promise<WaitingList | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          psychoId: args.data.psychoId
            ? {
                connect: args.data.psychoId,
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

  @graphql.Mutation(() => WaitingList)
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "delete",
    possession: "any",
  })
  async deleteWaitingList(
    @graphql.Args() args: DeleteWaitingListArgs
  ): Promise<WaitingList | null> {
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
  @graphql.ResolveField(() => Psychotherapist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "read",
    possession: "any",
  })
  async psychoId(
    @graphql.Parent() parent: WaitingList
  ): Promise<Psychotherapist | null> {
    const result = await this.service.getPsychoId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
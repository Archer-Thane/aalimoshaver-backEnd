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
import { CreatePsychoScheduleArgs } from "./CreatePsychoScheduleArgs";
import { UpdatePsychoScheduleArgs } from "./UpdatePsychoScheduleArgs";
import { DeletePsychoScheduleArgs } from "./DeletePsychoScheduleArgs";
import { PsychoScheduleFindManyArgs } from "./PsychoScheduleFindManyArgs";
import { PsychoScheduleFindUniqueArgs } from "./PsychoScheduleFindUniqueArgs";
import { PsychoSchedule } from "./PsychoSchedule";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { Psychotherapist } from "../../psychotherapist/base/Psychotherapist";
import { PsychoScheduleService } from "../psychoSchedule.service";

@graphql.Resolver(() => PsychoSchedule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PsychoScheduleResolverBase {
  constructor(
    protected readonly service: PsychoScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "read",
    possession: "any",
  })
  async _psychoSchedulesMeta(
    @graphql.Args() args: PsychoScheduleFindManyArgs
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
  @graphql.Query(() => [PsychoSchedule])
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "read",
    possession: "any",
  })
  async psychoSchedules(
    @graphql.Args() args: PsychoScheduleFindManyArgs
  ): Promise<PsychoSchedule[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PsychoSchedule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "read",
    possession: "own",
  })
  async psychoSchedule(
    @graphql.Args() args: PsychoScheduleFindUniqueArgs
  ): Promise<PsychoSchedule | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PsychoSchedule)
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "create",
    possession: "any",
  })
  async createPsychoSchedule(
    @graphql.Args() args: CreatePsychoScheduleArgs
  ): Promise<PsychoSchedule> {
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
  @graphql.Mutation(() => PsychoSchedule)
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "update",
    possession: "any",
  })
  async updatePsychoSchedule(
    @graphql.Args() args: UpdatePsychoScheduleArgs
  ): Promise<PsychoSchedule | null> {
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

  @graphql.Mutation(() => PsychoSchedule)
  @nestAccessControl.UseRoles({
    resource: "PsychoSchedule",
    action: "delete",
    possession: "any",
  })
  async deletePsychoSchedule(
    @graphql.Args() args: DeletePsychoScheduleArgs
  ): Promise<PsychoSchedule | null> {
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
    @graphql.Parent() parent: PsychoSchedule,
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    const results = await this.service.findSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Psychotherapist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "read",
    possession: "any",
  })
  async psychoId(
    @graphql.Parent() parent: PsychoSchedule
  ): Promise<Psychotherapist | null> {
    const result = await this.service.getPsychoId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
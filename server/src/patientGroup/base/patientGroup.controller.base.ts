/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PatientGroupService } from "../patientGroup.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientGroupCreateInput } from "./PatientGroupCreateInput";
import { PatientGroupWhereInput } from "./PatientGroupWhereInput";
import { PatientGroupWhereUniqueInput } from "./PatientGroupWhereUniqueInput";
import { PatientGroupFindManyArgs } from "./PatientGroupFindManyArgs";
import { PatientGroupUpdateInput } from "./PatientGroupUpdateInput";
import { PatientGroup } from "./PatientGroup";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientGroupControllerBase {
  constructor(
    protected readonly service: PatientGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PatientGroup })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PatientGroupCreateInput
  ): Promise<PatientGroup> {
    return await this.service.create({
      data: {
        ...data,

        patientId: data.patientId
          ? {
              connect: data.patientId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        groupType: true,
        id: true,

        patientId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [PatientGroup] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PatientGroupFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<PatientGroup[]> {
    const args = plainToClass(PatientGroupFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        groupType: true,
        id: true,

        patientId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PatientGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PatientGroupWhereUniqueInput
  ): Promise<PatientGroup | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        groupType: true,
        id: true,

        patientId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PatientGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PatientGroupWhereUniqueInput,
    @common.Body() data: PatientGroupUpdateInput
  ): Promise<PatientGroup | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          patientId: data.patientId
            ? {
                connect: data.patientId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          groupType: true,
          id: true,

          patientId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PatientGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PatientGroupWhereUniqueInput
  ): Promise<PatientGroup | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          groupType: true,
          id: true,

          patientId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

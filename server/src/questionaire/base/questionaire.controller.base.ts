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
import { QuestionaireService } from "../questionaire.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestionaireCreateInput } from "./QuestionaireCreateInput";
import { QuestionaireWhereInput } from "./QuestionaireWhereInput";
import { QuestionaireWhereUniqueInput } from "./QuestionaireWhereUniqueInput";
import { QuestionaireFindManyArgs } from "./QuestionaireFindManyArgs";
import { QuestionaireUpdateInput } from "./QuestionaireUpdateInput";
import { Questionaire } from "./Questionaire";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestionaireControllerBase {
  constructor(
    protected readonly service: QuestionaireService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Questionaire",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Questionaire })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: QuestionaireCreateInput
  ): Promise<Questionaire> {
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
        attendDate: true,
        createdAt: true,
        id: true,
        name: true,

        patientId: {
          select: {
            id: true,
          },
        },

        resultId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Questionaire",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Questionaire] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(QuestionaireFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Questionaire[]> {
    const args = plainToClass(QuestionaireFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        attendDate: true,
        createdAt: true,
        id: true,
        name: true,

        patientId: {
          select: {
            id: true,
          },
        },

        resultId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Questionaire",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Questionaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: QuestionaireWhereUniqueInput
  ): Promise<Questionaire | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        attendDate: true,
        createdAt: true,
        id: true,
        name: true,

        patientId: {
          select: {
            id: true,
          },
        },

        resultId: true,
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
    resource: "Questionaire",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Questionaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: QuestionaireWhereUniqueInput,
    @common.Body() data: QuestionaireUpdateInput
  ): Promise<Questionaire | null> {
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
          attendDate: true,
          createdAt: true,
          id: true,
          name: true,

          patientId: {
            select: {
              id: true,
            },
          },

          resultId: true,
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
    resource: "Questionaire",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Questionaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: QuestionaireWhereUniqueInput
  ): Promise<Questionaire | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          attendDate: true,
          createdAt: true,
          id: true,
          name: true,

          patientId: {
            select: {
              id: true,
            },
          },

          resultId: true,
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

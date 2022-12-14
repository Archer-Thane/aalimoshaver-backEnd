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
import { PatientService } from "../patient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientCreateInput } from "./PatientCreateInput";
import { PatientWhereInput } from "./PatientWhereInput";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { Patient } from "./Patient";
import { PsychotherapistFindManyArgs } from "../../psychotherapist/base/PsychotherapistFindManyArgs";
import { Psychotherapist } from "../../psychotherapist/base/Psychotherapist";
import { PsychotherapistWhereUniqueInput } from "../../psychotherapist/base/PsychotherapistWhereUniqueInput";
import { PatientGroupFindManyArgs } from "../../patientGroup/base/PatientGroupFindManyArgs";
import { PatientGroup } from "../../patientGroup/base/PatientGroup";
import { PatientGroupWhereUniqueInput } from "../../patientGroup/base/PatientGroupWhereUniqueInput";
import { PatientTraitFindManyArgs } from "../../patientTrait/base/PatientTraitFindManyArgs";
import { PatientTrait } from "../../patientTrait/base/PatientTrait";
import { PatientTraitWhereUniqueInput } from "../../patientTrait/base/PatientTraitWhereUniqueInput";
import { QuestionaireFindManyArgs } from "../../questionaire/base/QuestionaireFindManyArgs";
import { Questionaire } from "../../questionaire/base/Questionaire";
import { QuestionaireWhereUniqueInput } from "../../questionaire/base/QuestionaireWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PatientCreateInput): Promise<Patient> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        desc: true,
        discount: true,
        firstName: true,
        gender: true,
        hasPsychotherapist: true,
        id: true,
        lastName: true,
        lastSessionTime: true,
        phoneNumber: true,
        status: true,
        totalSessionsCount: true,
        totalSessionsLength: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PatientFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        desc: true,
        discount: true,
        firstName: true,
        gender: true,
        hasPsychotherapist: true,
        id: true,
        lastName: true,
        lastSessionTime: true,
        phoneNumber: true,
        status: true,
        totalSessionsCount: true,
        totalSessionsLength: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        desc: true,
        discount: true,
        firstName: true,
        gender: true,
        hasPsychotherapist: true,
        id: true,
        lastName: true,
        lastSessionTime: true,
        phoneNumber: true,
        status: true,
        totalSessionsCount: true,
        totalSessionsLength: true,
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
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          desc: true,
          discount: true,
          firstName: true,
          gender: true,
          hasPsychotherapist: true,
          id: true,
          lastName: true,
          lastSessionTime: true,
          phoneNumber: true,
          status: true,
          totalSessionsCount: true,
          totalSessionsLength: true,
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
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          desc: true,
          discount: true,
          firstName: true,
          gender: true,
          hasPsychotherapist: true,
          id: true,
          lastName: true,
          lastSessionTime: true,
          phoneNumber: true,
          status: true,
          totalSessionsCount: true,
          totalSessionsLength: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/currentPsychoId")
  @ApiNestedQuery(PsychotherapistFindManyArgs)
  async findManyCurrentPsychoId(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Psychotherapist[]> {
    const query = plainToClass(PsychotherapistFindManyArgs, request.query);
    const results = await this.service.findCurrentPsychoId(params.id, {
      ...query,
      select: {
        cardNumber: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        pricePerHour: true,
        shabaNumber: true,
        totalSessionsCount: true,
        totalSessionsLength: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/currentPsychoId")
  async connectCurrentPsychoId(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PsychotherapistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      currentPsychoId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/currentPsychoId")
  async updateCurrentPsychoId(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PsychotherapistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      currentPsychoId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/currentPsychoId")
  async disconnectCurrentPsychoId(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PsychotherapistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      currentPsychoId: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientGroup",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/patientGroups")
  @ApiNestedQuery(PatientGroupFindManyArgs)
  async findManyPatientGroups(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<PatientGroup[]> {
    const query = plainToClass(PatientGroupFindManyArgs, request.query);
    const results = await this.service.findPatientGroups(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/patientGroups")
  async connectPatientGroups(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientGroups: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/patientGroups")
  async updatePatientGroups(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientGroups: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/patientGroups")
  async disconnectPatientGroups(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientGroups: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PatientTrait",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/patientTraits")
  @ApiNestedQuery(PatientTraitFindManyArgs)
  async findManyPatientTraits(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<PatientTrait[]> {
    const query = plainToClass(PatientTraitFindManyArgs, request.query);
    const results = await this.service.findPatientTraits(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        patientId: {
          select: {
            id: true,
          },
        },

        severity: true,
        traitType: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/patientTraits")
  async connectPatientTraits(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientTraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientTraits: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/patientTraits")
  async updatePatientTraits(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientTraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientTraits: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/patientTraits")
  async disconnectPatientTraits(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatientTraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patientTraits: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Questionaire",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/questionaires")
  @ApiNestedQuery(QuestionaireFindManyArgs)
  async findManyQuestionaires(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Questionaire[]> {
    const query = plainToClass(QuestionaireFindManyArgs, request.query);
    const results = await this.service.findQuestionaires(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/questionaires")
  async connectQuestionaires(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: QuestionaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionaires: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/questionaires")
  async updateQuestionaires(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: QuestionaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionaires: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/questionaires")
  async disconnectQuestionaires(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: QuestionaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionaires: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  async findManySessions(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        attendTime: true,
        createdAt: true,
        desc: true,
        id: true,
        length: true,

        patientId: {
          select: {
            id: true,
          },
        },

        payId: {
          select: {
            id: true,
          },
        },

        payStatus: true,

        psychoId: {
          select: {
            id: true,
          },
        },

        psychoScheduleId: {
          select: {
            id: true,
          },
        },

        reportId: {
          select: {
            id: true,
          },
        },

        sessionType: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}

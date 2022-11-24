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
import { PsychotherapistService } from "../psychotherapist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PsychotherapistCreateInput } from "./PsychotherapistCreateInput";
import { PsychotherapistWhereInput } from "./PsychotherapistWhereInput";
import { PsychotherapistWhereUniqueInput } from "./PsychotherapistWhereUniqueInput";
import { PsychotherapistFindManyArgs } from "./PsychotherapistFindManyArgs";
import { PsychotherapistUpdateInput } from "./PsychotherapistUpdateInput";
import { Psychotherapist } from "./Psychotherapist";
import { CheckoutPaymentFindManyArgs } from "../../checkoutPayment/base/CheckoutPaymentFindManyArgs";
import { CheckoutPayment } from "../../checkoutPayment/base/CheckoutPayment";
import { CheckoutPaymentWhereUniqueInput } from "../../checkoutPayment/base/CheckoutPaymentWhereUniqueInput";
import { PatientFindManyArgs } from "../../patient/base/PatientFindManyArgs";
import { Patient } from "../../patient/base/Patient";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { PsychoScheduleFindManyArgs } from "../../psychoSchedule/base/PsychoScheduleFindManyArgs";
import { PsychoSchedule } from "../../psychoSchedule/base/PsychoSchedule";
import { PsychoScheduleWhereUniqueInput } from "../../psychoSchedule/base/PsychoScheduleWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { WaitingListFindManyArgs } from "../../waitingList/base/WaitingListFindManyArgs";
import { WaitingList } from "../../waitingList/base/WaitingList";
import { WaitingListWhereUniqueInput } from "../../waitingList/base/WaitingListWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PsychotherapistControllerBase {
  constructor(
    protected readonly service: PsychotherapistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Psychotherapist })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PsychotherapistCreateInput
  ): Promise<Psychotherapist> {
    return await this.service.create({
      data: data,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Psychotherapist] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PsychotherapistFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Psychotherapist[]> {
    const args = plainToClass(PsychotherapistFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Psychotherapist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<Psychotherapist | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Psychotherapist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() data: PsychotherapistUpdateInput
  ): Promise<Psychotherapist | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
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
    resource: "Psychotherapist",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Psychotherapist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<Psychotherapist | null> {
    try {
      return await this.service.delete({
        where: params,
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
    resource: "CheckoutPayment",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/checkoutPayments")
  @ApiNestedQuery(CheckoutPaymentFindManyArgs)
  async findManyCheckoutPayments(
    @common.Req() request: Request,
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<CheckoutPayment[]> {
    const query = plainToClass(CheckoutPaymentFindManyArgs, request.query);
    const results = await this.service.findCheckoutPayments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        month: true,

        psychoId: {
          select: {
            id: true,
          },
        },

        resloveDate: true,
        resolved: true,
        updatedAt: true,
        year: true,
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/checkoutPayments")
  async connectCheckoutPayments(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: CheckoutPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkoutPayments: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/checkoutPayments")
  async updateCheckoutPayments(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: CheckoutPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkoutPayments: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/checkoutPayments")
  async disconnectCheckoutPayments(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: CheckoutPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkoutPayments: {
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
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/patients")
  @ApiNestedQuery(PatientFindManyArgs)
  async findManyPatients(
    @common.Req() request: Request,
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<Patient[]> {
    const query = plainToClass(PatientFindManyArgs, request.query);
    const results = await this.service.findPatients(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/patients")
  async connectPatients(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/patients")
  async updatePatients(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/patients")
  async disconnectPatients(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
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
    resource: "PsychoSchedule",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/psychoSchedules")
  @ApiNestedQuery(PsychoScheduleFindManyArgs)
  async findManyPsychoSchedules(
    @common.Req() request: Request,
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<PsychoSchedule[]> {
    const query = plainToClass(PsychoScheduleFindManyArgs, request.query);
    const results = await this.service.findPsychoSchedules(params.id, {
      ...query,
      select: {
        beginTime: true,
        createdAt: true,
        day: true,
        endTime: true,
        id: true,

        psychoId: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/psychoSchedules")
  async connectPsychoSchedules(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PsychoScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      psychoSchedules: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/psychoSchedules")
  async updatePsychoSchedules(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PsychoScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      psychoSchedules: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/psychoSchedules")
  async disconnectPsychoSchedules(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: PsychoScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      psychoSchedules: {
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
    @common.Param() params: PsychotherapistWhereUniqueInput
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: PsychotherapistWhereUniqueInput,
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: PsychotherapistWhereUniqueInput,
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: PsychotherapistWhereUniqueInput,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "WaitingList",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/waitingLists")
  @ApiNestedQuery(WaitingListFindManyArgs)
  async findManyWaitingLists(
    @common.Req() request: Request,
    @common.Param() params: PsychotherapistWhereUniqueInput
  ): Promise<WaitingList[]> {
    const query = plainToClass(WaitingListFindManyArgs, request.query);
    const results = await this.service.findWaitingLists(params.id, {
      ...query,
      select: {
        callCounts: true,
        createdAt: true,
        id: true,
        isEmergency: true,
        isFirstSession: true,
        lastRequestTime: true,
        patientId: true,
        priority: true,

        psychoId: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/waitingLists")
  async connectWaitingLists(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: WaitingListWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waitingLists: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/waitingLists")
  async updateWaitingLists(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: WaitingListWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waitingLists: {
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
    resource: "Psychotherapist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/waitingLists")
  async disconnectWaitingLists(
    @common.Param() params: PsychotherapistWhereUniqueInput,
    @common.Body() body: WaitingListWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waitingLists: {
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
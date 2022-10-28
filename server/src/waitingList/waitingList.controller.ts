import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaitingListService } from "./waitingList.service";
import { WaitingListControllerBase } from "./base/waitingList.controller.base";

@swagger.ApiTags("waitingLists")
@common.Controller("waitingLists")
export class WaitingListController extends WaitingListControllerBase {
  constructor(
    protected readonly service: WaitingListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

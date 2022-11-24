import { Module } from "@nestjs/common";
import { WaitingListModuleBase } from "./base/waitingList.module.base";
import { WaitingListService } from "./waitingList.service";
import { WaitingListController } from "./waitingList.controller";
import { WaitingListResolver } from "./waitingList.resolver";

@Module({
  imports: [WaitingListModuleBase],
  controllers: [WaitingListController],
  providers: [WaitingListService, WaitingListResolver],
  exports: [WaitingListService],
})
export class WaitingListModule {}

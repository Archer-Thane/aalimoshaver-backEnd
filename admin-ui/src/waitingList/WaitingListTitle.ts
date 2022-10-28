import { WaitingList as TWaitingList } from "../api/waitingList/WaitingList";

export const WAITINGLIST_TITLE_FIELD = "patientId";

export const WaitingListTitle = (record: TWaitingList): string => {
  return record.patientId || record.id;
};

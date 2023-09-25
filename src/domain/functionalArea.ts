import { Switchboard } from "src/domain/switchboard";

export interface FunctionalArea {
  id: string,
  name: string,
  inProgress: boolean,
  switchboards: Switchboard[],
}
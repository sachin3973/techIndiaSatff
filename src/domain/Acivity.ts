import { FunctionalArea } from "src/domain/functionalArea";

export interface Activity {
  id: string,
  progress: number,
  locationName: string,
  date: string,
  instrumentModalName: string,
  functionalAreas: FunctionalArea[],
  inProcess: boolean;
}
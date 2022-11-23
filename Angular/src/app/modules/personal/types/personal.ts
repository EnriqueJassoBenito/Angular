import { Entity } from "../../../types/entity";
import { Position } from "../../positions/types/position";
export type Personal = Entity<number> & {
  name: String;
  surname: String;
  lastname: String;
  birthday: String;
  salary: number;
  position: Position;
}

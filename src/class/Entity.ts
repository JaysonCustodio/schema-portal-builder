import { EntityField } from "./Fields";
import { nanoid } from "nanoid";

export class Entity {
  id: string;
  entity_name: string;
  fields: EntityField[];
  constructor() {
    this.id = nanoid();
    this.entity_name = "";
    this.fields = [];
  }
}

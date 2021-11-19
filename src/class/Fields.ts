import { nanoid } from "nanoid";
export class EntityField {
  id: string;
  name: string;
  value: string;
  type: string;
  gql_type: string;
  nullable: boolean | string;
  validate_type: string;
  is_fk: boolean;
  relationship_class_entity: string;
  relationship_class_name: string;
  constructor() {
    this.id = nanoid();
    this.name = "";
    this.value = "";
    this.type = "";
    this.gql_type = "";
    this.nullable = "";
    this.validate_type = "";
    this.is_fk = false;
    this.relationship_class_entity = "";
    this.relationship_class_name = "";
  }
}

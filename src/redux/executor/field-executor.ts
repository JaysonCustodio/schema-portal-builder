import { Entity } from "../../class/Entity";
import { EntityField } from "../../class/Fields";
import {
  IEntityState,
  IExecutorPayloadRemoveField,
  IExecutorPayloadUpdateField,
  IFieldExecutor,
} from "../types/actions";

const fieldExecutor: IFieldExecutor = {
  CREATE_FIELD: (state: IEntityState, payload: Entity) => {
    const { entities: current } = state;

    payload.fields = [...payload.fields, new EntityField()];
    const index = current.indexOf(payload);

    const new_entities = [
      ...current.slice(0, index),
      payload,
      ...current.slice(index + 1),
    ];

    return { ...state, entities: new_entities };
  },

  REMOVE_FIELD: (
    state: IEntityState,
    { entity, field_id }: IExecutorPayloadRemoveField
  ) => {
    const { entities: current } = state;
    const index = current.indexOf(entity!);
    const new_fields = entity!.fields.filter((f) => f.id !== field_id);
    const new_entity = { ...entity, fields: new_fields };

    return {
      ...state,
      entities: [
        ...current.slice(0, index),
        new_entity,
        ...current.slice(index + 1),
      ],
    };
  },

  UPDATE_FIELD: (
    state: IEntityState,
    { name, value, field_id, entity }: IExecutorPayloadUpdateField
  ) => {
    const { entities: current } = state;
    const index = current.indexOf(entity);

    let new_field =
      entity.fields.find((f) => f.id === field_id) || new EntityField();
    const f_index = entity.fields.indexOf(new_field);
    new_field = { ...new_field, [name]: value };

    const new_fields = [
      ...entity.fields.slice(0, f_index),
      new_field,
      ...entity.fields.slice(f_index + 1),
    ];

    const new_entity = { ...entity, fields: new_fields };
    return {
      ...state,
      entities: [
        ...current.slice(0, index),
        new_entity,
        ...current.slice(index + 1),
      ],
    };
  },
};

export default fieldExecutor;

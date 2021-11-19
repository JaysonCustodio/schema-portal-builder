import { Entity } from "../../class/Entity";
import {
  core_action,
  entity_action,
  field_action,
  IExecutorPayloadUpdateField,
  IExecutorPayloadUpdateName,
} from "../types/actions";

export const createEntity = (entity: Entity) => {
  return {
    type: entity_action.CREATE,
    payload: entity,
  };
};
export const removeEntity = (entity: Entity) => {
  return {
    type: entity_action.REMOVE,
    payload: entity,
  };
};
export const updateEntity = (payload: IExecutorPayloadUpdateName) => {
  return {
    type: entity_action.UPDATE,
    payload,
  };
};
export const updateField = (payload: IExecutorPayloadUpdateField) => {
  return {
    type: field_action.UPDATE_F,
    payload,
  };
};
export const addField = (entity: Entity) => {
  return {
    type: field_action.CREATE_F,
    payload: entity,
  };
};
export const removeField = (entity: Entity, field_id: string) => {
  return {
    type: field_action.REMOVE_F,
    payload: { entity, field_id },
  };
};
export const addCoreEntity = (payload: any) => {
  return {
    type: core_action.CREATE,
    payload,
  };
};

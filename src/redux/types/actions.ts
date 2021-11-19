import { Entity } from "../../class/Entity";

export enum entity_action {
  CREATE = "CREATE_ENTITY",
  REMOVE = "REMOVE_ENTITY",
  UPDATE = "UPDATE_ENTITY",
}
export enum field_action {
  CREATE_F = "CREATE_FIELD",
  REMOVE_F = "REMOVE_FIELD",
  UPDATE_F = "UPDATE_FIELD",
}
export enum core_action {
  CREATE = "CREATE_CORE_ENTITY",
}

export interface IActionType {
  type: entity_action | field_action;
  payload: Entity;
}

export interface IEntityState {
  entities: Entity[];
}

export interface IExecutorPayloadRemoveField {
  field_id: string;
  entity: Entity;
}
export interface IExecutorPayloadUpdateField {
  name: string;
  value: string | boolean;
  field_id: string;
  entity: Entity;
}

export interface IField {
  name: string;
}

export interface IExecutorPayloadUpdateName {
  name: string;
  entity: Entity;
}

export interface IEntityExecutor {
  CREATE_ENTITY: (state: IEntityState, payload: Entity) => IEntityState;
  REMOVE_ENTITY: (state: IEntityState, payload: Entity) => IEntityState;
  UPDATE_ENTITY: (
    state: IEntityState,
    payload: IExecutorPayloadUpdateName
  ) => IEntityState;
}
export interface IFieldExecutor {
  CREATE_FIELD: (state: IEntityState, payload: Entity) => IEntityState;
  REMOVE_FIELD: (
    state: IEntityState,
    payload: IExecutorPayloadRemoveField
  ) => IEntityState;
  UPDATE_FIELD: (
    state: IEntityState,
    payload: IExecutorPayloadUpdateField
  ) => IEntityState;
}

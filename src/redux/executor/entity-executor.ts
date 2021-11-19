import { Entity } from "../../class/Entity";
import {
  IEntityExecutor,
  IEntityState,
  IExecutorPayloadUpdateName,
} from "../types/actions";

const entityExecutor: IEntityExecutor = {
  CREATE_ENTITY: (state: IEntityState, payload: Entity) => {
    const { entities: current } = state;
    return { ...state, entities: [...current, payload] };
  },
  REMOVE_ENTITY: (state: IEntityState, payload: Entity) => {
    const { entities: current } = state;
    const index = current.indexOf(payload);
    return {
      ...state,
      entities: [...current.slice(0, index), ...current.slice(index + 1)],
    };
  },
  UPDATE_ENTITY: (
    state: IEntityState,
    { name, entity }: IExecutorPayloadUpdateName
  ) => {
    const { entities: current } = state;
    const index = current.indexOf(entity);
    const new_entity = { ...entity, entity_name: name };
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

export default entityExecutor;

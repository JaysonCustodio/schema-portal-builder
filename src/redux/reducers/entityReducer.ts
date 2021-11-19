import { entity_action, field_action, IActionType } from "../types/actions";
import { entityExecutor, fieldExecutor } from "../executor";

const coreState = {
  entities: [],
};

const entityReducer = (
  state = coreState,
  { type, payload }: IActionType | any
) => {
  const { CREATE, REMOVE, UPDATE } = entity_action;
  const { CREATE_F, REMOVE_F, UPDATE_F } = field_action;
  switch (type) {
    case CREATE:
      return entityExecutor[CREATE](state, payload);
    case UPDATE:
      return entityExecutor[UPDATE](state, payload);
    case REMOVE:
      return entityExecutor[REMOVE](state, payload);
    case CREATE_F:
      return fieldExecutor[CREATE_F](state, payload);
    case UPDATE_F:
      return fieldExecutor[UPDATE_F](state, payload);
    case REMOVE_F:
      return fieldExecutor[REMOVE_F](state, payload);
    default:
      return state;
  }
};

export default entityReducer;

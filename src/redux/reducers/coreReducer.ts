import { core_action, IActionType } from "../types/actions";
import { coreExecutor } from "../executor";

const coreState = {};

const coreReducer = (
  state = coreState,
  { type, payload }: IActionType | any
) => {
  const { CREATE } = core_action;
  switch (type) {
    case CREATE:
      return coreExecutor[CREATE](state, payload);
    default:
      return state;
  }
};

export default coreReducer;

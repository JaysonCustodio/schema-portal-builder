const coreExecutor = {
  CREATE_CORE_ENTITY: (state: any, payload: any) => {
    return { ...state, ...payload };
  },
};

export default coreExecutor;

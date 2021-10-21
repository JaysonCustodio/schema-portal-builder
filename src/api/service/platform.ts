import { GET_SYSTEM_CONFIG } from "../request/query";
import { graphql_platform } from "../client";

export const getConfig = async () => {
  try {
    const result = await graphql_platform.request(GET_SYSTEM_CONFIG);
    const {
      SystemConfigV1: { data = [] },
    } = result;
    return { success: true, message: "success!", payload: data[0].config };
  } catch (error) {
    return { success: false, message: error, payload: [] };
  }
};

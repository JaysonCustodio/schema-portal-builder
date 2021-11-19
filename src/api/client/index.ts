import { GraphQLClient } from "graphql-request/dist";
import { encodeBase64 } from "../utils";

const BASIC_AUTH_USERNAME = "sbc";
const BASIC_AUTH_PASSWORD = "F0nch3rt0";
const GRAPHQL_ENDPOINT_GO_RENTALS = "http://10.110.3.140:3002/graphql";
const GRAPHQL_ENDPOINT_PLATFORM =
  "https://platform-core-api.dnastaging.net/graphql";

export const graphql_gorentals = new GraphQLClient(
  GRAPHQL_ENDPOINT_GO_RENTALS,
  {
    headers: {
      authorization: `Basic ${encodeBase64(
        `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
      )}`,
    },
  }
);

export const graphql_platform = new GraphQLClient(GRAPHQL_ENDPOINT_PLATFORM, {
  headers: {
    authorization: `Basic ${encodeBase64(
      `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
    )}`,
  },
});

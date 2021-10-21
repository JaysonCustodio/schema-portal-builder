import { GraphQLClient } from "graphql-request/dist";
import { encodeBase64 } from "../utils";

const BASIC_AUTH_USERNAME = "";
const BASIC_AUTH_PASSWORD = "";
const GRAPHQL_ENDPOINT_GO_RENTALS = "";
const GRAPHQL_ENDPOINT_PLATFORM = "";

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

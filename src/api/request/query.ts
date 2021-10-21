import { gql } from "graphql-request";

export const GET_SYSTEM_CONFIG = gql`
  query config {
    SystemConfigV1(id: "c54df9a2-2935-4105-8310-52c6679afff0") {
      data {
        config
        id
      }
    }
  }
`;

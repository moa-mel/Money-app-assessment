import gql from "graphql-tag";

export const GET_COMPANY_INFO = gql`
query ExampleQuery {
    company {
      name
      ceo
      cto
    }
  }
`
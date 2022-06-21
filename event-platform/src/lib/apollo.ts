import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl2ped0dsj01xm3lhsgj62/master',
  cache: new InMemoryCache()
});
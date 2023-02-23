import { ApolloClient, InMemoryCache } from "@apollo/client"; 
import {GET_COMPANY_INFO} from "./queries";

export const apolloClient = new ApolloClient({
    uri: " https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
});

class CompanyInfo {
    async exampleQuery(limit=1){
        try {
            const response = await apolloClient.query({
                query: GET_COMPANY_INFO,
                variables: { limit },
            });

            if (!response || !response.data)
            throw new Error("Cannot get Company information")
            return response.data.company
        } catch (err) {
            throw err
        }
        }
    }

export default new CompanyInfo();

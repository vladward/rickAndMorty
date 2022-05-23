import {gql} from "@apollo/client";

export const GET_CHARACTER = gql`
    query character($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    status
                }
                created
            }
            location {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    status
                }
                created
            }
            image
            episode {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    status
                }
                created
            }
            created
        }
    }
`;
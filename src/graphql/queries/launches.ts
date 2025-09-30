import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
        rocket_type
        rocket {
          mass {
            kg
          }
          stages
        }
        first_stage {
          cores {
            flight
          }
        }
      }
      links {
        mission_patch_small
        article_link
      }
    }
  }
`;

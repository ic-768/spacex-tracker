import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_date_local
      launch_success
      upcoming
      details

      # Rocket info
      rocket {
        rocket_name
        rocket_type
        rocket {
          id
          name
          type
          stages
          mass {
            kg
            lb
          }
        }
        first_stage {
          cores {
            core {
              id
              block
            }
          }
        }
        second_stage {
          payloads {
            id
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }

      # Launch site
      launch_site {
        site_id
        site_name
        site_name_long
      }

      # Links
      links {
        mission_patch
        mission_patch_small
        article_link
        video_link
        reddit_campaign
        reddit_launch
        presskit
      }

      # Telemetry
      telemetry {
        flight_club
      }
    }
  }
`;

interface Core {
  flight: number | null;
}

interface FirstStage {
  cores: Core[];
}

interface RocketDetails {
  mass: {
    kg: number | null;
  };
  stages: number | null;
}

interface Rocket {
  rocket_name: string;
  rocket_type: string;
  rocket: RocketDetails;
  first_stage: FirstStage;
}

interface Links {
  mission_patch_small: string | null;
  article_link: string | null;
}

export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean | null;
  rocket: Rocket;
  links: Links;
}

export interface GetLaunchesData {
  launches: Launch[];
}

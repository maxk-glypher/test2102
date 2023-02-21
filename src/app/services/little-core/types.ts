export type PlayerBE = {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  team: TeamBE;
  weight_pounds: number;
};

export type TeamBE = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

export type StatsBE = {
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: any;
  id: number;
  min: string;
  oreb: number;
  pf: number;
  player: PlayerBE;
  pts: number;
  reb: number;
  stl: number;
  team: TeamBE;
  turnover: number;
};

export type Player = {
  id: number;
  isActive: boolean;
  name: string;
  teamTag: string;
  teamName: string;
};

export type Stats = {
  id: number;
  fg: number;
  min: string;
  pts: number;
};

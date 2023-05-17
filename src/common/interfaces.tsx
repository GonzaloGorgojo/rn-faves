import { EnActivity, EnProfileFeed, EnTopTen } from "./enums";

export interface ISelectedUserProfile {
  userId: string;
  username: string;
  description: string;
  startsCollected: number;
}

export interface IMoviesFeedCard {
  id: number;
  userId: string;
  username: string;
  movieName: string;
  movieScore: number;
  movieComment: string;
  tag: string;
  isLiked: boolean;
}

export interface ITabs {
  titleFontSize: number;
  titles: EnProfileFeed[];
  setProfileFeed: React.Dispatch<React.SetStateAction<EnProfileFeed>>;
  profileFeed: EnProfileFeed;
}

export interface IMovieCard {
  type: EnTopTen;
  rank: number;
  song?: string;
  artist?: string;
  movie?: string;
  description?: string;
}

export interface IActivitycard {
  type: EnTopTen | string;
  action: EnActivity | string;
  user: string;
  song?: string;
  artist?: string;
  movie?: string;
  description?: string;
}

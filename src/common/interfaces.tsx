import { EnActivity, EnProfileFeed, EnTopTen } from './enums';

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

export interface ITopTenCard {
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

export interface IUserProfile {
  userId: string;
  username: string;
  email: string;
  personalLink: string;
  starsCollected: number;
  description: string;
  country: string;
}

export interface ITastesSearch {
  tasteType: EnTopTen;
}

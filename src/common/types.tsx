export interface SelectedUserProfileType {
  userId: string;
  username: string;
  description: string;
}

export interface MoviesFeedCardType {
  id: number;
  userId: string;
  username: string;
  movieName: string;
  movieScore: number;
  movieComment: string;
  tag: string;
  isLiked: boolean;
}

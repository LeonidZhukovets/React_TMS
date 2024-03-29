export type CardType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export type CardsListType = Array<CardType>;

//  export type CardList = Array<CardType>; todo rename

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}

export type SetLikeStatusPayload = { card: CardType; likeStatus: LikeStatus };

export enum Tabs {
  All = "All",
  Favorites = "My Favorites",
  Popular = "Popular",
  MyPosts = "My Posts",
}

export enum Order {
  Date = "date",
  Title = "title",
}

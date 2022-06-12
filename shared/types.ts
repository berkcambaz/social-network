export interface IUser {
  id: number;
  name: string;
  tag: string;
  bio: string;
  date: number;
  followerCount: number;
  followingCount: number;
}

export interface IPost {
  id: number;
  userId: number;
  date: number;
  content: string;
  likeCount: number;
  liked: boolean;
  bookmarked: boolean;
}

export enum ApiCode {
  Auth,

  Login,
  Signup,
  Logout,

  PostPost,
  GetPost,
  LikePost,
  BookmarkPost,

  GetUser,
  SetUser,
}

export enum ApiError {
  AuthFail,

  LoginFail,
  SignupFail,

  PostPostFail,
  GetPostFail,
  LikePostFail,
  BookmarkPostFail,


  GetUserFail,
  SetUserFail,
}

export interface ApiReqSchema<T> {
  type: ApiCode;
  data: T;
}

export interface ApiResSchema<T> {
  data?: T;
  err?: ApiError;
}

export interface ApiReq {
  [ApiCode.Auth]: {};
  [ApiCode.Login]: {
    usertag: string;
    password: string;
  };
  [ApiCode.Signup]: {
    usertag: string;
    email: string;
    password: string;
  };
  [ApiCode.Logout]: {};

  [ApiCode.PostPost]: {
    content: string;
  };
  [ApiCode.GetPost]: {
    anchor: number,
    type: "newer" | "older"
  };
  [ApiCode.LikePost]: { postId: number, state: boolean };
  [ApiCode.BookmarkPost]: { postId: number, state: boolean };

  [ApiCode.GetUser]: {
    userId: number[]
  };
  [ApiCode.SetUser]: {};
}

export interface ApiRes {
  [ApiCode.Auth]: ApiResSchema<{ id: number }>
  [ApiCode.Login]: ApiResSchema<{ id: number }>
  [ApiCode.Signup]: ApiResSchema<{ id: number }>
  [ApiCode.Logout]: ApiResSchema<{}>

  [ApiCode.GetPost]: ApiResSchema<{ posts: IPost[] }>
  [ApiCode.PostPost]: ApiResSchema<{ post: IPost }>
  [ApiCode.LikePost]: ApiResSchema<{ state: boolean }>
  [ApiCode.BookmarkPost]: ApiResSchema<{ state: boolean }>

  [ApiCode.GetUser]: ApiResSchema<{ users: IUser[] }>
  [ApiCode.SetUser]: ApiResSchema<{}>
}
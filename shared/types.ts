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

  GetUser,
  SetUser
}

export enum ApiError {
  AuthFail,
  LoginFail,
  SignupFail,

  PostPostFail,
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
  [ApiCode.GetPost]: {};

  [ApiCode.GetUser]: {};
  [ApiCode.SetUser]: {};
}

export interface ApiRes {
  [ApiCode.Auth]: ApiResSchema<{ id: number }>
  [ApiCode.Login]: ApiResSchema<{ id: number }>
  [ApiCode.Signup]: ApiResSchema<{ id: number }>
  [ApiCode.Logout]: ApiResSchema<{}>

  [ApiCode.GetPost]: ApiResSchema<{}>
  [ApiCode.PostPost]: ApiResSchema<IPost>

  [ApiCode.GetUser]: ApiResSchema<{}>
  [ApiCode.SetUser]: ApiResSchema<{}>
}
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
}

export interface ApiReqSchema {
  type: ApiCode;
  data: any;
}

export interface ApiResSchema {
  data?: any;
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
    userId: number;
    content: string;
  };
  [ApiCode.GetPost]: {

  };

  [ApiCode.GetUser]: {
    userId: number;
  };
  [ApiCode.SetUser]: {

  };
}

export interface ApiRes {
  [ApiCode.Login]: {
    id: number;
  }
  [ApiCode.Signup]: {
    id: number;
  }

  [ApiCode.GetPost]: {

  };

  [ApiCode.GetUser]: {

  };
}
export enum ApiCode {
  Auth = "auth",

  Login = "login",
  Signup = "signup",
  Logout = "logout",

  PostPost = "postpost",
  GetPost = "getpost",

  GetProfile = "getprofile",
  SetProfile = "setprofile"
}

export enum ApiError {

}

export interface ApiReqSchema {
  type: ApiCode;
  data: any;
}

export interface ApiResSchema {
  data: any;
  err: ApiError;
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

  [ApiCode.GetProfile]: {
    userId: number;
  };
  [ApiCode.SetProfile]: {

  };
}

export interface ApiRes {
  [ApiCode.GetPost]: {
    id: number;
    userId: number;
    date: number;
    content: string;
    likeCount: number;
    liked: boolean;
    bookmarked: boolean;
  };

  [ApiCode.GetProfile]: {
    id: number;
    name: string;
    tag: string;
    bio: string;
    date: number;
    followerCount: number;
    followingCount: number;
  };
}
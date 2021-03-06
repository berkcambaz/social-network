import { ApiCode, ApiError, ApiReqSchema, ApiRes } from "../../shared/types";
import { auth } from "./api/auth";
import { login } from "./api/login";
import { logout } from "./api/logout";
import { getPost, postPost } from "./api/post";
import { signup } from "./api/signup";
import { getUser } from "./api/user";
import { ReqType, ResType } from "./types";

export class Api {
  public static async handle(req: ReqType, res: ResType) {
    console.log(req.body);
    const schema: ApiReqSchema<any> = req.body as ApiReqSchema<any>;
    if (!req.body) return;

    switch (schema.type) {
      case ApiCode.Login: await login(req, res, schema.data); return;
      case ApiCode.Signup: await signup(req, res, schema.data); return;
      default: break;
    }

    const userId = await auth(req, res, schema.data);
    if (userId === null) return res.send({ err: ApiError.AuthFail } as ApiRes[ApiCode.Auth]);
    if (schema.type === ApiCode.Auth) return res.send({ data: { id: userId } } as ApiRes[ApiCode.Auth])

    switch (schema.type) {
      case ApiCode.Logout: await logout(req, res, userId, schema.data); return;
      case ApiCode.PostPost: await postPost(req, res, userId, schema.data); return;
      case ApiCode.GetPost: await getPost(req, res, userId, schema.data); return;
      case ApiCode.GetUser: await getUser(req, res, userId, schema.data); return;
      default: break;
    }
  }
}
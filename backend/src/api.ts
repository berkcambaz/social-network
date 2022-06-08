import { ApiCode, ApiReqSchema } from "../../shared/types";
import { auth } from "./api/auth";
import { login } from "./api/login";
import { logout } from "./api/logout";
import { signup } from "./api/signup";
import { ReqType, ResType } from "./types";

export class Api {
  public handle(req: ReqType, res: ResType) {
    console.log(req.body);
    const schema: ApiReqSchema = req.body as ApiReqSchema;
    if (!req.body) return;

    switch (schema.type) {
      case ApiCode.Auth: auth(req, res, schema.data); break;
      case ApiCode.Login: login(req, res, schema.data); break;
      case ApiCode.Signup: signup(req, res, schema.data); break;
      case ApiCode.Logout: logout(req, res, schema.data); break;
      default: break;
    }
  }
}
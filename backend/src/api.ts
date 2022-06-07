import { ApiCode, ApiSchema } from "../../shared/types";
import { auth } from "./api/auth";
import { login } from "./api/login";
import { logout } from "./api/logout";
import { signup } from "./api/signup";
import { ReqType, ResType } from "./types";

export class Api {
  public handle(req: ReqType, res: ResType) {
    console.log(req.body);
    if (!req.body) return;
    const schema: ApiSchema = JSON.parse(req.body as string);

    switch (schema.type) {
      case ApiCode.Auth: auth(req, res, schema.data); break;
      case ApiCode.Login: login(req, res, schema.data); break;
      case ApiCode.Signup: signup(req, res, schema.data); break;
      case ApiCode.Logout: logout(req, res, schema.data); break;
      default: break;
    }
  }
}
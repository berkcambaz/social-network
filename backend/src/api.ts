import { ApiCode, ApiError, ApiReqSchema, ApiResSchema } from "../../shared/types";
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
      case ApiCode.Login: login(req, res, schema.data); return;
      case ApiCode.Signup: signup(req, res, schema.data); return;
      default: break;
    }

    if (!auth(req, res, schema.data)) {
      res.send({ err: ApiError.AuthFail } as ApiResSchema);
      return;
    }

    switch (schema.type) {
      case ApiCode.Logout: logout(req, res, schema.data); return;
      default: break;
    }
  }
}
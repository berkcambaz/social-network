import { ApiCode, ApiReq } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import * as srandom from "secure-random";

export function auth(req: ReqType, res: ResType, data: ApiReq[ApiCode.Auth]) {
  return false;
}

export function generateToken() {
  return String.fromCharCode(...srandom(32, { type: "Uint8Array" }));
}
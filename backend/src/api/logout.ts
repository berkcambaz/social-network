import { ApiCode, ApiReq } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import { clearToken, getToken, removeToken } from "./auth";

export async function logout(req: ReqType, res: ResType, userId: number, data: ApiReq[ApiCode.Logout]) {
  const token = getToken(req);
  if (!token) return res.send({ data: {} });

  clearToken(res);
  await removeToken(token);

  return res.send({ data: {} });
}
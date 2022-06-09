import { ApiCode, ApiReq } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import * as srandom from "secure-random";
import { DB } from "../db";

export async function auth(req: ReqType, res: ResType, data: ApiReq[ApiCode.Auth]): Promise<null | number> {
  const token = getToken(req);
  if (!token) return null;

  const userId = await getUserIdByToken(token);
  return userId;
}

export function generateToken() {
  return String.fromCharCode(...srandom(32, { type: "Uint8Array" }));
}

export function getToken(req: ReqType) {
  return req.cookies["token"];
}

export function setToken(res: ResType, token: string) {
  res.setCookie("token", token, { secure: true, httpOnly: true, sameSite: true });
}

export function clearToken(res: ResType) {
  res.clearCookie("token");
}

export async function getUserIdByToken(token: string): Promise<null | number> {
  const { result, err } = await DB.query(`
    SELECT user_id FROM session
    WHERE token=?
  `, [token]);

  if (result.length === 0 || err) return null;
  return result[0]["user_id"] as number;
}

export async function saveToken(token: string, userId: number): Promise<boolean> {
  const { result, err } = await DB.query(`
    INSERT INTO session (user_id, token)
    VALUES (?, ?)
  `, [userId, token]);

  if (err) return false;
  return true;
}

export async function removeToken(token: string) {
  const { result, err } = await DB.query(`
    DELETE FROM session
    WHERE token=?
  `, [token]);
}
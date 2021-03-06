import { ApiCode, ApiError, ApiReq, ApiResSchema } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import * as bcrypt from "bcrypt";
import { DB } from "../db";
import { generateToken, saveToken, setToken } from "./auth";

export async function login(req: ReqType, res: ResType, data: ApiReq[ApiCode.Login]) {
  if (data.usertag.length < 3) return res.send({ err: ApiError.LoginFail });
  if (data.usertag.length > 16) return res.send({ err: ApiError.LoginFail });
  if (data.password.length < 10) return res.send({ err: ApiError.LoginFail });
  if (data.password.length > 32) return res.send({ err: ApiError.LoginFail });

  const tag = data.usertag;
  const password = data.password;

  const { result, err } = await DB.query(`
    SELECT id, password FROM user
    WHERE tag=?
  `, [tag]);

  if (result.length === 0 || err) return res.send({ err: ApiError.LoginFail });
  if (!await bcrypt.compare(password, String.fromCharCode(...result[0].password))) return res.send({ err: ApiError.LoginFail });

  const userId = result[0].id;
  const token = generateToken();
  const saved = await saveToken(token, userId);
  if (saved) setToken(res, token);

  return res.send({ data: { id: userId } });
}
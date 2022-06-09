import { ApiCode, ApiError, ApiReq } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import * as bcrypt from "bcrypt";
import { DB } from "../db";

export async function login(req: ReqType, res: ResType, data: ApiReq[ApiCode.Login]) {
  if (data.usertag.length < 3) return res.send({ err: ApiError.LoginFail });
  if (data.usertag.length > 16) return res.send({ err: ApiError.LoginFail });
  if (data.password.length < 10) return res.send({ err: ApiError.LoginFail });
  if (data.password.length > 32) return res.send({ err: ApiError.LoginFail });

  const tag = data.usertag;
  const password = data.password;

  const { result, err } = await DB.query(`
    SELECT id, password FROM profile
    WHERE tag=?
  `, [tag]);

  if (result.length === 0 || err) return res.send({ err: ApiError.LoginFail });
  if (!await bcrypt.compare(password, result[0].password)) return res.send({ err: ApiError.LoginFail });
  return res.send({ data: { id: result[0].id } });
}
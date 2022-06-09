import { ApiCode, ApiError, ApiReq } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import { validate } from "email-validator";
import * as bcrypt from "bcrypt";
import { DB } from "../db";

export async function signup(req: ReqType, res: ResType, data: ApiReq[ApiCode.Signup]) {
  if (data.usertag.length < 3) return res.send({ err: ApiError.SignupFail });
  if (data.usertag.length > 16) return res.send({ err: ApiError.SignupFail });
  if (!validate(data.email)) return res.send({ err: ApiError.SignupFail });
  if (data.password.length < 10) return res.send({ err: ApiError.SignupFail });
  if (data.password.length > 32) return res.send({ err: ApiError.SignupFail });

  const tag = data.usertag;
  const email = data.email;
  const hash = await bcrypt.hash(data.password, 10);

  const { result, err } = await DB.query(`
    INSERT INTO user (name, tag, email, password, date, bio, following_count, follower_count)
    VALUES (?, ?, ?, ?, UNIX_TIMESTAMP(), "", 0, 0)
  `, [tag, tag, email, hash]);

  if (err) return res.send({ err: ApiError.SignupFail });
  return res.send({ data: { id: result.insertId } });
}
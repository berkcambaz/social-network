import { ApiCode, ApiError, ApiReq, ApiResSchema } from "../../../shared/types";
import { ReqType, ResType } from "../types";
import { validate } from "email-validator";
import { db } from "../db";
import * as bcrypt from "bcrypt";
import { ResultSetHeader } from "mysql2";

export async function signup(req: ReqType, res: ResType, data: ApiReq[ApiCode.Signup]) {
  if (data.usertag.length < 3) return res.send({ err: ApiError.SignupFail });
  if (data.usertag.length > 16) return res.send({ err: ApiError.SignupFail });
  if (!validate(data.email)) return res.send({ err: ApiError.SignupFail });
  if (data.password.length < 10) return res.send({ err: ApiError.SignupFail });
  if (data.password.length > 32) return res.send({ err: ApiError.SignupFail });

  const tag = data.usertag;
  const email = data.email;
  const password = await bcrypt.hash(data.password, 10);

  const a = await db.execute(`
    INSERT INTO profile (name, tag, email, password, date, bio, following_count, follower_count)
    VALUES (?, ?, ?, ?, UNIX_TIMESTAMP(), "", 0, 0)
  `, [tag, tag, email, password],
    (err, result, fields) => {
      console.log(1);
      if (err) return res.send({ err: ApiError.SignupFail });
      res.send({ data: {} });


    }
  );
  console.log(2);
}
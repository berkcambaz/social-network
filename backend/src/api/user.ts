import { ApiCode, ApiError, ApiReq, ApiRes, IPost } from "../../../shared/types";
import { DB } from "../db";
import { ReqType, ResType } from "../types";

export async function getUser(req: ReqType, res: ResType, userId: number, data: ApiReq[ApiCode.GetUser]) {
  if (data.userId.length > 20) return res.send({ err: ApiError.GetUserFail });
  if (data.userId.length === 0) return res.send({ err: ApiError.GetUserFail });

  const { result, err } = await DB.query(`
    SELECT id, name, tag, date, bio, following_count, follower_count FROM user
    WHERE id IN (?)
  `, [...data.userId]);

  if (err) return res.send({ err: ApiError.GetUserFail });
  return res.send({ data: { users: [...result] } })
}
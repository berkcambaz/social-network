import { ApiCode, ApiError, ApiReq, ApiRes, IPost } from "../../../shared/types";
import { DB } from "../db";
import { ReqType, ResType } from "../types";

export async function postPost(req: ReqType, res: ResType, userId: number, data: ApiReq[ApiCode.PostPost]) {
  const content = data.content;

  if (content.length > 256) return res.send({ err: ApiError.PostPostFail });
  if (content.length === 0) return res.send({ err: ApiError.PostPostFail });

  const date = Date.now();

  const { result, err } = await DB.query(`
    INSERT INTO post (user_id, date, content, like_count)
    VALUES (?, ?, ?, 0)
  `, [userId, date, content]);

  if (err) return res.send({ err: ApiError.PostPostFail });

  const post: IPost = {
    id: result.insertId,
    userId: userId,
    date: date,
    content: content,
    likeCount: 0,
    liked: false,
    bookmarked: false
  };
  return res.send({ data: post });
}
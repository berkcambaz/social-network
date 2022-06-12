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
  return res.send({ data: { post: post } });
}

export async function getPost(req: ReqType, res: ResType, userId: number, data: ApiReq[ApiCode.GetPost]) {
  const values = [userId, userId];
  if (data.anchor !== -1) values.push(data.anchor);

  const { result, err } = await DB.query(`
    SELECT id, user_id, date, content, like_count FROM post
    WHERE user_id in (SELECT following_id FROM follow WHERE follower_id=?) OR post.user_id=?
    ${data.anchor === -1 ? "" : data.type === "newer" ? "WHERE id>?" : "WHERE id<?"}
    ORDER BY post.id ${data.type === "newer" ? "DESC" : "ASC"}
    LIMIT 25 
  `, values);

  if (err) return res.send({ err: ApiError.GetPostFail });

  const posts: IPost[] = []
  result.forEach((post: any) => {
    posts.push({
      id: post.id,
      userId: post.user_id,
      date: post.date,
      content: post.content,
      likeCount: post.like_count,
      liked: false,
      bookmarked: false,
    })
  });
  return res.send({ data: { posts } });
}
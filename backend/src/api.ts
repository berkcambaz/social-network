import { ReqType, ResType } from "./types";

export class Api {
  public handle(req: ReqType, res: ResType) {
    console.log(req.body);
  }
}
import type { ApiCode, ApiReq } from "../../../shared/types";

export async function api<T extends ApiCode>(req: ApiReq[T]) {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })

  return res.json();
}
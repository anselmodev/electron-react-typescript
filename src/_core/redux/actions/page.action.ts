import { PagePayload, SET_PAGE_ROUTE } from "../types";

export function setPageInfo(payload: PagePayload) {
  return {
    type: SET_PAGE_ROUTE,
    payload
  };
}

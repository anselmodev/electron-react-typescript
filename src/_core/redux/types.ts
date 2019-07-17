export const SET_PAGE_ROUTE = "SET_PAGE_ROUTE";

export interface PageStore {
  data: {
    title: string;
    url: string;
    param?: {};
    hash?: string[];
  };
}

export interface PagePayload {
  title: string;
  location: any;
}

export interface PageAction {
  type: typeof SET_PAGE_ROUTE;
  payload: PagePayload;
}

export const SET_PAGE_ROUTE = "SET_PAGE_ROUTE";

export interface SystemStore {
  data: {
    title: string;
    url: string;
    param?: {};
    hash?: string[];
  };
}

export interface PageStore {
  title: string;
  location: any;
}

export interface PageAction {
  type: typeof SET_PAGE_ROUTE;
  payload: PageStore;
}

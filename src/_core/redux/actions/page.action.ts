import  { PageStore, SET_PAGE_ROUTE } from '../types';

export function setPageInfo(payload: PageStore ) {
  return {
    type: SET_PAGE_ROUTE,
    payload
  }
}

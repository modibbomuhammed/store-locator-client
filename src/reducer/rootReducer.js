import { loadStores } from "../action/actionTypes";

export function reducer(state = { stores: [] }, { type, payload }) {
  switch (type) {
    case loadStores:
      return { stores: [...payload] };
    default:
      return state;
  }
}

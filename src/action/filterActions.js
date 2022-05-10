import { SetFilter } from "../type/types";


export const setFilter = filter => {
  return {
    type: SetFilter,
    payload: { filter },
  };
};
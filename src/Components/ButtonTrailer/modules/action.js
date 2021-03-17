import * as ActionType from "./constants";

export const actGetMovieTrailer = (data) => {
  return {
    type: ActionType.MOVIE_TRAILER_MODAL,
    payload: data,
  };
};

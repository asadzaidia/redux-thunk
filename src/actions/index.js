import api from "../apis/jsonPlaceHolder";
import _ from "lodash";
export const fetchPosts = () => {
  return async dispatch => {
    const response = await api.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// export const fetchUser = id => {
//   return async dispatch => {
//     const response = await api.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

//memoizing technique lodash
export const fetchUser = function(id) {
  return dispatch => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await api.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
//memoizing technique lodash

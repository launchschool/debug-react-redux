import { get } from "../utils/AJAX";

export const PostsError = "POSTS_ERROR";
function postError(error) {
  return {
    error,
    timestamp: Date.now(),
    type: PostsError,
  };
}

export const PostsLoaded = "POSTS_LOADED";
function postsLoaded(posts, pages) {
  return {
    pages,
    posts,
    timestamp: Date.now(),
    type: PostsLoaded,
  };
}

export const RecountVotes = "RECOUNT";
export function recountVotes(posts, pages) {
  return {
    type: RecountVotes,
  };
}

export function fetchPosts(params) {
  return async (dispatch, getState) => {
    const { error, pages, posts } = await get("/api/posts/get", params);
    if (error) {
      return dispatch(postError(error));
    }
    return dispatch(postsLoaded(posts, pages));
  };
}

export function loadPosts() {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    return dispatch(recountVotes());
  };
}

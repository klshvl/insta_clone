import { Dispatch, Middleware, configureStore } from "@reduxjs/toolkit";
import { Reducer, combineReducers } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";
import { savedPostsReducer } from "../savedPosts";
import { userReducer } from "../user";

export interface InitialState {
  posts: Post[];
}

const initialState: InitialState = {
  posts: [],
};

const postsReducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "posts": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  savedPosts: savedPostsReducer,
  user: userReducer,
});

const middlewares: Middleware[] = [];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/////////////////// GETPOSTS ///////////////////

export const getPosts = () => async (dispatch: Dispatch) => {
  const data = (await firestore().collection("posts").get()).docs;

  const fetchedPosts: Post[] = [];
  for await (const d of data) {
    const comments = [];
    const likedBy = [];
    if (d.data().comments?.length) {
      const commentData = await d.data().comments;

      for await (const comment of commentData) {
        const c = await comment.get();

        comments.push({ ...c.data(), id: c.id });
      }
    }
    if (d.data().likedBy.length) {
      const likedByData = await d.data().likedBy;

      for await (const likes of likedByData) {
        const like = await likes.get();

        likedBy.push({ ...like.data(), id: like.id });
      }
    }
    fetchedPosts.push({ ...d.data(), id: d.id, comments, likedBy });
  }

  dispatch({ type: "posts", payload: fetchedPosts });
};

/////////////////// GETCOMMENTS ///////////////////

// export const getComments = () => (dispatch: Dispatch) => {
//   firestore()
//     .collection("comments")
//     .get()
//     .then(query => {
//       const comments = [];
//       query.forEach(doc => {
//         comments.push(doc.data());
//       });
//       dispatch({ type: "comments", payload: comments });
//     });
// };

/////////////////// ADDCOMMENT ///////////////////

// export const addComment =
//   (postId: number, comment: AddCommentsState) =>
//   (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
//     const newData = getState().posts.posts.map((post: Post) => {
//       if (post.id !== postId) {
//         return post;
//       }
//       return { ...post, comments: [...post.comments, comment] };
//     });
//     dispatch({ type: "setNewData/addComment", payload: newData });
//   };

/////////////////// DELETECOMMENT ///////////////////

// export const deleteComment =
//   (postId: number, commentId: number) =>
//   (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
//     const newData = getState().posts.posts.map(post => {
//       if (post.id !== postId) return post;

//       const commentsUpdated = post.comments.filter(
//         comment => comment.id !== commentId,
//       );

//       return { ...post, comments: commentsUpdated };
//     });

//     dispatch({ type: "setNewData/deleteComment", payload: newData });
//   };

/////////////////// LIKECOMMENT ///////////////////

// export const likeComment =
//   (postId: number, commentId: number) =>
//   (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
//     const newData = getState().posts.posts.map(post => {
//       if (post.id !== postId) return post;

//       const commentsUpdated = post.comments.map(comment => {
//         if (comment.id === commentId) {
//           return {
//             ...comment,
//             isLiked: !comment.isLiked,
//           };
//         } else {
//           return comment;
//         }
//       });

//       return {
//         ...post,
//         comments: commentsUpdated,
//       };
//     });
//     dispatch({ type: "commentLiked", payload: newData });
//   };

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

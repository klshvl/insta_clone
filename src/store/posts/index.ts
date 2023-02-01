import { Dispatch, Store, configureStore } from "@reduxjs/toolkit";

import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { savedPostsReducer } from "../savedPosts";

export interface InitialState {
  posts: Post[];
}

type ConfigureStore = (reducer: Reducer, preloadedState: InitialState) => Store;

const initialState: InitialState = {
  posts: [
    {
      id: 1,
      image: require("../../../assets/images/WillVandom.jpg"),
      username: "will_vandom",
      likedBy: [3, 4, 5, 2],
      comments: [],
    },
    {
      id: 2,
      image: require("../../../assets/images/IrmaLair.jpg"),
      username: "irma_lair",
      likedBy: [4],
      comments: [],
    },
    {
      id: 3,
      image: require("../../../assets/images/TaraneeCook.png"),
      username: "taranee_cook",
      likedBy: [4, 5],
      comments: [],
    },
    {
      id: 4,
      image: require("../../../assets/images/CorneliaHale.jpg"),
      username: "cornelia_hale",
      likedBy: [6, 2, 3, 5],
      comments: [],
    },
    {
      id: 5,
      image: require("../../../assets/images/HayLin.png"),
      username: "hay_lin",
      likedBy: [9, 3, 4],
      comments: [],
    },
    {
      id: 6,
      image: require("../../../assets/images/caleb.png"),
      username: "caleb__",
      likedBy: [4, 9],
      comments: [],
    },
    {
      id: 7,
      image: require("../../../assets/images/MattOlsen.jpg"),
      username: "matt_olsen",
      likedBy: [1, 8],
      comments: [],
    },
    {
      id: 8,
      image: require("../../../assets/images/elyon.jpg"),
      username: "elyon_brown",
      likedBy: [4, 6, 9],
      comments: [],
    },
    {
      id: 9,
      image: require("../../../assets/images/blunk.png"),
      username: "its_blunkkk",
      likedBy: [1, 2, 3, 4, 5],
      comments: [],
    },
  ],
};

const postsReducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "setNewData/addComment": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "setNewData/deleteComment": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "commentLiked": {
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
});

const store = configureStore<ConfigureStore>({ reducer: rootReducer });

export default store;

/////////////////// ADDCOMMENT ///////////////////

export const addComment =
  (postId: number, comment: AddCommentsState) =>
  (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
    const newData = getState().posts.posts.map((post: Post) => {
      if (post.id !== postId) {
        return post;
      }
      return { ...post, comments: [...post.comments, comment] };
    });
    dispatch({ type: "setNewData/addComment", payload: newData });
  };

/////////////////// DELETECOMMENT ///////////////////

export const deleteComment =
  (postId: number, commentId: number) =>
  (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
    const newData = getState().posts.posts.map(post => {
      if (post.id !== postId) return post;

      const commentsUpdated = post.comments.filter(
        comment => comment.id !== commentId,
      );

      return { ...post, comments: commentsUpdated };
    });

    dispatch({ type: "setNewData/deleteComment", payload: newData });
  };

/////////////////// LIKECOMMENT ///////////////////

export const likeComment =
  (postId: number, commentId: number) =>
  (dispatch: Dispatch, getState: () => { posts: InitialState }) => {
    const newData = getState().posts.posts.map(post => {
      if (post.id !== postId) return post;

      const commentsUpdated = post.comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
          };
        } else {
          return comment;
        }
      });

      return {
        ...post,
        comments: commentsUpdated,
      };
    });
    dispatch({ type: "commentLiked", payload: newData });
  };

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

import { Dispatch, Reducer } from "@reduxjs/toolkit";

export interface SavedPostsInitialState {
  savedPostsIds: [];
}

const initialState: SavedPostsInitialState = {
  savedPostsIds: [],
};

export const savedPostsReducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "save": {
      return {
        savedPostsIds: [...state.savedPostsIds, action.payload],
      };
    }
    case "remove": {
      return {
        savedPostsIds: action.payload,
      };
    }
    default:
      return state;
  }
};

export const removeSavedPost =
  (postId: number) =>
  (
    dispatch: Dispatch,
    getState: () => { savedPosts: SavedPostsInitialState },
  ) => {
    const newData = getState().savedPosts.savedPostsIds.filter((id: number) => {
      return id !== postId;
    });
    dispatch({ type: "remove", payload: newData });
  };

import { Dispatch, Store, configureStore } from "@reduxjs/toolkit";

import { Reducer, combineReducers } from "@reduxjs/toolkit";

export interface InitialState {
  posts: Post[];
}

type ConfigureStore = (reducer: Reducer, preloadedState: InitialState) => Store;

const initialState: InitialState = {
  posts: [
    {
      id: 1,
      image: require("../../assets/images/WillVandom.jpg"),
      username: "will_vandom",
      likedBy: [3, 4, 5, 2],
      comments: [],
    },
    {
      id: 2,
      image: require("../../assets/images/IrmaLair.jpg"),
      username: "irma_lair",
      likedBy: [4],
      comments: [],
    },
    {
      id: 3,
      image: require("../../assets/images/TaraneeCook.png"),
      username: "taranee_cook",
      likedBy: [4, 5],
      comments: [],
    },
    {
      id: 4,
      image: require("../../assets/images/CorneliaHale.jpg"),
      username: "cornelia_hale",
      likedBy: [2, 3, 5],
      comments: [],
    },
    {
      id: 5,
      image: require("../../assets/images/HayLin.png"),
      username: "hay_lin",
      likedBy: [1, 3, 4],
      comments: [],
    },
  ],
};

const postsReducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "setUserData": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};

export const addComment =
  (postId: number, comment: string | undefined) =>
  (dispatch: Dispatch, getState) => {
    const newData = getState().posts.posts.map((data: Post) =>
      data.id === postId
        ? { ...data, comments: [...data.comments, comment] }
        : data,
    );
    dispatch({ type: "setUserData", payload: newData });
  };

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore<ConfigureStore>({ reducer: rootReducer });

export default store;

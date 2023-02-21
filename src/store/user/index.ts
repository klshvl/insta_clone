import firestore from "@react-native-firebase/firestore";
import { Dispatch, Reducer } from "@reduxjs/toolkit";

interface SavedPostIds {
  postId: string;
  id: string;
}

interface UserInitialState {
  user: null | {
    displayName: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: {
      creationTime: number;
      lastSignInTime: number;
    };
    phoneNumber: null;
    photoURL: string;
    providerData: ObjectConstructor[][];
    providerId: string;
    refreshToken: string;
    tenantId: null;
    uid: string;
    savedPosts: SavedPostIds[];
  };
}
const initialState: UserInitialState = {
  user: null,
};

export const userReducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action,
): UserInitialState => {
  switch (action.type) {
    case "user": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "user/profilePic": {
      return {
        ...state,
        user: {
          ...state.user,
          photoURL: action.payload,
        },
      };
    }
    case "signOut": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "savedPosts": {
      return {
        ...state,
        user: {
          ...state.user,
          savedPosts: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const getSavedPosts = () => async (dispatch: Dispatch) => {
  const fetchSavedPosts = (await firestore().collection("savedPosts").get())
    .docs;

  const savedPosts: SavedPostIds[] = [];
  for await (const fetchSavedPost of fetchSavedPosts) {
    if (fetchSavedPost.data()?.postId) {
      savedPosts.push({
        postId: fetchSavedPost.data().postId,
        id: fetchSavedPost.id,
      });
    }
  }

  dispatch({ type: "savedPosts", payload: savedPosts });
};

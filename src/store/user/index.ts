import { Reducer } from "@reduxjs/toolkit";

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
    providerData: {
      displayName: string;
      email: string;
      photoURL: string;
      providerId: string;
      uid: string;
    }[];
    providerId: string;
    refreshToken: string;
    tenantId: null;
    uid: string;
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
    default: {
      return state;
    }
  }
};

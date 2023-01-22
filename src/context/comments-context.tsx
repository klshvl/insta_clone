import React, { SetStateAction, useContext, useState } from "react";
import { createContext } from "react";

interface ContextType {
  comments: Array<string | undefined>;
  setComments: (par: SetStateAction<(string | undefined)[]>) => void;
}

const Context = createContext<ContextType>({
  comments: [],
  setComments: () => {},
});

export const CommentsContext = ({ children }: ContextProps) => {
  const [comments, setComments] = useState<Array<string | undefined>>([]);
  return (
    <Context.Provider value={{ comments, setComments }}>
      {children}
    </Context.Provider>
  );
};

export const useCommentsContext = () => {
  const context = useContext(Context);

  if (context === undefined) throw new Error("Hook is used without a Provider");

  return context;
};

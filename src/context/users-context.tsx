import React, { useContext } from "react";
import { createContext } from "react";

const Context = createContext<Profile[]>([]);

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const UsersContext = ({ children }: ContextProps) => {
  const value: Profile[] = [
    {
      id: 1,
      image: require("../../assets/images/WillVandom.jpg"),
      username: "will_vandom",
      likedBy: [3, 4, 5, 2],
    },
    {
      id: 2,
      image: require("../../assets/images/IrmaLair.jpg"),
      username: "irma_lair",
      likedBy: [4],
    },
    {
      id: 3,
      image: require("../../assets/images/TaraneeCook.png"),
      username: "taranee_cook",
      likedBy: [4, 5],
    },
    {
      id: 4,
      image: require("../../assets/images/CorneliaHale.jpg"),
      username: "cornelia_hale",
      likedBy: [2, 3, 5],
    },
    {
      id: 5,
      image: require("../../assets/images/HayLin.png"),
      username: "hay_lin",
      likedBy: [1, 3, 4],
    },
  ];
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(Context);

  if (context === undefined) throw new Error("Hook is used without a Provider");

  return context;
};

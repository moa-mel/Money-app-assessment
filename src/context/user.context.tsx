import React, { Context } from "react";
import { UserContextT, UserT } from "../types";

export const initialUser: UserT = {
  email: "",
  password: "",
};

export const UserContext: Context<UserContextT> =
  React.createContext<UserContextT>({
    user: initialUser,
    LoginUser: (user: UserT) => null,
  });

interface ComponentProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<ComponentProps> = ({ children }) => {
  const [user, setUser] = React.useState<UserT>(initialUser);

  const LoginUser = (user: UserT) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, LoginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
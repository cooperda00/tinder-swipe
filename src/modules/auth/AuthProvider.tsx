import { auth } from "modules/firebase";
import { User } from "firebase/auth";
import { FC, ReactNode, useEffect, useState, useMemo, useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext<User | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) setCurrentUser(user);
      setPending(false);
    });
  }, []);

  //TODO - build a nicer component for this
  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const user = useContext(AuthContext);

  const isLoggedIn = useMemo(() => {
    if (user) return true;
    return false;
  }, [user]);

  return { isLoggedIn };
};

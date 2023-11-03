import { createContext, useContext } from "solid-js";
import data from "./../components/themes/config/index.json";

export const AuthContext = createContext();

export const AppProvider = (props) => {
  const authContext = {
    data,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

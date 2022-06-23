import { createContext, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    (data) => {
      setUser(data);
      navigate("/");
    },
    [setUser, navigate]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [setUser, navigate]);
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

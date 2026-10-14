import { createContext, useContext, useState } from 'react';

interface AuthUser {
  id: string;
  token: string;
  isAuthenticated: boolean;
}

interface AuthContextValue {
  authUser: AuthUser | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>({
    id: 'usr-001',
    token: 'mock-jwt-token-abc123',
    isAuthenticated: true,
  });

  const login = (token: string) => {
    setAuthUser({ id: 'usr-001', token, isAuthenticated: true });
  };

  const logout = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

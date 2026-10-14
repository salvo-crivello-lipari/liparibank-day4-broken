import { createContext, useContext, useState } from 'react';

export interface AppUser {
  id: string;
  name: string;
  role: string;
}

export interface AppNotification {
  id: string;
  message: string;
  read: boolean;
}

interface AppContextValue {
  user: AppUser;
  setUser: React.Dispatch<React.SetStateAction<AppUser>>;
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  notifications: AppNotification[];
  setNotifications: React.Dispatch<React.SetStateAction<AppNotification[]>>;
}

const AppContext = createContext<AppContextValue | null>(null);

const initialNotifications: AppNotification[] = [
  { id: 'n-1', message: 'Nuovo accredito ricevuto', read: false },
  { id: 'n-2', message: 'Estratto conto disponibile', read: false },
  { id: 'n-3', message: 'Aggiornamento condizioni', read: true },
];

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AppUser>({
    id: 'usr-001',
    name: 'Mario Rossi',
    role: 'Cliente Premium',
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [notifications, setNotifications] = useState<AppNotification[]>(initialNotifications);

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme, notifications, setNotifications }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used inside AppProvider');
  return ctx;
};

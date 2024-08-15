import { createContext } from "react";

export interface Session {
  user: string | null;
  isAuthenticated: boolean;
}

export const SessionContext = createContext<Session>({
  user: null,
  isAuthenticated: false,
});

import { Session } from "@/context/SessionContext";
import { apiGet, apiPost } from "./client";
import { UserSchema } from "@packages/common/src/types";

export async function getSession(): Promise<Session> {
  const response = await apiGet({ endpoint: "user" });
  if (!response.ok) {
    return {
      user: null,
      isAuthenticated: false,
    };
  } else {
    const user = await response.json();
    return {
      user: user.username,
      isAuthenticated: true,
    };
  }
}

export async function login(user: UserSchema) {
  const response = await apiPost({ endpoint: "login", body: user });
  return response;
}

export async function signup(user: UserSchema) {
  const response = await apiPost({ endpoint: "signup", body: user });
  return response;
}

export async function logout() {
  const response = await apiGet({ endpoint: "logout" });
  return response;
}

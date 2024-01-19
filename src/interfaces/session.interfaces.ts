export interface CreateSession {
  email: string;
  password: string;
}

export interface SessionReturn {
  token: string;
  id: string;
  email: string;
}

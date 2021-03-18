export interface User {
  name: string;
  lastName: string;
  email: string;
  genre: string;
  birthDate: string;
  phone: string;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface ContextProps {
  user: User;
  signUp: (value: User) => void;
  signIn: (value: Login) => void;
}

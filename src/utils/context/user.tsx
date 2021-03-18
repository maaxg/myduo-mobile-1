import React, {createContext, useState} from 'react';
import {User, Login, ContextProps} from '../types/user-types';
import {createUser, createSession} from '../../services/user';
export const UserContext = createContext<ContextProps>({} as ContextProps);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>();

  async function signUp(userParam: User) {
    setUser(await createUser(userParam));
  }

  async function signIn(userParam: Login) {
    setUser(await createSession(userParam));
  }
  return (
    <UserContext.Provider value={{user, signIn, signUp}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

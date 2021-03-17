import React, {createContext, useState, ReactChildren} from 'react';
import {User, Login, Context} from '../types/user-types';
import {createUser, createSession} from '../../services/user';
export const UserContext = createContext<Context>();

const UserProvider = (children: ReactChildren) => {
  const [user, setUser] = useState<User>();

  async function signUp(userParam: User) {
    setUser(await createUser(userParam));
  }

  async function signIn(userParam: Login) {
    setUser(await createSession(userParam));
  }
  return (
    <UserContext.Provider value={{user, signUp, signIn}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

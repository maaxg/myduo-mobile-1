import axios from 'axios';
import {User, Login} from '../../utils/types/user-types';
const URL = 'https://myduogg.loca.lt/';

export const createUser = async (user: User) => {
  try {
    const {data} = await axios.post(`${URL}/user`, {
      ...user,
    });
    return data;
  } catch (err) {
    console.warn('Error creating user ', err.message);
  }
};

export const createSession = async (user: Login) => {
  try {
    const {data} = await axios.post(`${URL}/userSession`, {
      ...user,
    });
    return data;
  } catch (err) {
    console.warn('Error signing in', err.message);
  }
};

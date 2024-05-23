import axios from 'axios';
import { Axios } from '../util/axios/axios';
import { AuthFormValues } from './../types/auth';

interface AuthProps {
  path: 'sign-in' | 'sign-up';
  data: AuthFormValues;
}

export const authFetcher = async ({ path, data }: AuthProps) => {
  let requestData;
  if (path === 'sign-in') {
    const { email, password } = data;
    requestData = { email, password };
  } else if (path === 'sign-up') {
    const { email, nickName, password } = data;
    requestData = { email, nickName, password };
  }
  try {
    const res = await Axios.post(`/api/auth/${path}`, requestData);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    }
  }
};

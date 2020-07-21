import {useContext} from 'react';
import UserContext from 'contexts/userContext';

export default function useUserContext() {
  return useContext(UserContext);
}
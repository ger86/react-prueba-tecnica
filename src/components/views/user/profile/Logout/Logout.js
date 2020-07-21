import {useEffect} from 'react';
import useUserContext from 'hooks/useUserContext';

export default function Logout() {
  const {doLogout} = useUserContext();
  useEffect(() => {
    doLogout(null);
  }, [doLogout]);
  return null;
}

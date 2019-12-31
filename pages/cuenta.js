import { useAuth } from '../utils/hooks';
import { useState } from 'react';
import Logins from "../components/Logins";
import Profile from "../components/Profile";
import Loading from '../components/Loading';

const Cuenta = () => {
   console.log("Update Profile Page");
   const [page, setPage] = useState(<Loading />);
   useAuth(user => {
      if (user) setPage(<Profile user={user} />)
      else setPage(<Logins />)
   });

   return page;
}

export default Cuenta;

import { Outlet, useNavigation,useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenExpiration } from '../utils/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token=useLoaderData();
  const submit=useSubmit()
  useEffect(()=>{
    if(!token){
      return;
    }
    if(token==="EXPIRED"){
      submit(null,{action:'/logout',method:"post"})
    }

    const tokenDuration=getTokenExpiration();
    setTimeout(()=>{
      submit(null,{action:'/logout',method:"post"})
    },tokenDuration)
  },[token,submit])
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

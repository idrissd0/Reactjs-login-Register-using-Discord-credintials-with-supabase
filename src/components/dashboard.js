import React from 'react';
import supabase from '../services/middleman/supabase.js';
import { discordClientId, redirectUri } from '../services/discordOAuth/discordOAuth.js';
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Navigate } from 'react-router-dom';

function Dashborad() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async  function getUserData(){
      await supabase.auth.getSession.user.then((val) => {
        // val.data.user
        if(val.data.user){
          setUser(val.data.user);
          console.log(val.data.user)
        }
      })
    }
    getUserData();
  },[])

  async function sinOut() {
    const { error } = await supabase.auth.signOut();
    Navigate("/login");
  }

  return (
    <div className="App">
        <div  className='App-header'>
        <h1>Dashboard</h1>
        <button onClick={() => { sinOut() }}>Sign out</button>

        </div>
    </div>
  );
}

export default Dashborad;

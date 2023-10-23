import React from 'react';
import supabase from '../../services/middleman/supabase.js';
import { discordClientId, redirectUri } from '../../services/discordOAuth/discordOAuth.js';
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Navigate } from 'react-router-dom';

const Login = () => {
  const handleDiscordLogin = async () => {

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
    
    // Redirect the user to Discord's login page
    window.location.href = discordAuthUrl;
  };

  supabase.auth.onAuthStateChange(async (ev) => {
    if(ev !== "SIGNED_OUT"){
      Navigate('/')
    } else {
      //forward to login URL
    }

  })
  


  return (
    <div className='App'>
      <header className='App-header' >
        <Auth 
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'red',
                  brandAccent: 'darkred',
                },
              },
            }, 
          }}
          theme='dark'
          providers={['discord']}
        />
      </header>
    </div> 
  );
};

export default Login;
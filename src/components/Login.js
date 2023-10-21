import React from 'react';
// import supabase from '../services/middleman/supabase.js';
import { discordClientId, redirectUri } from '../services/discordOAuth/discordOAuth.js';


const Login = () => {
  const handleDiscordLogin = async () => {

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
    
    // Redirect the user to Discord's login page
    window.location.href = discordAuthUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Login with Discord</h1>
        <button
          onClick={handleDiscordLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full w-full focus:outline-none focus:ring focus:ring-blue-200"
        >
        <span class="mr-2">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16.793V5.197a2.018 2.018 0 00-.605-1.43 1.989 1.989 0 00-1.414-.586h-8.77a1.989 1.989 0 00-1.414.586A2.018 2.018 0 002 5.197v11.596a2.018 2.018 0 00.586 1.43 1.989 1.989 0 001.414.586H11l.293-.293a1 1 0 011.414 0l2 2a1 1 0 01.293.586h6.117a1.989 1.989 0 001.414-.586 2.018 2.018 0 00.586-1.43V16.793a1.989 1.989 0 00-.586-1.414 2.018 2.018 0 00-1.43-.586zm0 0h-6m-2 0H5" />
          </svg>
        </span>

          Login with Discord
        </button>
      </div>
    </div>
  );
};

export default Login;

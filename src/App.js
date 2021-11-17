import AppID from 'ibmcloud-appid-js'
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import './App.css';
import Router from './routes/Router';

const App = () => {

  const appID = useMemo(() => {
    return new AppID()
  }, [])

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [welcomeDisplayState, setWelcomeDisplayState] = useState(false);
  const [loginButtonDisplayState, setLoginButtonDisplayState] = useState(false);

  const loginAction = async () => {
    try {
      const tokens = await appID.signin();

      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  };

  useEffect(async () => {

    try {

      await appID.init({
        clientId: '27ecdb6b-6d40-431a-b4e4-1471482ab534',
        discoveryEndpoint: 'https://eu-gb.appid.cloud.ibm.com/oauth/v4/44516919-34fa-4e47-a1de-9e0462e11af4/.well-known/openid-configuration'
      });

      console.log("AppID initialized")

      const { accessToken, accessTokenPayload, idToken, idTokenPayload } = await appID.silentSignin();

      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);

    } catch (e) {
      setErrorState(true);
      setLoginButtonDisplayState(true);
      setWelcomeDisplayState(false);
      console.log("Error in Use Effect", e.message)
    }
  }, [])

  return (
    <div className="App">
      {/* {welcomeDisplayState && <div> Welcome {userName}! You are now authenticated.</div>} */}
      {loginButtonDisplayState && <button style={{
        fontSize: '24px', backgroundColor: 'skyblue',
        border: 'none', cursor: 'pointer'
      }} id='login' onClick={loginAction}>Login</button>}
      {errorState && <div style={{ color: 'red' }}>{errorMessage}</div>}

      {welcomeDisplayState && <Router />}
    </div>
  );
}

export default App;

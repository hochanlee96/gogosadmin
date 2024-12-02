import { useState, useEffect, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import Routes from "./Routes";

const login_duration = 86400;

let logoutTimer;
function App() {
  const [authData, setAuthData] = useState(null);

  const login = useCallback((authData) => {
    const tokenExpiryDate = new Date(
      new Date().getTime() + 1000 * login_duration
    );
    setAuthData({ ...authData, tokenExpirationData: tokenExpiryDate });
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...authData,
        expiration: tokenExpiryDate.toISOString(),
      })
    );
  }, []);

  const verifyRefreshToken = useCallback(() => {
    // send refresh token request to server
    // replace this with actual logic
    console.log("Refreshing token...");
  }, []);

  const logout = useCallback(() => {
    setAuthData(null);
    localStorage.removeItem("userData");
  }, []);

  //auto logout when token is expired
  useEffect(() => {
    if (authData && authData.accessToken && authData.tokenExpirationDate) {
      const remainingTime =
        authData.tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(verifyRefreshToken, remainingTime); // instead of logout, send refresh token request
    } else {
      clearTimeout(logoutTimer);
    }
  }, [authData, logout, verifyRefreshToken]);

  //auto login when page refresh
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.accessToken &&
      new Date(userData.expiration) > new Date()
    ) {
      login(userData);
    }
  }, [login]);

  const routes = <Routes isSignedIn={!!authData} />;
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!authData,
        accessToken:
          authData && authData.accessToken ? authData.accessToken : null,
        refreshToken:
          authData && authData.refreshToken ? authData.refreshToken : null,
        id: authData && authData.id ? authData.id : null,
        email: authData && authData.email ? authData.email : null,
        verified: authData && authData.verified ? authData.verified : false,
        approval: authData && authData.approval ? authData.approval : false,

        login: login,
        logout: logout,
        verifyRefreshToken: verifyRefreshToken,
      }}
    >
      <BrowserRouter>{routes}</BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

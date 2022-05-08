import { GoogleLogin } from "react-google-login";

const clientId =
  "961754812465-2ovtm0ao3pdnrnk9letc5d8g5arifl9v.apps.googleusercontent.com";

function Loggin() {
  function onSuccess(data) {
    console.log(data);
  }

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onSuccess}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default Loggin;

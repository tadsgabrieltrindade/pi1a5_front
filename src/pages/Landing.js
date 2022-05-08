import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import Loggin from "../components/loggin";
import "../styles/pages/landing.css";

const clientId =
  "961754812465-2ovtm0ao3pdnrnk9letc5d8g5arifl9v.apps.googleusercontent.com";


export function Landing() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Nunca foi tão fácil gerenciar Estágio.</h1>
        </main>

        <div className="button-wrapper">
          <Loggin />
        </div>
      </div>
    </div>
  );
}

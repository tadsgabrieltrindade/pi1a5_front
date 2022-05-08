import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import '../styles/pages/landing.css'

export function Landing() {


    const responseGoogle = (response) => {

		console.log(response);
    }
  
    return(
        
    <div id="page-landing">


      <div className="content-wrapper">

          <main>
              <h1>Nunca foi tão fácil gerenciar Estágio.</h1>
          </main>

            <div className="button-wrapper">
                

            <GoogleLogin
				clientId="961754812465-2ovtm0ao3pdnrnk9letc5d8g5arifl9v.apps.googleusercontent.com"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>

            </div>

      </div>


    </div>

    )
}


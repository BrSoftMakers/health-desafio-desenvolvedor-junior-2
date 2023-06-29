import { useState } from 'react';

import SendFeedback from './SendFeedback';

import iconHeader from '../images/icons8-pet-96.png'; 
import iconEmail from '../images/icons8-email-50.png';
import iconGithub from '../images/icons8-github-50.png'; 
import iconLinkedin from '../images/icons8-linkedin-50.png'; 
import iconEmailHover from '../images/icons8-email-50-hover.png';
import iconGithubHover from '../images/icons8-github-50-hover.png'; 
import iconLinkedinHover from '../images/icons8-linkedin-50-hover.png'; 

export default function Header() {
  const [showSendFeedbackComponent, setShowSendFeedbackComponent] = useState(false);
  const [iconEmailIs, setIconEmailIs] = useState(iconEmail);
  const [iconGithubIs, setIconGithubIs] = useState(iconGithub);
  const [iconLinkedinIs, setIconLinkedinIs] = useState(iconLinkedin);

  return (
    <>
      <header id='header-page'>
        <section id='section-title-icon'>
          <img src={iconHeader} alt='imagem mostrando o rosto ilustrado de um gato e um cachorro'/>
          <h1>PetShop</h1>
        </section>
        <section id='section-feedback-contacts'>
          <img 
            src={iconEmailIs} alt='icone de um envelope'
            onMouseEnter={() => setIconEmailIs(iconEmailHover)}
            onMouseLeave={() => setIconEmailIs(iconEmail)}
            onClick={() => setShowSendFeedbackComponent(!showSendFeedbackComponent)}
            className='make-part-send-feedback-component'
          />
          <a href='https://github.com/ts-dart' target='__blank'>
            <img 
              src={iconGithubIs} alt='icone do github'
              onMouseEnter={() => setIconGithubIs(iconGithubHover)}
              onMouseLeave={() => setIconGithubIs(iconGithub)}
            />
          </a>
          <a href='https://www.linkedin.com/in/thiago-henrique-da-silva-souza-634162127/' target='__blank'>
            <img 
              src={iconLinkedinIs} alt='icone do linkedin'
              onMouseEnter={() => setIconLinkedinIs(iconLinkedinHover)}
              onMouseLeave={() => setIconLinkedinIs(iconLinkedin)}
            />
          </a>
        </section>
      </header>
      {showSendFeedbackComponent 
        ? <SendFeedback 
            showSendFeedbackComponent={(param) => setShowSendFeedbackComponent(param)}
          />
        : null}
    </>
  );
}
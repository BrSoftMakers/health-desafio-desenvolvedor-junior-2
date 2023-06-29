import { useState, useEffect } from 'react';

import iconCloseWindow from '../images/icons8-close-window-50.png';
import iconCloseWindowHover from '../images/icons8-close-window-50-hover.png';
import iconLoading from '../images/icons8-loading.gif';

export default function SendFeedback({ showSendFeedbackComponent }) {
  const [btnCloseWindow, setBtnCloseWindow] = useState(iconCloseWindow);
  const [contentEmail, setContentEmail] = useState('');
  const [sent, setSent] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleClickOutside = event => {
    if (!event.target.classList.contains('make-part-send-feedback-component')) {
      showSendFeedbackComponent(false);
    }
  };

  const handleInputs = ({ target }) => {
    setContentEmail(target.value);
    if (contentEmail.length > 3) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id='div-send-feedback-component' className='make-part-send-feedback-component'>
      <div id='div-send-feedback-component-btns' className='make-part-send-feedback-component'>
        <button
          id='btn-close-window-feedback-component'
          className='make-part-send-feedback-component'
          onClick={() => showSendFeedbackComponent(false)}
          onMouseEnter={() => setBtnCloseWindow(iconCloseWindowHover)}
          onMouseLeave={() => setBtnCloseWindow(iconCloseWindow)}
        >
          <img src={btnCloseWindow} alt='imagem de um x para fechar janela' />
        </button>
        <button
          className={btnDisabled 
            ? 'make-part-send-feedback-component btn-send-feedback-component-disabled' 
            : 'make-part-send-feedback-component btn-send-feedback-component'}
          disabled={btnDisabled}
          onClick={() => {
            setSent('sending');
            fetch('https://send-email-server-mu.vercel.app/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contentEmail: contentEmail,
              })
            })
              .then((data) => data.json())
              .then((data) => {
                setSent(data.sent)
              });
          }}
        >
          Enviar
        </button>
      </div>
      <div className='make-part-send-feedback-component'>
        {sent === '' ? (
          <>
            <textarea
              className='make-part-send-feedback-component'
              id='ta-send-feedback-component'
              placeholder='Seu feedback'
              cols='39'
              rows='9'
              value={contentEmail}
              name='contentEmail'
              onChange={handleInputs}
            ></textarea>
          </>
        ) : sent === 'sending' ? (
          <p className='p-feedback-email make-part-send-feedback-component'>
            <img 
              src={iconLoading} 
              alt='gif loading'
              className='make-part-send-feedback-component'
              id='img-gif-loading'
            />
          </p>
        ) : sent ? (
          <p className='p-feedback-email make-part-send-feedback-component'>
            Feedback enviado com sucesso
          </p>
        ) : (
          <p className='p-feedback-email make-part-send-feedback-component'>
            Não foi possível enviar feedback
          </p>
        )}
      </div>
    </div>
  );
};

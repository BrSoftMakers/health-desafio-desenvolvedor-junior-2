import { useEffect, useState } from 'react';

import iconCloseWindow from '../images/icons8-close-window-50.png';
import iconCloseWindowHover from '../images/icons8-close-window-50-hover.png';

export default function View({ setShowView, idView }) {
  const [btnCloseWindow, setBtnCloseWindow] = useState(iconCloseWindow);
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/pets-handler/read/${idView}`)
      .then((data) => data.json())
      .then((data) => setData(data));

      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
  }, [])

  const handleClickOutside = event => {
    if (!event.target.classList.contains('make-part-view-component')) {
      setShowView(false);
    }
  };

  return (
    <article id='article-more-info' className='make-part-view-component'>
      <button
        id='btn-close-window-register-pet-component'
        className='make-part-view-component'
        onClick={() => setShowView(false)}
        onMouseEnter={() => setBtnCloseWindow(iconCloseWindowHover)}
        onMouseLeave={() => setBtnCloseWindow(iconCloseWindow)}
      >
        <img src={btnCloseWindow} alt='imagem de um x para fechar janela' />
      </button>
      <section id='section-view-info' className='make-part-view-component'>
        <div className='info-p-article make-part-view-component'>Id:<p className='p-space make-part-view-component'>{data.id}</p></div>
        <div className='info-p-article make-part-view-component'>Nome:<p className='p-space make-part-view-component'>{data.nome}</p></div>
        <div className='info-p-article make-part-view-component'>Idade: <p className='p-space make-part-view-component'>{data.idade}</p></div>
        <div className='info-p-article make-part-view-component'>Gato ou Cachorro: <p className='p-space make-part-view-component'>{data.eGatoOuCachorro}</p></div>
        <div className='info-p-article make-part-view-component'>Raça: <p className='p-space make-part-view-component'>{data.raca}</p></div>
        <div className='info-p-article make-part-view-component'>Nome do dono(a): <p className='p-space make-part-view-component'>{data.nomeDoDono}</p></div>
        <div className='info-p-article make-part-view-component'>Telefone de contato: <p className='p-space make-part-view-component'>{data.telefoneDeContato}</p></div>
      </section>
    </article> 
  );
}
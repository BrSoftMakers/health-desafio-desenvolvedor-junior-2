import { useState, useEffect } from 'react';

import iconCloseWindow from '../images/icons8-close-window-50.png';
import iconCloseWindowHover from '../images/icons8-close-window-50-hover.png';
import iconLoading from '../images/icons8-loading.gif';

export default function RegisterPet({ showRegisterPetComponent, setCreated, registerEndpoint }) {
  const [btnCloseWindow, setBtnCloseWindow] = useState(iconCloseWindow);
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petType, setPetType] = useState('Cachorro');
  const [petRace, setPetRace] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState('');
  const [registred, setRegistred] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleClickOutside = event => {
    if (!event.target.classList.contains('make-part-register-pet-component')) {
      showRegisterPetComponent(false);
    }
  };

  const handleInputs = ({ target }) => {
    switch (target.name) {
      case 'petName':
        setPetName(target.value);
        break;
      case 'petAge':
        setPetAge(parseInt(target.value));
        break;
      case 'petType':
        setPetType(target.value);
        break;
      case 'petRace':
        setPetRace(target.value);
        break;
      case 'name':
        setName(target.value);
        break;
      case 'phone':
        setPhone(target.value);
        break;
      default:
        break;
    }
    
    handleBtnDisable();
  };

  const handleBtnDisable = () => {
    const inputs = [petName.length, petRace.length, petType.length, name.length];
    if (inputs.every((value) => value > 0) && typeof petAge === 'number' && petAge > 0
    && petAge < 100 && phone.match(/^\(\d{2}\)\d{5}-\d{4}$/)) setBtnDisabled(false);
    else setBtnDisabled(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    handleBtnDisable();

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <section id='section-register-pet' className='make-part-register-pet-component'>
        <button
          id='btn-close-window-register-pet-component'
          className='make-part-register-pet-component'
          onClick={() => showRegisterPetComponent(false)}
          onMouseEnter={() => setBtnCloseWindow(iconCloseWindowHover)}
          onMouseLeave={() => setBtnCloseWindow(iconCloseWindow)}
        >
          <img src={btnCloseWindow} alt='imagem de um x para fechar janela' />
        </button>
        {registred === '' ? (
          <section className='make-part-register-pet-component'>
            <h2 className='make-part-register-pet-component'>Informe os dados necessarios</h2>
            <form className='make-part-register-pet-component'>
              <label htmlFor='register-name' className='form-register-label make-part-register-pet-component'>
                Digite o nome do dono do pet: <input 
                  type='text'
                  id='register-name'
                  className='register-input-text make-part-register-pet-component'
                  name='name'
                  value={name}
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor='register-phone' className='form-register-label make-part-register-pet-component'>
                Digite o telefone: <input 
                  type='text'
                  placeholder='ex: (00)00000-0000'
                  id='register-phone'
                  className='register-input-text make-part-register-pet-component'
                  name='phone'
                  value={phone}
                  onChange={handleInputs}
                />
              </label>
              <hr/>
              <label htmlFor='register-pet-name' className='form-register-label make-part-register-pet-component'>
                Digite o nome do pet: <input 
                  type='text'
                  id='register-pet-name'
                  className='register-input-text make-part-register-pet-component'
                  value={petName}
                  name='petName'
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor='register-pet-age' className='form-register-label make-part-register-pet-component'>
                Digite a idade do pet: <input 
                  type='number'
                  id='register-pet-age'
                  className='register-input-text make-part-register-pet-component'
                  value={petAge}
                  name='petAge'
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor='register-pet-race' className='form-register-label make-part-register-pet-component'>
                Digite a raça do pet: <input 
                  type='text'
                  id='register-pet-race'
                  className='register-input-text make-part-register-pet-component'
                  name='petRace'
                  value={petRace}
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor='register-pet-type' className='form-register-label make-part-register-pet-component'>
                O pet e um cachorro ou um gato: <select
                  name='petType'
                  value={petType}
                  id='register-pet-type'
                  className='make-part-register-pet-component'
                  checked={true}
                  onChange={handleInputs}
                >
                  <option className='make-part-register-pet-component'>Cachorro</option>
                  <option className='make-part-register-pet-component'>Gato</option>
                </select>
              </label>
            </form>
            <button
              className={btnDisabled 
                ? 'make-part-register-pet-component btn-send-register-component-disabled' 
                : 'make-part-register-pet-component btn-send-register-component'}
              disabled={btnDisabled}
              onClick={() => {
                setRegistred('registering');
                fetch(`http://127.0.0.1:3001/pets-handler/${registerEndpoint}`, {
                  method: registerEndpoint.includes('create') ? 'POST' : 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    nome: petName, 
                    idade: petAge,
                    eGatoOuCachorro: petType, 
                    raca: petRace,
                    nomeDoDono: name, 
                    telefoneDeContato: phone
                  })
                })
                .then((data) => data.json())
                .then((data) => {
                  setData(data);
                  setRegistred(data.registred);
                  setCreated(true);
                });
              }}
            >
              Registrar
            </button>
          </section>
          ) : registred === 'registering' ? (
            <p className='p-feedback-registering make-part-register-pet-component'>
              <img 
                src={iconLoading} 
                alt='gif loading'
                className='make-part-register-pet-component'
                id='img-gif-loading-registering'
              />
            </p>
          ) : registred ? (
            <p className='p-feedback-registering make-part-register-pet-component'>
              {data.message}
            </p>
          ) : (
            <p className='p-feedback-registering make-part-register-pet-component'>
              Não foi possível fazer registro
            </p>
          )}
        </section>
    </>
  );
}
import Select from '../components/form/Select';
import Input from '../components/form/Input';
import { useState, useEffect } from 'react';
import { Button } from '../components/form/Button';
import dados from '../data/dados';
import styles from './PetForm.module.css'

function PetForm({btnText, handleSubmit, petData}) {

  let initialData = petData
  const [formValues, setFormValues] = useState({})


  useEffect(() => {
    setFormValues(initialData || {})
  }, [initialData])
  

  

  const handleInputChange = (e) =>{
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
  }



  const submit = (e) => {
      e.preventDefault()
      handleSubmit(formValues)
  }

  return (
      <form onSubmit={submit} className={styles.form}>
        <Input
          type = "text"
          text = "Nome"
          nome = "name"
          place = "Digite o nome do seu pet"
          value = {formValues.name}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Input
          type = "text"
          text = "Idade"
          nome = "age"
          value = {formValues.age}
          handleOnChange = {handleInputChange}
          required="required"
          place = "Digite a idade do seu pet... ex: 2"
        />
        <Select
          name = "tipo"
          text = "Espécie"
          options = {dados.especies}
          value = {formValues.tipo}
          handleOnChange = {handleInputChange}
          required="required"
        />
        
        <Select
          name = "raca"
          text = "Raça"
          options = {dados.racas(formValues.tipo)}
          value = {formValues.raca}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Input
          type = "text"
          text = "Imagem"
          nome = "imagem"
          value = {formValues.imagem}
          handleOnChange = {handleInputChange}
          required="required"
          place = "Coloque uma imagem do seu pet, coloque somente a URL"
          
        />
        <Input
          type = "text"
          text = "Dono"
          nome = "owner"
          value = {formValues.owner}
          handleOnChange = {handleInputChange}
          required="required"
          place = "Digite seu nome"
        />

        <Input
          type = "tel"
          text = "Telefone"
          nome = "phone"
          value = {formValues.phone }
          handleOnChange = {handleInputChange}
          required="required"
          place = "(DD) 9 9999-9999"
        />

      <Button
        text={btnText}
      />
      </form>
  );
}

export default PetForm;

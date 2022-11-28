import Select from '../components/form/Select';
import Input from '../components/form/Input';
import { useState, useEffect } from 'react';
import { Button } from '../components/form/Button';
import dados from '../data/dados';
import styles from './PetForm.module.css'

function PetForm({btnText, handleSubmit, petData}) {

  let initialData = petData || []
  const [formValues, setFormValues] = useState({})


  useEffect(() => {
    setFormValues(initialData)
  }, [])

  

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
          text = "Nome do pet"
          nome = "name"
          value = {formValues.name}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Input
          type = "text"
          text = "Idade do pet"
          nome = "age"
          value = {formValues.age}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Select
          name = "tipo"
          text = "Espécie do pet"
          options = {dados.especies}
          value = {formValues.tipo}
          handleOnChange = {handleInputChange}
          required="required"
        />
        
        <Select
          name = "raca"
          text = "Raça do pet"
          options = {dados.racas(formValues.tipo)}
          value = {formValues.raca}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Input
          type = "text"
          text = "Imagem do pet"
          nome = "imagem"
          value = {formValues.imagem}
          handleOnChange = {handleInputChange}
          required="required"
        />
        <Input
          type = "text"
          text = "Dono do pet"
          nome = "owner"
          value = {formValues.owner}
          handleOnChange = {handleInputChange}
          required="required"
        />

        <Input
          type = "tel"
          text = "Telefone"
          nome = "phone"
          value = {formValues.phone }
          handleOnChange = {handleInputChange}
          required="required"
        />

      <Button
        text={btnText}
      />
      </form>
  );
}

export default PetForm;

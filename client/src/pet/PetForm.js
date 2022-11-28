import Select from '../components/form/Select';
import Input from '../components/form/Input';
import { useState } from 'react';
import { Button } from '../components/form/Button';
import dados from '../data/dados';
import styles from './PetForm.module.css'

function PetForm({btnText, handleSubmit, petData}) {

  const [formValues, setFormValues] = useState(petData || {})

  console.log(petData)


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
          name = "name"
          value = {formValues.name ? formValues.name : ""}
          handleOnChange = {handleInputChange}
        />
        <Input
          type = "text"
          text = "Idade do pet"
          name = "age"
          value = {formValues.age ? formValues.age : ""}
          handleOnChange = {handleInputChange}
        />
        <Select
          name = "tipo"
          text = "Espécie do pet"
          options = {dados.especies}
          value = {formValues.tipo ? formValues.tipo : ""}
          handleOnChange = {handleInputChange}
        />
        
        <Select
          name = "raca"
          text = "Raça do pet"
          options = {formValues.tipo === "Cachorro" ? dados.racas.dogs : dados.racas.cats}
          value = {formValues.raca ? formValues.raca : ""}
          handleOnChange = {handleInputChange}
        />
        <Input
          type = "text"
          text = "Imagem do pet"
          name = "imagem"
          value = {formValues.imagem ? formValues.imagem : ""}
          handleOnChange = {handleInputChange}
        />
        <Input
          type = "text"
          text = "Dono do pet"
          name = "owner"
          value = {formValues.owner ? formValues.owner : ""}
          handleOnChange = {handleInputChange}
        />

        <Input
          type = "tel"
          text = "Telefone"
          name = "phone"
          value = {formValues.phone ? formValues.phone : ""}
          handleOnChange = {handleInputChange}
        />

      <Button
        text={btnText}
      />
      </form>
  );
}

export default PetForm;

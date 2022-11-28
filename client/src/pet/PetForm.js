import Select from '../components/Select';
import Input from '../components/Input';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import dados from '../data/dados';

function PetProject({btnText, handleSubmit, petData}) {

  const [formValues, setFormValues] = useState(petData || {})
  const [especies, setEspecies] = useState([]);
  const [racas, setRacas] = useState([])


  const handleInputChange = (e) =>{
    const { name, value } = e.target

    setFormValues({...formValues, [name]: value})
  }

  const handleTipo = (e) =>{
    setFormValues({...formValues, tipo: e.target.value})
    atualizaRacas(e.target.value)
  }

  
  useEffect(() => {
    setEspecies(dados.especies)
    
  }, [])

  const atualizaRacas = (tipo) => {
    if(tipo === "Cachorro"){
        setRacas(dados.racas.dogs)
    }
    if(tipo === "Gato"){
        setRacas(dados.racas.cats)
    }
    
  }
  
  const submit = (e) => {
    e.preventDefault()
    console.log(formValues)
    handleSubmit(formValues)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <Input
          type = "text"
          text = "Nome do pet"
          name = "name"
          value = {formValues.name || ""}
          handleOnChange = {handleInputChange}
        />
        <Input
          type = "number"
          text = "Idade do pet"
          name = "age"
          value = {formValues.age || ""}
          handleOnChange = {handleInputChange}
        />
        <Select
          name = "tipo"
          text = "Espécie do pet"
          options = {especies}
          value = {formValues.tipo || ""}
          handleOnChange = {handleTipo}
        />
        
        <Select
          name = "raca"
          text = "Raça do pet"
          options = {racas}
          value = {formValues.raca || ""}
          handleOnChange = {handleInputChange}
        />
        <Input
          type = "text"
          text = "Dono do pet"
          name = "owner"
          value = {formValues.owner || ""}
          handleOnChange = {handleInputChange}
        />

        <Input
          type = "tel"
          text = "Telefone"
          name = "phone"
          pattern = "[0-9]({2}) [0-9]{1} [0-9]{4}-[0-9]{4}"
          value = {formValues.phone || ""}
          handleOnChange = {handleInputChange}
        />

      <Button
        text={btnText}
      />
      </form>

    </div>
  );
}

export default PetProject;

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { create, update } from '../../api/pet';
import { PetContext } from '../../context/PetContext';
import normalizePhone from '../../helpers/normalizePhone';
import petSchema from '../../helpers/petSchema';
import useInput from '../../hooks/useInput';
import Button from '../Button';
import Select from './Select';
import './styles.css';

export default function Form() {
  const {
    petData,
    listPets,
    setPetData,
    defaultData,
    editId,
    setEditId,
  } = useContext(PetContext);

  const { name, age, species, breed, owner, phone } = petData;

  const [
    isSubmitButtonDisabled,
    setIsSubmitButtonDisabled,
  ] = useState(true);

  useEffect(() => {
    setIsSubmitButtonDisabled(
      Boolean(petSchema.validate(petData).error),
    );
  }, [petData]);

  const handleChange = useCallback(
    (event) => {
      const { target } = event;

      if (target.name === 'species') target.value = target.value || null;
      if (target.name === 'phone') target.value = normalizePhone(target.value);

      setPetData({
        ...petData,
        [target.name]: target.value,
      });
    },
    [petData, setPetData],
  );

  const handleAge = useCallback(
    ({ target }) => {
      const re = /^[0-9\b]+$/;

      if (target.value === '') {
        setPetData({
          ...petData,
          age: target.value,
        });
      }

      if (re.test(target.value)) {
        setPetData({
          ...petData,
          age: parseInt(target.value, 10),
        });
      }
    },
    [petData, setPetData],
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (editId === 0) {
        await create(petData);
      } else {
        await update(editId, petData);
        setEditId(0);
      }

      await listPets();

      setPetData(defaultData);
    },
    [defaultData, editId, listPets, petData, setEditId, setPetData],
  );

  const inputs = [
    { id: 'name', value: name, label: 'Nome', onChange: handleChange },
    { id: 'age', value: age, label: 'Idade', onChange: handleAge },
    { id: 'breed', value: breed, label: 'Raça', onChange: handleChange },
    { id: 'owner', value: owner, label: 'Dono(a)', onChange: handleChange },
    { id: 'phone', value: phone, label: 'Telefone', onChange: handleChange },
  ];

  return (
    <form onSubmit={handleSubmit} className="form">
      <Select
        id="species"
        value={species || ''}
        label="Espécie"
        onChange={handleChange}
      />
      {inputs.map(useInput)}
      <Button
        text="Submeter"
        form
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit}
      />
    </form>
  );
}

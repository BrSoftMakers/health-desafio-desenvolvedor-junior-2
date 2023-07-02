import { useFormik } from 'formik';
import { RegisterPetSchema } from '../../service/schema/validation-yup';
import InputCustom from '../../components/Forms/InputCustom';
import http from '../../service/api/http';
import { usePetContext } from '../../context/petContext';
import { Modal } from '../../components/Modal';

export default function RegisterPet() {
  const { setDataPet, setShowModal } = usePetContext();
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      species: '',
      breed: '',
      fullName: '',
      document: '',
      phone: '',
    },
    validationSchema: RegisterPetSchema,
    onSubmit: async (values) => {
      const owner = await http.post('/owners/register', {
        fullName: values.fullName,
        phone: values.phone,
        document: values.document,
      });
      const response = await http.post('/pets', {
        name: values.name,
        age: values.age,
        species: values.species,
        breed: values.breed,
        ownerId: owner?.data.id,
      });

      setDataPet({
        id: response?.data.id,
        name: response?.data.name,
        age: response?.data.age,
        species: response?.data.species,
        breed: response?.data.breed,
        uniqueIndentifier: response?.data.uniqueIndentifier,
        owner: owner?.data?.fullName,
        phone: owner?.data?.phone,
        document: owner?.data?.document,
      });
      setShowModal(true);
      formik.resetForm();
    },
  });

  return (
    <>
      <Modal warning />
      <form
        onSubmit={formik.handleSubmit}
        className="w-[1280px] flex flex-col justify-center mx-auto mt-32"
      >
        <h1 className="text-center text-3xl">Registro de Pet</h1>
        <div className="w-[50%] flex flex-col m-auto gap-3 mb-5">
          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.name}
            htmlFor="name"
            label="Nome do Pet"
            id="name"
            placeholder="Nome"
            error={formik.errors.name}
          />
          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.age}
            htmlFor="age"
            label="Idade do Pet"
            id="age"
            placeholder="Idade"
            error={formik.errors.age}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="species">Espécie do Pet</label>
            <select
              id="species"
              value={formik.values.species}
              onChange={formik.handleChange}
              name="species"
              className="h-full rounded p-2 border border-yellow-400 bg-transparent pl-2 pr-7
               text-gray-800 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm"
            >
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
            {formik.errors.species && (
              <span className="text-red-500">{formik.errors.species}</span>
            )}
          </div>

          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.breed}
            htmlFor="breed"
            label="Raça do Pet"
            id="breed"
            placeholder="Raça"
            error={formik.errors.breed}
          />
          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.fullName}
            htmlFor="fullName"
            label="Nome do dono"
            id="fullName"
            placeholder="Nome completo"
            error={formik.errors.fullName}
          />
          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.document}
            htmlFor="document"
            label="CPF do dono"
            id="document"
            placeholder="CPF"
            error={formik.errors.document}
          />
          <InputCustom
            onChange={formik.handleChange}
            value={formik.values.phone}
            htmlFor="phone"
            label="Telefone para contato"
            id="phone"
            placeholder="Telefone"
            error={formik.errors.phone}
          />
        </div>
        <button
          className="w-80 mx-auto text-white bg-yellow-500 active:bg-yellow-700 
          font-bold uppercase text-sm px-6 py-3 rounded shadow 
          hover:shadow-lg outline-none focus:outline-none"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

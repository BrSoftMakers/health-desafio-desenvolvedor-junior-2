import { useFormik } from 'formik';
import InputCustom from '../../Forms/InputCustom';
import { usePetContext } from '../../../context/petContext';
import http from '../../../service/api/http';

export interface IDataUpdate {
  name: string;
  age: number;
  species: string;
  breed: string;
  uniqueIndentifier: string;
}

interface IFormUpdate {
  dataUpdate?: IDataUpdate;
}

export const FormUpdate = ({ dataUpdate }: IFormUpdate) => {
  const { setShowModal, isUpdateOrDelete, setIsUpdateOrDelete } = usePetContext();
  const formik = useFormik({
    initialValues: {
      name: dataUpdate?.name,
      age: dataUpdate?.age,
      species: dataUpdate?.species,
      breed: dataUpdate?.breed,
      uniqueIndentifier: dataUpdate?.uniqueIndentifier,
    },
    onSubmit: async (values) => {
      const respnse = await http.put(`/pets/${values?.uniqueIndentifier}`, {
        name: values?.name,
        age: values?.age,
        species: values?.species,
        breed: values?.breed,
      });
      setIsUpdateOrDelete(!isUpdateOrDelete);
      if (respnse.status === 200) {
        setShowModal(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="shadow-md rounded px-8 pt-6 pb-8 w-full"
    >
      <div className="flex flex-col m-auto gap-3 mb-5">
        <InputCustom
          onChange={formik.handleChange}
          value={formik.values?.name}
          htmlFor="name"
          label="Nome do Pet"
          id="name"
          placeholder="Nome"
          // error={formik.errors.name}
        />
        <InputCustom
          onChange={formik.handleChange}
          value={formik.values?.age}
          htmlFor="age"
          label="Idade do Pet"
          id="age"
          placeholder="Idade"
          // error={formik.errors.age}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="species">Espécie do Pet</label>
          <select
            id="species"
            value={formik.values?.species}
            onChange={formik.handleChange}
            name="species"
            className="h-full rounded p-2 border border-primary outline-none bg-transparent
               pl-2 pr-7 text-gray-800 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm"
          >
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
          {/* {formik.errors.species && (
            <span className="text-red-500">{formik.errors.species}</span>
          )} */}
        </div>

        <InputCustom
          onChange={formik.handleChange}
          value={formik.values?.breed}
          htmlFor="breed"
          label="Raça do Pet"
          id="breed"
          placeholder="Raça"
          // error={formik.errors.breed}
        />
      </div>
      <div className="w-full flex gap-7 justify-end">
        <button
          className="text-gray-900 border-2
          font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg
           outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </button>
        <button
          className="text-white bg-primary active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

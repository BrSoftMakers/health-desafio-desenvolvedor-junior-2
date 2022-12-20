const yup = require('yup');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
setLocale(pt);



const validateAddUsers = yup.object().shape({
    nome: yup.string().required('O campo Nome é obrigatório!'),
    email: yup.string().email().required('O campo E-mail é obrigatório!'),
    senha: yup.string().required('O campo Senha é obrigatório!').min(6)

});


const validateLogin = yup.object().shape({
    email: yup.string().email().required('E-mail ou senha são obrigatótrios.'),
    senha: yup.string().required('E-mail ou senha são obrigatótrios.')

});


const validateClients = yup.object().shape({
    nome: yup.string().required('O campo Nome é obrigatório!'),
    telefone: yup.string().required('O campo Telefone é obrigatório!')

});


const validatePets = yup.object().shape({
    nome: yup.string().required('O nome do Pet é obrigatório!'),
    cliente_id: yup.number().required('O ID do cliente é obrigatório'),
    idade: yup.number().required('A idade do Pet é obrigatório!'),
    tipo: yup.string().required('O tipo do Pet é obrigatório!'),
    raca: yup.string().required('A raça do Pet é obrigatório!')
});



module.exports = {
    validateAddUsers,
    validateLogin,
    validateClients,
    validatePets
}

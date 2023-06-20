import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'tipoValido', async: true })
export class TipoValido implements ValidatorConstraintInterface {
    validate(tipo: string) {

        return tipo.toLowerCase() === 'cachorro' || tipo.toLowerCase() === 'gato';
    }

    defaultMessage() {
        return 'Somente Cachorro ou Gato';
    }
}

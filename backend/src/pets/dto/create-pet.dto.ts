import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { TipoValido } from '../validador-pet';
export class CreatePetDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @IsString({ message: 'O nome deve ser uma string' })
    nome: string;
    @IsNotEmpty({ message: 'A idade é obrigatória' })
    @IsNumber({}, { message: 'A idade deve ser um número' })
    idade: number;
    @IsNotEmpty({ message: 'A raça é obrigatória' })
    @IsString({ message: 'A raça deve ser uma string' })
    raca: string;
    @IsNotEmpty({ message: 'O tipo é obrigatório' })
    @Validate(TipoValido)
    tipo: string;

}


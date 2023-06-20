import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateAuthDto {
    id?: number;
    @IsNotEmpty({ message: 'Informe um email valido' })
    @IsEmail({}, { message: 'Informe um email valido' })
    email: string;
    @IsNotEmpty({ message: 'Nome nao pode estar vazio' })
    nome: string;
    @IsNotEmpty({ message: 'Senha nao pode estar vazio' })
    @IsString({ message: 'Informe uma senha valida' })
    senha: string;
    @IsNotEmpty({ message: 'Telefone nao pode estar vazio' })
    @IsString({ message: 'Informe um telefone valido' })
    telefone: string;
    createdAt?: Date;
    updatedAt?: Date;
}

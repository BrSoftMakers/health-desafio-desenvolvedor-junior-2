import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginAuthDto {
    @IsNotEmpty({ message: 'Informe um email valido' })
    @IsEmail({}, { message: 'Informe um email valido' })
    email: string;

    @IsNotEmpty({ message: 'Senha nao pode estar vazio' })
    @IsString({ message: 'Informe uma senha valida' })
    senha: string;
}

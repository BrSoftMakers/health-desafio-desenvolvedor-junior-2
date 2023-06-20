import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const BearerId = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1]; // Extrai o token Bearer
        if (token) {
            const jwtService = new JwtService(); // Crie uma instância do JwtService
            const decodedToken: any = jwtService.decode(token); // Decodifique o token JWT

            const id = decodedToken?.id; // Acesse o ID do token
            return id; // Retorne o ID do token
        }
        return null; // Retorne null se não houver token
    },
);

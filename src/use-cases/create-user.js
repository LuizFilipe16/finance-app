import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js';

export class CreateUserUseCase {
    async execute(createUserParams) {
        // TODO: verificar se o e-mail já esta em uso

        // Gerar ID do usuário
        const userId = uuidv4();

        // Criptografar senha
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

        // inserir o usuário no banco de dados
        const user = {
            ...createUserParams,
            id: userId,
            password: hashedPassword,
        };

        //chamar o repositório
        const postgresCreateUserRepository = new PostgresCreateUserRepository();

        const createUser = await postgresCreateUserRepository.execute(user);

        return createUser;
    }
}

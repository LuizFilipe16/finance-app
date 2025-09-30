import bcrypt from 'bcrypt';
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email';
import { EmailAlreadyInUseError } from '../errors/user';
import { PostgresUpdateUserRepository } from '../repositories/postgres/update-user.js';

export class UpdateUserUseCase {
    async execute(userId, updateUserParams) {
        // 1. se o e-mail estiver sendo atualizado, verificar se ele já está em uso

        if (updateUserParams.email) {
            const postgresGetUserByEmailRepository =
                new PostgresGetUserByEmailRepository();

            const userWithProvidedEmail =
                await postgresGetUserByEmailRepository.execute(
                    updateUserParams.email,
                );

            if (userWithProvidedEmail) {
                throw new EmailAlreadyInUseError(updateUserParams.email);
            }
        }

        const user = {
            ...updateUserParams,
        };

        // 2. se a senha estiver sendo atualizada, criptografá-la
        if (updateUserParams.password) {
            const hashedPassword = await bcrypt.hash(
                updateUserParams.password,
                10,
            );

            user.password = hashedPassword;
        }

        // 3. chamar o repository para atualizar o usuário
        const postgresUpdateUserRepository = new PostgresUpdateUserRepository();
        const updateUser = await postgresUpdateUserRepository.execute(
            userId,
            updateUserParams,
        );

        return updateUser;
    }
}

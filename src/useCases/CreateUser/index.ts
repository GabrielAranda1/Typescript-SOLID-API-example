import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'
import { PostGresUsersRepository } from '../../repositories/implementations/PostGresUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostGresUsersRepository()

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailTrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }

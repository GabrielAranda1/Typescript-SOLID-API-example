import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class PostGresUsersRepository implements IUsersRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email)

    if (user === undefined) return null
    else return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}

import { User, Prisma } from "@prisma/client";
import { usersRepository } from "../user-repository";

export class InMemoryUsersRespository implements usersRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    const user = this.items.find(item => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find(item => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date()
    }

    this.items.push(user)

    return user
  }
}
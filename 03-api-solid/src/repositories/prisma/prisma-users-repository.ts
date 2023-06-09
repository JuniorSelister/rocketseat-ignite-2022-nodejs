import { prisma } from "@/lib/prisma";
import { Prisma, User } from '@prisma/client';
import { usersRepository } from "../user-repository";

export class PrismaUsersRepository implements usersRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data
    })

    return user
  }
}
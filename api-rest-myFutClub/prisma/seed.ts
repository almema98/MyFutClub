import { PrismaClient, Prisma } from "../app/generated/prisma"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        role: 'ADMIN',
        name: 'Alejandro',
        surname: 'Medina Manzano',
        email: 'almema98@gmail.com',
        password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
        date: new Date(1998, 5, 3),
        country: 'spain',
        profile_image: 'default.png'
    }
]

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u })
    }
}

main()
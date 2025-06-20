import { PrismaClient, Prisma, Age_group, Role } from "../app/generated/prisma"

const prisma = new PrismaClient()


export async function main() {

    const almemaAdmin = await prisma.user.upsert({
        where: { email: 'jbm@gmail.com' },
        update: {},
        create: {
            role: Role.ADMIN,
            name: 'Alejandro',
            surname: 'Medina Manzano',
            email: 'almema98@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(1998, 5, 3),
            country: 'españa',
            profile_image: 'default.png'
        }
    });

    const jbmCoach = await prisma.user.upsert({
        where: { email: 'jbm@gmail.com' },
        update: {},
        create: {
            role: Role.COACH,
            name: 'Jesus',
            surname: 'Bretones Martínez',
            email: 'jbm@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(1998, 8, 8),
            country: 'españa',
            profile_image: 'avatar-jbm.png'
        }
    });

    const bazaClub = await prisma.club.create({
        data: {
            name: 'Baza CD',
            city: 'baza',
            country: 'españa',
            club_shield: 'baza_escudo.png'
        }
    });

    const benjaminDivision = await prisma.division.create({
        data: {
            age_group: Age_group.BENJAMIN,
            group: 'A'
        }
    })

    const benjaminTeam = await prisma.team.upsert({
        where: { id_team: 1 },
        update: {},
        create: {
            coach: jbmCoach.id_user,
            club: bazaClub.id_club,
            division: benjaminDivision.id_division
        }
    });

    const player1 = await prisma.user.create({
        data: {
            role: Role.PLAYER,
            team: benjaminTeam.id_team,
            name: 'Cristiano',
            surname: 'Ronaldo Aveiro',
            email: 'cpp@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(2010, 1, 8),
            country: 'españa'
        }
    });

    const player2 = await prisma.user.create({
        data: {
            role: Role.PLAYER,
            team: benjaminTeam.id_team,
            name: 'Karim',
            surname: 'Benzema Gomez',
            email: 'kpp@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(2010, 1, 8),
            country: 'españa'
        }
    });

    const player3 = await prisma.user.create({
        data: {
            role: Role.PLAYER,
            team: benjaminTeam.id_team,
            name: 'Jude',
            surname: 'Bellingham Jimenez',
            email: 'jpp@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(2010, 1, 8),
            country: 'españa'
        }
    });

    const player4 = await prisma.user.create({
        data: {
            role: Role.PLAYER,
            team: benjaminTeam.id_team,
            name: 'Kilian',
            surname: 'Mbappe Tortuga',
            email: 'mpp@gmail.com',
            password: '$2a$12$9RKPBYC/vaVrzwE53vyiOOMAtwXoQmAvSRl6IVH7AgnxI9Gglxy4u',
            date: new Date(2010, 1, 8),
            country: 'españa'
        }
    });
}

main()
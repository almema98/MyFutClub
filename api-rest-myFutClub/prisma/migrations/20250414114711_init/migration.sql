-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'COACH', 'PLAYER');

-- CreateEnum
CREATE TYPE "Age_group" AS ENUM ('BENJAMIN', 'ALEVIN', 'CADETE', 'JUVENIL', 'SENIOR');

-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "id_club" INTEGER NOT NULL,
    "id_team" INTEGER NOT NULL,
    "role" "Role" NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "surname" VARCHAR(40) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "country" VARCHAR(20) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "clubs" (
    "id_club" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "country" VARCHAR(20) NOT NULL,
    "club_shield" VARCHAR(200) NOT NULL DEFAULT 'default.png',

    CONSTRAINT "clubs_pkey" PRIMARY KEY ("id_club")
);

-- CreateTable
CREATE TABLE "teams" (
    "id_team" SERIAL NOT NULL,
    "id_club" INTEGER NOT NULL,
    "id_division" INTEGER NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id_team")
);

-- CreateTable
CREATE TABLE "divisions" (
    "id_division" SERIAL NOT NULL,
    "age_group" "Age_group" NOT NULL,
    "group" VARCHAR(1) NOT NULL,

    CONSTRAINT "divisions_pkey" PRIMARY KEY ("id_division")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id_attendance" SERIAL NOT NULL,
    "id_player" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "assisted" BOOLEAN NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id_attendance")
);

-- CreateTable
CREATE TABLE "logs" (
    "id_log" SERIAL NOT NULL,
    "message" VARCHAR(200) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id_log")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_id_club_fkey" FOREIGN KEY ("id_club") REFERENCES "clubs"("id_club") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_id_division_fkey" FOREIGN KEY ("id_division") REFERENCES "divisions"("id_division") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

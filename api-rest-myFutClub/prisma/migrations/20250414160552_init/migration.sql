/*
  Warnings:

  - You are about to drop the column `id_club` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_team_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "id_club",
ALTER COLUMN "id_team" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id_team") ON DELETE SET NULL ON UPDATE CASCADE;

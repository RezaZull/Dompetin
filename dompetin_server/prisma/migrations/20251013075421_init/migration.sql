-- AlterTable
ALTER TABLE "m_user" ADD COLUMN     "confirm_email" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "confirm_phone" BOOLEAN NOT NULL DEFAULT false;

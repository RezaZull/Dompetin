/*
  Warnings:

  - Added the required column `spending_limit` to the `user_setting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "limitPeriod" AS ENUM ('DAILY', 'MONTHLY', 'YEARLY');

-- AlterTable
ALTER TABLE "user_setting" ADD COLUMN     "limit_period" "limitPeriod" NOT NULL DEFAULT 'DAILY',
ADD COLUMN     "spending_limit" BIGINT NOT NULL;

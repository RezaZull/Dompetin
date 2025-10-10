-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENCES', 'TRANSFER');

-- CreateTable
CREATE TABLE "m_user" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "m_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_account" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "balance" BIGINT NOT NULL,
    "account_nummber" INTEGER NOT NULL,
    "id_m_user" BIGINT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "m_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_setting" (
    "id" BIGSERIAL NOT NULL,
    "id_m_user" BIGINT NOT NULL,
    "email_notif" BOOLEAN NOT NULL DEFAULT false,
    "tele_notif" BOOLEAN NOT NULL DEFAULT false,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "user_setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_transaction_category" (
    "id" BIGSERIAL NOT NULL,
    "id_m_user" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "transaction_type" NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "m_transaction_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_transaction" (
    "id" BIGSERIAL NOT NULL,
    "id_m_user" BIGINT NOT NULL,
    "id_m_account" BIGINT NOT NULL,
    "id_m_transaction_category" BIGINT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "transaction_type" NOT NULL,
    "nominal" BIGINT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "t_transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_user_username_key" ON "m_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "m_user_email_key" ON "m_user"("email");

-- AddForeignKey
ALTER TABLE "m_account" ADD CONSTRAINT "m_account_id_m_user_fkey" FOREIGN KEY ("id_m_user") REFERENCES "m_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_setting" ADD CONSTRAINT "user_setting_id_m_user_fkey" FOREIGN KEY ("id_m_user") REFERENCES "m_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_transaction_category" ADD CONSTRAINT "m_transaction_category_id_m_user_fkey" FOREIGN KEY ("id_m_user") REFERENCES "m_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_transaction" ADD CONSTRAINT "t_transaction_id_m_user_fkey" FOREIGN KEY ("id_m_user") REFERENCES "m_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_transaction" ADD CONSTRAINT "t_transaction_id_m_account_fkey" FOREIGN KEY ("id_m_account") REFERENCES "m_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_transaction" ADD CONSTRAINT "t_transaction_id_m_transaction_category_fkey" FOREIGN KEY ("id_m_transaction_category") REFERENCES "m_transaction_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

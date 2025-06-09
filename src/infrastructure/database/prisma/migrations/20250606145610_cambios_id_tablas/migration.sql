/*
  Warnings:

  - The primary key for the `equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_equipment` on the `equipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `guideId` on the `equipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `guide` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_guide` on the `guide` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `step` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_step` on the `step` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `guideId` on the `step` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `equipment` DROP FOREIGN KEY `Equipment_guideId_fkey`;

-- DropForeignKey
ALTER TABLE `step` DROP FOREIGN KEY `Step_guideId_fkey`;

-- DropIndex
DROP INDEX `Equipment_guideId_fkey` ON `equipment`;

-- DropIndex
DROP INDEX `Step_guideId_fkey` ON `step`;

-- AlterTable
ALTER TABLE `equipment` DROP PRIMARY KEY,
    MODIFY `id_equipment` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `guideId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_equipment`);

-- AlterTable
ALTER TABLE `guide` DROP PRIMARY KEY,
    MODIFY `id_guide` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_guide`);

-- AlterTable
ALTER TABLE `step` DROP PRIMARY KEY,
    MODIFY `id_step` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `guideId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_step`);

-- AddForeignKey
ALTER TABLE `Step` ADD CONSTRAINT `Step_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `Guide`(`id_guide`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `Guide`(`id_guide`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Guide` (
    `id_guide` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_guide`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Step` (
    `id_step` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `guideId` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,

    PRIMARY KEY (`id_step`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `id_equipment` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `guideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_equipment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Step` ADD CONSTRAINT `Step_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `Guide`(`id_guide`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `Guide`(`id_guide`) ON DELETE RESTRICT ON UPDATE CASCADE;

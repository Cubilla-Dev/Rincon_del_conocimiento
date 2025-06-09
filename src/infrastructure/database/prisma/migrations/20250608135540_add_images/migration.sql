-- CreateTable
CREATE TABLE `Image` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `guideId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `Guide`(`id_guide`) ON DELETE RESTRICT ON UPDATE CASCADE;

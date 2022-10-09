/*
  Warnings:

  - You are about to drop the `_BookToBookType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToBookType" DROP CONSTRAINT "_BookToBookType_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToBookType" DROP CONSTRAINT "_BookToBookType_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookToBookType";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookToType" ADD CONSTRAINT "BookToType_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookToType" ADD CONSTRAINT "BookToType_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "BookType"("type") ON DELETE RESTRICT ON UPDATE CASCADE;

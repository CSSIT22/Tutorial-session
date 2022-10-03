-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookToType" (
    "bookId" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "BookToType_pkey" PRIMARY KEY ("bookId","typeName")
);

-- CreateTable
CREATE TABLE "BookType" (
    "type" TEXT NOT NULL,

    CONSTRAINT "BookType_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "_BookToBookType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToBookType_AB_unique" ON "_BookToBookType"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToBookType_B_index" ON "_BookToBookType"("B");

-- AddForeignKey
ALTER TABLE "_BookToBookType" ADD CONSTRAINT "_BookToBookType_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBookType" ADD CONSTRAINT "_BookToBookType_B_fkey" FOREIGN KEY ("B") REFERENCES "BookType"("type") ON DELETE CASCADE ON UPDATE CASCADE;

import { Book } from "../types";
import { books } from "../data/books";

export function addBook(book: Book): void {
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

export function listBooks(): void {
  if (books.length === 0) {
    console.log("Belum ada buku dalam koleksi.");
    return;
  }
  console.log("\nDaftar Semua Buku:");
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
  });
}

export function searchBook(title?: string): void {
  if (!title) {
    console.log("\nTidak ada judul yang dicari. Menampilkan semua buku:");
    listBooks();
    return;
  }

  const results = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (results.length === 0) {
    console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
  } else {
    console.log(`\nHasil pencarian untuk "${title}":`);
    results.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
    });
  }
}


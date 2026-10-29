// import{menjalankaNode}from"./menjalankan_node.js";

// console.log(menjalankaNode());
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";



const rl = readline.createInterface({input,output});

const daftar = [
  {
    nama: "teh celup",
    harga: 5000,
  },
  { nama: "Cola-cola", harga: 8000 },
];

console.table(daftar);
let pilih;
do {
  pilih = await rl.question("pilih menu");
  switch (pilih) {
    case "1":
      const nama = await rl.question("nama Produk :");
      if (nama === ""){
        console.log (`isi dulu nama produk!`);
        break;
      }
      let harga = 0;
      while (true) {let harga=number(await rl.question("harga produk :"));
        if (harga===0||harga > 0){
          console.log(`isi dulu harga atau harga tidak boleh minus`);
          break;

        }
        console.log(`harga gagal terimput`)
      }
      daftar.push ({nama,harga});
      console.log (`berhasil bertambah!`);
      break;
      case "2":
        console.table(daftar);
      break;
case "3":
  const cari = await rl.question("ketik yang dicari :");
  let ketemu =0;
  
  break;
  case "4":
    console.log(`dah lah...`);
    break;

    default:
      break;
  }
} while (pilih!=="4");


// import readline from "node:readline";

// // Membuat interface input terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Fungsi untuk bertanya kepada pengguna
// function tanya(pertanyaan) {
//   return new Promise((resolve) => {
//     rl.question(pertanyaan, (jawaban) => {
//       resolve(jawaban.trim());
//     });
//   });
// }

// // Data contoh domain KasirKu (barang toko)
// const dataBarang = [
//   { nama: "Laptop", kategori: "Elektronik", stok: 5, harga: 7500000 },
//   { nama: "Mouse", kategori: "Aksesoris", stok: 12, harga: 150000 },
//   { nama: "Keyboard", kategori: "Aksesoris", stok: 8, harga: 250000 },
// ];

// // Format angka menjadi Rupiah
// function formatRupiah(angka) {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     maximumFractionDigits: 0,
//   }).format(angka);
// }

// // Validasi angka bulat sampai benar
// async function inputAngka(pertanyaan, minimum = 0) {
//   while (true) {
//     const input = await tanya(pertanyaan);
//     const angka = Number(input);

//     if (
//       input !== "" &&
//       Number.isFinite(angka) &&
//       Number.isInteger(angka) &&
//       angka >= minimum
//     ) {
//       return angka;
//     }

//     console.log(
//       `Input tidak valid! Masukkan angka bulat minimal ${minimum}.`
//     );
//   }
// }

// // 1. MENU TAMBAH BARANG
// async function tambahBarang() {
//   console.log("\n===== TAMBAH BARANG =====");

//   const nama = await tanya("Masukkan nama barang: ");

//   if (nama === "") {
//     console.log("Nama barang tidak boleh kosong!");
//     return;
//   }

//   const kategori = await tanya("Masukkan kategori barang: ");

//   if (kategori === "") {
//     console.log("Kategori barang tidak boleh kosong!");
//     return;
//   }

//   const stok = await inputAngka("Masukkan jumlah stok: ", 0);
//   const harga = await inputAngka("Masukkan harga barang (Rp): ", 0);

//   dataBarang.push({
//     nama,
//     kategori,
//     stok,
//     harga,
//   });

//   console.log("\nBarang berhasil ditambahkan!");
//   console.log(`Nama     : ${nama}`);
//   console.log(`Kategori : ${kategori}`);
//   console.log(`Stok     : ${stok}`);
//   console.log(`Harga    : ${formatRupiah(harga)}`);
// }

// // 2. MENU LIHAT BARANG
// function lihatBarang() {
//   console.log("\n===== DAFTAR BARANG =====");

//   if (dataBarang.length === 0) {
//     console.log("Belum ada data barang.");
//     return;
//   }

//   const tabel = dataBarang.map((barang, index) => ({
//     No: index + 1,
//     Nama: barang.nama,
//     Kategori: barang.kategori,
//     Stok: barang.stok,
//     Harga: formatRupiah(barang.harga),
//   }));

//   console.table(tabel);
//   console.log(`Total jenis barang: ${dataBarang.length}`);
// }

// // 3. MENU CARI BARANG
// async function cariBarang() {
//   console.log("\n===== CARI BARANG =====");

//   const kataKunci = (
//     await tanya("Masukkan nama atau kategori barang: ")
//   ).toLowerCase();

//   if (kataKunci === "") {
//     console.log("Kata pencarian tidak boleh kosong!");
//     return;
//   }

//   const hasil = dataBarang.filter((barang) => {
//     return (
//       barang.nama.toLowerCase().includes(kataKunci) ||
//       barang.kategori.toLowerCase().includes(kataKunci)
//     );
//   });

//   if (hasil.length === 0) {
//     console.log("Barang tidak ditemukan.");
//     return;
//   }

//   console.log(`Ditemukan ${hasil.length} barang:`);

//   console.table(
//     hasil.map((barang, index) => ({
//       No: index + 1,
//       Nama: barang.nama,
//       Kategori: barang.kategori,
//       Stok: barang.stok,
//       Harga: formatRupiah(barang.harga),
//     }))
//   );
// }

// // 4. MENU UTAMA: DO-WHILE + SWITCH
// async function main() {
//   let pilihan;

//   do {
//     console.log("\n================================");
//     console.log("       KASIRKU - MENU CLI");
//     console.log("================================");
//     console.log("1. Tambah Barang");
//     console.log("2. Lihat Barang");
//     console.log("3. Cari Barang");
//     console.log("4. Keluar");
//     console.log("================================");

//     pilihan = await tanya("Pilih menu (1-4): ");

//     switch (pilihan) {
//       case "1":
//         await tambahBarang();
//         break;

//       case "2":
//         lihatBarang();
//         break;

//       case "3":
//         await cariBarang();
//         break;

//       case "4":
//         console.log("\nTerima kasih telah menggunakan KasirKu!");
//         break;

//       default:
//         console.log("\nPilihan tidak valid. Masukkan angka 1-4.");
//     }
//   } while (pilihan !== "4");
// }

// // Menjalankan program dan menutup readline dengan aman
// main()
//   .catch((error) => {
//     console.error("Terjadi kesalahan:", error);
//   })
//   .finally(() => {
//     rl.close();
//   });

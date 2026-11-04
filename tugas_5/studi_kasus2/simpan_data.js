
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lokasi penyimpanan
const folderData = path.join(__dirname, "data");
const fileData = path.join(folderData, "makanan.json");

// Membuat folder data jika belum ada
if (!fs.existsSync(folderData)) {
  fs.mkdirSync(folderData);
}

// Array makanan
let daftarMakanan = [
  { id: 1, nama: "Ayam Goreng", kategori: "Makanan", harga: 15000 },
  { id: 2, nama: "Esteh Manis", kategori: "Minuman", harga: 6000 },
  { id: 3, nama: "Ayam Bakar", kategori: "Makanan", harga: 16000 },
  { id: 4, nama: "nasi uduk", kategori: "Makanan", harga: 7000 },
  { id: 5, nama: "Esteh Hangat", kategori: "Minuman", harga: 5000 },
];

// Fungsi menyimpan data
function simpan() {
  fs.writeFileSync(
    fileData,
    JSON.stringify(daftarMakanan, null, 2)
  );

  console.log("Data makanan berhasil disimpan!");
}

// Fungsi memuat data
function muat() {
  try {
    const data = fs.readFileSync(fileData, "utf8");
    daftarMakanan = JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      daftarMakanan = [];
      simpan();
    } else {
      throw error;
    }
  }
}

// Muat data saat program dimulai
muat();

// Fungsi tambah makanan
function tambahMakanan(nama, kategori, harga) {
  const makananBaru = {
    id: daftarMakanan.length
      ? Math.max(...daftarMakanan.map(item => item.id)) + 1
      : 1,
    nama,
    kategori,
    harga
  };

  daftarMakanan.push(makananBaru);

  simpan();

  console.log("Makanan berhasil ditambahkan!");
}

// Tampilkan data
console.table(daftarMakanan);

// Contoh menambahkan makanan baru
tambahMakanan("Nasi Goreng", "Makanan", 12000);

console.table(daftarMakanan);

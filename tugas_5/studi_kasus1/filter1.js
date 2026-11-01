const daftarMakanan = [
  { id: 1, nama: "Ayam Goreng", kategori: "Makanan", harga: 15000 },
  { id: 2, nama: "Esteh Manis", kategori: "Minuman", harga: 6000 },
  { id: 3, nama: "Ayam Bakar", kategori: "Makanan", harga: 16000 },
  { id: 4, nama: "nasi uduk", kategori: "Makanan", harga: 7000 },
  { id: 5, nama: "Esteh Hangat", kategori: "Minuman", harga: 5000 },
];

// Fungsi untuk menyaring barang
function saring(kategori) {
  const hasil = daftarMakanan.filter((barang) => barang.kategori === kategori);

  if (hasil.length === 0) {
    console.log("Tidak ditemukan");
  } else {
    console.table(hasil);
  }
}

// Menjalankan fungsi
saring("Makanan");

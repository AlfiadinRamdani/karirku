
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const daftarMakanan = [
  { id: 1, nama: "Ayam Goreng", kategori: "Makanan", harga: 15000 },
  { id: 2, nama: "Esteh Manis", kategori: "Minuman", harga: 6000 },
  { id: 3, nama: "Ayam Bakar", kategori: "Makanan", harga: 16000 },
  { id: 4, nama: "nasi uduk", kategori: "Makanan", harga: 7000 },
  { id: 5, nama: "Esteh Hangat", kategori: "Minuman", harga: 5000 },
];

// Fungsi input
function tanya(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, resolve);
  });
}

// Validasi harga
function validasiHarga(input) {
  if (input.trim() === "") {
    throw new Error("Harga tidak boleh kosong!");
  }

  const harga = Number(input);

  if (!Number.isFinite(harga)) {
    throw new Error("Harga harus berupa angka!");
  }

  return harga;
}

// Tampilkan daftar makanan
function tampilkanMakanan() {
  console.table(daftarMakanan);
}

// Tambah makanan
async function tambahMakanan() {
  try {
    const nama = await tanya("Masukkan nama makanan: ");
    const kategori = await tanya("Masukkan kategori: ");
    const inputHarga = await tanya("Masukkan harga: ");

    const harga = validasiHarga(inputHarga);

    daftarMakanan.push({
      id: daftarMakanan.length + 1,
      nama,
      kategori,
      harga
    });

    console.log("Makanan berhasil ditambahkan!");
  } catch (error) {
    console.log("Terjadi kesalahan:", error.message);
  }
}

// Menu utama
async function tampilkanMenu() {
  let pilihan;

  do {
    console.log("\n===== MENU MAKANAN =====");
    console.log("1. Tampilkan makanan");
    console.log("2. Tambah makanan");
    console.log("3. Keluar");

    pilihan = await tanya("Pilih menu: ");

    switch (pilihan) {
      case "1":
        tampilkanMakanan();
        break;

      case "2":
        await tambahMakanan();
        break;

      case "3":
        console.log("Program selesai.");
        rl.close();
        return;

      default:
        console.log("Pilihan tidak tersedia!");
    }

  } while (true);
}

tampilkanMenu();

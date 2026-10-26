const daftarProduk = [
  {
    id: 1,
    nama: "laptop asus",
    harga: 6000000,
    stok: 20,
  },
  {
    id: 2,
    nama: "keybord",
    harga: 250000,
    stok: 15,
  },
  {
    id: 3,
    nama: "mouse",
    harga: 30000,
    stok: 25,
  },
];
console.log(daftarProduk);
const total = 150000;
let diskon = 0;

if (total >= 150000) {
  diskon = total * 0.1;
} else if (total >= 150000) {
  diskon = total * 0.05;
} else {
  diskon = 0;
}
console.log(diskon);

function metodeBayar(metode) {
  let biayaAdmin = 0;

  switch (metode) {
    case "cash":
      biayaAdmin = 0;
      break;
    case "transfer":
      biayaAdmin = 3000;
      break;
    case "qris":
      biayaAdmin = 2500;
      break;
    default:
      biayaAdmin = `biaya admin tidak ditemukan`;
  }
  return biayaAdmin;
}
console.log(
  `biaya admin ${metodeBayar("transfer")} dengan metode bayar adalah transfer`,
);
let totalHarga = 0;
for (const produk of daftarProduk) {
  totalHarga += produk.harga * produk.stok;
}
console.log(totalHarga);

console.log("tesss");
console.log("pusing");
const namaProduk = "minyak Goreng sania 2liter";
const hargaSatuan = 18500;
const jumlahBeli = 2;

console.log(
  `nama produk adalah :${namaProduk}Total adalah : ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")}`,
);

const produkWarung = {
  id: 1,
  nama: "pecel lele",
  kategori: "makanan",
  hargaBeli: 9000,
  hargaJual: 14000,
  stok: 15,
  batasMin: 5,
};
console.log(`ID PRODUK : SKU -${produkWarung.id}
    nama Produk : ${produkWarung.nama}
    Katagori : ${produkWarung.kategori}
    harga Beli : ${produkWarung.hargaBeli.toLocaleString("id-ID")}
    harga Jual : ${produkWarung.hargaJual.toLocaleString("id-ID")}
    stock : ${produkWarung.stok}`);
console.log(`
        status: ${produkWarung.stok < produkWarung.batasMin ? "restok" : "tersedia"}
        `);
        //----------looping
// const daftarProduk = [
//   {
//     nama: "telor",
//     harga: 25000,
//     stock: 15,
//   },
//   { nama: "Telor", harga: 25000, stok: 15 },
//   { nama: "minyak", harga: 39000, stok: 45 },
//   { nama: "beras", harga: 14500, stok: 25 },
// ];
// for (const produk of daftarProduk) {
//   console.log(`nama Produk ${produk.nama},
//         harga: ${produk.harga}
//        sotk : ${produk.stok} `);
// }
// console.log(daftarProduk[2]);

//---------------function---------------
function hargaMargin (hargaJual,hargaBeli){
    return hargaJual-hargaBeli;
}
function formatRupiah(angka){
    return `Rp.${angka.toLocaleString("id-ID")}`;
}
const produk ={
    nama: "nasi uduk",
    hargaJual:25000,
    hargaBeli: 10000,
}
console.log(hargaMargin(15000,5000));
console.log(formatRupiah(produk.hargaJual));
console.log(formatRupiah(produk.hargaBeli));

 console.log('LAPORAN HARIAN POS : TOKO Berkah Warung (kasirku)');
 console.log('Kasir Bertugas : Mak sri');

 const daftarProduk = [
 
  { nama: "minyak Goreng Sania 2L", hargaJual: 25000,hargaBeli:5000, stok: 15,batasMin:15 },
  { nama: "gula", hargaJual: 39000, hargaBeli: 30000, stok: 45 ,batasMin:20},
  { nama: "beras Ramos 5kg", hargaJual: 14500,hargaBeli: 10000, stok: 25,batasMin:10, },
];
let totalAsetToko = 0;
for (const produk of daftarProduk) {
totalAsetToko += produk.hargaJual * produk.stok ;

  console.log(`nama Produk ${produk.nama} margin : ${hargaMargin(produk.hargaJual,produk.hargaBeli)}
        harga: ${produk.hargaJual}
       sotk : ${produk.stok} status: ${produk.stok <= produk.batasMin ? "restok" : "tersedia"} `);
}
console.log(`total estimasi aset toko:${totalAsetToko}`);
console.log(`barang butuh perhatian : ${daftarProduk.filter((produk) => produk.stok < 20).length}`)        
        

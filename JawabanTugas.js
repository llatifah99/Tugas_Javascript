//Tugas Intro no 1
console.log ("Nama: Lita Latifah Oktaviany")
console.log ("Asal Daerah: Lamongan")
console.log ("Tanggal Lahir: 1 Oktober 2000")
console.log ("Umur: 23 tahun")
console.log ("Pekerjaan: Jobseeker")

//Tugas intro no 2
prompt("Masukkan Nama Anda:")
prompt("Asal Negara:")
confirm("Apakah data yang diisi sudah benar?")
alert("Terima Kasih sudah mengisi form")

//Tugas intro no 3
//nama
console.log ("Nama: Lita Latifah Oktaviany")
//asal daerah
console.log ("Asal Daerah: Lamongan")
console.log ("Tanggal Lahir: 1 Oktober 2000")
console.log ("Umur: 23 tahun")
console.log ("Pekerjaan: Jobseeker")

//Tugas intro no 4
prompt("Masukkan Nama Anda:")
prompt("Asal Negara:")
/*confirm("Apakah data yang diisi sudah benar?")
alert("Terima Kasih sudah mengisi form")*/

//Tugas intro no 5
let nama ="Lita",
asalDaerah ="Lamongan",
tanggalLahir ="1 Oktober 2000",
umur=23,
pekerjaan ="jobseeker";

console.log(nama, asalDaerah,tanggalLahir,umur,pekerjaan)

//Tugas intro no 6 
let operasiPenjumlahan = 25+10
let operasiPerkalian=100*2
let operasiPembagian=99/2
let operasiModulus=99%2
console.log("25 + 10 =",operasiPenjumlahan)
console.log("100 * 2 = ",operasiPerkalian)
console.log("99 / 2 = ",operasiPembagian)
console.log("99 % 2 =",operasiModulus)

//Tugas conditional no 1
let divisi ="CEO"
if (divisi === "CTO")
{
  console.log("Tugas CTO : menyatukan pengembangan produk")
}
else if (divisi === "CFO")
{
  console.log("Tugas CFO : membentuk strategi penggalangan dana")
}
else if  (divisi === "CMO")
{
console.log("Tugas CMO: mengembangkan strategi pemasaran")
}
else{
console.log("Maaf Divisi yang anda masukkan tidak tersedia")
}

//Tugas conditional no 2
let a = 10
let b = 10
if (a == b)
{
    console.log(a + " sama dengan " + b)
}
else if (a < b)
{
    console.log(a + " kurang dari " + b)
}
else if (a > b)
{
    console.log(a + " lebih dari " + b)
}

//Tugas conditional no 3 
let angka = 1

switch (angka) {
    case 1:
        console.log("Hari ini adalah hari Minggu.");
        break;
    case 2:
        console.log("Hari ini adalah hari Senin.");
        break;
    case 3:
        console.log("Hari ini adalah hari Selasa.");
        break;
    case 4:
        console.log("Hari ini adalah hari Rabu.");
        break;
    case 5:
        console.log("Hari ini adalah hari Kamis.");
        break;
    case 6:
        console.log("Hari ini adalah hari Jumat.");
        break;
    case 7:
        console.log("Hari ini adalah hari Sabtu.");
        break;
    default:
        console.log("Angka yang anda masukkan salah.");
}

//Tugas conditional no 4
let button = "UP"
switch (button) {
    case "UP" :
        console.log("Karakter berjalan ke atas");
        break;
    case "BOTTOM":
        console.log("Karakter berjalan ke bawah");
        break;
    case "RIGHT":
        console.log("Karakter berjalan ke kanan");
        break;
    case "LEFT":
        console.log("Karakter berjalan ke kiri");
        break;
    default:
        console.log("Karakter diam");
}
//Tugas looping no 1
for (let i= 1; i<=100; i++){
    console.log('user ke-' + i)
}

//Tugas looping no 2
let nilai=0
for(let i=0;i<10;i++){
    nilai+=2;
    console.log(nilai)
}

//Tugas looping no 3
for (let i=0; i <=20; i++){
    if (i%2==0)
    {
        console.log(i +" adalah bilangan Genap")
    }
    else
    {
        console.log(i+ " adalah bilangan Ganjil")
    }
}

//Tugas looping no 5
let jawaban = ""; const jawabanBenar = "Impact Byte"; 
while (jawaban !== jawabanBenar) {
    jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");    
    if (jawaban === jawabanBenar) 
    {
        alert("Selamat jawaban kamu benar!");
    } 
    else 
    {
        alert("Maaf, jawaban kamu salah. Silakan coba lagi.");   
    } 
}





//Function no 1
const ucapan = (pembeli,barang) => 
{
    return console.log("Terima kasih " + pembeli +" telah membeli produk "+ barang);
}
ucapan('Lita','Tas rajut')

//Function no 2
//celcius ke farenheit
//fungsi kali 9/5
const kali9per5 = (nilai) => {return 9/5*nilai;}
//fungsi hitung farenheit 
const hitungFarenheit = (inputSuhu = 1) => {return console.log(kali9per5(inputSuhu)+32+' F');}
hitungFarenheit(0)// masukkan nilai celcius yang ingin diubah ke farenheit

//farenheit ke celcius 
//fungsi pengurangan 32
const kurang32 = (nilai) => {return nilai-32;}
//fungsi hitung celcius 
const hitungCelcius =(inputSuhu = 1) => {return console.log(kurang32(inputSuhu)*5/9 + ' C');}
hitungCelcius(0) //masukkan nilai farenheit yang ingin diubah ke celcius

//function no 3
const hitungUmurKucing = (umurKucing) => 
{
    if(umurKucing==1){return 15;}
    else if(umurKucing==2){return 24;}
    else if (umurKucing>2){return 24 + ((umurKucing-2)*4);}
}
const inputUmur = 6; // <--- masukkan umur kucing di sini
const hasil = hitungUmurKucing(inputUmur) ;
console.log(inputUmur +' tahun umur kucing sama dengan ' + hasil +' tahun umur manusia')

//Tugas Function no 4
const ubahFormatLowerCaseManual = (inputString) => {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const currentCharCode = inputString.charCodeAt(i);

        // Memeriksa apakah karakter merupakan huruf besar (kode ASCII antara 65 dan 90)
        if (currentCharCode >= 65 && currentCharCode <= 90) {
            // Mengubah huruf besar menjadi huruf kecil dengan menambahkan selisih 32 ke kode ASCII
            result += String.fromCharCode(currentCharCode + 32);
        } else {
            // Menambahkan karakter tanpa perubahan jika bukan huruf besar
            result += inputString[i];
        }
    }

    return result;
};

// Contoh penggunaan fungsi
const stringInput = "LITA LATIFAH OKTAVIANY";
const stringLowerCaseManual = ubahFormatLowerCaseManual(stringInput);

console.log(stringLowerCaseManual);
// string 
// no 1
function is_Blank(str) {
  return !str.trim();
}

console.log(is_Blank(''));// Output: true
console.log(is_Blank('abc'));//Output: false

//no 2
function truncate_string(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }
  console.log(truncate_string("Terra Skilvul", 5));
  // Output: "Terra"

//no 3
function firstNameOnly(fullName) {
    // pisahkan full name ke dalam array
    const nameParts = fullName.split(" ");
  
    // Cek apa ada > 1 bagian 
    if (nameParts.length > 1) {
      return nameParts[0] + " " + nameParts[1].charAt(0) + ".";
    } else {
      return fullName;
    }
  }
console.log(firstNameOnly("David Winalda"));
//Output: David W.
  
// no 4
function capitalize() {
    let string = 'javascript adalah sebuah bahasa pemrograman yang sangat powerful';
    console.log(string.charAt(0).toUpperCase() +
        string.slice(1));
}
capitalize()
//Output Javascript adalah sebuah bahasa pemrograman yang sangat powerful

//no 5
function text_truncate(str, length = 100, ending = '...') {
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }
  console.log(text_truncate('We are doing JS string exercises.'));
  // Output: We are doing JS string exercises.
  console.log(text_truncate('We are doing JS string exercises.', 19));
  // Output: We are doing JS ...
  console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
  // Output: We are doing !!

  //Math 
  //no 1
  function rand(min, max) {
    // Jika nilai min dan max adalah null, kembalikan 0
    if (min == null && max == null) {
        return 0;
    }

    // Jika nilai max adalah null, jadikan nilai min menjadi 0 dan max mengambil nilai dari min
    if (max == null) {
        max = min;
        min = 0;
    }

    // Menggunakan Math.random() untuk menghasilkan nilai acak antara 0 dan 1
    // Kemudian, diubah menjadi rentang yang diinginkan dengan rumus (Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rand(20, 1));  // Output: nilai acak antara 1 dan 20
console.log(rand(1, 10));   // Output: nilai acak antara 1 dan 10
console.log(rand(6));       // Output: nilai acak antara 0 dan 6
console.log(rand());        // Output: 0 karena nilai min dan max adalah null

  //no 2 
  function chooseDecimals(n, d) {
    // Memastikan bahwa n adalah tipe data number
    if (typeof n !== 'number') {
        return 'Input n harus berupa angka';
    }
    // Memastikan bahwa d adalah tipe data number dan tidak negatif
    if (typeof d !== 'number' || d < 0) {
        return 'Input d harus berupa angka non-negatif';
    }
    // Menggunakan metode toFixed() untuk memformat desimal sesuai dengan nilai d
    return n.toFixed(d);
}
console.log(chooseDecimals(2.100212, 2)); // Output: 2.10
console.log(chooseDecimals(2.100212, 3)); // Output: 2.100
console.log(chooseDecimals(2100, 2)); // Output: 2100.00

  //no 3
  function isItNumeric(input) {
    //The parseFloat() method parses a value as a string and returns the first number.
    //isFinite() digunakan untuk memastikan bahwa hasilnya adalah nilai yang terbatas atau tidak menghasilkan nilai Infinity atau NaN.  
    return !isNaN(parseFloat(input)) && isFinite(input);
    
}
console.log(isItNumeric(12));       // Output: true
console.log(isItNumeric('abcd'));   // Output: false
console.log(isItNumeric('12'));     // Output: true
console.log(isItNumeric(' '));      // Output: false
console.log(isItNumeric(1.20));     // Output: true
console.log(isItNumeric(-200));     // Output: true

  //no 4
  function roundUpToFive(nilai) {
    // Memastikan bahwa input adalah tipe data integer
    if (!Number.isInteger(nilai)) {
        return 'Input harus berupa bilangan bulat';
    }
    // Menghitung sisa pembagian dengan 5
    const sisa = nilai % 5;
    // Jika sisa tidak nol, maka membulatkan ke atas ke kelipatan 5 berikutnya
    if (sisa !== 0) {
        return nilai + (5 - sisa);
    }
    // Jika sisa nol dikembalikan nilai inputannya
    else{
        return nilai;
    }
}
console.log(roundUpToFive(32)); // Output: 35
console.log(roundUpToFive(137));// Output: 140
console.log(roundUpToFive(142));// Output: 145
console.log(roundUpToFive(50));// Output:50


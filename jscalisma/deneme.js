//! EKMEK , PASTA , BÖREK  DEĞERLERİNİ TUTAN 3 FARKLI DEĞİŞKEN TANIMLA VE HEPSİNİN İLK ÜÇ HARFİNİ KESİP SONUCU TEK BİR DEĞİŞKENDE VE BÜYÜK HARFLE  GÖSTER

let a = "Ekmek".slice(0, 3).toUpperCase();
let b = "Pasta".slice(0, 3).toUpperCase();
let c = "Börek".slice(0, 3).toUpperCase();

let sonuc = `${a} , ${b} , ${c}`;
console.log(sonuc);

// ! SAYI DEĞİŞKENİ TANIMLA if-else ile girilen sayısının tek mi çiftmi olduğunu yazdır eğer girilen sayının tipi number değilse hata mesajı ver

let num = true;

if (typeof num == "number") {
  if (num % 2 == 0) {
    console.log("Girilen sayı çift");
  } else if (num % 2 != 0) {
    console.log("Girilen sayı tek");
  }
} else {
  console.log("Lütfen bir sayı giriniz");
}

//! Sayı şeklinde bir week_day tanımla switch-case ile girilen sayının hangi aya denk geldiğini yazdır
let week_day = 32;
switch (week_day) {
  case 1:
    console.log("Ocak");
    break;
  case 2:
    console.log("Şubat");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Nisan");
    break;
  case 5:
    console.log("Mayıs");
    break;
  case 6:
    console.log("Haziran");
    break;
  case 7:
    console.log("Temmuz");
    break;
  case 8:
    console.log("Ağustos");
    break;
  case 9:
    console.log("Eylül");
    break;
  case 10:
    console.log("Ekim");
    break;
  case 11:
    console.log("Kasım");
    break;
  case 12:
    console.log("Aralık");
    break;
  default:
    console.log("Lütfen geçerli bir ay numarası giriniz (1-12 arası)");
}

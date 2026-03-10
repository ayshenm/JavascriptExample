//day 3 task

1; //Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

// let b = prompt("ucgenin taban qiymetini daxil ele");
// let h = prompt("ucgenin yukseyliyi qiymetini daxil ele");

// let area = Number(0.5 * b * h);
// console.log(`taban ${b}, yukseyliy ${h} area ${area}`);

2; //Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

// let a = Number(prompt("a kenarini daxil edin"));
// let b = Number(prompt("b kenarini daxil edin"));
// let c = Number(prompt("c kenarini daxil edin"));

// let p = a + b + c;

// console.log(typeof p);
// console.log(`The perimeter of the triangle is  ${p}`);

3; //Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))

// let w = Number(prompt("width  daxil edin"));
// let h = Number(prompt("height  daxil edin"));

// let p = 2 * (w + h);
// console.log(p);

4; //Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.

//dairenin sahe dusturu s= pi * r *r; pi = 3.14

// let r = Number(prompt("radiusu daxil edin"));
// let pi = 3.14;

// let area = pi * r * r; //sahe
// let cevre = 2 * pi * r; //cevre

// console.log(`dairenin sahesi ${area}`);
// console.log(`dairenin cevresi ${cevre.toFixed(2)}`);

5; //Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

// let isSaati = Number(prompt("saati daxil edin"));
// let saatBasinaOdenilenMebleg = Number(prompt("meblegi daxil edin"));

// let salary = isSaati * saatBasinaOdenilenMebleg;

// console.log(`adamin maasi ${salary} azn`);

6; //Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.

// let a = "Ayisham";
// let adiAl = prompt("adini daxil ele");
// if (adiAl.length >= 7) {
//   console.log("adim uzundur");
// } else {
//   console.log("adim qisadir");
// }

7; //Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

// let myName = "Ayshen";
// let surName = "Mirzayeva";
// let myName = prompt("adini daxil ele");
// let surName = prompt("soyadini daxil ele");
// let myNameLength = myName.length;
// let mySurnameLength = surName.length;

// if (myNameLength > mySurnameLength) {
//   console.log(`adiniz ${myName} soyadinizdan uzundur`);
// } else if (myNameLength < mySurnameLength) {
//   console.log(`soyadiniz ${surName} adinizdan  uzundur`);
// } else {
//   console.log(`ad ve soyadiniz herf sayi eynidir`);
// }

8; //İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.

// let birthdayYear = Number(prompt("dogum tarixini daxil edin"));

// let d = new Date();
// let fullYear = d.getFullYear();
// console.log(fullYear);

// let currentAge = fullYear - birthdayYear;

// console.log(currentAge);

// currentAge >= 18;
//   ? console.log("suruculuy vesiqesi ala bilersen")
//   : console.log("suruculuy vesiqesi ala bilmersen");

// if (currentAge >= 18) {
//   console.log(` senin ${currentAge} yasin var suruculuy vesiqesi ala bilersen`);
// } else {
//   console.log(`senin ${currentAge} yasin var suruculuy vesiqesi ala bilmersen`);
// }

9; //Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

// let YearNumber = Number(prompt("gebermemey ucun nece yas olsun"));
// let age = 30;
// let second = age * 365 * 24 * 60 * 60;
// console.log(
//   `${YearNumber} il üçün təxminən yaşayacağınız saniyə sayı: ${second}`,
// );

10; //Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun

// let now = new Date(); // indiki tarix və saat

// // YYYY-MM-DD HH:mm
// let il = now.getFullYear();
// let ay = String(now.getMonth() + 1).padStart(2, '0'); // aylar 0-dan başlayır
// let gun = String(now.getDate()).padStart(2, '0');
// let saat = String(now.getHours()).padStart(2, '0');
// let deqiqe = String(now.getMinutes()).padStart(2, '0');

// let format1 = `${il}-${ay}-${gun} ${saat}:${deqiqe}`;
// console.log("YYYY-MM-DD HH:mm :", format1);

// // DD-MM-YYYY HH:mm
// let format2 = `${gun}-${ay}-${il} ${saat}:${deqiqe}`;
// console.log("DD-MM-YYYY HH:mm :", format2);

// // DD/MM/YYYY HH:mm
// let format3 = `${gun}/${ay}/${il} ${saat}:${deqiqe}`;
// console.log("DD/MM/YYYY HH:mm :", format3);

11; //Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)

// let now = new Date(); // indiki tarix və saat

// let il = now.getFullYear();
// let ay = String(now.getMonth() + 1).padStart(2, "0"); // aylar 0-dan başlayır
// let gun = String(now.getDate()).padStart(2, "0");
// let saat = String(now.getHours()).padStart(2, "0");
// let deqiqe = String(now.getMinutes()).padStart(2, "0");

// let format1 = `${gun}:${ay}:${il} ${saat}:${deqiqe}`;
// console.log(format1);

//sert operatorlari
//1.Öğrencilere puanlarına göre not verebilecek bir kod yazın:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let score = Number(prompt("balini yaz"));

// if(score >= 80 ){
//     console.log("ela")
// }else if(score >= 70){
//     console.log("yaxsi");

// }else if(score >= 60){
//     console.log("qenaetbexs")
// }else if(score >= 50){
//     console.log("kafi")
// }else{
//     console.log("pis")
// }

// 2.Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :

// Eylül, Ekim veya Kasım, mevsim sonbahardır.
// Aralık, Ocak veya Şubat, mevsim kıştır.
// Mart, Nisan veya Mayıs mevsimi bahardır
// Haziran, Temmuz veya Ağustos, mevsim yazdır

// let ay = prompt("Ayi daxil edin");

// switch (ay) {
//   case "Eylul":
//   case "Ekim":
//   case "Kasim":
//     console.log("sonbahar");
//     break;

//   case "Aralık":
//   case "Ocak":
//   case "Şubat":
//     console.log("kis");
//     break;

//   case "Mart":
//   case "Nisan":
//   case "Mayıs":
//     console.log("bahar");
//     break;

//   case "Haziran":
//   case "Temmuz":
//   case "Ağustos":
//     console.log("yaz");
//     break;

//   default:
//     console.log("Yanlis ay daxil edildi");
// }

//3.Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

// let hansiGun = prompt("bu gun hansi gundur?");
// hansiGun = hansiGun.toLowerCase();

// if (hansiGun === "saturday" || hansiGun === "sunday") {
//   console.log("istirahet gunudur");
// } else {
//   console.log("is gunudur");
// }

//4.Bir aydaki gün sayısını söyleyen bir program yazın.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.


// let ay = prompt("Enter a month:");
// let ayLower = ay.toLowerCase();

// switch (ayLower) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log(`${ay} has 31 days`);
//     break;

//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log(`${ay} has 30 days`);
//     break;

//   case "february":
//     console.log(`${ay} has 28 days`);
//     break;

//   default:
//     console.log("Yanlış ay daxil edildi");
// }
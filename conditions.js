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


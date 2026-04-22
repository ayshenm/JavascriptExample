//array

//Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın.
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(".").join("").split(",").join("");
console.log(words);
let arrayWords = words.split(' ');
console.log(arrayWords,arrayWords.length);

//2 Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
let shopUnshift = shoppingCart.unshift("Meat");
console.log(shoppingCart);
let shopPush = shoppingCart.push("Sugar");
console.log(shoppingCart);
let shopHoneyIndex = shoppingCart.indexOf('Honey');
if (shopHoneyIndex !== -1) {
  shoppingCart.splice(shopHoneyIndex, 1); // 1 element sil
}

console.log(shoppingCart);

let teaIndex = shoppingCart.indexOf('Tea');
console.log(teaIndex);
 shoppingCart[teaIndex] = 'Green Tea';
 console.log(shoppingCart);

//Aşağıdaki dizide 10 öğrencinin yaşı vardır:

const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
let sortAges = ages.sort((a,b) => a-b);//yanliz sort yazmaq ancaq stringlerde duz netice qaytarir biz num larda bele etmeliyik
console.log(ages);

let norepaetAges = [];

for (let i = 0; i< ages.length; i++){
    if(!norepaetAges.includes(ages[i])){
        norepaetAges.push(ages[i]);
    }
}

console.log(norepaetAges);

let minage = Math.min(...norepaetAges);
console.log(minage);
let maxage = Math.max(...norepaetAges);
console.log(maxage)


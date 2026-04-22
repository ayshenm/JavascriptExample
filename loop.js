//loop
// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// 0 1 2 3 4 5

//do while loop do while döngüsü
//do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// 0 1 2 3 4 5

//1.while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;

// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

//2.0'dan n' e kadar giden bir for döngüsü kurun

// let n = 20;
// for (let i = n; i >= 0; i--) {
//   console.log(i);
// }

//3/Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.

    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######
// for(let i = 1; i<=7;i++){
//     let str = "";
//     for(let j = 1; j<=i; j++ ){
//         str += "*"
//     }
//     console.log(str)
// }
//diger variant

// let str = "";
// for (let i = 1; i <= 7; i++) {
//     str += "#";
//     console.log(str);
// }

//3Aşağıdaki çıktıyı almak için bir döngü kurun:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(let i = 0; i<=10; i++){
//     let res = i * i;
//     console.log(`${i} x ${i} = ${res}`)
// }

//4.Aşağıdaki çıktıyı almak için bir döngü kurun:

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// for(let i = 0 ; i<=10; i++){
//     let two = i * i;
//     let cube = i * i * i
//     console.log(`${i} ${two} ${cube} `)
// }

//5.0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.

// for(let i = 0; i<=100; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }


//6.0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın.

// for(let i = 0; i<=100; i++){
//     if(i %  2 !==0 ){
//         console.log(i);
//     }
// }

//7.0'dan 100'e kadar olan asal sayıları(1 ve ozune bolunen) bir döngü yardımı ile ekrana yazdırın

for(let i = 0; i<=100; i++){
    let prime = true;
    // 2'den i-1'e kadar olan sayılarla bölünebilir mi kontrol et
   for(let j =2; j<i;j++){
    if(i % j === 0){
        prime = false;
        console.log(`asal deyil ${i}`)
        break;
    }
   }
   if(prime){
    console.log(`asaldir ${i}`)
   }
}
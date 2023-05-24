/**
 * const,let当の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2　= "let変数";
// console.log(val2);

// //letは上書きが可能

// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 ={
//   name:"山田颯太",
//   age:23,
// };
// val4.name="山田竜太郎";
// val4.addres="Tokyo"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("monky");
// console.log(val5);

//殆どの開発環境ではconst変数を使う
//react上で動的に値が変わる場合はstate変数を使う
//処理の中で上書きが必要な物はlet変数を使用する

/**
 *テンプレート文字列
 */

// const name ="山田颯太";
// const age = "23";
//「私の名前は山田颯太です。年齢は23歳です」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//  return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数(=>)
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

//アロー関数の特徴
//①'(str)'を'str'にすることも可能
// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));

//②returnを省略可能
//　⇒{}内の処理が1行だけであれば省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

//functionを利用した計算式の書き方
// const func3 = (num1,num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ヤマダソウタ",
//   age: 23,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name,age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile =['山田',23];

// const message3 =`名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] =myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
//  */
// const sayHello = (name ="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("山田颯太");

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4 , ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// //"="でコピーしてしまうと参照元のデータも変わってしまう

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["山田", "田中", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name , index) => console.log(`${index +1 }番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
// //　.filterはreturnの後に条件式を入れると処理に使える

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//使いすぎると処理重くなるので使い方要注意
//「ある条件 ? 条件がtrueの時 : 条件がfalseの時」
// const val1 = 1>0 ? `trueです`:`falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
//toLocalestringは数値を三桁区切りにしてくれる

// const num = "1300";
// const formattedNum = typeof num === `number` ? num.toLocaleString():`数値を入力してください`;
// console.log(formattedNum);
// //文字列にするとメッセージが流れる

// const checkSum =(num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です' ;
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味　&& ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("1か2はtreになります");
// }

// if (flag1 && flag2){
//   console.log("1も2もtreになります");
// }

//「||」は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//「&&」は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

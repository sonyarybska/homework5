/*--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого тип*/

/*let mass1= [1, 2,3,4,5];
console.log(mass1);
let mass2= ['okten', 'web','ua','js','courses'];
console.log(mass2);
let mass3=[1,'okten', true,'2','web'];
console.log(mass3);*/

/*Створити пустий масив. Наповнити його будь-якими значеннями
звертаючись до конкретного індексу. Вивести в консоль*/

/*let mass=[];
mass[0]='ok';
mass[1]=10;
mass[2]='web';
console.log(mass);*/

/* За допомогою циклу for і document.write()
вивести 10 блоків div c довільним текстом всередині*/

/*for (let i = 0; i < 10; i++){
    document.write(`<div>Масив</div>`);
}*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c
довільним текстом і індексом всередині**/

/*
    for (let i = 0; i < 10; i++){
    document.write(`<div>Масив ${i}</div>`);
}*/

/* За допомогою циклу while вивести в документ
20 блоків h1 c довільним текстом всередині.*/
/*
    let i = 0
    while (i < 20) {
    document.write('<h1>Block</h1>');
    i++;
    }
*/
/*За допомогою циклу while вивести в документ 20 блоків h1 c
довільним текстом і індексом всередині*/
/*
let i=0
while ( i < 20) {
document.write(`<div>Block ${i}</div>`);
    i++;
}*/

/* Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*let mass = [9, 1, 10, 7, 11, 4, 2, 6, 8, 5];
for (let i = 0; i < mass.length; i++) {
    const mas = mass[i];
    console.log(mas);
}
*/
/*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

/*let mass=['hello','ok','10','web','ua','courses','js','python','front-end','back-end'];
for( let i=0; i<mass.length;i++){
    const mas=mass[i];
    console.log(mas);
}*/

/* Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

/*mass=['hello','ok',10,'web',true,false,8,4,2,11];
for( let i=0; i<mass.length;i++){
   const mas=mass[i];
   console.log(mas);
}
*/
/*Створити масив з 10 елементів числового, стірчкового і булевого типу.
 За допомогою if та typeof вивести тільки булеві елементи*/

/*let mass = [1, 'okten', false, 10, 'web', true, 11, 'courses', 50, 'js'];
for(let i =0; i<mass.length; i++){
    const mas=mass[i];
    if (typeof mas === "boolean"){
        console.log(mas);
    }
}*/

/*Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та
typeof вивести тільки числові елементи*/
/*
let mass = [1, 'okten', false, 10, 'web', true, 11, 'courses', 50, 'js'];
for(let i =0; i<mass.length; i++){
    const mas=mass[i];
    if (typeof mas === "number"){
        console.log(mas);
    }
}*/
/* Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та
 typeof вивести тільки рядкові елементи*/
/*
let mass = [1, 'okten', false, 10, 'web', true, 11, 'courses', 50, 'js'];
for(let i =0; i<mass.length; i++){
    const mas=mass[i];
    if (typeof mas === "string"){
        console.log(mas);
    }
}*/
/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
Вивести в консоль всі його елементи в циклі. */

/* let mass=[];
 mass[1]=10;
 mass[2]='okten';
 mass[3]=true;
mass[4]='ten';
mass[5]=120;
mass[6]=false;
mass[7]=12;
mass[8]='web';
mass[9]='ua';
mass[10]=7;
for(let i=0;i<mass.length;i++){
    const mas=mass[i];
    console.log(mas);
}*/

/*Створити цикл for на 10  ітерацій з кроком 1.
 Вивести поточний номер кроку через console.log та document.write*/

/*for (let i=0;i<=10;i++){
    console.log('step:',i);
    document.write(`<h1>step:${i}</h1>`);
}*/
/*Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку
через console.log та document.write*/

/*for (let i=0; i<=100;i++){
    console.log('step',i);
    document.write(`<h1>step:${i}</h1>`);

}*/
/*Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
/*
    for (let i=0; i<=100;i+=2){
    console.log('step',i);
    document.write(`<h1>step:${i}</h1>`);
}*/

/*Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
/*
for (let i = 0; i <= 100; i++) {
    if (i%2===0)
    {
        console.log('step', i);
        document.write(`<h1>step:${i}</h1>`);

    }
}*/
/*Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log('step', i);
        document.write(`<h1>step:${i}</h1>`);

    }
}
*/
/*Відтворити роботу годинника, відрахувавши 2 хвилини
(2 цикли! 1й - хвилини, 2й - секунди)*/
/*
for (let h=0;h<2;h++){
      for(let s=0;s<=59;s++){
          console.log(`${h} ${s}`);
    }
}*/

//Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/*
for (let h = 0; h < 2; h++) {

    for (let m = 0; m <= 59; m++) {

        for (let s = 0; s <= 59; s++) {

            console.log(`${h} ${m} ${s}`);
        }
    }
}*/


/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу
for зібрати всі букви в слово.*/

/*mass=['a','b','c'];
str="";
for (let i = 0; i < mass.length; i++) {
    const mas = mass[i];
    str+=mas;
    console.log(str);
}*/
/*Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
/*
mass=['a','b','c'];
let i=0
str="";
while(i<mass.length){
    str+=mass[i];
    i++;
}
console.log(str);
 */

/*Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/

/*mass=['a','b','c'];
str="";
for (let mas of mass){
    str+=mas;

}
console.log(str);*/

/*Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.*/
/*
mass=['a','b','c'];
for (let i = 1; i <=3; i++) {
    mass[mass.length]=i;
}
console.log(mass);*/

/*Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].*/
/*
mass=['a','b','c'];
for(let i=mass.length; i>=0; i--){
    const mas=mass[i]
    console.log(mas);

    mass=['a','b','c'];
for(let i=0; i<mass.length; i++){
    mass[i]=mass.length-i;}
console.log(mass);
}*/
/*- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.*/
/*
mass=[1,2,3];

for (let i = 4; i <=6; i++) {

    mass[mass.length]=i;

}
console.log(mass);*/

/*Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.*/
/*
mass=[1,2,3];
for (let i = 6; i >= 4; i--) {
    mass.unshift(i);
}
console.log(mass);*/
/*Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()*/
/*
let mass=['js', 'css', 'jq'];
const StrShift=mass.shift();
console.log(StrShift);*/

/*Дан масив ['js', 'css', 'jq'].
Виведіть на екран останній елемент за допомогою pop()*/
/*
let mass=['js', 'css', 'jq'];
const last=mass.pop()
console.log(last);
*/

/*Дан масив [1, 2, 3, 4, 5]. За
допомогою методу/функції slice перетворіть масив в [4, 5]. */

/*let array=[1,2,3,4,5];
array=array.slice(3,5);
console.log(array);*/

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції
slice перетворіть масив в [1,2]. */

/*let array=[1,2,3,4,5];
array=array.slice(0,2);
console.log(array);*/

/*Дан масив [1, 2, 3, 4, 5].
За допомогою методу/функції splice перетворіть масив в [1, 4, 5].*/

/*let array=[1,2,3,4,5];
array.splice(1,2)
console.log(array);*/

/*Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з
 нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

/*let array=[1, 2, 3, 4, 5];
array.splice(3,0,'a', 'b', 'c');
console.log(array);*/

/*Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з
нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

/*let array=[1, 2, 3, 4, 5];
array.splice(1,0,'a', 'b');
array.splice(6,0,'c');
array.splice(8,0,'e');
console.log(array);*/

/* Взяти масив з 10 чисел або створити його. Вивести в консоль тільки
ті елементи, значення яких є парними.*/

/*let mass = [9, 1, 10, 7, 11, 4, 2, 6, 8, 5];
for(let i=0;i<mass.length;i++){
    const mas=mass[i];
    if( mas%2===0){
    console.log(mas);
}
}*/
/*Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою
будь-якого циклу та push () скопіювати значення одного масиву в інший*/

/*let mass = [9, 1, 10, 7, 11, 4, 2, 6, 8, 5];
let array=[];
for(let i=0;i<mass.length;i++){
    const mas=mass[i];
    array.push(mas);
}
console.log(array);*/

/*Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
скопіювати значення одного масиву в інший.*/

/*let mass = [9, 1, 10, 7, 11, 4, 2, 6, 8, 5];
let array=[];
for(let i=0;i<mass.length;i++){
    array[i]=mass[i];
}
console.log(array);*/

/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
1. перебрати його циклом while*/

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length){
    const mas=mass[i];
    i++;
    console.log(mas);
}*

/*2.перебрати його циклом for*/

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<=mass.length;i++){
    const mas=mass[i];
    console.log(mas);
}*/

/*. 3.перебрати циклом while та вивести  числа тільки з непарним індексом*/
/*
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length){
    const mas=mass[i];
    i++;
    if (mas%2===1){
    console.log(mas);}
}*/

/*4.перебрати циклом for та вивести  числа тільки з непарним індексом*/

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<=mass.length;i++){
    const mas=mass[i];
    if(mas%2===1) {
        console.log(mas);
    }
}*/


/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
/*
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length){
    const mas=mass[i];
    i++;
    if (mas%2===0){
        console.log(mas);}
}*/

//6. перебрати циклом for та вивести  числа тільки парні  значення

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<=mass.length;i++){
    const mas=mass[i];
    if(mas%2===0) {
        console.log(mas);
    }
}*/

/*7.замінити кожне число кратне 3 на слово "okten"*/

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length){
    let mas=mass[i];
    i++;
    if (mas%3===0){
        mas='okten';

}
console.log(mas);}
*/

/*8.вивести масив в зворотньому порядку.*/

/*let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=mass.length;i>=0;i--){
    const mas=mass[i];
    console.log(mas);
}*/

/* всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
10*/

//1
/*let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>=0){
    const mas=mass[i];
    i--;
    console.log(mas);
}*/
//2
/*let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = mass.length; i >0; i--) {
    const mas = mass[i];
    console.log(mas);
}*/
//3
/*
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>=0) {
    const mas = mass[i];
    i--;
    if (mas % 2 === 1) {
        console.log(mas);
    }
}*/
//4
/*let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=mass.length;i>=0;i--){
    const mas=mass[i];
    if(mas%2===1) {
        console.log(mas);
    }
}*/

//5
/*let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>=0) {
    const mas = mass[i];
    i--;
    if (mas % 2 === 0) {
        console.log(mas);
    }
}*/
//6
/*
let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=mass.length;i>=0;i--){
    const mas=mass[i];
    if(mas%2===0) {
        console.log(mas);
    }
}*/

//7
/*let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>=0){
    let mas=mass[i];
    i--;
    if (mas%3===0){
        mas='okten';

    }
    console.log(mas);}*/

/*створити пустий масив та :
1. заповнити його 50 парними числами за допомоги циклу.*/
/*let mass=[];
for (let i=0;i<=50;i++){

    if(i%2===0){
        mass[i]=i;
    }
mass[i]=i*2;
}
console.log(mass);*/


//2. заповнити його 50 непарними числами за допомоги циклу.
/*let mass=[];
for (let i=0;i<=50;i++){

    if(i%2===1){
        mass[i]=i;
    }
mass[i]=i*2+1;
}
console.log(mass);*/

/*3.1. используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)*/
/*let mass=[];
for (let i=0;i<=10;i++){

    mass[i]=Math.floor(Math.random()*723+7);
}

console.log(mass);*/
//3.2. вывести на консоль  каждый третий елемент

/*let mass=[];
for (let i=0;i<=10;i++){

    mass[i]=Math.floor(Math.random()*(732-8)+7);
}
console.log(mass);
for (let i = 2; i < mass.length; i+=3) {
    const mas = mass[i];
    console.log(mas);
}*/

//3.3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

/*let mass=[];
for (let i=0;i<=10;i++){

    mass[i]=Math.floor(Math.random()*(732-8)+7);
}
console.log(mass);

for (let i = 2; i < mass.length; i+=3) {
    const mas = mass[i];
    if (mas%2===0){
    console.log(mas);
    }
}*/

//3.4.вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

/*let mass=[];
let array=[];
for (let i=0;i<=10;i++){

    mass[i]=Math.floor(Math.random()*(732-8)+7);
}
console.log(mass);
for (let i = 2; i < mass.length; i+=3) {
    const mas = mass[i];
    if (mas%2===0){
        array.push(mass[i]);
    }
}
console.log(array);*/

//3.5.5. Вывести каждый елемент массива у которого соседний с права элемент - парный
/*let mass=[];
for (let i=0;i<=20;i++){

    mass[i]=Math.floor(Math.random()*723+7);
}
console.log(mass);
for (let i = 0; i < mass.length; i++) {
    if ((mass[i] + 1) % 2 === 0) {
        console.log(mass[i]);
    }
}*/

//масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек

/*let array=[100,250,50,168,120,345,188];
const avarage=(array[0]+array[1]+array[2]+array[4]+array[4]+array[5]+array[6])/array.length;
console.log(avarage);*/


//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let mass=[];
let array=[];
for (let i=0;i<=20;i++){

    mass[i]=Math.floor(Math.random()*723+7);
}
console.log(mass);
for (let i=0;i<=20;i++){

    mass[i]*=5;
    array.push(mass[i]);
}
console.log(mass);
console.log(array);*/

//4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

/*let mass = [1, 'okten', false, 10, 'web', true, 11, 'courses', 50, 'js'];
let array=[];
for(let i=0;i<mass.length;i++){
    const mas=mass[i];
    if(typeof mas==='number'){
        array.push(mass[i]);
    }

}
console.log(array);*/








































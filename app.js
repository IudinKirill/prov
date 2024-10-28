console.log('Задание 24');
let obj = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452,};
let objs = Object.values(obj);
for(let i = 0; i < objs.length; i++){
let num = String(objs[i])
let objs2 = num[0]
    if( objs2 == '1' | objs2 == '2') {
       console.log(num)
    }
};
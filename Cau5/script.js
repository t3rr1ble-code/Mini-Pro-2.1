//Câu 5: Cho số nguyên x bất kỳ. 
//Viết một hàm complexExpression tính giá trị biểu thức sau output = ++x * 3 - x-- * 2 + --x. 
//Giải thích tại sao cho ra kết quả đó?

//Hàm complexExpression
const complexExpression = (x) => ++x * 3 - x-- * 2 + --x;

//Giải thích
const explain = (x) => {
    let x1 = ++x;
    let x2 = x--;
    let x3 = --x;
    console.log(`B1: ++x = ${x1} => ++x * 3 = ${x1 * 3}`);
    console.log(`B2: x-- = ${x2} => x-- * 2 = ${x2 * 2}`);
    console.log(`B3: --x = ${x3} => --x = ${x3}`);
    console.log(`==> ++x * 3 - x-- * 2 + --x = ${x1} * 3 - ${x2} * 2 + ${x3}`)
}
//Test hàm
var number = 5;
explain(number); //Giải thích cho kết quả đã tính
console.log('Kết quả của biểu thức là: ', complexExpression(number)); //Output: 10

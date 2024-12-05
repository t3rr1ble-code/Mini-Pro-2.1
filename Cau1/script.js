// //Câu 1: Viết một hàm có tên evaluateConditions nhận bốn tham số boolean: condition1, condition2, condition3, và condition4. Hàm này sẽ kiểm tra:
//  - Nếu condition1 và condition2 đều đúng, hãy trả về "Cả hai điều kiện đều đúng!".
//  - Nếu condition3 là đúng hoặc condition4 là đúng, trả về "Một trong các điều kiện thứ ba hoặc thứ tư đúng!".
//  - Nếu không, trả về "Không điều kiện nào đúng!".

function evaluateConditions(condition1, condition2, condition3, condition4) {
    //Condition1 && Condition2
    console.log('>>Kiểm tra điều kiện 1 và điều kiện 2<<');
    if (condition1 && condition2) {
        console.log('Cả hai điều kiện đều đúng!');
    }
    else console.log('Có thể có điều kiện sai!');
    
    //Condition3 || Condition4
    console.log('>>Kiểm tra điều kiện 3 và điều kiện 4<<');
    if (condition3 || condition4) {
        console.log('Một trong các điều kiện thứ ba hoặc thứ tư đúng!');
    }
    else console.log('Không có điều kiện nào đúng!');
    }
var result = evaluateConditions(true, true, false, false)
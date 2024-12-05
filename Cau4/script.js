// Câu 4: Viết một hàm validateUser nhận vào một đối tượng (object) user với các thuộc tính isActive, isAdmin, và username.
//  - Hàm sẽ trả về true nếu người dùng đã kích hoạt (isActive là true) và có vai trò quản trị viên (isAdmin là true).
//  - Ngược lại, trả về false.

//Tạo đối tượng User
const user = {
    isActive: true,
    isAdmin: false,
}

//Check điều kiện Active và Admin
const { isActive, isAdmin } = user;
const validateUser = (user) =>  isActive && isAdmin;

//In kết quả
console.log(validateUser(user)); // Output: true
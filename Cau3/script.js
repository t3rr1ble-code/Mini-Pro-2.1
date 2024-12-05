// Câu 3: Tạo một mảng chứa thông tin về các sinh viên, mỗi sinh viên là một đối tượng với các thuộc tính name, grade, score. 
//Viết một hàm để lấy tên và điểm của mỗi sinh viên và in ra tên và điểm của họ.

//Tạo mảng chứa thông tin về các sinh viên
const students = 
[
    {
        name: 'John Doe',
        age: 20,
        grade: 8
    },
    {
        name: 'Jane Smith',
        age: 22,
        grade: 9
    },
    {
        name: 'Michael Johnson',
        age: 19,
        grade: 7
    },
    {
        name: 'Sarah Wilson',
        age: 21,
        grade: 10
    }
 ];

 //Hàm lấy tên và điểm của sinh viên
const getStudentInfo = () => {
    const studentsInfo = [];
    for (const student of students) {
        const { name, grade } = student;
        studentsInfo.push(`${name} - Grade: ${grade}`);
    }
    return studentsInfo;
}

//Gọi hàm và in ra màn hình
console.log(getStudentInfo());

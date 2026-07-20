const API = "http://localhost:8080/api/students";


// Load all students
function loadStudents() {

    fetch(API)
        .then(response => response.json())
        .then(data => {

            let table = "";

            data.forEach(student => {

                table += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.phone}</td>
                    <td>${student.department}</td>
                    <td>${student.course}</td>

                    <td>
                        <button onclick="getStudent(${student.id})">
                            Edit
                        </button>

                        <button onclick="deleteStudent(${student.id})">
                            Delete
                        </button>
                    </td>
                </tr>
                `;

            });


            document.getElementById("studentTable").innerHTML = table;

        });

}



// Add / Update Student
function addStudent() {


    let student = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        department: document.getElementById("department").value,
        course: document.getElementById("course").value

    };


    let method = "POST";
    let url = API;


    // If studentId exists, update student
    if (window.studentId) {

        method = "PUT";
        url = API + "/" + window.studentId;

    }


    fetch(url, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

    })

    .then(response => response.json())

    .then(() => {


        alert("Student Saved Successfully");


        // clear update id
        window.studentId = null;


        // clear form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("department").value = "";
        document.getElementById("course").value = "";


        loadStudents();

    });


}



// Get Student for Edit
function getStudent(id) {


    fetch(API + "/" + id)

        .then(response => response.json())

        .then(student => {


            document.getElementById("name").value = student.name;

            document.getElementById("email").value = student.email;

            document.getElementById("phone").value = student.phone;

            document.getElementById("department").value = student.department;

            document.getElementById("course").value = student.course;


            // store id for update
            window.studentId = id;


        });

}



// Delete Student
function deleteStudent(id) {


    fetch(API + "/" + id, {

        method: "DELETE"

    })

    .then(() => {


        alert("Student Deleted");


        loadStudents();


    });


}



// Load data when page opens
loadStudents();
# sms
Develop the student management systems


# 🎓 Student Management System (SMS)

A full-stack Student Management System developed to manage student records efficiently.  
The project uses **Spring Boot** for backend development, **MySQL** for database management, and **HTML, CSS, JavaScript** for frontend development.

---

## 🚀 Technologies Used

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- Lombok

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

---

# 📂 Project Structure

```

Student-Management-System
│
├── Backend
│   ├── src/main/java/com/student/sms
│   │
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   └── exception
│
├── Frontend
│   ├── index.html
│   ├── css
│   ├── js
│   └── assets
│
└── README.md

````

---

# ⚙️ Backend Setup

### Prerequisites
- JDK 21+
- Maven
- MySQL
- VS Code / IntelliJ
- Postman

### Database Setup

Create MySQL database:

```sql
CREATE DATABASE student_management;
````

Configure:

`application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Run Backend:

```bash
.\mvnw.cmd spring-boot:run
```

Backend URL:

```
http://localhost:8080
```

---

# 🌐 Frontend Setup

### Technologies

* HTML
* CSS
* JavaScript
* Bootstrap

### Run Frontend

Open:

```
index.html
```

or run using VS Code Live Server.

Frontend communicates with backend using REST APIs.

---

# ✨ Features

### Student Management

* Add Student
* View Students
* Update Student
* Delete Student

### Additional Modules

* Department Management
* Course Management
* Attendance Management
* Marks Management

---

# 🔄 Application Flow

```
Frontend
   |
   ↓
Spring Boot REST API
   |
   ↓
MySQL Database
```

---

# 🧪 API Testing

Tool Used:

* Postman

Example:

```
GET http://localhost:8080/api/students
```

---

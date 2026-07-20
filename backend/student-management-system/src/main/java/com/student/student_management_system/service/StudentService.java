package com.student.student_management_system.service;

import com.student.student_management_system.entity.Student;
import com.student.student_management_system.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    // Get all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }


    // Add student
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }


    // Get student by ID
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElse(null);
    }


    // Update student
    public Student updateStudent(Long id, Student studentDetails) {

        Student student = studentRepository.findById(id)
                .orElse(null);

        if(student != null) {

            student.setName(studentDetails.getName());
            student.setEmail(studentDetails.getEmail());
            student.setPhone(studentDetails.getPhone());
            student.setDepartment(studentDetails.getDepartment());
            student.setCourse(studentDetails.getCourse());

            return studentRepository.save(student);
        }

        return null;
    }


    // Delete student
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
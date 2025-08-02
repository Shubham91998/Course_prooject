import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Breadcrumb, Card, Button, Container, Row, Col, Form } from "react-bootstrap";

// Demo teacher data for each subcourse
const teacherData = {
  python: [
    { id: 1, name: "Dr. Priya Sharma", image: "https://randomuser.me/api/portraits/women/44.jpg", experience: 8, subjects: ["Python", "Data Structures"] },
    { id: 2, name: "Mr. Rahul Verma", image: "https://randomuser.me/api/portraits/men/32.jpg", experience: 5, subjects: ["Python", "OOP"] },
    { id: 3, name: "Ms. Anjali Singh", image: "https://randomuser.me/api/portraits/women/65.jpg", experience: 6, subjects: ["Python", "Algorithms"] },
  ],
  java: [
    { id: 4, name: "Mr. Amit Kumar", image: "https://randomuser.me/api/portraits/men/45.jpg", experience: 7, subjects: ["Java", "OOP"] },
    { id: 5, name: "Ms. Ritu Mehra", image: "https://randomuser.me/api/portraits/women/46.jpg", experience: 4, subjects: ["Java", "Spring"] },
  ],
  cpp: [
    { id: 6, name: "Mr. Sandeep Singh", image: "https://randomuser.me/api/portraits/men/47.jpg", experience: 9, subjects: ["C++", "DSA"] },
  ],
  c: [
    { id: 7, name: "Ms. Kavita Rao", image: "https://randomuser.me/api/portraits/women/48.jpg", experience: 6, subjects: ["C", "Pointers"] },
  ],
  r: [
    { id: 8, name: "Dr. Neha Gupta", image: "https://randomuser.me/api/portraits/women/49.jpg", experience: 5, subjects: ["R", "Statistics"] },
  ],
  matlab: [
    { id: 9, name: "Mr. Arjun Patel", image: "https://randomuser.me/api/portraits/men/50.jpg", experience: 8, subjects: ["MATLAB", "Signal Processing"] },
  ],
};

const subcourseNames = {
  python: "Python",
  java: "Java",
  cpp: "C++",
  c: "C",
  r: "R",
  matlab: "MATLAB",
};

export default function CourseTeacherPage() {
  const { subcourse } = useParams();
  const teachers = teacherData[subcourse] || [];
  const [search, setSearch] = useState("");
  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.subjects.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <Container className="py-4">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: "/programming" }}>Programming</Breadcrumb.Item>
        <Breadcrumb.Item active>{subcourseNames[subcourse] || "Course"}</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="mb-3">{subcourseNames[subcourse] || "Course"} Teachers</h2>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by name or subject..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredTeachers.length === 0 ? (
          <Col><div className="text-muted">No teachers found for this course.</div></Col>
        ) : filteredTeachers.map(teacher => (
          <Col key={teacher.id}>
            <Card className="h-100 shadow-sm border-0 teacher-card">
              <Card.Img variant="top" src={teacher.image} alt={teacher.name} className="object-fit-cover" style={{height:200, objectFit:'cover'}} />
              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text>
                  <strong>Experience:</strong> {teacher.experience} years<br/>
                  <strong>Subjects:</strong> {teacher.subjects.join(", ")}
                </Card.Text>
                <Button variant="primary" className="w-100">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style>{`
        .teacher-card:hover {
          box-shadow: 0 0 0 4px #c7d2fe, 0 4px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px) scale(1.02);
          transition: all 0.2s;
        }
      `}</style>
    </Container>
  );
}

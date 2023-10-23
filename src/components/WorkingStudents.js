import React from 'react';

const workingStudentsData = [///é uma lista de objetos que contém informações sobre os alunos que trabalham no mercado
  {
    id: 1,
    name: 'Júlia Medrado',
    details: 'Analista de Sistemas Mobile',
  },
  {
    id: 2,
    name: 'Tailane França',
    details: 'Arquiteto de Software',
  },
  {
    id: 3,
    name: 'Gustavo Guerra',
    details: 'Desenvolvedor de Software',
  },
];

function WorkingStudents() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Estudantes que Trabalham no Mercado</h2>
      <ul style={styles.list}>
        {workingStudentsData.map((student) => (
          <li key={student.id} style={styles.listItem}>
            <strong style={styles.name}>{student.name}</strong>: {student.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: '32px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  name: {
    color: '#0074b4',
  },
};

export default WorkingStudents;

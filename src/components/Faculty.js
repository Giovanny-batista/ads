import React from 'react';

const facultyData = [// aqui o arrya contém informação sobre os membros do corpo docente
  {
    id: 1,
    name: 'Prof. Carlos Estevão',
    title: 'Professor de Programação para Internet II',
  },
  {
    id: 2,
    name: 'Prof. Karl Alelaf',
    title: 'Professor de Redes de Computadores',
  },
  {
    id: 3,
    name: 'Prof. Felipe Gonçalves',
    title: 'Professor de Análise e Projetos de Sistemas',
  },
];

function FacultyList({ members }) {//essa função recebe um único argumento(members) que representa o corpo docente e mapeia os dados de (facultyData)
  return (
    <ul style={styles.list}>
      {members.map((professor) => (
        <li key={professor.id} style={styles.listItem}>
          <strong style={styles.name}>{professor.name}</strong> - {professor.title}
        </li>
      ))}
    </ul>
  );
}

function Faculty() { //é um componente pai que representa a seção do corpo docente
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Corpo Docente</h2>
      <FacultyList members={facultyData} />
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

export default Faculty;

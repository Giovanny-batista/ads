import Head from 'next/head';
import { useState } from 'react';

const ClassesPage = () => {
  const classData = [
    {
      id: 1,
      module: 1,
      roomNumber: 'Sala 02',
      numberOfStudents: 45,
    },
    {
      id: 2,
      module: 2,
      roomNumber: 'Sala 03',
      numberOfStudents: 25,
    },
    {
      id: 3,
      module: 3,
      roomNumber: 'Sala 06',
      numberOfStudents: 20,
    },
    {
      id: 4,
      module: 4,
      roomNumber: 'Sala 05',
      numberOfStudents: 11,
    },
    {
      id: 5,
      module: 5,
      roomNumber: 'Sala 07',
      numberOfStudents: 12,
    },
    {
      id: 6,
      module: 6,
      roomNumber: 'Sala 10',
      numberOfStudents: 10,
    },
  ];

  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Informações sobre as turmas de ADS</title>
      </Head>
      <h1 style={styles.header}>Informações sobre as turmas de ADS</h1>
      <ul style={styles.list}>
        {classData.map((turma) => (
          <li key={turma.id} style={styles.listItem}>
            <button
              onClick={() => handleModuleSelect(turma.module)}
              style={styles.button}
            >
              Módulo {turma.module}
            </button>
          </li>
        ))}
      </ul>
      {selectedModule && (
        <div style={styles.selectedModule}>
          <h2 style={styles.moduleHeader}>Detalhes do Módulo {selectedModule}</h2>
          <p>Número da Sala: {classData[selectedModule - 1].roomNumber}</p>
          <p>Quantidade de Alunos: {classData[selectedModule - 1].numberOfStudents}</p>
        </div>
      )}
    </div>
  );
};

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
  button: {
    background: '#0074b4',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  selectedModule: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  moduleHeader: {
    fontSize: '24px',
    marginBottom: '10px',
  },
};

export default ClassesPage;

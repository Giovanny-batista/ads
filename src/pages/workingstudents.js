import Head from 'next/head';
import WorkingStudents from '../components/WorkingStudents';

function WorkingStudentsPage() {
  return (
    <div>
      <Head>
        <title>Estudantes no Mercado</title>
      </Head>
      <h1>Estudantes no Mercado</h1>
      <WorkingStudents />
    </div>
  );
}

export default WorkingStudentsPage;

//WorkingStudentsPage incorpora o componente WorkingStudents para exibir a lista de estudantes que trabalham no mercado. 

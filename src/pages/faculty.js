import Head from 'next/head';
import Faculty from '../components/Faculty';

function FacultyPage() {
  return (
    <div>
      <Head>
        <title>Corpo Docente</title>
      </Head>
      <Faculty />
    </div>
  );
}

export default FacultyPage;

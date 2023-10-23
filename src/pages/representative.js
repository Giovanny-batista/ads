import Head from 'next/head';
import Representative from '../components/Representative';

function RepresentativePage() {
  return (
    <div>
      <Head>
        <title>Representante dos Alunos</title>
      </Head>
      <h1>Representante dos Alunos</h1>
      <Representative />
    </div>
  );
}

export default RepresentativePage;

// esse código é responsável por criar uma página web com título e conteúdo. Enquanto o código Representative lida com informações sobre a representante e permite que os usuários forneçam feedback sobre ela. 
//os códigos foram usados em conjunto para criar uma página web que exibe informações sobre a representante e permite que os usuários interajam com o formulário de feedback.
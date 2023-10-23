import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Head>
        <title>Curso de Análise e Desenvolvimento de Sistemas (ADS)</title>
      </Head>
      <style jsx>{`
        /* Estilos gerais */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f2f2f2;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Estilos do menu */
        .menu {
          background-color: #D3D3D3;
          color: #fff;
          padding: 10px 0;
          text-align: center;
        }

        .menu ul {
          list-style: none;
          display: flex;
          justify-content: center;
          padding: 0;
        }

        .menu li {
          margin: 0 20px;
        }

        .menu a {
          text-decoration: none;
          color: #0074b4; /* Cor que combina com o cabeçalho */
          font-weight: bold;
        }

        /* Estilos do cabeçalho */
        .header {
          background-color: #0074b4;
          color: #fff;
          text-align: center;
          padding: 20px 0;
        }

        .header h1 {
          font-size: 32px;
          margin: 0;
        }
      `}</style>

      <div className="container">
        <div className="menu">
          <ul>
            
            <li>
              <Link href="/news">Notícias</Link>
            </li>
            <li>
              <Link href="/faculty">Corpo Docente</Link>
            </li>
            <li>
              <Link href="/representative">Representante dos Alunos</Link>
            </li>
            
            <li>
              <Link href="/classes">Turmas</Link>
            </li>
            <li>
              <Link href="/workingstudents">Estudantes no Mercado</Link>
            </li>
          </ul>
        </div>
        <div className="header">
          <h1>Curso de Análise e Desenvolvimento de Sistemas (ADS)</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;

import Head from 'next/head';
import NewsList from '../components/NewsList';

function News() {
  return (
    <div>
      <Head>
        <title>Notícias de Tecnologia</title>
      </Head>
      <NewsList />
    </div>
  );
}

export default News;

import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
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
  disabledButton: {
    background: '#ccc',
    cursor: 'not-allowed',
  },
  loadingText: {
    marginBottom: '10px',
    color: '#0074b4',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '10px',
  },
  a: {
    textDecoration: 'none',
    color: '#0074b4',
  },
  aHover: {
    textDecoration: 'underline',
  },
};

function NewsList() { //Representa a lista de de notícias relacionado a tecnologia
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');//mantém o termo de pesquisa fornecido pelo usuário
  const [isSearching, setIsSearching] = useState(false);//Indica que a pesquisa  por notícias está em andamento.

  const apiKey = '19176f40a6ea421fb93c64a811ae0ec4';

  const handleSearch = async () => {//botão que quando é clicado faz uma solicitação a api com base na pesquisa do usuário
    setIsSearching(true); //foi definido como (true)  para informar que a busca está em andamento.
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
      );

      if (response.data.status === 'ok') {
        setNews(response.data.articles);
      }
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Notícias Relacionadas à Tecnologia</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar notícias"
        style={styles.input}
      />
      <button onClick={handleSearch} disabled={isSearching} style={isSearching ? styles.disabledButton : styles.button}>
        Pesquisar
      </button>
      {isSearching && <p style={styles.loadingText}>Buscando notícias...</p>}
      <ul style={styles.ul}>
        {news.map((article, index) => (
          <li key={index} style={styles.li}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.a}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;

import React, { useState } from 'react';

function Representative() {
  const [representativeInfo] = useState({
    name: 'Sabrina',
    email: 'sabrina@gmail.com',
  });

  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);//indica se o feedback foi enviado com sucesso.
  const [placeholderText, setPlaceholderText] = useState('Digite sua sugestão...');//determina o texto de espaço reservado na caixa de texto de feedback.

  const handleChange = (e) => {//atualiza os estados com base nos valores fornecidos pelo usuário.
    const { name, value } = e.target;
    if (name === 'feedbackType') {
      setFeedbackType(value);
      if (value === 'suggestion') {
        setPlaceholderText('Digite sua sugestão...');
      } else if (value === 'complaint') {
        setPlaceholderText('Digite sua reclamação...');
      }
    } else {
      setFeedback(value);
    }
  };

  const handleSubmit = (e) => { //Esta função é chamada quando o formulário de feedback é submetido. Ela define o estado isFeedbackSent como verdadeiro para indicar que o feedback foi enviado com sucesso.
    e.preventDefault();
    setIsFeedbackSent(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}><strong>Nome:</strong> {representativeInfo.name}</h2>
      <p><strong>Email de Contato:</strong> <a href={`mailto:${representativeInfo.email}`}>{representativeInfo.email}</a></p>
      <p><strong>Função:</strong> Representante das Turmas de ADS</p>
      {isFeedbackSent ? (
        <div style={styles.feedback}>
          <p>Enviado com sucesso!</p>
        </div>
      ) : (
        <div>
          <h3 style={styles.header}>Deixe sua sugestão ou reclamação sobre a representante:</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.selectContainer}>
              <select
                name="feedbackType"
                value={feedbackType}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="suggestion">Sugestão</option>
                <option value="complaint">Reclamação</option>
              </select>
            </div>
            <div style={styles.textAreaContainer}>
              <textarea
                name="feedback"
                value={feedback}
                onChange={handleChange}
                placeholder={placeholderText}
                rows="4"
                style={styles.textArea}
              />
            </div>
            <button type="submit" style={styles.submitButton}>Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f2f2f2',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  feedback: {
    margin: '20px 0',
    color: '#0074b4',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectContainer: {
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textAreaContainer: {
    marginBottom: '10px',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    background: '#0074b4',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Representative;

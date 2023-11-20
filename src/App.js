import React, { useState } from 'react';
import './App.css';
import { FaSpaceShuttle } from 'react-icons/fa';

const questions = [
  {
    question: 'Qual é o planeta mais próximo do Sol?',
    options: ['Mercúrio', 'Vênus', 'Terra', 'Marte'],
    correctAnswer: 'Mercúrio',
  },
  {
    question: 'Quantas luas tem a Terra?',
    options: ['1', '2', '0', '3'],
    correctAnswer: '1',
  },
  {
    question: 'O que é um ano-luz?',
    options: ['Unidade de medida de tempo', 'Distância que a luz percorre em um ano', 'Tempo que a Terra leva para dar uma volta ao redor do Sol', 'Período de tempo em que a lua orbita a Terra'],
    correctAnswer: 'Distância que a luz percorre em um ano',
  },
  {
    question: 'Qual é a estrela mais próxima da Terra?',
    options: ['Alfa Centauri', 'Betegeuse', 'Sol', 'Proxima Centauri'],
    correctAnswer: 'Sol',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Você acertou {score} de {questions.length} perguntas!</h2>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="question-section">
  <FaSpaceShuttle className="space-icon" />
  <h2>Pergunta {currentQuestion + 1}</h2>
  <p>{questions[currentQuestion].question}</p>
  <div className="answer-options">
    {questions[currentQuestion].options.map((option, index) => (
      <button key={index} onClick={() => handleAnswerClick(option)}>
        {option}
      </button>
    ))}
  </div>
</div>

      )}
    </div>
  );
}

export default App;

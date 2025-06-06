import React from 'react';
import './css/ModalProject.css';
import pybookImg from '../assets/pybook.png';

const Project = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">Projeto: Curso Básico de Python</h1>

        <div className="modal-card">
          <img
            className="modal-img"
            src={pybookImg}
            alt="Imagem do projeto das PyLadies"
          />

          <div className="modal-text">
            <p>
              🚀 <strong>Objetivo:</strong> Ensinar os fundamentos de Python para mulheres que querem entrar no mundo da programação.<br />
              📌 <strong>Descrição:</strong> O Curso Básico de Python da PyLadies Floripa é uma iniciativa voltada para mulheres que querem aprender a programar do zero!
            </p>
          </div>
        </div>

        <div className="modal-text2">
          <p>
            O curso abordará temas como: <br />
            ✅ Introdução à programação <br />
            ✅ Estruturas básicas do Python <br />
            ✅ Manipulação de dados <br />
            ✅ Pequenos projetos práticos<br />
            🎯 Público-alvo: Mulheres iniciantes em tecnologia ou que desejam aprender programação com apoio de uma comunidade acolhedora.<br />
            💻 Formato: Online e gratuito, com aulas gravadas e suporte ao vivo das mentoras da PyLadies.<br />
          </p>
        </div>

        <div className="modal-buttons">
          <button className="subscribe-btn" onClick={() => alert('Inscrição realizada!')}>
            Inscreva-se
          </button>
          <button className="close-btn" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

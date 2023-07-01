let attempts = 0; // Variável para contar as tentativas do usuário

  function checkAnswer() {
    const answerInput = document.getElementById("answer-input");
    const gifContainer = document.getElementById("gif-container");
    const hintContainer = document.getElementById("hint-container");

    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = "minecraft"; // Resposta correta (em minúsculas)

    // Expressão regular para verificar se a resposta contém apenas letras
    const letterRegex = /^[A-Za-z]+$/;

    if (userAnswer === correctAnswer && userAnswer.match(letterRegex)) {
      // Oculta o contêiner da pergunta e exibe o contêiner do GIF
      document.getElementById("question-container").style.display = "none";
      gifContainer.style.display = "block";
    } else {
      if (!userAnswer.match(letterRegex)) {
        alert("Por favor, digite apenas letras.");
      } else {
        attempts++;
        if (attempts === 3) {
          const hintDiv = document.createElement("div");
          hintDiv.innerText = "Dica: Um dos inimigos do jogo é verde e explode";
          hintContainer.appendChild(hintDiv);
        } else {
          alert("Resposta incorreta. Tente novamente!");
          answerInput.value = ""; // Limpa o campo de resposta
        }
      }
    }
  }
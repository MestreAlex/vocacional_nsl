import { discQuestions } from "./disc_perguntas.js";
import { discTypes } from "./disc.js";

export function showDiscQuestion(state, saveProgress, finishPhase1) {
  const { currentQuestion, discAnswers } = state;
  const questionsPerPage = 4;
  const startIdx = currentQuestion;
  const endIdx = Math.min(startIdx + questionsPerPage, discQuestions.length);
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  document.getElementById("questionText").innerHTML = `
    <div style="font-weight:bold; margin-bottom:8px;">Responda às questões abaixo:</div>
    <div style="font-size:0.7em;font-style:italic;color:#666;margin-top:2px;">
      Evite repetir a mesma nota.
      <p>Quanto maior for o número, </p>
      <p>mais você se identifica com a afirmação.</p>
    </div>
  `;
  document.getElementById("questionText").style.textAlign = "center";

  const questionsGroup = document.createElement("div");
  questionsGroup.style.display = "flex";
  questionsGroup.style.flexDirection = "column";
  questionsGroup.style.alignItems = "center";
  questionsGroup.style.gap = "12px";

  // Novo: lógica de nota única por questão, marca/desmarca como nas demais fases
  let notaPorValor = {};
  for (let i = startIdx; i < endIdx; i++) {
    const val = discAnswers[i];
    if (val) notaPorValor[val] = i;
  }

  for (let i = startIdx; i < endIdx; i++) {
    const question = discQuestions[i];
    const qWrapper = document.createElement("div");
    qWrapper.className = "disc-question-card";
    qWrapper.style.textAlign = "center";
    qWrapper.style.margin = "0 auto";
    qWrapper.style.background = "#fafdfe";
    qWrapper.style.borderRadius = "12px";
    qWrapper.style.boxShadow = "0 2px 8px rgba(65,130,180,0.07)";

    const qText = document.createElement("div");
    qText.textContent = question.text;
    qText.style.fontWeight = "500";
    qText.style.fontSize = "1.07em";
    qText.style.marginBottom = "8px";
    qText.style.textAlign = "center";
    qWrapper.appendChild(qText);

    const optsRow = document.createElement("div");
    optsRow.className = "reta-pontuacao";
    optsRow.style.display = "flex";
    optsRow.style.justifyContent = "center";
    optsRow.style.gap = "2px";
    optsRow.style.marginBottom = "2px";
    for (let val = 1; val <= 5; val++) {
      const btn = document.createElement("button");
      btn.className = "reta-btn" + (discAnswers[i] === val ? " reta-btn-selected" : "");
      btn.textContent = val;
      btn.onclick = () => {
        // Lógica igual às demais fases
        if (discAnswers[i] === val) {
          delete notaPorValor[val];
          delete discAnswers[i];
        } else {
          if (notaPorValor[val] !== undefined && notaPorValor[val] !== i) {
            const idxAnterior = notaPorValor[val];
            delete discAnswers[idxAnterior];
          }
          if (discAnswers[i] !== undefined) {
            const antigoVal = discAnswers[i];
            delete notaPorValor[antigoVal];
          }
          discAnswers[i] = val;
          notaPorValor[val] = i;
        }
        saveProgress();
        showDiscQuestion(state, saveProgress, finishPhase1);
      };
      if (discAnswers[i] === val) {
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
      }
      if (notaPorValor[val] !== undefined && notaPorValor[val] !== i) {
        btn.disabled = true;
        btn.className += " reta-btn-disabled";
      }
      optsRow.appendChild(btn);
    }

    qWrapper.appendChild(optsRow);
    questionsGroup.appendChild(qWrapper);
  }

  optionsContainer.appendChild(questionsGroup);

  const navContainer = document.createElement("div");
  navContainer.style.display = "flex";
  navContainer.style.justifyContent = "center";
  navContainer.style.gap = "24px";
  navContainer.style.marginTop = "20px";

  if (currentQuestion > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.className = "nav-button";
    prevBtn.onclick = () => {
      state.currentQuestion = Math.max(0, state.currentQuestion - questionsPerPage);
      saveProgress();
      showDiscQuestion(state, saveProgress, finishPhase1);
    };
    navContainer.appendChild(prevBtn);
  }

  const allAnswered = Array.from({ length: endIdx - startIdx }, (_, k) => discAnswers[startIdx + k] !== undefined).every(Boolean);
  const nextBtn = document.createElement("button");
  nextBtn.textContent = endIdx === discQuestions.length ? "Finalizar Fase 1" : "Próxima";
  nextBtn.className = "start-button";
  nextBtn.disabled = !allAnswered;
  nextBtn.onclick = () => {
    if (endIdx === discQuestions.length) {
      finishPhase1();
    } else {
      state.currentQuestion = endIdx;
      saveProgress();
      showDiscQuestion(state, saveProgress, finishPhase1);
    }
  };
  navContainer.appendChild(nextBtn);

  optionsContainer.appendChild(navContainer);

  document.getElementById("progress").textContent = `Questões ${startIdx + 1} a ${endIdx} de ${discQuestions.length}`;
  document.getElementById("progress").style.textAlign = "center";
}

export function showPhase1Result(state, saveProgress, hideAll, continueToPhase2A) {
  const { discResult, discScores } = state;
  hideAll();
  document.getElementById("phase1Result").style.display = "block";
  let discScoreColumn = `
    <div class="area-result" style="margin:22px auto;text-align:center;">
      <h4 style="text-align:center;color:#29a1d8;margin-bottom:10px;">Pontuação dos Perfis DISC</h4>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <button class="reta-btn" disabled style="width:180px;background:#145c7d;color:#fff;"><b>Dominância (D):</b> ${discScores.Dominancia}</button>
        <button class="reta-btn" disabled style="width:180px;background:#145c7d;color:#fff;"><b>Influência (I):</b> ${discScores.Influencia}</button>
        <button class="reta-btn" disabled style="width:180px;background:#145c7d;color:#fff;"><b>Estabilidade (S):</b> ${discScores.Estabilidade}</button>
        <button class="reta-btn" disabled style="width:180px;background:#145c7d;color:#fff;"><b>Conformidade (C):</b> ${discScores.Conformidade}</button>
      </div>
    </div>
  `;
  document.getElementById("discResultText").innerHTML = `
    <div class="profile-summary" style="text-align:center;">
      <h3 style="text-align:center;">Seu Perfil DISC: ${discTypes[discResult]?.nome || discResult}</h3>
      <p style="text-align:center;">${discTypes[discResult]?.descricao || ""}</p>
      ${discScoreColumn}
      <button id="continueToPhase2A" class="start-button" style="margin-top:20px;">Continuar para a Fase 2A</button>
    </div>
  `;
  document.getElementById("continueToPhase2A").onclick = () => {
    saveProgress();
    continueToPhase2A();
  };
}

export function calculateDiscProfileWithScores(answers) {
  const scores = {
    Dominancia: answers.slice(0, 5).reduce((a, b) => a + b, 0),
    Influencia: answers.slice(5, 10).reduce((a, b) => a + b, 0),
    Estabilidade: answers.slice(10, 15).reduce((a, b) => a + b, 0),
    Conformidade: answers.slice(15, 20).reduce((a, b) => a + b, 0)
  };
  const perfil = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  return { perfil, scores };
}
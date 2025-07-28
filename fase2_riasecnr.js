import { riasecnrQuestionSets } from "./riasecnr_perguntas.js";
import { riasecTypes } from "./riasec.js";

export function showRiasecnrQuestionSet(state, saveProgress, finishPhase2) {
  let rodada = state.currentQuestion;

  if (
    !Array.isArray(riasecnrQuestionSets) ||
    typeof rodada !== "number" ||
    rodada < 0 ||
    rodada >= riasecnrQuestionSets.length ||
    !Array.isArray(riasecnrQuestionSets[rodada])
  ) {
    alert("Perguntas da Fase 2 não encontradas ou o progresso está corrompido. O quiz será reiniciado.");
    localStorage.removeItem("progressoQuizRiasecDisc");
    window.location.reload();
    return;
  }

  // Embaralhamento removido — sempre na ordem original
  if (!Array.isArray(state.riasecnrRodadaOrder)) state.riasecnrRodadaOrder = [];
  if (!Array.isArray(state.riasecnrNotasUsadas)) state.riasecnrNotasUsadas = [];
  if (!Array.isArray(state.riasecnrNotaPorValor)) state.riasecnrNotaPorValor = [];
  if (!Array.isArray(state.riasecnrAnswers)) state.riasecnrAnswers = [];

  if (!state.riasecnrRodadaOrder[rodada]) {
    let set = riasecnrQuestionSets[rodada];
    state.riasecnrRodadaOrder[rodada] = set;
  }
  let set = state.riasecnrRodadaOrder[rodada];
  if (!state.riasecnrNotasUsadas[rodada]) state.riasecnrNotasUsadas[rodada] = {};
  if (!state.riasecnrNotaPorValor[rodada]) state.riasecnrNotaPorValor[rodada] = {};
  let notasUsadas = state.riasecnrNotasUsadas[rodada];
  let notaPorValor = state.riasecnrNotaPorValor[rodada];

  document.getElementById("questionText").innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:1.2em;font-weight:bold;margin-bottom:6px;">
        Fase 2 — Rodada ${state.currentQuestion + 1} de ${riasecnrQuestionSets.length}:
      </div>
      <div style="font-size:1.1em;color:#29a1d8;">
        Avalie sua afinidade com cada profissão
      </div>
      <div style="font-size:1em;font-style:italic;color:#666;margin-top:4px;">
        (atribua uma nota de 1 a 10, sem repetir a nota nesta rodada)
      </div>
    </div>
  `;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";
  let retas = [];

  set.forEach((q, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "riasec-card";
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "0 auto 6px auto";
    wrapper.style.background = "#fafdfe";
    wrapper.style.borderRadius = "12px";
    wrapper.style.boxShadow = "0 1px 6px rgba(65,130,180,0.05)";

    const pergunta = document.createElement("div");
    pergunta.style.fontWeight = "500";
    pergunta.style.marginBottom = "8px";
    pergunta.style.fontSize = "1.02em";
    pergunta.textContent = q.texto;
    pergunta.style.textAlign = "center";
    wrapper.appendChild(pergunta);

    const reta = document.createElement("div");
    reta.className = "reta-pontuacao";
    reta.style.display = "flex";
    reta.style.justifyContent = "center";
    reta.style.gap = "2px";
    reta.style.margin = "10px 0 5px 0";
    retas[idx] = reta;

    for (let val = 1; val <= 10; val++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = val;
      btn.className = "reta-btn" + (notasUsadas[idx] === val ? " reta-btn-selected" : "");
      btn.dataset.value = val;
      btn.dataset.idx = idx;
      btn.onclick = function () {
        // Nova lógica: se já existe esta nota em outra questão, remove de lá e aplica aqui
        if (notasUsadas[idx] === val) {
          delete notaPorValor[val];
          delete notasUsadas[idx];
          saveProgress();
          showRiasecnrQuestionSet(state, saveProgress, finishPhase2);
          return;
        }
        if (notaPorValor[val] !== undefined && notaPorValor[val] !== idx) {
          const idxAnterior = notaPorValor[val];
          delete notasUsadas[idxAnterior];
        }
        if (notasUsadas[idx] !== undefined) {
          const antigoVal = notasUsadas[idx];
          delete notaPorValor[antigoVal];
        }
        notasUsadas[idx] = val;
        notaPorValor[val] = idx;
        saveProgress();
        showRiasecnrQuestionSet(state, saveProgress, finishPhase2);
      };
      if (notasUsadas[idx] === val) {
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
      }
      // desabilita se já usada em outra questão desta rodada
      if (notaPorValor[val] !== undefined && notaPorValor[val] !== idx) {
        btn.disabled = true;
        btn.className += " reta-btn-disabled";
      }
      reta.appendChild(btn);
    }
    wrapper.appendChild(reta);
    optionsContainer.appendChild(wrapper);
  });

  const navDiv = document.createElement("div");
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";
  navDiv.style.gap = "24px";
  navDiv.style.marginTop = "12px";

  if (state.currentQuestion > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.className = "nav-button";
    prevBtn.onclick = () => {
      state.currentQuestion--;
      saveProgress();
      showRiasecnrQuestionSet(state, saveProgress, finishPhase2);
    };
    navDiv.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = (state.currentQuestion === riasecnrQuestionSets.length - 1) ? "Finalizar Fase 2" : "Próxima";
  nextBtn.className = "start-button";
  nextBtn.onclick = () => {
    const setAnswers = {};
    let allSelected = true;
    set.forEach((q, idx) => {
      const val = notasUsadas[idx];
      if (val === undefined) allSelected = false;
      setAnswers[q.perfil] = parseInt(val, 10) || 0;
    });
    if (!allSelected) {
      alert("Selecione uma nota diferente para cada pergunta!");
      return;
    }
    state.riasecnrAnswers[state.currentQuestion] = setAnswers;
    saveProgress();
    state.currentQuestion++;
    if (state.currentQuestion < riasecnrQuestionSets.length) {
      showRiasecnrQuestionSet(state, saveProgress, finishPhase2);
    } else {
      finishPhase2(state, saveProgress);
    }
  };
  navDiv.appendChild(nextBtn);

  optionsContainer.appendChild(navDiv);

  document.getElementById("progress").textContent = `Rodada ${state.currentQuestion + 1} de ${riasecnrQuestionSets.length}`;
  document.getElementById("progress").style.textAlign = "center";
}

export function finishPhase2(state, saveProgress, continueToPhase3) {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0, N: 0, L: 0, T: 0, M: 0 };
  state.riasecnrAnswers.forEach(set => {
    Object.keys(set).forEach(perfil => {
      scores[perfil] += set[perfil];
    });
  });
  state.riasecnrScores = scores;
  let maxPerfil = "R";
  let maxScore = scores["R"];
  Object.entries(scores).forEach(([perfil, pont]) => {
    if (pont > maxScore) {
      maxScore = pont;
      maxPerfil = perfil;
    }
  });
  state.riasecnrResult = maxPerfil;
  saveProgress();
  // NOVO: resultado em página sozinha
  document.getElementById("questionContainer").style.display = "none";
  let phase2Result = document.getElementById("phase2Result");
  phase2Result.style.display = "block";
  document.getElementById("riasecResultText").innerHTML = `
    <div class="profile-summary" style="text-align:center;">
      <h3 style="text-align:center;">Sua pontuação por perfil RIASECNL:</h3>
      <ul style="list-style:none;margin:0;padding:0;text-align:center;">
        <li><b>Realista (R):</b> ${scores.R}</li>
        <li><b>Investigativo (I):</b> ${scores.I}</li>
        <li><b>Artístico (A):</b> ${scores.A}</li>
        <li><b>Social (S):</b> ${scores.S}</li>
        <li><b>Empreendedor (E):</b> ${scores.E}</li>
        <li><b>Convencional (C):</b> ${scores.C}</li>
        <li><b>Naturalista/Ambiental (N):</b> ${scores.N}</li>
        <li><b>Relacional/Cuidador (L):</b> ${scores.L}</li>
        <li><b>Tecnológico/Digital (T):</b> ${scores.T}</li>
        <li><b>Computacional/Informática (M):</b> ${scores.M}</li>
      </ul>
      <p style="text-align:center;"><b>Seu perfil de maior pontuação:</b> <span style="color:#29a1d8">${riasecTypes[state.riasecnrResult]?.nome || state.riasecnrResult}</span></p>
      <button id="continueToPhase3" class="start-button" style="margin-top:20px;">Continuar para a Fase 3</button>
    </div>
  `;
  document.getElementById("continueToPhase3").onclick = () => {
    saveProgress();
    continueToPhase3();
  };
}
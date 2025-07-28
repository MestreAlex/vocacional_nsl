import { areasPerguntasListas } from "./areas_perguntas.js";
import { areasInfo } from "./areas.js";
import { inicializarPontuacaoAreas, obterAreasMaisPontuadas, rankingAreas } from "./fase3a_utils.js";

export function showAreasPerguntas(state, saveProgress, finishFase2A) {
  const listaIdx = state.currentPhase2A;
  const lista = areasPerguntasListas[listaIdx];
  document.getElementById("questionText").innerHTML = `<div style="text-align:center;font-weight:bold;"><b>Rodada ${listaIdx + 1}/5 - Atribua uma nota de 1 a 10 para cada alternativa, SEM repetir a nota na mesma rodada</b></div>`;
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";
  if (!state.respostasFase2A[listaIdx]) state.respostasFase2A[listaIdx] = {};
  const respostasRodada = state.respostasFase2A[listaIdx];
  let notaPorValor = {};
  Object.entries(respostasRodada).forEach(([idx, nota]) => {
    if (nota) notaPorValor[nota] = idx;
  });

  const perguntasGroup = document.createElement("div");
  perguntasGroup.style.display = "flex";
  perguntasGroup.style.flexDirection = "column";
  perguntasGroup.style.alignItems = "center";
  perguntasGroup.style.gap = "0px";

  lista.forEach((q, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "area-question-card";
    wrapper.innerHTML = `<span>${q.texto}</span> `;
    const notaRow = document.createElement("div");
    notaRow.style.display = "flex";
    notaRow.style.gap = "2px";
    for (let n = 1; n <= 10; n++) {
      const btn = document.createElement("button");
      btn.textContent = n;
      btn.className = "reta-btn";
      if (respostasRodada[i] == n) {
        btn.className += " reta-btn-selected";
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
      }
      if (notaPorValor[n] !== undefined && notaPorValor[n] != i) {
        btn.disabled = true;
        btn.className += " reta-btn-disabled";
      }
      btn.onclick = () => {
        if (respostasRodada[i] == n) {
          delete notaPorValor[n];
          delete respostasRodada[i];
        } else {
          if (notaPorValor[n] !== undefined && notaPorValor[n] != i) {
            const idxAnterior = notaPorValor[n];
            delete respostasRodada[idxAnterior];
          }
          if (respostasRodada[i] !== undefined) {
            const antigoVal = respostasRodada[i];
            delete notaPorValor[antigoVal];
          }
          respostasRodada[i] = n;
          notaPorValor[n] = i;
        }
        saveProgress();
        showAreasPerguntas(state, saveProgress, finishFase2A);
      };
      notaRow.appendChild(btn);
    }
    wrapper.appendChild(notaRow);
    perguntasGroup.appendChild(wrapper);
  });

  optionsContainer.appendChild(perguntasGroup);

  const navDiv = document.createElement("div");
  navDiv.style.margin = "18px 0 0 0";
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";
  navDiv.style.gap = "16px";

  if (listaIdx > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.onclick = () => {
      state.currentPhase2A = listaIdx - 1;
      showAreasPerguntas(state, saveProgress, finishFase2A);
    };
    navDiv.appendChild(prevBtn);
  }
  const allAnswered = Object.keys(respostasRodada).length === lista.length && Object.values(respostasRodada).every(v => v) &&
    new Set(Object.values(respostasRodada)).size === lista.length && Object.values(respostasRodada).every(v => v >= 1 && v <= 10);
  const nextBtn = document.createElement("button");
  nextBtn.textContent = listaIdx === 4 ? "Finalizar Fase 2A" : "Próxima";
  nextBtn.className = "start-button";
  nextBtn.disabled = !allAnswered;
  nextBtn.onclick = () => {
    if (listaIdx === 4) finishFase2A(state, saveProgress);
    else {
      state.currentPhase2A = listaIdx + 1;
      saveProgress();
      showAreasPerguntas(state, saveProgress, finishFase2A);
    }
  };
  navDiv.appendChild(nextBtn);
  optionsContainer.appendChild(navDiv);

  document.getElementById("progress").textContent = `Rodada ${listaIdx + 1} de 5 (${lista.length} perguntas)`;
}

export function finishFase2A(state, saveProgress, continueToFase3A) {
  state.areasRodadasFase2A = areasPerguntasListas;

  const pontuacao = inicializarPontuacaoAreas();
  state.respostasFase2A.forEach((rodada, idxRodada) => {
    Object.entries(rodada).forEach(([idxPerg, nota]) => {
      const area = areasPerguntasListas[idxRodada][parseInt(idxPerg)].area;
      pontuacao[area] += parseInt(nota, 10) || 0;
    });
  });
  state.rankingAreasFase2A = rankingAreas(pontuacao);
  state.principaisAreasFase2A = obterAreasMaisPontuadas(pontuacao);
  saveProgress();
  let el2A = document.getElementById("phase2AResult");
  if (!el2A) {
    el2A = document.createElement("div");
    el2A.id = "phase2AResult";
    document.body.appendChild(el2A);
  }
  el2A.style.display = "flex";
  el2A.style.flexDirection = "column";
  el2A.style.justifyContent = "center";
  el2A.style.alignItems = "center";
  el2A.style.minHeight = "60vh";
  el2A.innerHTML = `
    <div style="max-width:600px;width:100%;display:flex;flex-direction:column;align-items:center;">
      <h3 style="text-align:center;">Áreas de maior afinidade</h3>
      <ol style="text-align:center;padding-left:0;list-style-position:inside;">
        ${state.rankingAreasFase2A.map(r => `<li style="margin-bottom:6px;"><b>${areasInfo[r.area].nome}</b>: ${r.pontos} pontos</li>`).join("")}
      </ol>
      <button id="continueToFase3A" class="start-button" style="margin-top:18px;">Continuar para Fase 3A</button>
    </div>
  `;
  document.getElementById("continueToFase3A").onclick = () => {
    saveProgress();
    continueToFase3A();
  };
}
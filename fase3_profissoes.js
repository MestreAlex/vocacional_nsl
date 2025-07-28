import { discRiasecnlPerguntasDominancia } from "./disc_riasecnl_perguntas_dominancia.js";
import { discRiasecnlPerguntasInfluencia } from "./disc_riasecnl_perguntas_influencia.js";
import { discRiasecnlPerguntasEstabilidade } from "./disc_riasecnl_perguntas_estabilidade.js";
import { discRiasecnlPerguntasConformidade } from "./disc_riasecnl_perguntas_conformidade.js";
import { discRiasecnlProfessions } from "./disc_riasecnl_profissoes.js";
import { getFase3Rodadas, calcularPontuacaoProfissoes, getTopProfissoes } from "./fase3_utils.js";
import { discTypes } from "./disc.js";
import { riasecTypes } from "./riasec.js";
import { areasInfo } from "./areas.js";
import { discAreasProfissoes } from "./disc_areas_profissoes.js";

export function shuffleAvoidSamePosition(arr, prevArr) {
  if (!prevArr) return arr.slice().sort(() => Math.random() - 0.5);
  let shuffled, tries = 0, maxTries = 20;
  do {
    shuffled = arr.slice().sort(() => Math.random() - 0.5);
    tries++;
    var same = shuffled.some((q, idx) => prevArr[idx] && (
      (q.perfil && prevArr[idx].perfil && q.perfil === prevArr[idx].perfil) ||
      (q.profissao && prevArr[idx].profissao && q.profissao === prevArr[idx].profissao)
    ));
  } while (same && tries < maxTries);
  return shuffled;
}

export function getPerguntasFase3PorPerfil(discPerfil) {
  switch (discPerfil) {
    case 'Dominancia':
      return discRiasecnlPerguntasDominancia.Dominancia;
    case 'Influencia':
      return discRiasecnlPerguntasInfluencia.Influencia;
    case 'Estabilidade':
      return discRiasecnlPerguntasEstabilidade.Estabilidade;
    case 'Conformidade':
      return discRiasecnlPerguntasConformidade.Conformidade;
    default:
      return {};
  }
}

export function startPhase3(state, saveProgress, showFase3Rodada) {
  state.currentPhase = 3;
  state.fase3PreviousOrder = null;
  state.fase3RodadaOrder = {};
  state.fase3NotasUsadas = {};
  state.fase3NotaPorValor = {};
  const perguntasFase3 = getPerguntasFase3PorPerfil(state.discResult);
  state.fase3Rodadas = getFase3Rodadas(perguntasFase3, state.riasecnrResult);
  state.fase3Respostas = [];
  state.fase3RodadaAtual = 0;
  saveProgress();
  showFase3Rodada(state, saveProgress, finishPhase3);
}

export function showFase3Rodada(state, saveProgress, finishPhase3) {
  let rodada = state.fase3RodadaAtual;
  if (!state.fase3RodadaOrder[rodada]) {
    let perguntasRodada = state.fase3Rodadas[rodada];
    perguntasRodada = shuffleAvoidSamePosition(perguntasRodada, state.fase3PreviousOrder);
    state.fase3PreviousOrder = perguntasRodada;
    state.fase3RodadaOrder[rodada] = perguntasRodada;
  }
  let perguntasRodada = state.fase3RodadaOrder[rodada];
  if (!state.fase3NotasUsadas[rodada]) state.fase3NotasUsadas[rodada] = {};
  if (!state.fase3NotaPorValor[rodada]) state.fase3NotaPorValor[rodada] = {};
  let notasUsadas = state.fase3NotasUsadas[rodada];
  let notaPorValor = state.fase3NotaPorValor[rodada];

  document.getElementById("questionText").innerHTML =
    `<div style="text-align:center;">
      <div style="font-size:1.2em;font-weight:bold;margin-bottom:6px;">
        Fase 3 — Rodada ${state.fase3RodadaAtual + 1} de 5:
      </div>
      <div style="font-size:1.1em;color:#29a1d8;">
        Avalie sua afinidade com cada profissão
      </div>
      <div style="font-size:1em;font-style:italic;color:#666;margin-top:4px;">
        (atribua uma nota de 1 a 10, sem repetir a nota nesta rodada)
      </div>
    </div>`;
  document.getElementById("questionText").style.textAlign = "center";

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  let perguntasGroup = document.createElement("div");
  perguntasGroup.style.display = "flex";
  perguntasGroup.style.flexDirection = "column";
  perguntasGroup.style.alignItems = "center";
  perguntasGroup.style.gap = "0px";

  let retas = [];

  perguntasRodada.forEach((q, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "0 auto 6px auto";
    wrapper.style.background = "#fafdfe";
    wrapper.style.borderRadius = "13px";
    wrapper.style.boxShadow = "0 1px 6px rgba(65,130,180,0.07)";
    wrapper.style.fontSize = "1.02em";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";

    const pergunta = document.createElement("div");
    pergunta.textContent = q.pergunta;
    pergunta.style.fontWeight = "500";
    pergunta.style.marginBottom = "10px";
    pergunta.style.fontSize = "1em";
    pergunta.style.textAlign = "center";
    pergunta.style.width = "100%";
    wrapper.appendChild(pergunta);

    const reta = document.createElement("div");
    reta.className = "reta-pontuacao";
    reta.style.display = "flex";
    reta.style.justifyContent = "center";
    reta.style.gap = "2px";
    reta.style.margin = "0 0 8px 0";
    reta.style.width = "100%";
    retas[idx] = reta;

    for (let val = 1; val <= 10; val++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = val;
      btn.className = "reta-btn" + (notasUsadas[idx] === val ? " reta-btn-selected" : "");
      btn.dataset.value = val;
      btn.dataset.idx = idx;
      btn.onclick = function () {
        if (notasUsadas[idx] === val) {
          delete notaPorValor[val];
          delete notasUsadas[idx];
          saveProgress();
          updateRetas();
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
        updateRetas();
      };
      if (notasUsadas[idx] === val) {
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
      }
      reta.appendChild(btn);
    }
    wrapper.appendChild(reta);
    perguntasGroup.appendChild(wrapper);
  });

  function updateRetas() {
    perguntasRodada.forEach((q, idx) => {
      const reta = retas[idx];
      reta.querySelectorAll(".reta-btn").forEach(btn => {
        const val = parseInt(btn.dataset.value, 10);
        if (notasUsadas[idx] === val) {
          btn.classList.add("reta-btn-selected");
          btn.classList.remove("reta-btn-disabled");
          btn.disabled = false;
        } else if (notaPorValor[val] !== undefined) {
          btn.classList.remove("reta-btn-selected");
          btn.classList.add("reta-btn-disabled");
          btn.disabled = true;
        } else {
          btn.classList.remove("reta-btn-selected");
          btn.classList.remove("reta-btn-disabled");
          btn.disabled = false;
        }
      });
    });
  }
  updateRetas();

  optionsContainer.appendChild(perguntasGroup);

  const navDiv = document.createElement("div");
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";
  navDiv.style.gap = "24px";
  navDiv.style.marginTop = "18px";

  if (state.fase3RodadaAtual > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.className = "nav-button";
    prevBtn.onclick = () => {
      state.fase3RodadaAtual--;
      saveProgress();
      showFase3Rodada(state, saveProgress, finishPhase3);
    };
    navDiv.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = (state.fase3RodadaAtual === state.fase3Rodadas.length - 1) ? "Finalizar Fase 3" : "Próxima rodada";
  nextBtn.className = "start-button";
  nextBtn.style.marginTop = "7px";
  nextBtn.onclick = () => {
    let allSelected = true;
    let respostasRodada = [];
    perguntasRodada.forEach((q, idx) => {
      const val = notasUsadas[idx];
      if (val === undefined) allSelected = false;
      respostasRodada.push({ profissao: q.profissao, nota: parseInt(val, 10) || 0 });
    });
    if (!allSelected) {
      alert("Selecione uma nota diferente para cada profissão!");
      return;
    }
    state.fase3Respostas[state.fase3RodadaAtual] = respostasRodada;
    saveProgress();

    state.fase3RodadaAtual++;
    if (state.fase3RodadaAtual < state.fase3Rodadas.length) {
      showFase3Rodada(state, saveProgress, finishPhase3);
    } else {
      finishPhase3(state, saveProgress);
    }
  };
  navDiv.appendChild(nextBtn);

  optionsContainer.appendChild(navDiv);

  document.getElementById("progress").textContent = `Perguntas ${state.fase3RodadaAtual * 8 + 1} a ${(state.fase3RodadaAtual + 1) * 8} de 40`;
  document.getElementById("progress").style.textAlign = "center";
}

function renderFase3AResult(state) {
  if (!state.areaPrincipalFase3A || !state.rodadasFase3A || !state.respostasFase3A) return "";
  const pontuacaoProfissoes = {};
  state.rodadasFase3A.forEach((pergRodada, rodadaIdx) => {
    pergRodada.forEach((q, idxPerg) => {
      const nota = state.respostasFase3A[rodadaIdx]?.[idxPerg];
      if (!pontuacaoProfissoes[q.profissao]) pontuacaoProfissoes[q.profissao] = 0;
      pontuacaoProfissoes[q.profissao] += Number(nota) || 0;
    });
  });
  const ranking = Object.entries(pontuacaoProfissoes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([profissao, pontos]) => ({ profissao, pontos }));
  const area = state.areaPrincipalFase3A;
  const areaObj = areasInfo[area] || { nome: area, descricao: "" };

  let cursosPorProfissao = {};
  let profissoesArea = discAreasProfissoes?.[area] || [];
  if (Array.isArray(profissoesArea)) {
    profissoesArea.forEach(p => {
      if (typeof p === "object" && p.profissao) {
        cursosPorProfissao[p.profissao] = p.cursos || [];
      }
    });
  }

  return `
    <div class="area3a-summary" style="margin-bottom:22px;padding:12px 8px;background:#fafdff;border-radius:10px;">
      <h4 style="color:#29a1d8;text-align:center;margin-bottom:5px;">FASE 03A — Área de maior afinidade</h4>
      <div style="text-align:center;font-size:1.08em;"><b>${areaObj.nome}</b></div>
      <div style="text-align:center;font-size:0.98em;margin-top:5px;color:#444;">
        ${areaObj.descricao || ""}
      </div>
      <div style="margin-top:10px;">
        <b style="display:block;text-align:center;">Top 10 profissões nesta área:</b>
        <ol style="margin-top:7px;margin-bottom:0;padding-left:18px;">
          ${
            ranking
              .map(
                (r) => {
                  const cursos = (cursosPorProfissao[r.profissao] || []);
                  return `<li style="margin-bottom:8px;">
                    <b>${r.profissao}</b>: ${r.pontos} pontos
                    ${cursos.length ? `<br><span style="font-size:0.97em;color:#666;">Cursos indicados: ${cursos.join(", ")}</span>` : ""}
                  </li>`;
                }
              )
              .join("")
          }
        </ol>
      </div>
    </div>
  `;
}

function renderFase3Result(state, pontuacoes, top10) {
  const areaEscolhida = state.riasecnrResult;
  const areaObj = (areaEscolhida && riasecTypes[areaEscolhida]) ? riasecTypes[areaEscolhida] : { nome: areaEscolhida, descricao: "" };

  let cursosPorProfissao = {};
  try {
    const discProfile = state.discResult;
    let profissoesArea = discRiasecnlProfessions?.[discProfile]?.[areaEscolhida] || [];
    if (Array.isArray(profissoesArea)) {
      profissoesArea.forEach(p => {
        if (typeof p === "object" && p.profissao) {
          cursosPorProfissao[p.profissao] = p.cursos || [];
        }
      });
    }
  } catch (e) {}

  return `
    <div class="area3-summary" style="margin-bottom:22px;padding:12px 8px;background:#fafdff;border-radius:10px;">
      <h4 style="color:#29a1d8;text-align:center;margin-bottom:5px;">FASE 03 — Área de maior afinidade</h4>
      <div style="text-align:center;font-size:1.08em;"><b>${areaObj.nome || ""}</b></div>
      <div style="text-align:center;font-size:0.98em;margin-top:5px;color:#444;">
        ${areaObj.descricao || ""}
      </div>
      <div style="margin-top:10px;">
        <b style="display:block;text-align:center;">Top 10 profissões nesta área:</b>
        <ol style="margin-top:7px;margin-bottom:0;padding-left:18px;">
          ${
            top10
              .map(
                ({ profissao, pontuacao }) => {
                  const cursos = (cursosPorProfissao[profissao] || []);
                  return `<li style="margin-bottom:8px;">
                    <b>${profissao}</b>: ${pontuacao} pontos
                    ${cursos.length ? `<br><span style="font-size:0.97em;color:#666;">Cursos indicados: ${cursos.join(", ")}</span>` : ""}
                  </li>`;
                }
              )
              .join("")
          }
        </ol>
      </div>
    </div>
  `;
}

export function finishPhase3(state, saveProgress) {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("finalResults").style.display = "block";
  const pontuacoes = calcularPontuacaoProfissoes(state.fase3Respostas);
  const top10 = getTopProfissoes(pontuacoes, 10);

  let perfilDiscHtml = "";
  if (state.discResult && discTypes[state.discResult]) {
    perfilDiscHtml = `
      <div class="disc-summary" style="margin-bottom:20px;padding:12px 8px;background:#f4fafd;border-radius:10px;">
        <h4 style="color:#29a1d8;text-align:center;margin-bottom:5px;">Seu Perfil Comportamental DISC</h4>
        <div style="text-align:center;font-size:1.08em;"><b>${discTypes[state.discResult].nome}</b></div>
        <div style="text-align:center;font-size:0.98em;margin-top:5px;color:#444;">
          ${discTypes[state.discResult].descricao}
        </div>
      </div>
    `;
  }

  let fase3aHtml = renderFase3AResult(state);

  let fase3Html = renderFase3Result(state, pontuacoes, top10);

  document.getElementById("finalResultsText").innerHTML = `
    ${perfilDiscHtml}
    ${fase3aHtml}
    ${fase3Html}
    <p style="text-align:center;margin-top:18px;">Use este resultado como inspiração para sua escolha profissional.</p>
  `;
  saveProgress();
  localStorage.removeItem("progressoQuizRiasecDisc");
}
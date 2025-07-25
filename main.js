// Imports das perguntas da fase 3 por perfil comportamental
import { discRiasecnlPerguntasDominancia } from "./disc_riasecnl_perguntas_dominancia.js";
import { discRiasecnlPerguntasInfluencia } from "./disc_riasecnl_perguntas_influencia.js";
import { discRiasecnlPerguntasEstabilidade } from "./disc_riasecnl_perguntas_estabilidade.js";
import { discRiasecnlPerguntasConformidade } from "./disc_riasecnl_perguntas_conformidade.js";

import { discQuestions } from "./disc_perguntas.js";
import { riasecnrQuestionSets } from "./riasecnr_perguntas.js";
import { discRiasecnlProfessions } from "./disc_riasecnl_profissoes.js";
import { riasecTypes } from "./riasec.js";
import { discTypes } from "./disc.js";
import { getFase3Rodadas, calcularPontuacaoProfissoes, getTopProfissoes } from "./fase3_utils.js";

// Fase 1
let currentPhase = 1;
let currentQuestion = 0;
let discAnswers = [];
let riasecnrAnswers = [];
let discResult = null;
let discScores = null;
let riasecnrScores = null;
let riasecnrResult = null;

// Fase 3 controles
let fase3Rodadas = [];
let fase3Respostas = [];
let fase3RodadaAtual = 0;

// Utilidades de interface
function hideAll() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("phase1Result").style.display = "none";
  document.getElementById("phase2Result").style.display = "none";
  document.getElementById("finalResults").style.display = "none";
}

// Intro
function showIntro() {
  hideAll();
  document.getElementById("intro").style.display = "block";
  const h1 = document.querySelector("#intro h1");
  if (h1) h1.style.textAlign = "center";
}

// Fase 1: DISC
function startPhase1() {
  currentPhase = 1;
  currentQuestion = 0;
  discAnswers = [];
  hideAll();
  document.getElementById("questionContainer").style.display = "block";
  showDiscQuestion();
}

function showDiscQuestion() {
  const questionsPerPage = 4;
  const startIdx = currentQuestion;
  const endIdx = Math.min(startIdx + questionsPerPage, discQuestions.length);
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  // Legenda no topo das perguntas da FASE 1
  document.getElementById("questionText").innerHTML = `
    <div style="text-align:left; margin-bottom:12px; font-size:0.93em;">
      <b>Legenda:</b>
      <span style="margin-left:7px;">1 = discordo totalmente</span>
      <span style="margin-left:7px;">2 = discordo</span>
      <span style="margin-left:7px;">3 = neutro</span>
      <span style="margin-left:7px;">4 = concordo</span>
      <span style="margin-left:7px;">5 = concordo totalmente</span>
    </div>
    <div style="font-weight:bold; margin-bottom:8px;">Responda às questões abaixo:</div>
  `;
  document.getElementById("questionText").style.textAlign = "center";

  const questionsGroup = document.createElement("div");
  questionsGroup.style.display = "flex";
  questionsGroup.style.flexDirection = "column";
  questionsGroup.style.alignItems = "center";
  questionsGroup.style.gap = "12px"; // espaçamento reduzido entre perguntas

  for (let i = startIdx; i < endIdx; i++) {
    const question = discQuestions[i];
    const qWrapper = document.createElement("div");
    qWrapper.className = "disc-question-card";
    qWrapper.style.textAlign = "center";
    qWrapper.style.margin = "0 auto";
    qWrapper.style.background = "#fafdfe";
    qWrapper.style.borderRadius = "12px";
    qWrapper.style.padding = "18px 10px";
    qWrapper.style.boxShadow = "0 2px 8px rgba(65,130,180,0.07)";
    qWrapper.style.maxWidth = "340px";

    const qText = document.createElement("div");
    qText.textContent = question.text;
    qText.style.fontWeight = "500";
    qText.style.fontSize = "1.07em";
    qText.style.marginBottom = "8px";
    qText.style.textAlign = "center";
    qWrapper.appendChild(qText);

    // Botões com números de 1 a 5
    const optsRow = document.createElement("div");
    optsRow.className = "optsRow";
    optsRow.style.display = "flex";
    optsRow.style.justifyContent = "center";
    optsRow.style.gap = "5px";
    optsRow.style.marginBottom = "2px";
    for (let val = 1; val <= 5; val++) {
      const btn = document.createElement("button");
      btn.className = "disc-option-btn" + (discAnswers[i] === val ? " selected" : "");
      btn.textContent = val;
      btn.onclick = () => {
        discAnswers[i] = val;
        showDiscQuestion();
      };
      if (discAnswers[i] === val) {
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
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
      currentQuestion = Math.max(0, currentQuestion - questionsPerPage);
      showDiscQuestion();
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
      currentQuestion = endIdx;
      showDiscQuestion();
    }
  };
  navContainer.appendChild(nextBtn);

  optionsContainer.appendChild(navContainer);

  document.getElementById("progress").textContent = `Questões ${startIdx + 1} a ${endIdx} de ${discQuestions.length}`;
  document.getElementById("progress").style.textAlign = "center";
}

function finishPhase1() {
  const { perfil, scores } = calculateDiscProfileWithScores(discAnswers);
  discResult = perfil;
  discScores = scores;
  hideAll();
  document.getElementById("phase1Result").style.display = "block";

  let pontuacaoHtml = `
    <div class="profile-summary" style="text-align:center;">
      <h3 style="text-align:center;">Seu Perfil DISC: ${discTypes[discResult]?.nome || discResult}</h3>
      <p style="text-align:center;">${discTypes[discResult]?.descricao || ""}</p>
      <div class="area-result" style="margin:22px auto;text-align:center;">
        <h4 style="text-align:center;color:#29a1d8;margin-bottom:14px;">Pontuação dos Perfis DISC</h4>
        <table style="margin:0 auto;width:80%;font-size:1.14em;text-align:center;">
          <tr>
            <th style="padding:8px 12px;">Dominância (D)</th>
            <th style="padding:8px 12px;">Influência (I)</th>
            <th style="padding:8px 12px;">Estabilidade (S)</th>
            <th style="padding:8px 12px;">Conformidade (C)</th>
          </tr>
          <tr>
            <td style="padding:8px 12px;">${scores.Dominancia}</td>
            <td style="padding:8px 12px;">${scores.Influencia}</td>
            <td style="padding:8px 12px;">${scores.Estabilidade}</td>
            <td style="padding:8px 12px;">${scores.Conformidade}</td>
          </tr>
        </table>
      </div>
      <button id="continueToPhase2" class="start-button" style="margin-top:20px;">Continuar para a Fase 2</button>
    </div>
  `;
  document.getElementById("discResultText").innerHTML = pontuacaoHtml;
  document.getElementById("continueToPhase2").onclick = startPhase2;
}

// Fase 2: RIASECNR
function startPhase2() {
  currentPhase = 2;
  currentQuestion = 0;
  riasecnrAnswers = [];
  hideAll();
  document.getElementById("questionContainer").style.display = "block";
  showRiasecnrQuestionSet();
}

function showRiasecnrQuestionSet() {
  const set = riasecnrQuestionSets[currentQuestion];
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  let notasUsadas = {};
  let notaPorValor = {};
  let retas = [];

  set.forEach((q, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "riasec-card";
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "0 auto 6px auto";
    wrapper.style.maxWidth = "340px";
    wrapper.style.background = "#fafdfe";
    wrapper.style.borderRadius = "12px";
    wrapper.style.padding = "13px 8px";
    wrapper.style.boxShadow = "0 1px 6px rgba(65,130,180,0.05)";

    const pergunta = document.createElement("div");
    pergunta.style.fontWeight = "500";
    pergunta.style.marginBottom = "8px";
    pergunta.style.fontSize = "1.02em";
    pergunta.textContent = q.texto;
    pergunta.style.textAlign = "center";
    wrapper.appendChild(pergunta);

    // Botões de 1 a 10 (sem zero)
    const reta = document.createElement("div");
    reta.className = "reta-pontuacao";
    reta.style.display = "flex";
    reta.style.justifyContent = "center";
    reta.style.gap = "5px";
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
        if (notaPorValor[val] !== undefined && notaPorValor[val] !== idx) return;
        if (notasUsadas[idx] !== undefined) {
          const antigoVal = notasUsadas[idx];
          delete notaPorValor[antigoVal];
        }
        notasUsadas[idx] = val;
        notaPorValor[val] = idx;
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
    optionsContainer.appendChild(wrapper);
  });

  function updateRetas() {
    set.forEach((q, idx) => {
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

  const btn = document.createElement("button");
  btn.textContent = (currentQuestion === riasecnrQuestionSets.length - 1) ? "Finalizar Fase 2" : "Próxima";
  btn.className = "start-button";
  btn.style.marginTop = "12px";
  btn.onclick = () => {
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
    riasecnrAnswers.push(setAnswers);

    if (currentQuestion < riasecnrQuestionSets.length - 1) {
      currentQuestion++;
      showRiasecnrQuestionSet();
    } else {
      finishPhase2();
    }
  };
  optionsContainer.appendChild(btn);
  document.getElementById("progress").textContent = `Rodada ${currentQuestion + 1} de ${riasecnrQuestionSets.length}`;
  document.getElementById("progress").style.textAlign = "center";
}

function finishPhase2() {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0, N: 0, L: 0 };
  riasecnrAnswers.forEach(set => {
    Object.keys(set).forEach(perfil => {
      scores[perfil] += set[perfil];
    });
  });
  riasecnrScores = scores;
  let maxPerfil = "R";
  let maxScore = scores["R"];
  Object.entries(scores).forEach(([perfil, pont]) => {
    if (pont > maxScore) {
      maxScore = pont;
      maxPerfil = perfil;
    }
  });
  riasecnrResult = maxPerfil;

  hideAll();
  document.getElementById("phase2Result").style.display = "block";
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
      </ul>
      <p style="text-align:center;"><b>Seu perfil de maior pontuação:</b> <span style="color:#29a1d8">${riasecTypes[riasecnrResult]?.nome || riasecnrResult}</span></p>
      <button id="continueToPhase3" class="start-button" style="margin-top:20px;">Continuar para a Fase 3</button>
    </div>
  `;
  document.getElementById("continueToPhase3").onclick = startPhase3;
}

// Função para obter perguntas da FASE 3 de acordo com o perfil DISC
function getPerguntasFase3PorPerfil(discPerfil) {
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

// Fase 3: Profissões específicas
function startPhase3() {
  currentPhase = 3;

  // Aqui está a alteração fundamental: escolher perguntas da FASE 3 conforme perfil DISC
  const perguntasFase3 = getPerguntasFase3PorPerfil(discResult);

  // O getFase3Rodadas agora recebe as perguntas do perfil comportamental correto
  fase3Rodadas = getFase3Rodadas(perguntasFase3, riasecnrResult);
  fase3Respostas = [];
  fase3RodadaAtual = 0;
  hideAll();
  document.getElementById("questionContainer").style.display = "block";
  showFase3Rodada();
}

function showFase3Rodada() {
  const perguntasRodada = fase3Rodadas[fase3RodadaAtual];
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  document.getElementById("questionText").innerHTML =
    `<div style="text-align:center;">
      <div style="font-size:1.2em;font-weight:bold;margin-bottom:6px;">
        Fase 3 — Rodada ${fase3RodadaAtual + 1} de 5:
      </div>
      <div style="font-size:1.1em;color:#29a1d8;">
        Avalie sua afinidade com cada profissão
      </div>
      <div style="font-size:1em;font-style:italic;color:#666;margin-top:4px;">
        (atribua uma nota de 1 a 10, sem repetir a nota nesta rodada)
      </div>
    </div>`;
  document.getElementById("questionText").style.textAlign = "center";

  let notasUsadas = {};
  let notaPorValor = {};
  let retas = [];

  perguntasRodada.forEach((q, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "0 auto 6px auto";
    wrapper.style.maxWidth = "340px";
    wrapper.style.background = "#fafdfe";
    wrapper.style.borderRadius = "13px";
    wrapper.style.padding = "14px 0 0 0";
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

    // Botões de 1 a 10 (sem zero)
    const reta = document.createElement("div");
    reta.className = "reta-pontuacao";
    reta.style.display = "flex";
    reta.style.justifyContent = "center";
    reta.style.gap = "5px";
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
        if (notaPorValor[val] !== undefined && notaPorValor[val] !== idx) return;
        if (notasUsadas[idx] !== undefined) {
          const antigoVal = notasUsadas[idx];
          delete notaPorValor[antigoVal];
        }
        notasUsadas[idx] = val;
        notaPorValor[val] = idx;
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
    optionsContainer.appendChild(wrapper);
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

  const navContainer = document.createElement("div");
  navContainer.style.display = "flex";
  navContainer.style.justifyContent = "center";
  navContainer.style.gap = "24px";
  navContainer.style.marginTop = "18px";

  const btn = document.createElement("button");
  btn.textContent = (fase3RodadaAtual === fase3Rodadas.length - 1) ? "Finalizar Fase 3" : "Próxima rodada";
  btn.className = "start-button";
  btn.style.marginTop = "7px";
  btn.onclick = () => {
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
    fase3Respostas.push(respostasRodada);

    if (fase3RodadaAtual < fase3Rodadas.length - 1) {
      fase3RodadaAtual++;
      showFase3Rodada();
    } else {
      finishPhase3();
    }
  };
  navContainer.appendChild(btn);
  optionsContainer.appendChild(navContainer);

  document.getElementById("progress").textContent = `Perguntas ${fase3RodadaAtual * 8 + 1} a ${(fase3RodadaAtual + 1) * 8} de 40`;
  document.getElementById("progress").style.textAlign = "center";
}

function finishPhase3() {
  hideAll();
  document.getElementById("finalResults").style.display = "block";
  const pontuacoes = calcularPontuacaoProfissoes(fase3Respostas);
  const top3 = getTopProfissoes(pontuacoes, 3);
  const profissaoObjs = discRiasecnlProfessions[discResult][riasecnrResult];
  let html = `<h3 style="text-align:center;">Suas profissões de maior afinidade:</h3><ul style="text-align:center;">`;
  top3.forEach(({ profissao, pontuacao }) => {
    const obj = profissaoObjs.find(p => (p.profissao || p) === profissao);
    const cursos = obj?.cursos || [];
    html += `<li>
      <div class="profession-match" style="text-align:center;">
        <span><b>${profissao}</b> <span style="color:#29a1d8;">(${pontuacao} pontos)</span></span><br>
        <span style="font-size:0.97em;color:#666;">Cursos indicados: ${cursos.join(", ")}</span>
      </div>
    </li>`;
  });
  html += `</ul><p style="text-align:center;">Use este resultado como inspiração para sua escolha profissional.</p>`;
  document.getElementById("finalResultsText").innerHTML = html;
}

// Calcula o perfil DISC e também retorna pontuações
function calculateDiscProfileWithScores(answers) {
  const scores = {
    Dominancia: answers.slice(0, 5).reduce((a, b) => a + b, 0),
    Influencia: answers.slice(5, 10).reduce((a, b) => a + b, 0),
    Estabilidade: answers.slice(10, 15).reduce((a, b) => a + b, 0),
    Conformidade: answers.slice(15, 20).reduce((a, b) => a + b, 0)
  };
  const perfil = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  return { perfil, scores };
}

window.onload = () => {
  showIntro();
  document.getElementById("start-button").onclick = startPhase1;
};
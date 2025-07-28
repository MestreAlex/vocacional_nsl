import { discAreasPerguntasDominancia } from "./disc_areas_perguntas_dominancia.js";
import { discAreasPerguntasInfluencia } from "./disc_areas_perguntas_influencia.js";
import { discAreasPerguntasEstabilidade } from "./disc_areas_perguntas_estabilidade.js";
import { discAreasPerguntasConformidade } from "./disc_areas_perguntas_conformidade.js";
import { areasInfo } from "./areas.js";
import { inicializarPontuacaoAreas, rankingAreas } from "./fase3a_utils.js";

export function desempateNotasAltas(respostasFase2A, areasRodadasFase2A) {
  const areaNotas = {};
  respostasFase2A.forEach((rodada, idxRodada) => {
    Object.entries(rodada).forEach(([idxPerg, nota]) => {
      const perguntaObj = areasRodadasFase2A?.[idxRodada]?.[parseInt(idxPerg, 10)];
      if (!perguntaObj || !perguntaObj.area) return;
      const area = perguntaObj.area;
      if (!areaNotas[area]) areaNotas[area] = [];
      areaNotas[area].push(parseInt(nota, 10));
    });
  });
  let max = -Infinity;
  let areasEmpatadas = [];
  Object.entries(areaNotas).forEach(([area, notas]) => {
    const soma = notas.reduce((a, b) => a + b, 0);
    if (soma > max) {
      max = soma;
      areasEmpatadas = [area];
    } else if (soma === max) {
      areasEmpatadas.push(area);
    }
  });
  if (areasEmpatadas.length === 1) return areasEmpatadas[0];
  for (let notaTestada = 10; notaTestada >= 1; notaTestada--) {
    let maxQtd = -Infinity;
    let areasComMais = [];
    areasEmpatadas.forEach(area => {
      const qtd = areaNotas[area].filter(n => n === notaTestada).length;
      if (qtd > maxQtd) {
        maxQtd = qtd;
        areasComMais = [area];
      } else if (qtd === maxQtd) {
        areasComMais.push(area);
      }
    });
    if (areasComMais.length === 1) return areasComMais[0];
    areasEmpatadas = areasComMais;
  }
  return areasEmpatadas[0] || null;
}

export function gerarRodadasFase3A(perfilDisc, area) {
  let perguntasArea;
  if (perfilDisc === "Dominancia") perguntasArea = discAreasPerguntasDominancia.Dominancia[area];
  else if (perfilDisc === "Influencia") perguntasArea = discAreasPerguntasInfluencia.Influencia[area];
  else if (perfilDisc === "Estabilidade") perguntasArea = discAreasPerguntasEstabilidade.Estabilidade[area];
  else perguntasArea = discAreasPerguntasConformidade.Conformidade[area];
  if (!perguntasArea || typeof perguntasArea !== "object") return [];
  const profissoes = Object.keys(perguntasArea);
  const rodadas = [];
  for (let rodada = 0; rodada < 5; rodada++) {
    const perguntasRodada = [];
    profissoes.forEach(profissao => {
      const perguntas = perguntasArea[profissao];
      if (Array.isArray(perguntas) && perguntas[rodada]) {
        perguntasRodada.push({
          area,
          profissao,
          pergunta: perguntas[rodada]
        });
      }
    });
    rodadas.push(perguntasRodada);
  }
  return rodadas;
}

export function startFase3A(state, saveProgress, showRodadaFase3A) {
  state.currentFase3AQuestion = 0;
  state.respostasFase3A = [];
  state.perguntasFase3A = [];
  state.principaisAreasFase3A = [];
  state.rankingAreasFase3A = [];

  const respondeuAlgo = Array.isArray(state.respostasFase2A) && state.respostasFase2A.some(rodada =>
    rodada && Object.keys(rodada).length > 0
  );
  if (!respondeuAlgo) {
    alert("Você precisa responder à Fase 2A antes de avançar para a Fase 3A.");
    window.location.reload();
    return;
  }

  const rankingAreas = state.rankingAreasFase2A || [];
  const maxPontos = rankingAreas[0]?.pontos;
  const areasEmpatadas = rankingAreas.filter(a => a.pontos === maxPontos).map(a => a.area);

  let areaPrincipal = null;
  if (areasEmpatadas.length === 1) {
    areaPrincipal = areasEmpatadas[0];
  } else {
    if (!state.areasRodadasFase2A) {
      throw new Error("Sem mapeamento das áreas das perguntas da Fase 2A para desempate. Salve esse array ao montar as perguntas da Fase 2A.");
    }
    areaPrincipal = desempateNotasAltas(state.respostasFase2A, state.areasRodadasFase2A);
  }

  state.areaPrincipalFase3A = areaPrincipal;
  const perfilDisc = state.discResult;
  state.rodadasFase3A = gerarRodadasFase3A(perfilDisc, areaPrincipal);
  saveProgress();
  showRodadaFase3A(state, saveProgress, finishFase3A);
}

export function showRodadaFase3A(state, saveProgress, finishFase3A) {
  const rodadaIdx = state.currentFase3AQuestion;
  const perguntasRodada = state.rodadasFase3A[rodadaIdx];
  if (!state.respostasFase3A[rodadaIdx]) state.respostasFase3A[rodadaIdx] = {};
  let respostasRodada = state.respostasFase3A[rodadaIdx];
  let notaPorValor = {};
  Object.entries(respostasRodada).forEach(([idx, nota]) => {
    if (nota) notaPorValor[nota] = idx;
  });

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";
  document.getElementById("questionText").innerHTML = `
    <div style="text-align:center;"><b>Rodada ${rodadaIdx + 1}/5 — Atribua uma nota de 1 a 10 para cada profissão (sem repetir nota nesta rodada)</b>
    <div style="margin:5px 0 12px 0">Área: <b>${areasInfo[perguntasRodada[0].area]?.nome || perguntasRodada[0].area}</b></div></div>
  `;

  const perguntasGroup = document.createElement("div");
  perguntasGroup.style.display = "flex";
  perguntasGroup.style.flexDirection = "column";
  perguntasGroup.style.alignItems = "center";
  perguntasGroup.style.gap = "0px";

  perguntasRodada.forEach((q, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "area-question-card";
    wrapper.innerHTML = `<span>${q.pergunta}</span>`;
    const notaRow = document.createElement("div");
    notaRow.style.display = "flex";
    notaRow.style.gap = "2px";
    for (let n = 1; n <= 10; n++) {
      const btn = document.createElement("button");
      btn.textContent = n;
      btn.className = "reta-btn";
      if (respostasRodada[idx] == n) {
        btn.className += " reta-btn-selected";
        btn.style.background = "#4fc1ad";
        btn.style.color = "#fff";
      }
      if (notaPorValor[n] !== undefined && notaPorValor[n] != idx) {
        btn.disabled = true;
        btn.className += " reta-btn-disabled";
      }
      btn.onclick = () => {
        if (respostasRodada[idx] == n) {
          delete notaPorValor[n];
          delete respostasRodada[idx];
        } else {
          if (notaPorValor[n] !== undefined && notaPorValor[n] != idx) {
            const idxAnterior = notaPorValor[n];
            delete respostasRodada[idxAnterior];
          }
          if (respostasRodada[idx] !== undefined) {
            const antigoVal = respostasRodada[idx];
            delete notaPorValor[antigoVal];
          }
          respostasRodada[idx] = n;
          notaPorValor[n] = idx;
        }
        saveProgress();
        showRodadaFase3A(state, saveProgress, finishFase3A);
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

  if (rodadaIdx > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.onclick = () => {
      state.currentFase3AQuestion = rodadaIdx - 1;
      showRodadaFase3A(state, saveProgress, finishFase3A);
    };
    navDiv.appendChild(prevBtn);
  }
  const allAnswered = Object.keys(respostasRodada).length === perguntasRodada.length && Object.values(respostasRodada).every(v => v) &&
    new Set(Object.values(respostasRodada)).size === perguntasRodada.length && Object.values(respostasRodada).every(v => v >= 1 && v <= 10);
  const nextBtn = document.createElement("button");
  nextBtn.textContent = rodadaIdx === 4 ? "Finalizar Fase 3A" : "Próxima";
  nextBtn.className = "start-button";
  nextBtn.disabled = !allAnswered;
  nextBtn.onclick = () => {
    if (rodadaIdx === 4) finishFase3A(state, saveProgress);
    else {
      state.currentFase3AQuestion = rodadaIdx + 1;
      saveProgress();
      showRodadaFase3A(state, saveProgress, finishFase3A);
    }
  };
  navDiv.appendChild(nextBtn);
  optionsContainer.appendChild(navDiv);

  document.getElementById("progress").textContent = `Rodada ${rodadaIdx + 1} de 5 (${perguntasRodada.length} perguntas)`;
}

export function finishFase3A(state, saveProgress, continueToPhase2) {
  const pontuacaoProfissoes = {};
  state.rodadasFase3A.forEach((pergRodada, rodadaIdx) => {
    pergRodada.forEach((q, idxPerg) => {
      const nota = state.respostasFase3A[rodadaIdx][idxPerg];
      if (!pontuacaoProfissoes[q.profissao]) pontuacaoProfissoes[q.profissao] = 0;
      pontuacaoProfissoes[q.profissao] += Number(nota) || 0;
    });
  });
  const ranking = Object.entries(pontuacaoProfissoes)
    .sort((a, b) => b[1] - a[1])
    .map(([profissao, pontos]) => ({ profissao, pontos }));

  saveProgress();
  document.getElementById("questionContainer").style.display = "none";
  let el3A = document.getElementById("phase3AResult");
  if (!el3A) {
    el3A = document.createElement("div");
    el3A.id = "phase3AResult";
    document.body.appendChild(el3A);
  }
  el3A.style.display = "flex";
  el3A.style.flexDirection = "column";
  el3A.style.justifyContent = "center";
  el3A.style.alignItems = "center";
  el3A.style.minHeight = "60vh";

  // Busca cursos por profissão na área
  import("./disc_areas_profissoes.js").then(({ discAreasProfissoes }) => {
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
    el3A.innerHTML = `
      <div style="max-width:600px;width:100%;display:flex;flex-direction:column;align-items:center;">
        <h3 style="text-align:center;">Profissões de maior afinidade (${areaObj.nome || state.areaPrincipalFase3A})</h3>
        <ol style="text-align:center;padding-left:0;list-style-position:inside;">
          ${ranking.map(r => `<li style="margin-bottom:6px;"><b>${r.profissao}</b>: ${r.pontos} pontos${cursosPorProfissao[r.profissao] && cursosPorProfissao[r.profissao].length ? `<br><span style="font-size:0.97em;color:#666;">Cursos indicados: ${cursosPorProfissao[r.profissao].join(", ")}</span>` : ""}</li>`).join("")}
        </ol>
        <button id="continueToPhase2" class="start-button" style="margin-top:18px;">Continuar para Fase 2</button>
      </div>
    `;
    document.getElementById("continueToPhase2").onclick = () => {
      saveProgress();
      continueToPhase2();
    };
  });
}
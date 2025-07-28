import { showDiscQuestion, showPhase1Result, calculateDiscProfileWithScores } from "./fase1_disc.js";
import { showAreasPerguntas, finishFase2A } from "./fase2a_areas.js";
import { startFase3A, showRodadaFase3A, finishFase3A } from "./fase3a_areas_especificas.js";
import { showRiasecnrQuestionSet, finishPhase2 } from "./fase2_riasecnr.js";
import { startPhase3, showFase3Rodada, finishPhase3 } from "./fase3_profissoes.js";

const STORAGE_KEY = "progressoQuizRiasecDisc";
const state = {
  currentPhase: 1,
  currentQuestion: 0,
  discAnswers: [],
  discResult: null,
  discScores: null,
  currentPhase2A: 0,
  respostasFase2A: [],
  principaisAreasFase2A: [],
  rankingAreasFase2A: [],
  currentFase3AQuestion: 0,
  respostasFase3A: [],
  perguntasFase3A: [],
  principaisAreasFase3A: [],
  rankingAreasFase3A: [],
  areaPrincipalFase3A: null,
  rodadasFase3A: [],
  // Campos para Fase 2 (RIASECN)
  riasecnrRodadaOrder: [],
  riasecnrPrevOrder: [],
  riasecnrNotasUsadas: [],
  riasecnrNotaPorValor: [],
  riasecnrAnswers: [],
  riasecnrScores: null,
  riasecnrResult: null,
  // Campos para Fase 3 Profissões
  fase3Rodadas: [],
  fase3Respostas: [],
  fase3RodadaAtual: 0,
  fase3PreviousOrder: null,
  fase3RodadaOrder: {},
  fase3NotasUsadas: {},
  fase3NotaPorValor: {},
};

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadProgress() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    Object.assign(state, JSON.parse(data));
    return true;
  }
  return false;
}
function hideAll() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("phase1Result").style.display = "none";
  let el2A = document.getElementById("phase2AResult");
  if (el2A) el2A.style.display = "none";
  let el3A = document.getElementById("phase3AResult");
  if (el3A) el3A.style.display = "none";
  document.getElementById("phase2Result").style.display = "none";
  document.getElementById("finalResults").style.display = "none";
}

window.onload = () => {
  loadProgress();
  hideAll();

  if (!localStorage.getItem(STORAGE_KEY)) {
    document.getElementById("intro").style.display = "block";
    document.getElementById("start-button").onclick = () => {
      localStorage.removeItem(STORAGE_KEY);
      Object.keys(state).forEach(k => {
        if (Array.isArray(state[k])) state[k] = [];
        else if (typeof state[k] === "object" && state[k] !== null) state[k] = {};
        else if (typeof state[k] === "number") state[k] = 0;
        else state[k] = null;
      });
      state.currentPhase = 1;
      state.currentQuestion = 0;
      saveProgress();

      hideAll();
      document.getElementById("questionContainer").style.display = "block";
      showDiscQuestion(state, saveProgress, () => {
        const { perfil, scores } = calculateDiscProfileWithScores(state.discAnswers);
        state.discResult = perfil;
        state.discScores = scores;
        saveProgress();
        showPhase1Result(state, saveProgress, hideAll, () => {
          state.currentPhase = "2A";
          saveProgress();
          window.location.reload();
        });
      });
    };
    return;
  }

  if (state.currentPhase === 1) {
    document.getElementById("questionContainer").style.display = "block";
    showDiscQuestion(state, saveProgress, () => {
      const { perfil, scores } = calculateDiscProfileWithScores(state.discAnswers);
      state.discResult = perfil;
      state.discScores = scores;
      saveProgress();
      showPhase1Result(state, saveProgress, hideAll, () => {
        state.currentPhase = "2A";
        saveProgress();
        window.location.reload();
      });
    });
  } else if (state.currentPhase === "2A") {
    document.getElementById("questionContainer").style.display = "block";
    showAreasPerguntas(state, saveProgress, (state, saveProgress) => {
      finishFase2A(state, saveProgress, () => {
        state.currentPhase = "3A";
        saveProgress();
        window.location.reload();
      });
    });
  } else if (state.currentPhase === "3A") {
    document.getElementById("questionContainer").style.display = "block";
    startFase3A(state, saveProgress, showRodadaFase3AWrapper);
  } else if (state.currentPhase === 2) {
    if (!Array.isArray(state.riasecnrRodadaOrder)) state.riasecnrRodadaOrder = [];
    if (!Array.isArray(state.riasecnrPrevOrder)) state.riasecnrPrevOrder = [];
    if (!Array.isArray(state.riasecnrNotasUsadas)) state.riasecnrNotasUsadas = [];
    if (!Array.isArray(state.riasecnrNotaPorValor)) state.riasecnrNotaPorValor = [];
    if (!Array.isArray(state.riasecnrAnswers)) state.riasecnrAnswers = [];
    if (typeof state.currentQuestion !== "number") state.currentQuestion = 0;

    document.getElementById("questionContainer").style.display = "block";
    showRiasecnrQuestionSet(state, saveProgress, (state, saveProgress) => {
      finishPhase2(state, saveProgress, () => {
        state.currentPhase = 3;
        saveProgress();
        window.location.reload();
      });
    });
  } else if (state.currentPhase === 3) {
    document.getElementById("questionContainer").style.display = "block";
    if (state.fase3Respostas && state.fase3Respostas.length === 5) {
      finishPhase3(state, saveProgress);
    } else {
      startPhase3(state, saveProgress, showFase3Rodada);
    }
  }
};

function showRodadaFase3AWrapper(state, saveProgress, finishFase3A) {
  showRodadaFase3A(state, saveProgress, (state, saveProgress) => {
    finishFase3A(state, saveProgress, () => {
      state.currentPhase = 2;
      state.currentQuestion = 0;
      state.riasecnrRodadaOrder = [];
      state.riasecnrPrevOrder = [];
      state.riasecnrNotasUsadas = [];
      state.riasecnrNotaPorValor = [];
      state.riasecnrAnswers = [];
      state.riasecnrScores = null;
      state.riasecnrResult = null;
      saveProgress();
      window.location.reload();
    });
  });
}
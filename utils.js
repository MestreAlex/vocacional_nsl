// utils.js — Funções utilitárias globais para o quiz

/**
 * Embaralha um array sem repetir exatamente as mesmas posições da rodada anterior.
 * Se não houver array anterior, embaralha normalmente.
 * Usada para evitar que perguntas ou opções apareçam na mesma ordem em rodadas subsequentes.
 * @param {Array} arr - O array a ser embaralhado.
 * @param {Array} prevArr - O array anterior para comparação.
 * @returns {Array} - Novo array embaralhado.
 */
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

/**
 * Remove o progresso salvo no localStorage.
 * Use para resetar o quiz.
 * @param {string} storageKey
 */
export function clearProgress(storageKey = "progressoQuizRiasecDisc") {
  localStorage.removeItem(storageKey);
}

/**
 * Função genérica para embaralhar um array (Fisher-Yates).
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Retorna true se todos os valores de um array são diferentes (sem repetições).
 * Útil para validar ranking de notas sem repetição.
 * @param {Array} arr
 * @returns {boolean}
 */
export function allUnique(arr) {
  return Array.isArray(arr) && new Set(arr.filter(Boolean)).size === arr.filter(Boolean).length;
}
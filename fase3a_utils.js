// Funções utilitárias para a contagem de pontos e manipulação de respostas na nova FASE 03A
// Adaptado para o modelo das 8 áreas, semelhante ao que já existe para as fases anteriores

export const inicializarPontuacaoAreas = () => ({
  Humanas: 0,
  Exatas: 0,
  Biologicas: 0,
  Agrarias: 0,
  CienciasSociaisAplicadas: 0,
  LinguagensLetrasArtes: 0,
  Engenharias: 0,
  Tecnologias: 0
});

export const adicionarPontoArea = (pontuacao, area, valor = 1) => {
  if (pontuacao.hasOwnProperty(area)) {
    pontuacao[area] += valor;
  }
  return pontuacao;
};

// Exemplo de função para processar um array de respostas do usuário (cada resposta contém a área escolhida):
export const processarRespostasFase3A = (respostas) => {
  // respostas = [{ area: "Humanas" }, { area: "Exatas" }, ...]
  const pontuacao = inicializarPontuacaoAreas();
  respostas.forEach(resposta => {
    if (resposta.area) {
      adicionarPontoArea(pontuacao, resposta.area);
    }
  });
  return pontuacao;
};

// Função para identificar a(s) área(s) com maior pontuação:
export const obterAreasMaisPontuadas = (pontuacao) => {
  const max = Math.max(...Object.values(pontuacao));
  return Object.entries(pontuacao)
    .filter(([area, pontos]) => pontos === max)
    .map(([area]) => area);
};

// Função para ranking das áreas por pontuação:
export const rankingAreas = (pontuacao) => {
  return Object.entries(pontuacao)
    .sort((a, b) => b[1] - a[1])
    .map(([area, pontos]) => ({ area, pontos }));
};
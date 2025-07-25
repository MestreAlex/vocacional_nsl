// Funções utilitárias para organizar as rodadas da FASE 3 do teste vocacional
// Agora recebe perguntas filtradas dos arquivos disc_riasecnl_perguntas_xxxx.js
// - perguntasFase3: objeto de perguntas do perfil DISC escolhido
//   Estrutura: perguntasFase3[perfilRIASECNL][Profissão][Pergunta]
// - perfilRIASECNL: string ("R", "I", "A", "S", "E", "C", "N", "L")
// Retorna array de rodadas: cada rodada é array de { profissao, pergunta }

export function getFase3Rodadas(perguntasFase3, perfilRIASECNL) {
  const profissaoObjs = perguntasFase3[perfilRIASECNL];
  const profissoes = Object.keys(profissaoObjs);

  // 5 rodadas, cada uma com 8 perguntas (uma por profissão)
  let rodadas = [];
  for (let rodada = 0; rodada < 5; rodada++) {
    let perguntasRodada = [];
    for (const nomeProfissao of profissoes) {
      perguntasRodada.push({
        profissao: nomeProfissao,
        pergunta: profissaoObjs[nomeProfissao][rodada]
      });
    }
    rodadas.push(perguntasRodada);
  }
  return rodadas;
}

// Soma os pontos atribuídos pelo aluno para cada profissão
// - respostas: array de rodadas, cada rodada é array de { profissao, nota }
// Retorna objeto: { profissao: pontuacaoTotal }
export function calcularPontuacaoProfissoes(respostas) {
  const pontuacoes = {};
  for (const rodada of respostas) {
    for (const resp of rodada) {
      if (!pontuacoes[resp.profissao]) pontuacoes[resp.profissao] = 0;
      pontuacoes[resp.profissao] += resp.nota;
    }
  }
  return pontuacoes;
}

// Retorna as N profissões de maior pontuação
// - pontuacoes: objeto { profissao: pontuacao }
// - n: número de profissões a retornar (ex: 3)
export function getTopProfissoes(pontuacoes, n = 3) {
  return Object.entries(pontuacoes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([profissao, pontuacao]) => ({ profissao, pontuacao }));
}
// Cada lista (array) contém uma pergunta para cada perfil RIASECNL+T+M.
// Agora cada perfil tem apenas 5 perguntas (5 rodadas).
// As respostas devem ser de 1 a 10 para cada pergunta.

export const riasecnrQuestionSets = [
  [
    { perfil: "R", texto: "Sinto prazer em consertar ou montar objetos com as mãos." },
    { perfil: "I", texto: "Gosto de pesquisar sobre assuntos que despertam minha curiosidade." },
    { perfil: "A", texto: "Sinto necessidade de expressar minha criatividade, seja desenhando, escrevendo ou criando algo novo." },
    { perfil: "S", texto: "Gosto de ajudar pessoas a aprender ou superar dificuldades." },
    { perfil: "E", texto: "Me sinto motivado(a) a liderar grupos ou projetos." },
    { perfil: "C", texto: "Prefiro tarefas organizadas e com regras bem definidas." },
    { perfil: "N", texto: "Tenho interesse em cuidar do meio ambiente, da natureza ou de animais." },
    { perfil: "L", texto: "Gosto de ouvir e apoiar pessoas em suas questões emocionais ou de saúde." },
    { perfil: "T", texto: "Tenho interesse em aprender programação e desenvolvimento de sistemas digitais." },
    { perfil: "M", texto: "Gosto de entender como funcionam computadores, redes e dispositivos eletrônicos." }
  ],
  [
    { perfil: "R", texto: "Prefiro atividades práticas, como jardinagem, marcenaria, ou trabalhos manuais." },
    { perfil: "I", texto: "Gosto de resolver problemas complexos e desafios intelectuais." },
    { perfil: "A", texto: "Me interesso por atividades artísticas, como música, teatro, dança ou pintura." },
    { perfil: "S", texto: "Me sinto confortável em orientar ou ensinar colegas e amigos." },
    { perfil: "E", texto: "Gosto de negociar, convencer ou vender ideias." },
    { perfil: "C", texto: "Tenho facilidade em organizar documentos, informações ou planilhas." },
    { perfil: "N", texto: "Prefiro atividades ao ar livre e contato com a natureza." },
    { perfil: "L", texto: "Gosto de cuidar da saúde e bem-estar de outras pessoas." },
    { perfil: "T", texto: "Sinto curiosidade sobre inteligência artificial, ciência de dados ou automação." },
    { perfil: "M", texto: "Prefiro atividades ligadas à configuração de redes ou montagem de computadores." }
  ],
  [
    { perfil: "R", texto: "Me sinto bem trabalhando com máquinas, ferramentas ou equipamentos." },
    { perfil: "I", texto: "Tenho facilidade em buscar informações e analisar dados." },
    { perfil: "A", texto: "Aprecio ambientes flexíveis, inovadores e diferentes do convencional." },
    { perfil: "S", texto: "Me envolvo em projetos sociais, voluntariado ou grupos de apoio." },
    { perfil: "E", texto: "Me destaco na liderança e no planejamento de atividades em grupo." },
    { perfil: "C", texto: "Prefiro ambientes de trabalho com rotinas bem estabelecidas." },
    { perfil: "N", texto: "Gosto de aprender sobre sustentabilidade, ecologia e proteção ambiental." },
    { perfil: "L", texto: "Tenho interesse em profissões que envolvam cuidado direto com pessoas." },
    { perfil: "T", texto: "Gosto de criar aplicativos, jogos ou soluções tecnológicas." },
    { perfil: "M", texto: "Tenho interesse em segurança da informação e proteção de dados." }
  ],
  [
    { perfil: "R", texto: "Prefiro trabalhos que exigem esforço físico ou praticidade." },
    { perfil: "I", texto: "Me interesso por pesquisas científicas, laboratoriais ou tecnológicas." },
    { perfil: "A", texto: "Gosto de criar soluções inovadoras para problemas do dia a dia." },
    { perfil: "S", texto: "Tenho facilidade em perceber sentimentos e necessidades dos outros." },
    { perfil: "E", texto: "Tenho facilidade para tomar decisões rápidas e assumir riscos." },
    { perfil: "C", texto: "Me sinto à vontade com tarefas administrativas ou financeiras." },
    { perfil: "N", texto: "Me preocupo com questões ambientais e consumo consciente." },
    { perfil: "L", texto: "Gosto de apoiar pessoas em momentos difíceis ou de vulnerabilidade." },
    { perfil: "T", texto: "Me interesso por trabalhar com novas tecnologias, como dispositivos móveis e web." },
    { perfil: "M", texto: "Gosto de administrar bancos de dados e organizar informações digitais." }
  ],
  [
    { perfil: "R", texto: "Sinto satisfação em ver o resultado concreto do meu trabalho." },
    { perfil: "I", texto: "Tenho curiosidade por temas científicos e tecnológicos." },
    { perfil: "A", texto: "Gosto de participar de atividades culturais e artísticas." },
    { perfil: "S", texto: "Sou procurado(a) para dar conselhos ou ajudar pessoas próximas." },
    { perfil: "E", texto: "Me envolvo em projetos de empreendedorismo ou liderança estudantil." },
    { perfil: "C", texto: "Tenho facilidade em seguir padrões, procedimentos e normas." },
    { perfil: "N", texto: "Acredito que pequenas atitudes podem melhorar o meio ambiente." },
    { perfil: "L", texto: "Tenho empatia por pessoas que precisam de cuidados especiais." },
    { perfil: "T", texto: "Gosto de pesquisar sobre tendências tecnológicas e inovações digitais." },
    { perfil: "M", texto: "Tenho interesse em diagnosticar e solucionar problemas em sistemas computacionais." }
  ]
];

// Exemplo de uso: 
// para cada rodada (lista), percorre-se as perguntas, e para cada pergunta o aluno atribui uma nota de 1 a 10.
// Ao final, some as notas de cada perfil para obter o perfil com maior pontuação.
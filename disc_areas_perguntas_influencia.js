// Estrutura correta: discAreasPerguntasInfluencia[perfilDISC][area][profissao] = [ "pergunta1", "pergunta2", ... ]

export const discAreasPerguntasInfluencia = {
  Influencia: {
    Humanas: {
      "Psicólogo": [
        "Gosta de conversar e influenciar positivamente pessoas em suas decisões pessoais e profissionais?",
        "Sente facilidade em criar empatia e estabelecer vínculos de confiança com diferentes públicos?",
        "Tem prazer em motivar indivíduos a mudarem comportamentos em busca de bem-estar?",
        "Costuma ser referência quando amigos ou colegas precisam de conselhos?",
        "Sente-se realizado ao perceber que suas palavras inspiraram transformações em alguém?"
      ],
      "Pedagogo": [
        "Gosta de engajar turmas e tornar o aprendizado mais envolvente através da comunicação?",
        "Tem facilidade para motivar colegas e alunos a participarem de projetos educacionais?",
        "Sente prazer em apresentar novas ideias de forma criativa no ambiente escolar?",
        "Costuma ser lembrado por inspirar outros educadores e estudantes?",
        "Sente-se satisfeito ao perceber que sua energia contagia o ambiente de trabalho?"
      ],
      "Professor Universitário": [
        "Gosta de cativar estudantes em apresentações, palestras e eventos acadêmicos?",
        "Tem facilidade para transformar conteúdos complexos em falas atraentes e motivadoras?",
        "Sente prazer em ser reconhecido como referência e inspiração dentro da universidade?",
        "Costuma incentivar debates e participação ativa nas aulas?",
        "Sente-se estimulado ao perceber que sua paixão pelo ensino influencia alunos e colegas?"
      ],
      "Cientista Político": [
        "Gosta de influenciar opiniões por meio de debates e discussões políticas?",
        "Tem facilidade para engajar públicos em causas sociais e políticas?",
        "Sente prazer em articular ideias e persuadir pessoas sobre propostas de políticas públicas?",
        "Costuma ser ouvido quando expõe argumentos sobre temas de interesse coletivo?",
        "Sente-se motivado ao perceber que seu discurso contribuiu para mudanças sociais?"
      ],
      "Antropólogo": [
        "Gosta de inspirar pessoas a enxergarem culturas sob novas perspectivas?",
        "Tem facilidade para dialogar com grupos diversos e promover integração social?",
        "Sente prazer em comunicar descobertas culturais de forma envolvente?",
        "Costuma influenciar a visão de mundo de colegas e comunidades?",
        "Sente-se realizado ao perceber que seu trabalho fortalece o respeito à diversidade?"
      ],
      "Sociólogo": [
        "Gosta de motivar discussões sobre questões sociais em diferentes grupos?",
        "Tem facilidade em engajar pessoas para ações coletivas e debates públicos?",
        "Sente prazer em apresentar ideias sociológicas de maneira clara e instigante?",
        "Costuma influenciar mudanças de comportamento em espaços sociais?",
        "Sente-se satisfeito ao perceber seu impacto no pensamento crítico dos outros?"
      ],
      "Historiador": [
        "Gosta de contar histórias de forma envolvente e despertar interesse pelo passado?",
        "Tem facilidade em fazer conexões entre fatos históricos e o presente, influenciando percepções?",
        "Sente prazer em participar de eventos ou projetos educativos como palestrante?",
        "Costuma motivar outros a valorizar a memória e a história de seus grupos?",
        "Sente-se realizado ao perceber que seu olhar sobre a história inspira novas atitudes?"
      ],
      "Geógrafo": [
        "Gosta de comunicar de forma cativante a importância do espaço e das relações humanas com o ambiente?",
        "Tem facilidade para envolver pessoas em projetos de educação ambiental ou territorial?",
        "Sente prazer em ser porta-voz de questões ambientais e urbanas relevantes?",
        "Costuma influenciar políticas e práticas sobre o uso do espaço?",
        "Sente-se motivado ao perceber que sua fala promove maior consciência ambiental?"
      ]
    },
    Exatas: {
      "Professor de Matemática": [
        "Gosta de explicar conteúdos matemáticos de forma clara e envolvente para motivar alunos?",
        "Tem facilidade para usar exemplos do cotidiano e tornar as aulas mais atraentes?",
        "Sente prazer em ver estudantes se interessando mais pela matéria graças à sua didática?",
        "Costuma ser referência entre colegas pela sua habilidade de comunicação?",
        "Sente-se realizado ao perceber que inspirou novos talentos em matemática?"
      ],
      "Professor de Física": [
        "Gosta de contar histórias ou usar experimentos para tornar a física mais interessante?",
        "Tem facilidade para engajar alunos em discussões sobre fenômenos naturais?",
        "Sente prazer quando percebe que despertou a curiosidade científica dos estudantes?",
        "Costuma motivar colegas a inovar nas estratégias de ensino?",
        "Sente-se satisfeito ao ver seus alunos se destacando pela paixão pela física?"
      ],
      "Divulgador Científico": [
        "Gosta de comunicar ciência para diferentes públicos de forma empolgante?",
        "Tem facilidade para simplificar conceitos complexos e torná-los acessíveis?",
        "Sente prazer em participar de eventos, feiras e palestras de divulgação científica?",
        "Costuma ser procurado para entrevistas ou colaborações por sua habilidade comunicativa?",
        "Sente-se realizado ao ver pessoas se interessando mais por ciência devido ao seu trabalho?"
      ],
      "Consultor de Educação em Exatas": [
        "Gosta de influenciar escolas e professores a adotarem novas metodologias de ensino?",
        "Tem facilidade para apresentar propostas didáticas de maneira persuasiva?",
        "Sente prazer em ministrar oficinas e treinamentos para educadores?",
        "Costuma ser reconhecido por motivar mudanças nas práticas educacionais?",
        "Sente-se satisfeito ao perceber a transformação do ensino causada por suas ideias?"
      ],
      "Coordenador de Olimpíadas Científicas": [
        "Gosta de engajar estudantes e professores em competições acadêmicas?",
        "Tem facilidade para motivar equipes e promover o espírito de colaboração?",
        "Sente prazer ao celebrar conquistas e estimular a superação de desafios?",
        "Costuma ser lembrado pelo entusiasmo que transmite em eventos científicos?",
        "Sente-se realizado ao ver jovens crescendo intelectualmente sob sua orientação?"
      ],
      "Instrutor Técnico": [
        "Gosta de ensinar e influenciar aprendizes em cursos técnicos?",
        "Tem facilidade para adaptar o discurso ao perfil do público?",
        "Sente prazer em inspirar confiança nos alunos e colegas?",
        "Costuma ser reconhecido como referência didática na área técnica?",
        "Sente-se satisfeito ao perceber que seu ensino transforma carreiras?"
      ],
      "Pesquisador em Educação Científica": [
        "Gosta de apresentar pesquisas em congressos, seminários e eventos acadêmicos?",
        "Tem facilidade para influenciar práticas pedagógicas com base em suas descobertas?",
        "Sente prazer em debater inovações educacionais com outros profissionais?",
        "Costuma ser convidado para colaborar pela sua visão comunicativa?",
        "Sente-se realizado ao ver suas ideias aplicadas em diferentes contextos de ensino?"
      ],
      "Formador de Professores": [
        "Gosta de inspirar e motivar professores em cursos e treinamentos?",
        "Tem facilidade para comunicar de forma clara e envolvente conceitos pedagógicos?",
        "Sente prazer ao perceber que seu trabalho impacta positivamente a prática docente?",
        "Costuma ser procurado para dar palestras e oficinas por seu carisma?",
        "Sente-se satisfeito ao ver professores replicando suas metodologias?"
      ]
    },
    Biologicas: {
      "Biólogo Educador": [
        "Gosta de despertar o interesse das pessoas pela natureza através de palestras e oficinas?",
        "Tem facilidade para engajar públicos em projetos de educação ambiental?",
        "Sente prazer em comunicar descobertas biológicas de forma acessível?",
        "Costuma inspirar alunos a seguir carreira em ciências biológicas?",
        "Sente-se satisfeito ao perceber maior conscientização ambiental graças ao seu trabalho?"
      ],
      "Divulgador Científico em Biologia": [
        "Gosta de participar de eventos e mídias comunicando novidades em biologia?",
        "Tem facilidade para transformar temas complexos em conteúdos atraentes?",
        "Sente prazer em criar materiais didáticos, vídeos ou textos sobre biologia?",
        "Costuma ser reconhecido por sua habilidade de comunicação científica?",
        "Sente-se realizado ao ver mais pessoas se interessando pela biologia?"
      ],
      "Professor de Biologia": [
        "Gosta de usar exemplos e experimentos para tornar a biologia mais interessante?",
        "Tem facilidade para motivar alunos a participarem ativamente das aulas?",
        "Sente prazer ao perceber que seus alunos desenvolvem paixão pela biologia?",
        "Costuma ser lembrado por sua criatividade e entusiasmo em sala de aula?",
        "Sente-se satisfeito ao ver alunos escolhendo cursos de biológicas por sua influência?"
      ],
      "Veterinário de ONGs": [
        "Gosta de engajar pessoas em causas de proteção animal?",
        "Tem facilidade para conscientizar a comunidade sobre o bem-estar animal?",
        "Sente prazer ao liderar campanhas de adoção e cuidados veterinários?",
        "Costuma ser referência quando há dúvidas ou problemas sobre animais?",
        "Sente-se realizado ao ver mudanças de atitudes em relação aos animais por sua influência?"
      ],
      "Extensionista Rural": [
        "Gosta de influenciar agricultores a adotarem práticas mais sustentáveis?",
        "Tem facilidade para comunicar novas técnicas de produção ao campo?",
        "Sente prazer em organizar dias de campo, palestras e treinamentos para produtores?",
        "Costuma motivar comunidades rurais a inovar e buscar melhores resultados?",
        "Sente-se realizado ao perceber o progresso dos produtores após sua orientação?"
      ],
      "Consultor Ambiental": [
        "Gosta de engajar empresas e pessoas na adoção de práticas ambientais responsáveis?",
        "Tem facilidade para apresentar projetos e convencer sobre ações sustentáveis?",
        "Sente prazer em liderar campanhas de educação ambiental?",
        "Costuma ser reconhecido por sua capacidade de mobilizar diferentes públicos?",
        "Sente-se satisfeito ao ver mudanças ambientais positivas por sua influência?"
      ],
      "Instrutor de Saúde": [
        "Gosta de motivar pessoas a adotarem hábitos saudáveis?",
        "Tem facilidade para orientar grupos em atividades educativas sobre saúde?",
        "Sente prazer ao perceber que sua fala estimula o autocuidado?",
        "Costuma ser chamado para palestras e rodas de conversa sobre saúde?",
        "Sente-se satisfeito ao ver comunidades mais saudáveis graças à sua atuação?"
      ],
      "Analista de Educação em Saúde": [
        "Gosta de comunicar informações sobre saúde de modo acessível e motivador?",
        "Tem facilidade para engajar equipes em campanhas educativas?",
        "Sente prazer ao participar de eventos que promovem o bem-estar coletivo?",
        "Costuma ser reconhecido pela capacidade de mobilizar profissionais de saúde?",
        "Sente-se realizado ao perceber impacto positivo em práticas de saúde devido à sua influência?"
      ]
    },
    Agrarias: {
      "Consultor Técnico Agrícola": [
        "Gosta de influenciar produtores rurais a adotarem novas tecnologias?",
        "Tem facilidade para apresentar resultados e convencer pela importância da inovação?",
        "Sente prazer ao liderar treinamentos e dias de campo para agricultores?",
        "Costuma ser procurado para tirar dúvidas técnicas e motivar mudanças?",
        "Sente-se realizado ao ver propriedades rurais prosperando após sua orientação?"
      ],
      "Extensionista Rural": [
        "Gosta de engajar comunidades rurais em projetos de desenvolvimento?",
        "Tem facilidade para motivar produtores e familiares a participarem de capacitações?",
        "Sente prazer ao perceber resultados positivos de suas visitas e treinamentos?",
        "Costuma ser reconhecido pela energia e simpatia no campo?",
        "Sente-se satisfeito ao ver produtores adotando novas práticas por sua influência?"
      ],
      "Instrutor de Cooperativas": [
        "Gosta de inspirar equipes em cooperativas a buscar melhorias constantes?",
        "Tem facilidade para comunicar estratégias e motivar associados?",
        "Sente prazer ao organizar eventos, palestras e reuniões produtivas?",
        "Costuma ser referência em comunicação clara e acolhedora?",
        "Sente-se satisfeito ao ver o crescimento da cooperativa a partir de sua atuação?"
      ],
      "Divulgador de Tecnologia Agrária": [
        "Gosta de apresentar inovações e tendências para o público do agronegócio?",
        "Tem facilidade para transformar linguagem técnica em informações acessíveis?",
        "Sente prazer ao ver produtores adotando novas soluções graças à sua divulgação?",
        "Costuma ser convidado para palestras, feiras e eventos rurais?",
        "Sente-se realizado ao perceber impacto positivo da inovação no campo?"
      ],
      "Gestor de Projetos Educacionais no Campo": [
        "Gosta de motivar jovens e adultos rurais a se envolverem em projetos educacionais?",
        "Tem facilidade para criar campanhas educativas para o campo?",
        "Sente prazer ao organizar feiras, cursos e atividades lúdicas rurais?",
        "Costuma ser lembrado pelo entusiasmo e pela criatividade em ações educativas?",
        "Sente-se satisfeito ao ver comunidades mais capacitadas graças ao seu engajamento?"
      ],
      "Líder de Associações Rurais": [
        "Gosta de representar grupos rurais e engajá-los em causas coletivas?",
        "Tem facilidade para mobilizar associados em assembleias e ações sociais?",
        "Sente prazer ao participar de reuniões e defender interesses do grupo?",
        "Costuma ser reconhecido como porta-voz carismático?",
        "Sente-se satisfeito ao ver conquistas coletivas alcançadas com sua liderança?"
      ],
      "Zootecnista Consultor": [
        "Gosta de divulgar novas técnicas de manejo animal para produtores?",
        "Tem facilidade para engajar equipes em projetos de melhoria genética ou nutrição?",
        "Sente prazer ao ver rebanhos evoluindo após sua orientação?",
        "Costuma ser chamado para eventos e palestras sobre produção animal?",
        "Sente-se satisfeito ao perceber impacto positivo das suas orientações nas propriedades?"
      ],
      "Educador Ambiental": [
        "Gosta de engajar escolas, produtores e comunidades em ações ambientais?",
        "Tem facilidade para comunicar a importância da preservação de forma criativa?",
        "Sente prazer ao organizar campanhas ecológicas e mutirões ambientais?",
        "Costuma ser reconhecido pelo entusiasmo em defesa do meio ambiente?",
        "Sente-se satisfeito ao ver regiões mais sustentáveis graças ao seu trabalho?"
      ]
    },
    CienciasSociaisAplicadas: {
      "Publicitário": [
        "Gosta de criar campanhas que despertem interesse e emoção no público?",
        "Tem facilidade para apresentar ideias criativas para clientes e equipes?",
        "Sente prazer em persuadir pessoas através da comunicação visual e verbal?",
        "Costuma ser lembrado por suas apresentações marcantes?",
        "Sente-se satisfeito ao perceber o sucesso de uma campanha que idealizou?"
      ],
      "Jornalista": [
        "Gosta de contar histórias reais de forma envolvente e clara?",
        "Tem facilidade para entrevistar pessoas e extrair boas informações?",
        "Sente prazer ao apresentar reportagens, podcasts ou programas ao público?",
        "Costuma ser reconhecido pelo carisma e credibilidade na comunicação?",
        "Sente-se realizado ao perceber que suas matérias influenciaram mudanças?"
      ],
      "Relações Públicas": [
        "Gosta de ser o elo entre a empresa e o público, promovendo boa imagem?",
        "Tem facilidade para organizar eventos e atrair mídia para a organização?",
        "Sente prazer em gerenciar crises e manter a reputação institucional?",
        "Costuma ser lembrado pelo profissionalismo no trato com diferentes públicos?",
        "Sente-se satisfeito ao ver a imagem da empresa fortalecida pelo seu trabalho?"
      ],
      "Gestor de Eventos": [
        "Gosta de planejar e animar festas, feiras, congressos ou encontros corporativos?",
        "Tem facilidade para motivar equipes e parceiros durante a organização de eventos?",
        "Sente prazer ao comandar cerimônias e interagir com o público?",
        "Costuma ser reconhecido pela alegria e dinamismo em eventos sociais?",
        "Sente-se satisfeito ao ver convidados felizes e eventos bem avaliados?"
      ],
      "Coach": [
        "Gosta de inspirar pessoas a alcançar seus objetivos pessoais e profissionais?",
        "Tem facilidade para motivar clientes e grupos no desenvolvimento de competências?",
        "Sente prazer ao ver as pessoas conquistando resultados com sua orientação?",
        "Costuma ser reconhecido pela energia positiva e capacidade de influência?",
        "Sente-se realizado ao perceber o crescimento de pessoas devido ao seu trabalho?"
      ],
      "Gestor de Comunicação": [
        "Gosta de liderar a comunicação interna e externa de organizações?",
        "Tem facilidade para transmitir mensagens de forma clara e envolvente?",
        "Sente prazer em motivar equipes de comunicação e marketing?",
        "Costuma ser lembrado por seu entusiasmo em campanhas institucionais?",
        "Sente-se satisfeito ao ver a empresa bem posicionada no mercado?"
      ],
      "Gestor de RH": [
        "Gosta de engajar colaboradores e promover bom clima organizacional?",
        "Tem facilidade para motivar equipes e liderar processos de integração?",
        "Sente prazer ao organizar treinamentos e eventos para funcionários?",
        "Costuma ser reconhecido pela empatia e habilidade em lidar com pessoas?",
        "Sente-se satisfeito ao ver equipes mais produtivas graças ao seu trabalho?"
      ],
      "Consultor em Desenvolvimento Pessoal": [
        "Gosta de influenciar positivamente pessoas em palestras, workshops e treinamentos?",
        "Tem facilidade para comunicar conceitos de autoconhecimento e motivação?",
        "Sente prazer ao perceber mudanças de atitude nas pessoas após suas orientações?",
        "Costuma ser procurado para aconselhamento devido ao seu carisma?",
        "Sente-se satisfeito ao ver o desenvolvimento pessoal de clientes e grupos?"
      ]
    },
    LinguagensLetrasArtes: {
      "Ator/Atriz": [
        "Gosta de emocionar e inspirar plateias por meio da atuação?",
        "Tem facilidade para se expressar em público e envolver espectadores?",
        "Sente prazer em ser reconhecido pelo carisma e talento artístico?",
        "Costuma ser chamado para papéis de destaque em projetos culturais?",
        "Sente-se realizado ao ver o público tocado por sua performance?"
      ],
      "Apresentador": [
        "Gosta de se comunicar ao vivo com grandes audiências?",
        "Tem facilidade para improvisar e conduzir programas ou eventos?",
        "Sente prazer ao perceber que sua energia anima o público?",
        "Costuma receber convites para comandar cerimônias e eventos?",
        "Sente-se satisfeito ao perceber sua influência sobre o público?"
      ],
      "Escritor": [
        "Gosta de criar histórias que envolvem e inspiram leitores?",
        "Tem facilidade para emocionar pessoas com palavras e narrativas?",
        "Sente prazer ao perceber que seus textos provocam reflexões e mudanças?",
        "Costuma receber elogios por sua criatividade e originalidade?",
        "Sente-se satisfeito ao ver suas obras impactando a vida das pessoas?"
      ],
      "Roteirista": [
        "Gosta de criar roteiros que capturam a atenção do público?",
        "Tem facilidade para construir diálogos envolventes e marcantes?",
        "Sente prazer ao ver suas ideias ganhando vida em produções audiovisuais?",
        "Costuma ser reconhecido pela criatividade em projetos colaborativos?",
        "Sente-se satisfeito ao receber feedbacks positivos de seu trabalho autoral?"
      ],
      "Professor de Línguas": [
        "Gosta de tornar o aprendizado de idiomas divertido e motivador?",
        "Tem facilidade para envolver alunos em atividades comunicativas?",
        "Sente prazer ao ver estudantes evoluindo graças ao seu incentivo?",
        "Costuma ser lembrado pelo entusiasmo nas aulas?",
        "Sente-se satisfeito ao perceber a confiança dos alunos em se expressarem?"
      ],
      "Músico": [
        "Gosta de se apresentar para públicos variados e encantar plateias?",
        "Tem facilidade para influenciar emoções através da música?",
        "Sente prazer ao perceber que sua arte inspira pessoas?",
        "Costuma ser reconhecido pelo talento e presença de palco?",
        "Sente-se satisfeito ao receber aplausos e reconhecimento público?"
      ],
      "Diretor de Arte": [
        "Gosta de inspirar equipes criativas em projetos de design e publicidade?",
        "Tem facilidade para comunicar conceitos visuais de forma envolvente?",
        "Sente prazer ao ver campanhas ganhando destaque por sua direção?",
        "Costuma ser referência para colegas pela criatividade e carisma?",
        "Sente-se satisfeito ao ver clientes e público impactados por suas criações?"
      ],
      "Influencer Digital": [
        "Gosta de produzir conteúdo para engajar seguidores nas redes sociais?",
        "Tem facilidade para influenciar tendências e comportamentos digitais?",
        "Sente prazer ao ver seu conteúdo viralizando e gerando impacto?",
        "Costuma ser referência de opinião em sua área de atuação?",
        "Sente-se satisfeito ao ver comunidades digitais formadas ao seu redor?"
      ]
    },
    Engenharias: {
      "Engenheiro de Produção": [
        "Gosta de engajar equipes em busca de maior produtividade?",
        "Tem facilidade para motivar colaboradores a adotarem melhorias de processos?",
        "Sente prazer ao apresentar resultados e conquistas para a diretoria?",
        "Costuma ser reconhecido pelo seu entusiasmo em projetos industriais?",
        "Sente-se satisfeito ao ver equipes alcançando metas sob sua influência?"
      ],
      "Engenheiro de Segurança do Trabalho": [
        "Gosta de motivar equipes a adotarem práticas seguras no ambiente industrial?",
        "Tem facilidade para comunicar a importância da segurança de forma persuasiva?",
        "Sente prazer ao ministrar treinamentos e palestras para colaboradores?",
        "Costuma ser lembrado pela energia e clareza nas orientações de segurança?",
        "Sente-se satisfeito ao perceber redução de acidentes devido à sua atuação?"
      ],
      "Engenheiro de Projetos": [
        "Gosta de apresentar projetos técnicos de forma clara e inspiradora para equipes?",
        "Tem facilidade para envolver diferentes áreas na realização de projetos?",
        "Sente prazer ao ver ideias sendo aceitas e implementadas por sua comunicação?",
        "Costuma ser escolhido para liderar projetos pelo seu carisma?",
        "Sente-se satisfeito ao ver o reconhecimento dos colegas pelo seu papel de liderança?"
      ],
      "Engenheiro de Meio Ambiente": [
        "Gosta de engajar equipes em projetos de sustentabilidade?",
        "Tem facilidade para comunicar a importância do meio ambiente em empresas?",
        "Sente prazer ao liderar campanhas ecológicas no ambiente de trabalho?",
        "Costuma ser referência em debates sobre sustentabilidade?",
        "Sente-se satisfeito ao ver mudanças ambientais positivas após sua influência?"
      ],
      "Coordenador de Projetos de Engenharia": [
        "Gosta de motivar equipes para superação de desafios em grandes projetos?",
        "Tem facilidade para apresentar metas e resultados de maneira estimulante?",
        "Sente prazer em liderar reuniões e negociar prazos com carisma?",
        "Costuma ser lembrado por sua postura inspiradora na condução de equipes?",
        "Sente-se satisfeito ao ver equipes comprometidas e projetos bem-sucedidos?"
      ],
      "Consultor Técnico de Engenharia": [
        "Gosta de influenciar decisões técnicas em empresas e clientes?",
        "Tem facilidade para comunicar soluções complexas de forma simples?",
        "Sente prazer ao ser convidado para opinar em projetos estratégicos?",
        "Costuma ser reconhecido pela capacidade de persuasão técnica?",
        "Sente-se satisfeito ao perceber o êxito de projetos graças à sua consultoria?"
      ],
      "Instrutor Técnico em Engenharia": [
        "Gosta de ensinar e motivar futuros engenheiros em cursos e treinamentos?",
        "Tem facilidade para envolver turmas em aulas práticas ou teóricas?",
        "Sente prazer ao ver alunos desenvolvendo habilidades técnicas graças ao seu incentivo?",
        "Costuma ser lembrado pelo entusiasmo e clareza nas explicações?",
        "Sente-se satisfeito ao ver profissionais formados sob sua influência?"
      ],
      "Engenheiro de Treinamento Industrial": [
        "Gosta de liderar programas de treinamento em ambientes industriais?",
        "Tem facilidade para adaptar a linguagem técnica a diferentes públicos?",
        "Sente prazer ao perceber melhor desempenho dos funcionários após treinamentos?",
        "Costuma ser reconhecido pelo carisma e didática nas capacitações?",
        "Sente-se satisfeito ao ver equipes mais qualificadas graças ao seu trabalho?"
      ]
    },
    Tecnologias: {
      "Instrutor de Tecnologia": [
        "Gosta de ensinar tecnologia de forma prática e envolvente?",
        "Tem facilidade para motivar alunos a se interessarem por inovação digital?",
        "Sente prazer ao perceber evolução dos estudantes graças à sua didática?",
        "Costuma ser referência em treinamentos por sua comunicação clara?",
        "Sente-se satisfeito ao ver profissionais mais preparados após seus cursos?"
      ],
      "Gestor de Equipe de Suporte": [
        "Gosta de engajar equipes de suporte e promover bom clima de trabalho?",
        "Tem facilidade para motivar profissionais a resolverem problemas com agilidade?",
        "Sente prazer ao perceber satisfação dos usuários com o atendimento?",
        "Costuma ser reconhecido pela liderança acolhedora e comunicativa?",
        "Sente-se satisfeito ao ver o crescimento profissional dos membros de sua equipe?"
      ],
      "Analista de Suporte ao Cliente": [
        "Gosta de resolver dúvidas de clientes de forma simpática e eficaz?",
        "Tem facilidade para explicar soluções técnicas ao público leigo?",
        "Sente prazer ao ser elogiado por seu atendimento cordial e atencioso?",
        "Costuma ser referência em empatia dentro da equipe de suporte?",
        "Sente-se satisfeito ao perceber a fidelização de clientes graças ao seu trabalho?"
      ],
      "Consultor em Transformação Digital": [
        "Gosta de influenciar empresas a adotarem novas tecnologias?",
        "Tem facilidade para apresentar tendências e convencer gestores sobre inovações?",
        "Sente prazer ao ver mudanças digitais implementadas por sua influência?",
        "Costuma ser lembrado pelo carisma em reuniões e workshops?",
        "Sente-se satisfeito ao ver empresas prosperando após sua consultoria?"
      ],
      "Evangelista de Tecnologia": [
        "Gosta de apresentar novas ferramentas e tendências em palestras e eventos?",
        "Tem facilidade para envolver públicos de diferentes perfis em temas tecnológicos?",
        "Sente prazer ao perceber que seu entusiasmo estimula a inovação?",
        "Costuma ser referência em comunidades de tecnologia pela sua comunicação?",
        "Sente-se satisfeito ao ver o crescimento de ecossistemas digitais graças ao seu trabalho?"
      ],
      "Product Owner": [
        "Gosta de engajar equipes de desenvolvimento e stakeholders em projetos ágeis?",
        "Tem facilidade para comunicar prioridades e inspirar o time?",
        "Sente prazer ao ver produtos digitais ganhando forma sob sua liderança?",
        "Costuma ser reconhecido pelo dinamismo e capacidade de motivação?",
        "Sente-se satisfeito ao ver o sucesso de lançamentos digitais que coordenou?"
      ],
      "Instrutor de Programação": [
        "Gosta de ensinar programação de forma clara e envolvente?",
        "Tem facilidade para descomplicar conceitos complexos para iniciantes?",
        "Sente prazer ao ver alunos progredindo na área de desenvolvimento?",
        "Costuma ser lembrado pelo entusiasmo e criatividade nas aulas?",
        "Sente-se satisfeito ao ver ex-alunos conquistando vagas em tecnologia?"
      ],
      "Gestor de Educação Digital": [
        "Gosta de liderar projetos de ensino a distância e cursos online?",
        "Tem facilidade para engajar professores e alunos em ambientes virtuais?",
        "Sente prazer ao perceber alto índice de participação nos cursos que organiza?",
        "Costuma ser referência em inovação educacional no ambiente digital?",
        "Sente-se satisfeito ao ver o crescimento de plataformas de ensino sob sua gestão?"
      ]
    }
  }
};
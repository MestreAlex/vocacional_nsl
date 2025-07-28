// Estrutura correta: discAreasPerguntasEstabilidade[perfilDISC][area][profissao] = [ "pergunta1", "pergunta2", ... ]

export const discAreasPerguntasEstabilidade = {
  Estabilidade: {
    Humanas: {
      "Assistente Social": [
        "Gosta de apoiar pessoas em situações de vulnerabilidade de forma contínua e dedicada?",
        "Sente satisfação em acompanhar casos sociais ao longo do tempo, promovendo melhorias graduais?",
        "Tem facilidade para manter a calma e transmitir segurança em momentos de crise?",
        "Valoriza relações de confiança construídas com famílias e comunidades?",
        "Prefere atuar em ambientes onde é possível seguir procedimentos claros de atendimento?"
      ],
      "Terapeuta Ocupacional": [
        "Gosta de planejar rotinas terapêuticas estáveis para promover a autonomia das pessoas?",
        "Valoriza o acompanhamento paciente e contínuo do progresso dos atendidos?",
        "Sente-se confortável com tarefas repetitivas que trazem conforto e previsibilidade aos pacientes?",
        "Tem facilidade para criar ambientes seguros e acolhedores durante as sessões?",
        "Prefere trabalhar em equipes que prezam pela colaboração e pelo respeito ao ritmo de cada um?"
      ],
      "Psicopedagogo": [
        "Gosta de acompanhar o desenvolvimento escolar dos alunos ao longo do tempo?",
        "Valoriza a criação de estratégias educativas consistentes e personalizadas?",
        "Sente satisfação em ajudar na superação de dificuldades de aprendizagem com paciência?",
        "Tem facilidade para criar vínculos duradouros com alunos, famílias e professores?",
        "Prefere ambientes educacionais com rotinas bem definidas?"
      ],
      "Orientador Educacional": [
        "Gosta de orientar alunos em suas trajetórias escolares, oferecendo apoio constante?",
        "Valoriza o acompanhamento contínuo e a escuta ativa em processos de orientação?",
        "Sente satisfação em construir relações de confiança e respeito com estudantes?",
        "Tem facilidade para lidar com demandas recorrentes e rotinas administrativas?",
        "Prefere ambientes escolares organizados, com procedimentos claros?"
      ],
      "Bibliotecário": [
        "Gosta de trabalhar em ambientes silenciosos, organizados e previsíveis?",
        "Valoriza a rotina de catalogar, organizar e preservar acervos?",
        "Sente satisfação em ajudar usuários a encontrar informações com paciência e atenção?",
        "Tem facilidade para seguir normas e procedimentos de organização?",
        "Prefere ambientes onde o trabalho é feito de forma metódica e colaborativa?"
      ],
      "Documentalista": [
        "Gosta de registrar, arquivar e manter documentos com precisão e regularidade?",
        "Valoriza a rotina de manter arquivos sempre atualizados e organizados?",
        "Sente satisfação em garantir que informações estejam sempre disponíveis e seguras?",
        "Tem facilidade para seguir padrões e normas de documentação?",
        "Prefere ambientes de trabalho com processos bem definidos e pouca variação?"
      ],
      "Analista de Políticas Públicas": [
        "Gosta de analisar dados e acompanhar resultados de programas sociais de longo prazo?",
        "Valoriza a estabilidade de atuar em órgãos públicos ou instituições tradicionais?",
        "Sente satisfação em propor melhorias contínuas em políticas já existentes?",
        "Tem facilidade para lidar com regulamentações e procedimentos burocráticos?",
        "Prefere ambientes onde há clareza de funções e rotinas institucionais?"
      ],
      "Professor de Ensino Fundamental": [
        "Gosta de acompanhar o desenvolvimento dos alunos ao longo do ano letivo?",
        "Valoriza a rotina da sala de aula e a estabilidade do calendário escolar?",
        "Sente satisfação em transmitir segurança e confiança aos estudantes?",
        "Tem facilidade para lidar com tarefas diárias repetitivas e planejadas?",
        "Prefere ambientes educacionais estruturados e previsíveis?"
      ]
    },
    Exatas: {
      "Analista de Qualidade": [
        "Gosta de monitorar processos e garantir padrões constantes de qualidade?",
        "Valoriza a rotina de verificar procedimentos e corrigir desvios minuciosamente?",
        "Sente satisfação em manter a estabilidade dos resultados em sua área de atuação?",
        "Tem facilidade para seguir normas técnicas e métodos padronizados?",
        "Prefere ambientes de trabalho organizados, com processos bem definidos?"
      ],
      "Técnico em Laboratório": [
        "Gosta de realizar experimentos e análises seguindo protocolos rigorosos e repetitivos?",
        "Valoriza a estabilidade de trabalhar em ambientes controlados e previsíveis?",
        "Sente satisfação em obter resultados confiáveis por meio da precisão técnica?",
        "Tem facilidade para manter registros detalhados e organizados de suas atividades?",
        "Prefere ambientes onde é possível manter o foco e a concentração nas tarefas?"
      ],
      "Analista de Processos": [
        "Gosta de analisar fluxos produtivos e propor melhorias contínuas e sustentáveis?",
        "Valoriza o acompanhamento dos processos ao longo do tempo, buscando estabilidade?",
        "Sente satisfação em padronizar procedimentos para garantir previsibilidade?",
        "Tem facilidade para identificar e corrigir pequenos desvios nos processos?",
        "Prefere ambientes industriais organizados e com rotinas bem estabelecidas?"
      ],
      "Analista de Dados": [
        "Gosta de analisar dados de forma sistemática, buscando padrões e estabilidade?",
        "Valoriza a precisão e a rotina na coleta e análise de informações?",
        "Sente satisfação em garantir a confiabilidade dos relatórios gerados?",
        "Tem facilidade para trabalhar com grandes volumes de informações de forma metódica?",
        "Prefere ambientes de trabalho que valorizam o cuidado e a atenção aos detalhes?"
      ],
      "Programador Back-End": [
        "Gosta de desenvolver sistemas estáveis e confiáveis, que funcionem sem falhas?",
        "Valoriza a rotina de programar, testar e corrigir códigos de forma minuciosa?",
        "Sente satisfação ao ver sistemas rodando de forma previsível e sem erros?",
        "Tem facilidade para seguir padrões de desenvolvimento e boas práticas?",
        "Prefere ambientes de trabalho que priorizam segurança e estabilidade?"
      ],
      "Modelador Matemático": [
        "Gosta de criar modelos matemáticos precisos para simular situações reais?",
        "Valoriza a estabilidade dos resultados obtidos por métodos matemáticos rigorosos?",
        "Sente satisfação ao aprimorar continuamente modelos já existentes?",
        "Tem facilidade para trabalhar com fórmulas, equações e dados de forma sistemática?",
        "Prefere ambientes onde a lógica e a previsibilidade são valorizadas?"
      ],
      "Analista de Logística": [
        "Gosta de organizar fluxos logísticos para garantir entregas regulares e pontuais?",
        "Valoriza a rotina de acompanhar indicadores e corrigir desvios logísticos?",
        "Sente satisfação ao ver operações funcionando de maneira estável e eficiente?",
        "Tem facilidade para criar rotinas que otimizem processos logísticos?",
        "Prefere ambientes logísticos com procedimentos claros e pouca variação?"
      ],
      "Pesquisador em Modelagem Computacional": [
        "Gosta de desenvolver modelos computacionais que proporcionam resultados confiáveis?",
        "Valoriza a repetibilidade dos experimentos e simulações?",
        "Sente satisfação em aprimorar continuamente modelos para maior precisão?",
        "Tem facilidade para seguir etapas rigorosas em pesquisas de modelagem?",
        "Prefere ambientes acadêmicos ou laboratoriais estáveis e organizados?"
      ]
    },
    Biologicas: {
      "Biólogo de Laboratório": [
        "Gosta de analisar amostras e realizar experimentos seguindo protocolos padronizados?",
        "Valoriza a rotina e o ambiente controlado do laboratório?",
        "Sente satisfação em obter resultados consistentes e confiáveis em suas análises?",
        "Tem facilidade para registrar dados detalhados e manter a organização do laboratório?",
        "Prefere ambientes onde a previsibilidade e a segurança são prioridade?"
      ],
      "Técnico em Análises Clínicas": [
        "Gosta de realizar exames clínicos de forma metódica e cuidadosa?",
        "Valoriza a rotina de seguir procedimentos rígidos no laboratório?",
        "Sente satisfação ao entregar resultados confiáveis para o diagnóstico médico?",
        "Tem facilidade para manter a calma em situações repetitivas do dia a dia clínico?",
        "Prefere ambientes de saúde organizados e previsíveis?"
      ],
      "Pesquisador em Biologia": [
        "Gosta de acompanhar projetos de pesquisa a longo prazo, observando resultados graduais?",
        "Valoriza a continuidade e o rigor científico em suas investigações?",
        "Sente satisfação ao contribuir de forma constante para o avanço do conhecimento?",
        "Tem facilidade para seguir protocolos e manter registros detalhados?",
        "Prefere ambientes de pesquisa estáveis, colaborativos e bem estruturados?"
      ],
      "Analista Ambiental": [
        "Gosta de monitorar indicadores ambientais de forma regular e sistemática?",
        "Valoriza a rotina de acompanhar a evolução de áreas naturais ao longo do tempo?",
        "Sente satisfação em perceber melhorias ambientais contínuas por meio do seu trabalho?",
        "Tem facilidade para elaborar relatórios detalhados e precisos?",
        "Prefere ambientes de trabalho voltados à conservação e à sustentabilidade a longo prazo?"
      ],
      "Técnico em Microbiologia": [
        "Gosta de analisar microrganismos em laboratório, seguindo rotinas precisas?",
        "Valoriza a repetição de ensaios para garantir a confiabilidade dos resultados?",
        "Sente satisfação ao identificar padrões e variações em culturas microbianas?",
        "Tem facilidade para manter a organização e a segurança do laboratório?",
        "Prefere ambientes laboratoriais estáveis e silenciosos?"
      ],
      "Farmacêutico Analista": [
        "Gosta de garantir a estabilidade e a qualidade de medicamentos em processos laboratoriais?",
        "Valoriza a repetição de testes para conferir a eficácia dos produtos?",
        "Sente satisfação ao manter registros detalhados e confiáveis de suas análises?",
        "Tem facilidade para seguir normas rigorosas de boas práticas farmacêuticas?",
        "Prefere ambientes de trabalho organizados e previsíveis?"
      ],
      "Laboratorista Veterinário": [
        "Gosta de analisar amostras animais em ambiente laboratorial controlado?",
        "Valoriza a rotina dos procedimentos laboratoriais em medicina veterinária?",
        "Sente satisfação ao garantir a qualidade dos diagnósticos laboratoriais?",
        "Tem facilidade para manter registros e padrões de biossegurança?",
        "Prefere ambientes onde a precisão e a repetição são valorizadas?"
      ],
      "Técnico em Genética": [
        "Gosta de analisar sequências genéticas seguindo protocolos padronizados?",
        "Valoriza a estabilidade e a precisão dos resultados em laboratório?",
        "Sente satisfação ao contribuir para projetos de pesquisa genética de longo prazo?",
        "Tem facilidade para lidar com dados e métodos repetitivos?",
        "Prefere ambientes laboratoriais organizados e previsíveis?"
      ]
    },
    Agrarias: {
      "Técnico Agropecuário": [
        "Gosta de executar rotinas agrícolas e pecuárias de forma disciplinada e constante?",
        "Valoriza a continuidade e o acompanhamento dos processos produtivos no campo?",
        "Sente satisfação ao garantir a estabilidade das produções rurais?",
        "Tem facilidade para lidar com tarefas repetitivas na lida diária do campo?",
        "Prefere ambientes rurais organizados e previsíveis?"
      ],
      "Supervisor de Produção Agrícola": [
        "Gosta de acompanhar todo o ciclo produtivo agrícola, garantindo regularidade e qualidade?",
        "Valoriza a rotina de monitorar etapas e processos agrícolas?",
        "Sente satisfação ao ver a produção rural mantendo padrões ano após ano?",
        "Tem facilidade para implementar procedimentos de controle e registro?",
        "Prefere ambientes rurais estruturados, onde o planejamento é valorizado?"
      ],
      "Analista de Qualidade de Alimentos": [
        "Gosta de garantir padrões constantes de qualidade nos produtos alimentícios?",
        "Valoriza a repetição de análises laboratoriais para assegurar a regularidade dos alimentos?",
        "Sente satisfação ao manter registros detalhados de controle de qualidade?",
        "Tem facilidade para seguir normas rígidas de segurança alimentar?",
        "Prefere ambientes industriais organizados e estáveis?"
      ],
      "Técnico em Zootecnia": [
        "Gosta de acompanhar o desenvolvimento animal de forma contínua e cuidadosa?",
        "Valoriza a rotina dos cuidados com a alimentação e bem-estar dos animais?",
        "Sente satisfação ao ver resultados positivos a longo prazo no manejo animal?",
        "Tem facilidade para seguir protocolos de manejo e controle zootécnico?",
        "Prefere ambientes rurais com rotinas bem estabelecidas?"
      ],
      "Técnico Florestal": [
        "Gosta de monitorar áreas florestais ao longo do tempo, acompanhando seu crescimento?",
        "Valoriza a repetição de tarefas de manejo e conservação ambiental?",
        "Sente satisfação ao contribuir para a estabilidade dos ecossistemas florestais?",
        "Tem facilidade para manter registros detalhados das áreas sob sua responsabilidade?",
        "Prefere ambientes naturais organizados, com rotinas bem definidas?"
      ],
      "Técnico em Irrigação": [
        "Gosta de acompanhar sistemas de irrigação garantindo seu funcionamento estável?",
        "Valoriza a rotina de monitorar fluxos e volumes de água diariamente?",
        "Sente satisfação ao perceber a regularidade das plantações graças ao seu trabalho?",
        "Tem facilidade para seguir manuais e procedimentos técnicos?",
        "Prefere ambientes de trabalho que priorizam a previsibilidade operacional?"
      ],
      "Analista de Agroindústria": [
        "Gosta de monitorar processos industriais do campo para garantir estabilidade na produção?",
        "Valoriza a repetição e o controle das etapas de produção agroindustrial?",
        "Sente satisfação ao manter padrões de qualidade constantes na indústria?",
        "Tem facilidade para registrar informações e seguir normas técnicas?",
        "Prefere ambientes industriais organizados e com pouca variação nas rotinas?"
      ],
      "Assistente de Pesquisa Agrícola": [
        "Gosta de participar de pesquisas agrícolas com tarefas regulares e bem definidas?",
        "Valoriza o acompanhamento de experimentos por períodos prolongados?",
        "Sente satisfação em contribuir para resultados consistentes em projetos agrícolas?",
        "Tem facilidade para seguir protocolos de pesquisa e registrar dados?",
        "Prefere ambientes de pesquisa e campo com rotinas estáveis?"
      ]
    },
    CienciasSociaisAplicadas: {
      "Contador": [
        "Gosta de trabalhar com rotinas contábeis regulares e bem estruturadas?",
        "Valoriza a precisão e a confiabilidade dos registros financeiros?",
        "Sente satisfação ao fechar balanços e entregar relatórios no prazo?",
        "Tem facilidade para seguir normas fiscais e procedimentos contábeis?",
        "Prefere ambientes de trabalho estáveis e com previsibilidade de tarefas?"
      ],
      "Analista Administrativo": [
        "Gosta de organizar documentos, processos e rotinas administrativas de forma constante?",
        "Valoriza a repetição de tarefas e o cumprimento de procedimentos internos?",
        "Sente satisfação ao garantir que tudo funcione de maneira ordenada?",
        "Tem facilidade para manter registros atualizados e organizados?",
        "Prefere ambientes de escritório estruturados e com pouca variação nas atividades?"
      ],
      "Analista Financeiro": [
        "Gosta de acompanhar indicadores financeiros de forma constante e sistemática?",
        "Valoriza a regularidade no controle de receitas e despesas?",
        "Sente satisfação ao garantir a estabilidade financeira da organização?",
        "Tem facilidade para elaborar relatórios e apresentar resultados de forma clara?",
        "Prefere ambientes empresariais com rotinas bem estabelecidas?"
      ],
      "Gestor de Contratos": [
        "Gosta de administrar contratos, prazos e obrigações de forma minuciosa?",
        "Valoriza o acompanhamento contínuo do cumprimento dos contratos?",
        "Sente satisfação ao manter a regularidade dos processos contratuais?",
        "Tem facilidade para organizar documentos e monitorar pendências?",
        "Prefere ambientes de trabalho com procedimentos bem definidos e estáveis?"
      ],
      "Técnico em Recursos Humanos": [
        "Gosta de realizar rotinas de RH como folha de pagamento, benefícios e admissão?",
        "Valoriza a repetição de processos e o cumprimento de prazos no setor de RH?",
        "Sente satisfação ao garantir que todos os colaboradores recebam atendimento adequado?",
        "Tem facilidade para seguir normas e políticas internas de RH?",
        "Prefere ambientes de trabalho colaborativos e estáveis?"
      ],
      "Analista de Compliance": [
        "Gosta de acompanhar o cumprimento de normas e procedimentos internos e externos?",
        "Valoriza a rotina de monitorar processos para evitar desvios e riscos?",
        "Sente satisfação ao garantir que a empresa esteja sempre em conformidade?",
        "Tem facilidade para elaborar relatórios e implementar treinamentos regulares?",
        "Prefere ambientes empresariais que valorizam regras e estabilidade?"
      ],
      "Assistente Jurídico": [
        "Gosta de organizar processos e documentos jurídicos de maneira metódica?",
        "Valoriza a rotina de acompanhar prazos e movimentações processuais?",
        "Sente satisfação ao garantir que tudo esteja em ordem no setor jurídico?",
        "Tem facilidade para manter arquivos e registros atualizados?",
        "Prefere ambientes de escritório com rotinas jurídicas bem estabelecidas?"
      ],
      "Analista de Seguros": [
        "Gosta de analisar apólices e contratos de seguro de forma detalhada e repetitiva?",
        "Valoriza a rotina de conferir informações e acompanhar sinistros?",
        "Sente satisfação ao garantir que clientes estejam sempre protegidos?",
        "Tem facilidade para seguir normas e padrões do setor de seguros?",
        "Prefere ambientes administrativos organizados e previsíveis?"
      ]
    },
    LinguagensLetrasArtes: {
      "Revisor de Textos": [
        "Gosta de revisar textos de forma minuciosa, procurando erros e inconsistências?",
        "Valoriza a rotina de padronizar e garantir a qualidade dos conteúdos escritos?",
        "Sente satisfação ao entregar textos perfeitamente revisados?",
        "Tem facilidade para seguir normas gramaticais e editoriais?",
        "Prefere ambientes de trabalho silenciosos e com rotinas bem definidas?"
      ],
      "Tradutor Técnico": [
        "Gosta de traduzir textos técnicos respeitando termos e padrões específicos?",
        "Valoriza a repetição de tarefas e o uso de glossários e bases de dados?",
        "Sente satisfação ao entregar traduções precisas e consistentes?",
        "Tem facilidade para manter a atenção a detalhes ao longo de textos extensos?",
        "Prefere ambientes de trabalho tranquilos, com prazos claros e previsíveis?"
      ],
      "Editor de Conteúdo": [
        "Gosta de editar textos, imagens e materiais seguindo padrões editoriais estáveis?",
        "Valoriza a rotina de revisar e atualizar conteúdos periodicamente?",
        "Sente satisfação ao garantir a qualidade e a regularidade das publicações?",
        "Tem facilidade para organizar fluxos de trabalho e manter cronogramas?",
        "Prefere ambientes editoriais estruturados e previsíveis?"
      ],
      "Diagramador": [
        "Gosta de montar e organizar páginas de livros ou revistas de forma metódica?",
        "Valoriza a repetição de tarefas de diagramação dentro de padrões visuais definidos?",
        "Sente satisfação ao ver o resultado final bem organizado e harmonioso?",
        "Tem facilidade para seguir manuais de identidade visual e estilos?",
        "Prefere ambientes de trabalho organizados, com rotinas estáveis?"
      ],
      "Ilustrador Técnico": [
        "Gosta de criar ilustrações detalhadas e precisas para manuais e livros técnicos?",
        "Valoriza a repetição de estilos e técnicas para manter padrões visuais?",
        "Sente satisfação ao entregar ilustrações consistentes e funcionais?",
        "Tem facilidade para seguir orientações detalhadas de projetos gráficos?",
        "Prefere ambientes de trabalho que valorizam organização e previsibilidade?"
      ],
      "Professor de Língua Portuguesa": [
        "Gosta de manter rotinas claras nas aulas para garantir o aprendizado dos alunos?",
        "Valoriza a repetição de exercícios e atividades para fixação do conteúdo?",
        "Sente satisfação ao acompanhar o progresso dos alunos ao longo do tempo?",
        "Tem facilidade para planejar e cumprir cronogramas escolares?",
        "Prefere ambientes educacionais estruturados e previsíveis?"
      ],
      "Professor de Língua Estrangeira": [
        "Gosta de ensinar idiomas com métodos estáveis e rotinas bem definidas?",
        "Valoriza o uso repetido de exercícios e práticas para o aprendizado?",
        "Sente satisfação ao ver alunos avançando gradualmente no idioma?",
        "Tem facilidade para organizar conteúdos e aulas de forma sistemática?",
        "Prefere ambientes escolares com rotinas claras e planejadas?"
      ],
      "Técnico em Multimídia": [
        "Gosta de editar vídeos, áudios e imagens seguindo padrões técnicos repetitivos?",
        "Valoriza a rotina de manter arquivos organizados e padronizados?",
        "Sente satisfação ao entregar produções multimídia com qualidade constante?",
        "Tem facilidade para seguir roteiros, briefings e checklists técnicos?",
        "Prefere ambientes de trabalho tecnológicos organizados e previsíveis?"
      ]
    },
    Engenharias: {
      "Engenheiro de Segurança do Trabalho": [
        "Gosta de implementar e monitorar rotinas de segurança em ambientes industriais?",
        "Valoriza a repetição de inspeções e treinamentos para garantir a prevenção de acidentes?",
        "Sente satisfação ao ver ambientes de trabalho funcionando de forma segura e estável?",
        "Tem facilidade para seguir normas técnicas e padrões de segurança?",
        "Prefere ambientes industriais organizados e com pouco improviso?"
      ],
      "Engenheiro de Manutenção": [
        "Gosta de acompanhar a manutenção regular de máquinas e equipamentos?",
        "Valoriza a rotina de programar revisões e consertos preventivos?",
        "Sente satisfação ao garantir o funcionamento contínuo das operações industriais?",
        "Tem facilidade para registrar e acompanhar históricos de manutenção?",
        "Prefere ambientes industriais estruturados e previsíveis?"
      ],
      "Engenheiro de Processos": [
        "Gosta de padronizar e otimizar processos produtivos para garantir estabilidade?",
        "Valoriza o acompanhamento de indicadores de desempenho a longo prazo?",
        "Sente satisfação ao manter a eficiência dos processos industriais?",
        "Tem facilidade para implementar e seguir procedimentos técnicos rigorosos?",
        "Prefere ambientes industriais organizados e com rotinas bem estabelecidas?"
      ],
      "Engenheiro de Qualidade": [
        "Gosta de monitorar padrões de qualidade e implementar melhorias contínuas?",
        "Valoriza a repetição de auditorias e inspeções para garantir a conformidade dos produtos?",
        "Sente satisfação ao manter a estabilidade dos resultados industriais?",
        "Tem facilidade para seguir normas técnicas e padrões de certificação?",
        "Prefere ambientes industriais com foco em qualidade e estabilidade?"
      ],
      "Engenheiro de Materiais": [
        "Gosta de analisar e testar materiais de acordo com normas técnicas estáveis?",
        "Valoriza a repetição de ensaios e experimentos para garantir qualidade?",
        "Sente satisfação ao ver materiais aprovados em testes rigorosos?",
        "Tem facilidade para documentar resultados e manter laudos organizados?",
        "Prefere ambientes laboratoriais e industriais organizados?"
      ],
      "Engenheiro Agrícola": [
        "Gosta de acompanhar o funcionamento regular de máquinas e sistemas agrícolas?",
        "Valoriza a rotina de manutenção e monitoramento de equipamentos no campo?",
        "Sente satisfação ao garantir a estabilidade das operações agrícolas?",
        "Tem facilidade para seguir manuais e procedimentos técnicos?",
        "Prefere ambientes rurais organizados e previsíveis?"
      ],
      "Engenheiro Ambiental": [
        "Gosta de monitorar indicadores ambientais e garantir a estabilidade dos ecossistemas?",
        "Valoriza o acompanhamento regular de projetos de conservação?",
        "Sente satisfação em ver resultados ambientais positivos ao longo do tempo?",
        "Tem facilidade para seguir normas ambientais e procedimentos técnicos?",
        "Prefere ambientes de trabalho estruturados, com foco em sustentabilidade contínua?"
      ],
      "Engenheiro de Alimentos": [
        "Gosta de acompanhar processos industriais de alimentos de forma contínua e disciplinada?",
        "Valoriza a padronização e a repetição de procedimentos para garantir qualidade?",
        "Sente satisfação ao garantir a regularidade dos produtos alimentícios?",
        "Tem facilidade para seguir normas e padrões de segurança alimentar?",
        "Prefere ambientes industriais organizados e com rotinas bem definidas?"
      ]
    },
    Tecnologias: {
      "Analista de Suporte Técnico": [
        "Gosta de resolver problemas técnicos de forma metódica e atenciosa?",
        "Valoriza o acompanhamento regular de chamados e solicitações de suporte?",
        "Sente satisfação ao garantir a estabilidade dos sistemas dos clientes?",
        "Tem facilidade para seguir procedimentos de atendimento e registro?",
        "Prefere ambientes de TI organizados e com rotinas previsíveis?"
      ],
      "Administrador de Banco de Dados": [
        "Gosta de manter bancos de dados organizados e funcionando de forma estável?",
        "Valoriza a rotina de backup, manutenção e monitoramento de dados?",
        "Sente satisfação ao garantir a integridade e a disponibilidade das informações?",
        "Tem facilidade para seguir normas de segurança e procedimentos técnicos?",
        "Prefere ambientes de TI estruturados e previsíveis?"
      ],
      "Programador": [
        "Gosta de desenvolver códigos bem estruturados, estáveis e fáceis de manter?",
        "Valoriza a rotina de programar, testar e corrigir de forma regular?",
        "Sente satisfação ao ver sistemas funcionando sem falhas ao longo do tempo?",
        "Tem facilidade para seguir padrões de desenvolvimento e documentação?",
        "Prefere ambientes de trabalho que valorizam processos claros e organização?"
      ],
      "Operador de Sistemas": [
        "Gosta de monitorar o funcionamento de sistemas para garantir sua estabilidade?",
        "Valoriza o cumprimento de rotinas operacionais e checklists diários?",
        "Sente satisfação ao solucionar problemas rapidamente e evitar interrupções?",
        "Tem facilidade para seguir procedimentos de operação e manutenção?",
        "Prefere ambientes de TI organizados e com processos bem definidos?"
      ],
      "Analista de Testes de Software": [
        "Gosta de testar softwares repetidamente para garantir sua confiabilidade?",
        "Valoriza a rotina de criar, executar e registrar casos de teste?",
        "Sente satisfação ao identificar e corrigir falhas antes do lançamento?",
        "Tem facilidade para manter registros detalhados de bugs e correções?",
        "Prefere ambientes de desenvolvimento que valorizam qualidade e repetição?"
      ],
      "Administrador de Sistemas": [
        "Gosta de garantir o funcionamento contínuo dos sistemas de TI da empresa?",
        "Valoriza a rotina de monitoramento, atualização e manutenção de servidores?",
        "Sente satisfação ao evitar problemas técnicos e interrupções de serviço?",
        "Tem facilidade para seguir procedimentos de segurança e boas práticas?",
        "Prefere ambientes de TI estáveis, com processos bem definidos?"
      ],
      "Técnico em Redes": [
        "Gosta de monitorar e manter redes de computadores em funcionamento estável?",
        "Valoriza a repetição de verificações e manutenções preventivas?",
        "Sente satisfação ao garantir a conectividade e a segurança das redes?",
        "Tem facilidade para seguir padrões e normas de redes?",
        "Prefere ambientes de trabalho organizados e previsíveis?"
      ],
      "Analista de Processos Digitais": [
        "Gosta de acompanhar e otimizar processos digitais para garantir estabilidade?",
        "Valoriza a repetição e o acompanhamento de indicadores digitais?",
        "Sente satisfação ao perceber que as operações digitais funcionam sem interrupções?",
        "Tem facilidade para documentar e padronizar fluxos digitais?",
        "Prefere ambientes de tecnologia estruturados, com rotinas claras?"
      ]
    }
  }
};
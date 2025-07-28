// Estrutura correta: discAreasPerguntasDominancia[perfilDISC][area][profissao] = [ "pergunta1", "pergunta2", ... ]

export const discAreasPerguntasDominancia = {
  Dominancia: {
    Humanas: {
      "Líder Comunitário": [
        "Gosta de tomar a frente na organização de projetos sociais em sua comunidade?",
        "Sente-se confortável em liderar equipes de pessoas em causas sociais?",
        "Consegue articular recursos e parcerias para resolver problemas coletivos?",
        "Tem facilidade para tomar decisões rápidas diante de desafios comunitários?",
        "Sente-se motivado ao ver resultados concretos de sua liderança em benefício do coletivo?"
      ],
      "Gestor Escolar": [
        "Sente-se responsável por conduzir o desenvolvimento e o clima de uma instituição educacional?",
        "Gosta de tomar decisões estratégicas para melhorar o desempenho escolar?",
        "Tem facilidade em mediar conflitos entre professores, alunos e famílias?",
        "Consegue coordenar equipes e delegar tarefas para atingir objetivos pedagógicos?",
        "Sente-se realizado ao implementar mudanças estruturais na escola?"
      ],
      "Coordenador de Projetos Sociais": [
        "Gosta de planejar e liderar ações sociais do início ao fim?",
        "Tem facilidade em definir metas, prazos e estratégias em projetos sociais?",
        "Sente-se confortável em cobrar resultados de sua equipe?",
        "Consegue negociar com diferentes parceiros para viabilizar projetos?",
        "Sente satisfação ao ver o impacto social de projetos que coordenou?"
      ],
      "Diretor de ONG": [
        "Gosta de representar institucionalmente causas sociais perante o público?",
        "Tem facilidade para liderar equipes multidisciplinares em ONGs?",
        "Sabe tomar decisões difíceis para garantir a sustentabilidade da organização?",
        "Sente-se motivado ao captar recursos e estabelecer parcerias estratégicas?",
        "Considera importante acompanhar de perto o impacto dos projetos da ONG?"
      ],
      "Consultor em Políticas Públicas": [
        "Gosta de analisar contextos e propor soluções inovadoras para políticas públicas?",
        "Tem facilidade em influenciar lideranças e gestores para adoção de suas propostas?",
        "Consegue defender ideias com firmeza em ambientes institucionais?",
        "Sente-se motivado a participar da elaboração de políticas de grande impacto social?",
        "Aprecia liderar equipes de especialistas em projetos de consultoria pública?"
      ],
      "Empreendedor Social": [
        "Tem iniciativa para identificar problemas e criar soluções inovadoras para a sociedade?",
        "Gosta de assumir riscos para implementar projetos sociais próprios?",
        "Consegue mobilizar pessoas em torno de uma causa transformadora?",
        "Tem facilidade para tomar decisões rápidas e estratégicas em situações de incerteza?",
        "Sente-se realizado ao ver um projeto social crescer sob sua liderança?"
      ],
      "Gestor Cultural": [
        "Gosta de organizar eventos culturais de grande porte e visibilidade?",
        "Tem habilidade para liderar equipes de produção cultural?",
        "Consegue captar recursos e parceiros para projetos culturais?",
        "Sente-se confortável ao tomar decisões sobre programação e investimentos culturais?",
        "Sente-se motivado ao ver o impacto cultural de sua gestão na comunidade?"
      ],
      "Psicólogo Organizacional": [
        "Gosta de liderar programas de desenvolvimento humano nas empresas?",
        "Tem facilidade para propor e implementar mudanças em ambientes organizacionais?",
        "Consegue mediar conflitos coletivos e propor soluções assertivas?",
        "Sente-se confortável em orientar gestores e equipes para melhor desempenho?",
        "Sente-se motivado ao ver resultados positivos de intervenções psicológicas no ambiente de trabalho?"
      ]
    },
    Exatas: {
      "Consultor de Inovação": [
        "Gosta de propor soluções inovadoras para desafios complexos em empresas?",
        "Tem facilidade em liderar equipes multidisciplinares em projetos de inovação?",
        "Consegue convencer gestores sobre a adoção de novas tecnologias e métodos?",
        "Gosta de tomar decisões rápidas baseadas em dados técnicos?",
        "Sente satisfação ao ver suas ideias implementadas com sucesso?"
      ],
      "Gestor de Projetos de Engenharia": [
        "Gosta de planejar, coordenar e supervisionar todas as etapas de um projeto de engenharia?",
        "Tem facilidade para delegar responsabilidades e acompanhar resultados técnicos?",
        "Sente-se confortável ao resolver imprevistos e tomar decisões sob pressão?",
        "Consegue liderar equipes técnicas e multidisciplinares?",
        "Sente-se motivado ao entregar grandes obras ou projetos dentro do prazo e orçamento?"
      ],
      "Analista de Riscos": [
        "Gosta de avaliar riscos e propor estratégias para mitigá-los em projetos técnicos?",
        "Tem facilidade para tomar decisões importantes baseadas em análises quantitativas?",
        "Consegue influenciar equipes e gestores para adoção de práticas seguras?",
        "Sente-se confortável ao assumir a responsabilidade por decisões críticas?",
        "Sente-se motivado ao garantir a segurança e sucesso de projetos de alto impacto?"
      ],
      "Diretor de Pesquisa e Desenvolvimento": [
        "Gosta de liderar equipes de pesquisa focadas em gerar inovação?",
        "Tem facilidade em tomar decisões estratégicas sobre investimentos em novas tecnologias?",
        "Consegue coordenar projetos de P&D do planejamento à execução?",
        "Sente-se confortável em assumir riscos para buscar soluções pioneiras?",
        "Sente satisfação ao ver produtos inovadores lançados sob sua direção?"
      ],
      "Coordenador de TI": [
        "Gosta de liderar equipes de tecnologia e coordenar projetos de TI?",
        "Tem facilidade para tomar decisões técnicas e estratégicas rapidamente?",
        "Consegue motivar equipes a cumprir prazos e metas tecnológicas?",
        "Sente-se confortável ao assumir a responsabilidade sobre a infraestrutura de TI da empresa?",
        "Sente-se motivado a implementar melhorias e inovações tecnológicas?"
      ],
      "Gerente de Operações": [
        "Gosta de planejar, organizar e otimizar processos em ambientes industriais?",
        "Tem facilidade para liderar grandes equipes operacionais?",
        "Consegue tomar decisões rápidas em situações críticas de produção?",
        "Sente-se responsável pelo alcance de resultados e metas de produção?",
        "Sente realização ao ver operações funcionando de forma eficiente sob sua gestão?"
      ],
      "Supervisor de Controle de Qualidade": [
        "Gosta de liderar equipes responsáveis pela qualidade de produtos ou serviços?",
        "Tem facilidade para implementar normas e padrões de qualidade?",
        "Consegue tomar decisões para corrigir falhas rapidamente?",
        "Sente-se confortável ao cobrar resultados e desempenho da equipe?",
        "Sente satisfação ao garantir altos padrões de qualidade em sua área?"
      ],
      "Consultor de Data Science": [
        "Gosta de liderar projetos de análise de dados para tomada de decisões estratégicas?",
        "Tem facilidade para apresentar ideias complexas de forma clara e convincente?",
        "Consegue propor soluções inovadoras a partir da análise de grandes volumes de dados?",
        "Sente-se confortável liderando equipes técnicas multidisciplinares?",
        "Sente motivação ao ver as decisões da empresa baseadas em suas análises?"
      ]
    },
    Biologicas: {
      "Gestor de Laboratório": [
        "Gosta de supervisionar todas as etapas de funcionamento de um laboratório?",
        "Tem facilidade para liderar e treinar equipes técnicas?",
        "Consegue tomar decisões rápidas diante de situações de risco laboratorial?",
        "Sente-se confortável com a responsabilidade sobre segurança e resultados?",
        "Sente satisfação ao ver o laboratório reconhecido pela eficiência sob sua gestão?"
      ],
      "Diretor Clínico": [
        "Gosta de liderar equipes multiprofissionais na área da saúde?",
        "Tem facilidade para tomar decisões clínicas em situações críticas?",
        "Consegue gerenciar recursos humanos e materiais de uma clínica?",
        "Sente-se confortável ao assumir a responsabilidade pelo desempenho da equipe?",
        "Sente realização ao ver a clínica crescer sob sua liderança?"
      ],
      "Coordenador de Pesquisas Biomédicas": [
        "Gosta de planejar e liderar projetos de pesquisa em saúde?",
        "Tem facilidade para coordenar equipes de cientistas e técnicos?",
        "Consegue tomar decisões sobre rumos de pesquisa e métodos científicos?",
        "Sente-se confortável ao apresentar resultados para financiadores e parceiros?",
        "Sente satisfação ao ver descobertas sendo aplicadas na prática?"
      ],
      "Líder de Equipe de Biotecnologia": [
        "Gosta de liderar pesquisas e projetos de inovação biotecnológica?",
        "Tem facilidade para delegar tarefas e acompanhar resultados em laboratório?",
        "Consegue tomar decisões estratégicas para o sucesso dos projetos?",
        "Sente-se confortável em assumir responsabilidades técnicas e administrativas?",
        "Sente motivação ao ver novos produtos biotecnológicos lançados sob sua liderança?"
      ],
      "Gestor de Projetos em Saúde": [
        "Gosta de planejar e coordenar ações para melhorar a saúde coletiva?",
        "Tem facilidade para gerenciar equipes e recursos em projetos de saúde?",
        "Consegue tomar decisões rápidas diante de emergências em saúde pública?",
        "Sente-se confortável ao negociar com parceiros e autoridades de saúde?",
        "Sente satisfação ao ver melhorias reais nos indicadores de saúde da população?"
      ],
      "Coordenador de Vigilância Epidemiológica": [
        "Gosta de liderar ações de monitoramento e controle de doenças?",
        "Tem facilidade para coordenar equipes em situações de surto ou epidemia?",
        "Consegue tomar decisões importantes com base em dados epidemiológicos?",
        "Sente-se confortável ao comunicar riscos à população?",
        "Sente satisfação em contribuir para a saúde pública com sua liderança?"
      ],
      "Supervisor de Pesquisa Clínica": [
        "Gosta de gerenciar equipes envolvidas em ensaios clínicos?",
        "Tem facilidade para monitorar protocolos e garantir qualidade dos dados?",
        "Consegue tomar decisões para resolver imprevistos durante pesquisas clínicas?",
        "Sente-se confortável ao assumir responsabilidade por resultados clínicos?",
        "Sente satisfação ao ver avanços científicos resultantes de sua supervisão?"
      ],
      "Gerente de Programas Ambientais": [
        "Gosta de liderar programas de preservação e recuperação ambiental?",
        "Tem facilidade para planejar ações e coordenar equipes multidisciplinares?",
        "Consegue tomar decisões estratégicas para garantir o sucesso de programas ambientais?",
        "Sente-se confortável em negociar com stakeholders ambientais?",
        "Sente satisfação ao ver o impacto positivo de programas sob sua gestão?"
      ]
    },
    Agrarias: {
      "Gestor de Fazenda": [
        "Gosta de coordenar todas as operações de uma fazenda, do plantio à colheita?",
        "Tem facilidade para liderar equipes rurais e dividir tarefas?",
        "Consegue tomar decisões rápidas diante de desafios do campo?",
        "Sente-se confortável gerenciando recursos e investimentos agrícolas?",
        "Sente satisfação ao ver a produtividade da fazenda crescer sob sua liderança?"
      ],
      "Coordenador de Projetos Agroindustriais": [
        "Gosta de liderar projetos de integração entre campo e indústria?",
        "Tem facilidade para planejar processos de produção agroindustrial?",
        "Consegue tomar decisões estratégicas para aumentar a eficiência industrial?",
        "Sente-se confortável ao assumir responsabilidades por grandes equipes?",
        "Sente satisfação ao ver produtos agroindustriais ganhando mercado sob sua coordenação?"
      ],
      "Supervisor de Produção Animal": [
        "Gosta de liderar equipes responsáveis pelo manejo animal?",
        "Tem facilidade para implementar processos de produção eficiente?",
        "Consegue tomar decisões rápidas para garantir o bem-estar animal?",
        "Sente-se confortável ao cobrar desempenho da equipe?",
        "Sente satisfação ao ver altos índices de produtividade animal?"
      ],
      "Diretor de Cooperativa Agrícola": [
        "Gosta de liderar associações ou cooperativas de produtores rurais?",
        "Tem facilidade para tomar decisões estratégicas para o grupo?",
        "Consegue negociar com empresas e autoridades em nome dos cooperados?",
        "Sente-se confortável ao representar a cooperativa em eventos e reuniões?",
        "Sente satisfação ao ver a cooperativa prosperar sob sua direção?"
      ],
      "Gestor de Projetos Florestais": [
        "Gosta de liderar projetos de reflorestamento ou manejo florestal?",
        "Tem facilidade para planejar ações em grandes áreas naturais?",
        "Consegue tomar decisões para garantir sustentabilidade e produtividade?",
        "Sente-se confortável ao coordenar equipes de campo?",
        "Sente satisfação ao ver resultados ambientais positivos dos projetos?"
      ],
      "Consultor em Agronegócios": [
        "Gosta de orientar empresas e produtores para aumentar resultados no agronegócio?",
        "Tem facilidade para analisar cenários e sugerir soluções estratégicas?",
        "Consegue liderar processos de mudança em propriedades rurais?",
        "Sente-se confortável ao negociar contratos e parcerias?",
        "Sente satisfação ao ver clientes prosperando com suas orientações?"
      ],
      "Gestor de Projetos de Irrigação": [
        "Gosta de liderar a implementação de sistemas de irrigação em áreas agrícolas?",
        "Tem facilidade para coordenar equipes técnicas no campo?",
        "Consegue tomar decisões rápidas para solucionar imprevistos hídricos?",
        "Sente-se confortável ao assumir responsabilidade por grandes projetos?",
        "Sente satisfação ao ver melhorias na produção agrícola graças à sua gestão?"
      ],
      "Supervisor de Agroindústria": [
        "Gosta de supervisionar equipes em processos industriais do agronegócio?",
        "Tem facilidade para implementar padrões de qualidade e produtividade?",
        "Consegue tomar decisões rápidas para resolver falhas industriais?",
        "Sente-se confortável ao cobrar resultados dos colaboradores?",
        "Sente satisfação ao ver o crescimento da agroindústria sob sua supervisão?"
      ]
    },
    CienciasSociaisAplicadas: {
      "Administrador": [
        "Gosta de liderar equipes e tomar decisões estratégicas em organizações?",
        "Tem facilidade para planejar e organizar recursos empresariais?",
        "Consegue delegar funções e cobrar resultados de colaboradores?",
        "Sente-se confortável ao assumir responsabilidades por metas e resultados?",
        "Sente satisfação ao ver a empresa crescer sob sua administração?"
      ],
      "Gerente de RH": [
        "Gosta de liderar processos de recrutamento, seleção e desenvolvimento de pessoas?",
        "Tem facilidade para gerenciar conflitos no ambiente de trabalho?",
        "Consegue implementar políticas de gestão de pessoas eficientes?",
        "Sente-se confortável ao avaliar desempenho e promover colaboradores?",
        "Sente satisfação ao ver equipes motivadas e produtivas sob sua gestão?"
      ],
      "Executivo de Contas": [
        "Gosta de liderar negociações com clientes e fechar grandes contratos?",
        "Tem facilidade para identificar oportunidades de negócios?",
        "Consegue coordenar equipes de atendimento ao cliente?",
        "Sente-se confortável ao tomar decisões comerciais importantes?",
        "Sente satisfação ao superar metas e ver os resultados de suas estratégias?"
      ],
      "Consultor Empresarial": [
        "Gosta de analisar empresas e propor soluções estratégicas para crescimento?",
        "Tem facilidade em liderar processos de mudança organizacional?",
        "Consegue influenciar gestores para adotar novas práticas administrativas?",
        "Sente-se confortável ao apresentar diagnósticos e planos de ação?",
        "Sente satisfação ao ver empresas prosperando com sua consultoria?"
      ],
      "Diretor Financeiro": [
        "Gosta de liderar o controle financeiro e orçamentário de empresas?",
        "Tem facilidade para tomar decisões sobre investimentos e cortes de custos?",
        "Consegue coordenar equipes de contabilidade e finanças?",
        "Sente-se confortável ao assumir responsabilidade financeira da organização?",
        "Sente satisfação ao garantir a saúde financeira da empresa?"
      ],
      "Gestor de Marketing": [
        "Gosta de liderar equipes em campanhas de marketing?",
        "Tem facilidade para definir estratégias de posicionamento e vendas?",
        "Consegue tomar decisões rápidas diante de mudanças no mercado?",
        "Sente-se confortável ao assumir responsabilidade por resultados de vendas?",
        "Sente satisfação ao ver campanhas bem-sucedidas sob sua liderança?"
      ],
      "Advogado Corporativo": [
        "Gosta de liderar processos jurídicos empresariais de grande porte?",
        "Tem facilidade para tomar decisões jurídicas rápidas e seguras?",
        "Consegue coordenar equipes jurídicas em escritórios ou empresas?",
        "Sente-se confortável ao assumir responsabilidade por decisões legais?",
        "Sente satisfação ao ver resultados positivos para a empresa sob sua orientação?"
      ],
      "Gestor Comercial": [
        "Gosta de liderar equipes de vendas em busca de resultados expressivos?",
        "Tem facilidade para planejar estratégias comerciais e de mercado?",
        "Consegue tomar decisões rápidas para atingir metas de vendas?",
        "Sente-se confortável ao assumir responsabilidade por grandes contas?",
        "Sente satisfação ao ver o crescimento das vendas sob sua gestão?"
      ]
    },
    LinguagensLetrasArtes: {
      "Diretor de Arte": [
        "Gosta de liderar equipes criativas em projetos de design?",
        "Tem facilidade para tomar decisões sobre direção visual de campanhas?",
        "Consegue coordenar diferentes talentos para atingir objetivos artísticos?",
        "Sente-se confortável ao assumir responsabilidade pela identidade visual de projetos?",
        "Sente satisfação ao ver o sucesso de campanhas visuais sob sua direção?"
      ],
      "Produtor Cultural": [
        "Gosta de liderar a produção de eventos culturais de grande porte?",
        "Tem facilidade para coordenar diferentes áreas em eventos culturais?",
        "Consegue negociar parcerias e recursos para projetos culturais?",
        "Sente-se confortável ao assumir responsabilidade pelo resultado de eventos?",
        "Sente satisfação ao ver o impacto cultural das produções que coordenou?"
      ],
      "Gestor Editorial": [
        "Gosta de liderar equipes de redação, revisão e edição de publicações?",
        "Tem facilidade para tomar decisões sobre seleção e lançamento de obras?",
        "Consegue coordenar todas as etapas do processo editorial?",
        "Sente-se confortável ao assumir responsabilidade pelo conteúdo publicado?",
        "Sente satisfação ao ver o sucesso editorial de obras sob sua gestão?"
      ],
      "Diretor de Teatro": [
        "Gosta de liderar elencos e equipes técnicas em produções teatrais?",
        "Tem facilidade para tomar decisões sobre montagem e direção de espetáculos?",
        "Consegue inspirar artistas e extrair o melhor de suas equipes?",
        "Sente-se confortável ao assumir responsabilidade pelo resultado artístico?",
        "Sente satisfação ao ver o sucesso de peças que dirigiu?"
      ],
      "Coordenador de Comunicação": [
        "Gosta de liderar projetos de comunicação institucional?",
        "Tem facilidade para coordenar equipes de comunicação e marketing?",
        "Consegue tomar decisões rápidas em situações de crise de imagem?",
        "Sente-se confortável ao assumir responsabilidade pela reputação da organização?",
        "Sente satisfação ao ver melhora na imagem institucional após seu trabalho?"
      ],
      "Diretor de Marketing Digital": [
        "Gosta de liderar equipes em campanhas digitais?",
        "Tem facilidade para planejar e executar estratégias de marketing online?",
        "Consegue tomar decisões rápidas baseadas em dados de performance?",
        "Sente-se confortável ao assumir responsabilidade pelos resultados digitais?",
        "Sente satisfação ao ver campanhas digitais bem-sucedidas sob sua direção?"
      ],
      "Editor-Chefe": [
        "Gosta de liderar redações jornalísticas ou editoriais?",
        "Tem facilidade para tomar decisões sobre pautas e conteúdos publicados?",
        "Consegue coordenar equipes de jornalistas e repórteres?",
        "Sente-se confortável ao assumir responsabilidade pelas publicações?",
        "Sente satisfação ao ver o reconhecimento editorial do veículo sob sua chefia?"
      ],
      "Curador de Artes": [
        "Gosta de selecionar e organizar exposições artísticas?",
        "Tem facilidade para tomar decisões sobre temas e artistas das exposições?",
        "Consegue liderar equipes de montagem e produção de exposições?",
        "Sente-se confortável ao assumir responsabilidade por acervos culturais?",
        "Sente satisfação ao ver exposições bem-sucedidas sob sua curadoria?"
      ]
    },
    Engenharias: {
      "Engenheiro Civil": [
        "Gosta de liderar equipes em obras de construção civil?",
        "Tem facilidade para tomar decisões sobre projetos estruturais?",
        "Consegue coordenar profissionais de diferentes áreas em uma obra?",
        "Sente-se confortável ao assumir responsabilidade por grandes projetos?",
        "Sente satisfação ao ver obras concluídas sob sua liderança?"
      ],
      "Engenheiro Mecânico": [
        "Gosta de liderar equipes em projetos de máquinas e equipamentos?",
        "Tem facilidade para tomar decisões técnicas em ambientes industriais?",
        "Consegue planejar e coordenar etapas de produção mecânica?",
        "Sente-se confortável ao assumir responsabilidade por projetos tecnológicos?",
        "Sente satisfação ao ver novas máquinas em funcionamento sob sua supervisão?"
      ],
      "Engenheiro de Produção": [
        "Gosta de liderar processos produtivos em empresas industriais?",
        "Tem facilidade para otimizar processos e aumentar eficiência operacional?",
        "Consegue coordenar equipes multidisciplinares?",
        "Sente-se confortável ao assumir responsabilidade por resultados industriais?",
        "Sente satisfação ao ver o aumento da produtividade sob sua gestão?"
      ],
      "Engenheiro de Controle e Automação": [
        "Gosta de liderar projetos de automação industrial?",
        "Tem facilidade para tomar decisões rápidas diante de problemas técnicos?",
        "Consegue coordenar equipes de implantação de sistemas automatizados?",
        "Sente-se confortável ao assumir responsabilidade por grandes sistemas automatizados?",
        "Sente satisfação ao ver linhas de produção automatizadas sob sua liderança?"
      ],
      "Engenheiro Elétrico": [
        "Gosta de liderar projetos de instalações e sistemas elétricos?",
        "Tem facilidade para tomar decisões técnicas em projetos complexos?",
        "Consegue coordenar equipes de eletricistas e técnicos?",
        "Sente-se confortável ao assumir responsabilidade por redes e sistemas elétricos?",
        "Sente satisfação ao ver sistemas elétricos eficientes implementados sob sua liderança?"
      ],
      "Engenheiro Químico": [
        "Gosta de liderar projetos de processos químicos industriais?",
        "Tem facilidade para tomar decisões sobre produção e controle de qualidade?",
        "Consegue coordenar equipes em plantas químicas?",
        "Sente-se confortável ao assumir responsabilidade por processos químicos?",
        "Sente satisfação ao ver produtos químicos de alta qualidade sob sua coordenação?"
      ],
      "Engenheiro de Materiais": [
        "Gosta de liderar pesquisas e projetos sobre novos materiais?",
        "Tem facilidade para tomar decisões sobre aplicação de materiais em projetos?",
        "Consegue coordenar equipes de laboratório e produção?",
        "Sente-se confortável ao assumir responsabilidade por processos de inovação em materiais?",
        "Sente satisfação ao ver novos materiais sendo aplicados em grandes projetos?"
      ],
      "Engenheiro de Minas": [
        "Gosta de liderar operações de extração mineral?",
        "Tem facilidade para tomar decisões em ambientes de risco controlado?",
        "Consegue coordenar equipes de mineração em campo?",
        "Sente-se confortável ao assumir responsabilidade por processos de mineração?",
        "Sente satisfação ao ver operações de mineração eficientes sob sua liderança?"
      ]
    },
    Tecnologias: {
      "Gerente de Projetos de TI": [
        "Gosta de liderar equipes em projetos de tecnologia da informação?",
        "Tem facilidade para planejar e acompanhar cronogramas de projetos de TI?",
        "Consegue tomar decisões rápidas para resolver problemas técnicos?",
        "Sente-se confortável ao assumir responsabilidade por entregas tecnológicas?",
        "Sente satisfação ao ver projetos de TI bem-sucedidos sob sua liderança?"
      ],
      "Coordenador de Desenvolvimento de Software": [
        "Gosta de liderar equipes de desenvolvedores em projetos de software?",
        "Tem facilidade para organizar tarefas e definir prioridades técnicas?",
        "Consegue tomar decisões técnicas para garantir a qualidade do software?",
        "Sente-se confortável ao assumir responsabilidade por grandes sistemas?",
        "Sente satisfação ao ver softwares inovadores entregues sob sua coordenação?"
      ],
      "Administrador de Redes": [
        "Gosta de liderar a gestão de redes e infraestrutura de TI?",
        "Tem facilidade para tomar decisões rápidas diante de falhas de rede?",
        "Consegue coordenar equipes técnicas de suporte e infraestrutura?",
        "Sente-se confortável ao assumir responsabilidade por grandes redes corporativas?",
        "Sente satisfação ao ver redes funcionando de forma estável sob sua gestão?"
      ],
      "Gestor de Segurança da Informação": [
        "Gosta de liderar equipes de segurança digital?",
        "Tem facilidade para planejar estratégias de proteção de dados?",
        "Consegue tomar decisões rápidas diante de ameaças virtuais?",
        "Sente-se confortável ao assumir responsabilidade pela segurança da informação?",
        "Sente satisfação ao ver a empresa protegida sob sua gestão?"
      ],
      "Analista de Sistemas Sênior": [
        "Gosta de liderar projetos de análise e desenvolvimento de sistemas?",
        "Tem facilidade para tomar decisões técnicas em projetos complexos?",
        "Consegue coordenar equipes de analistas e desenvolvedores?",
        "Sente-se confortável ao assumir responsabilidade por sistemas críticos?",
        "Sente satisfação ao ver sistemas eficientes entregues sob sua liderança?"
      ],
      "Diretor de Tecnologia (CTO)": [
        "Gosta de liderar a área de tecnologia de uma organização?",
        "Tem facilidade para definir estratégias de inovação tecnológica?",
        "Consegue tomar decisões de investimento em tecnologia?",
        "Sente-se confortável ao assumir responsabilidade pelo desempenho tecnológico da empresa?",
        "Sente satisfação ao ver a empresa crescer com sua liderança em tecnologia?"
      ],
      "Líder de Equipe de Dados": [
        "Gosta de liderar projetos de análise e ciência de dados?",
        "Tem facilidade para coordenar equipes especializadas em dados?",
        "Consegue tomar decisões estratégicas baseadas em análises de dados?",
        "Sente-se confortável ao assumir responsabilidade por grandes volumes de dados?",
        "Sente satisfação ao ver insights de dados impactando a empresa sob sua liderança?"
      ],
      "Arquiteto de Soluções": [
        "Gosta de liderar o desenho de arquiteturas de sistemas complexos?",
        "Tem facilidade para tomar decisões técnicas em projetos de alto impacto?",
        "Consegue coordenar equipes de implementação de soluções?",
        "Sente-se confortável ao assumir responsabilidade técnica por grandes projetos?",
        "Sente satisfação ao ver soluções inovadoras implementadas sob sua direção?"
      ]
    }
  }
};
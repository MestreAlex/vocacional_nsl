// Profissões das 8 áreas para cada perfil DISC, harmonizadas por afinidade comportamental
// Cada área possui 8 profissões diferentes (não repetidas entre áreas)

export const discAreasProfissoes = {
  Dominancia: {
    Humanas: [
      { profissao: "Líder Comunitário", cursos: ["Gestão Pública", "Serviço Social"] },
      { profissao: "Gestor Escolar", cursos: ["Pedagogia", "Gestão Escolar"] },
      { profissao: "Coordenador de Projetos Sociais", cursos: ["Ciências Sociais", "Administração Pública"] },
      { profissao: "Diretor de ONG", cursos: ["Relações Internacionais", "Gestão Pública"] },
      { profissao: "Consultor em Políticas Públicas", cursos: ["Ciências Sociais", "Ciências Políticas"] },
      { profissao: "Empreendedor Social", cursos: ["Administração", "Ciências Sociais"] },
      { profissao: "Gestor Cultural", cursos: ["Gestão Cultural", "Artes"] },
      { profissao: "Psicólogo Organizacional", cursos: ["Psicologia"] }
    ],
    Exatas: [
      { profissao: "Consultor de Inovação", cursos: ["Engenharia", "Administração", "Matemática"] },
      { profissao: "Gestor de Projetos de Engenharia", cursos: ["Engenharia de Produção", "Engenharia Civil"] },
      { profissao: "Analista de Riscos", cursos: ["Estatística", "Matemática", "Ciências Atuariais"] },
      { profissao: "Diretor de Pesquisa e Desenvolvimento", cursos: ["Engenharia", "Física"] },
      { profissao: "Coordenador de TI", cursos: ["Sistemas de Informação", "Engenharia de Computação"] },
      { profissao: "Gerente de Operações", cursos: ["Engenharia de Produção", "Administração"] },
      { profissao: "Supervisor de Controle de Qualidade", cursos: ["Engenharia Química", "Engenharia de Materiais"] },
      { profissao: "Consultor de Data Science", cursos: ["Ciência de Dados", "Estatística"] }
    ],
    Biologicas: [
      { profissao: "Gestor de Laboratório", cursos: ["Biomedicina", "Farmácia"] },
      { profissao: "Diretor Clínico", cursos: ["Medicina", "Biomedicina"] },
      { profissao: "Coordenador de Pesquisas Biomédicas", cursos: ["Biomedicina", "Ciências Biológicas"] },
      { profissao: "Líder de Equipe de Biotecnologia", cursos: ["Biotecnologia"] },
      { profissao: "Gestor de Projetos em Saúde", cursos: ["Gestão Hospitalar", "Saúde Coletiva"] },
      { profissao: "Coordenador de Vigilância Epidemiológica", cursos: ["Saúde Coletiva", "Biomedicina"] },
      { profissao: "Supervisor de Pesquisa Clínica", cursos: ["Farmácia", "Biomedicina"] },
      { profissao: "Gerente de Programas Ambientais", cursos: ["Ecologia", "Ciências Biológicas"] }
    ],
    Agrarias: [
      { profissao: "Gestor de Fazenda", cursos: ["Agronomia", "Administração Rural"] },
      { profissao: "Coordenador de Projetos Agroindustriais", cursos: ["Engenharia de Alimentos", "Engenharia Agrícola"] },
      { profissao: "Supervisor de Produção Animal", cursos: ["Zootecnia"] },
      { profissao: "Diretor de Cooperativa Agrícola", cursos: ["Administração", "Agronomia"] },
      { profissao: "Gestor de Projetos Florestais", cursos: ["Engenharia Florestal"] },
      { profissao: "Consultor em Agronegócios", cursos: ["Administração", "Engenharia Agronômica"] },
      { profissao: "Gestor de Projetos de Irrigação", cursos: ["Engenharia Agrícola"] },
      { profissao: "Supervisor de Agroindústria", cursos: ["Tecnologia em Agroindústria"] }
    ],
    CienciasSociaisAplicadas: [
      { profissao: "Administrador", cursos: ["Administração"] },
      { profissao: "Gerente de RH", cursos: ["Gestão de Recursos Humanos"] },
      { profissao: "Executivo de Contas", cursos: ["Administração", "Economia"] },
      { profissao: "Consultor Empresarial", cursos: ["Administração", "Economia"] },
      { profissao: "Diretor Financeiro", cursos: ["Administração", "Ciências Contábeis"] },
      { profissao: "Gestor de Marketing", cursos: ["Publicidade e Propaganda", "Administração"] },
      { profissao: "Advogado Corporativo", cursos: ["Direito"] },
      { profissao: "Gestor Comercial", cursos: ["Administração", "Gestão Comercial"] }
    ],
    LinguagensLetrasArtes: [
      { profissao: "Diretor de Arte", cursos: ["Design", "Artes Visuais"] },
      { profissao: "Produtor Cultural", cursos: ["Produção Cultural", "Artes"] },
      { profissao: "Gestor Editorial", cursos: ["Letras", "Comunicação Social"] },
      { profissao: "Diretor de Teatro", cursos: ["Artes Cênicas", "Teatro"] },
      { profissao: "Coordenador de Comunicação", cursos: ["Comunicação Social"] },
      { profissao: "Diretor de Marketing Digital", cursos: ["Publicidade e Propaganda", "Comunicação Digital"] },
      { profissao: "Editor-Chefe", cursos: ["Jornalismo"] },
      { profissao: "Curador de Artes", cursos: ["Artes Visuais", "Gestão Cultural"] }
    ],
    Engenharias: [
      { profissao: "Engenheiro Civil", cursos: ["Engenharia Civil"] },
      { profissao: "Engenheiro Mecânico", cursos: ["Engenharia Mecânica"] },
      { profissao: "Engenheiro de Produção", cursos: ["Engenharia de Produção"] },
      { profissao: "Engenheiro de Controle e Automação", cursos: ["Engenharia de Controle e Automação"] },
      { profissao: "Engenheiro Elétrico", cursos: ["Engenharia Elétrica"] },
      { profissao: "Engenheiro Químico", cursos: ["Engenharia Química"] },
      { profissao: "Engenheiro de Materiais", cursos: ["Engenharia de Materiais"] },
      { profissao: "Engenheiro de Minas", cursos: ["Engenharia de Minas"] }
    ],
    Tecnologias: [
      { profissao: "Gerente de Projetos de TI", cursos: ["Sistemas de Informação", "Gestão de TI"] },
      { profissao: "Coordenador de Desenvolvimento de Software", cursos: ["Engenharia de Software", "Ciência da Computação"] },
      { profissao: "Administrador de Redes", cursos: ["Redes de Computadores"] },
      { profissao: "Gestor de Segurança da Informação", cursos: ["Segurança da Informação", "Engenharia de Computação"] },
      { profissao: "Analista de Sistemas Sênior", cursos: ["Análise de Sistemas"] },
      { profissao: "Diretor de Tecnologia (CTO)", cursos: ["Ciência da Computação", "Engenharia de Computação"] },
      { profissao: "Líder de Equipe de Dados", cursos: ["Ciência de Dados", "Estatística"] },
      { profissao: "Arquiteto de Soluções", cursos: ["Engenharia de Computação", "Engenharia de Software"] }
    ]
  },

  Influencia: {
    Humanas: [
      { profissao: "Psicólogo", cursos: ["Psicologia"] },
      { profissao: "Pedagogo", cursos: ["Pedagogia"] },
      { profissao: "Professor Universitário", cursos: ["Diversos"] },
      { profissao: "Cientista Político", cursos: ["Ciência Política"] },
      { profissao: "Antropólogo", cursos: ["Antropologia", "Ciências Sociais"] },
      { profissao: "Sociólogo", cursos: ["Ciências Sociais"] },
      { profissao: "Historiador", cursos: ["História"] },
      { profissao: "Geógrafo", cursos: ["Geografia"] }
    ],
    Exatas: [
      { profissao: "Professor de Matemática", cursos: ["Matemática"] },
      { profissao: "Professor de Física", cursos: ["Física"] },
      { profissao: "Divulgador Científico", cursos: ["Ciências Exatas"] },
      { profissao: "Consultor de Educação em Exatas", cursos: ["Matemática", "Física", "Química"] },
      { profissao: "Coordenador de Olimpíadas Científicas", cursos: ["Matemática", "Física", "Química"] },
      { profissao: "Instrutor Técnico", cursos: ["Engenharia", "Tecnologia"] },
      { profissao: "Pesquisador em Educação Científica", cursos: ["Matemática", "Física", "Química"] },
      { profissao: "Formador de Professores", cursos: ["Pedagogia", "Matemática", "Física"] }
    ],
    Biologicas: [
      { profissao: "Biólogo Educador", cursos: ["Ciências Biológicas"] },
      { profissao: "Divulgador Científico em Biologia", cursos: ["Ciências Biológicas"] },
      { profissao: "Professor de Biologia", cursos: ["Ciências Biológicas"] },
      { profissao: "Veterinário de ONGs", cursos: ["Medicina Veterinária"] },
      { profissao: "Extensionista Rural", cursos: ["Ciências Agrárias", "Biológicas"] },
      { profissao: "Consultor Ambiental", cursos: ["Ecologia", "Ciências Biológicas"] },
      { profissao: "Instrutor de Saúde", cursos: ["Biomedicina", "Saúde"] },
      { profissao: "Analista de Educação em Saúde", cursos: ["Saúde Coletiva"] }
    ],
    Agrarias: [
      { profissao: "Consultor Técnico Agrícola", cursos: ["Agronomia"] },
      { profissao: "Extensionista Rural", cursos: ["Agronomia", "Zootecnia"] },
      { profissao: "Instrutor de Cooperativas", cursos: ["Administração", "Agronomia"] },
      { profissao: "Divulgador de Tecnologia Agrária", cursos: ["Engenharia Agrícola"] },
      { profissao: "Gestor de Projetos Educacionais no Campo", cursos: ["Pedagogia", "Ciências Agrárias"] },
      { profissao: "Líder de Associações Rurais", cursos: ["Administração", "Agronomia"] },
      { profissao: "Zootecnista Consultor", cursos: ["Zootecnia"] },
      { profissao: "Educador Ambiental", cursos: ["Ciências Biológicas", "Ecologia"] }
    ],
    CienciasSociaisAplicadas: [
      { profissao: "Publicitário", cursos: ["Publicidade e Propaganda"] },
      { profissao: "Jornalista", cursos: ["Jornalismo"] },
      { profissao: "Relações Públicas", cursos: ["Relações Públicas"] },
      { profissao: "Gestor de Eventos", cursos: ["Eventos", "Administração"] },
      { profissao: "Coach", cursos: ["Administração", "Psicologia"] },
      { profissao: "Gestor de Comunicação", cursos: ["Comunicação Social"] },
      { profissao: "Gestor de RH", cursos: ["Gestão de Recursos Humanos"] },
      { profissao: "Consultor em Desenvolvimento Pessoal", cursos: ["Psicologia", "Administração"] }
    ],
    LinguagensLetrasArtes: [
      { profissao: "Ator/Atriz", cursos: ["Teatro", "Artes Cênicas"] },
      { profissao: "Apresentador", cursos: ["Comunicação Social"] },
      { profissao: "Escritor", cursos: ["Letras", "Comunicação Social"] },
      { profissao: "Roteirista", cursos: ["Letras", "Comunicação Social"] },
      { profissao: "Professor de Línguas", cursos: ["Letras"] },
      { profissao: "Músico", cursos: ["Música"] },
      { profissao: "Diretor de Arte", cursos: ["Artes Visuais", "Design"] },
      { profissao: "Influencer Digital", cursos: ["Comunicação Digital"] }
    ],
    Engenharias: [
      { profissao: "Engenheiro de Produção", cursos: ["Engenharia de Produção"] },
      { profissao: "Engenheiro de Segurança do Trabalho", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Projetos", cursos: ["Engenharia Civil", "Engenharia Mecânica"] },
      { profissao: "Engenheiro de Meio Ambiente", cursos: ["Engenharia Ambiental"] },
      { profissao: "Coordenador de Projetos de Engenharia", cursos: ["Engenharia de Produção", "Engenharia Civil"] },
      { profissao: "Consultor Técnico de Engenharia", cursos: ["Engenharia"] },
      { profissao: "Instrutor Técnico em Engenharia", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Treinamento Industrial", cursos: ["Engenharia"] }
    ],
    Tecnologias: [
      { profissao: "Instrutor de Tecnologia", cursos: ["Sistemas de Informação", "Tecnologia da Informação"] },
      { profissao: "Gestor de Equipe de Suporte", cursos: ["Análise de Sistemas", "Redes de Computadores"] },
      { profissao: "Analista de Suporte ao Cliente", cursos: ["Sistemas de Informação"] },
      { profissao: "Consultor em Transformação Digital", cursos: ["Administração", "TI"] },
      { profissao: "Evangelista de Tecnologia", cursos: ["Ciência da Computação", "Comunicação"] },
      { profissao: "Product Owner", cursos: ["Gestão de TI", "Engenharia de Software"] },
      { profissao: "Instrutor de Programação", cursos: ["Sistemas de Informação", "Ciência da Computação"] },
      { profissao: "Gestor de Educação Digital", cursos: ["Gestão de TI", "Pedagogia"] }
    ]
  },

  Estabilidade: {
    Humanas: [
      { profissao: "Assistente Social", cursos: ["Serviço Social"] },
      { profissao: "Terapeuta Ocupacional", cursos: ["Terapia Ocupacional"] },
      { profissao: "Psicopedagogo", cursos: ["Pedagogia", "Psicopedagogia"] },
      { profissao: "Orientador Educacional", cursos: ["Pedagogia"] },
      { profissao: "Bibliotecário", cursos: ["Biblioteconomia"] },
      { profissao: "Documentalista", cursos: ["Arquivologia", "Biblioteconomia"] },
      { profissao: "Analista de Políticas Públicas", cursos: ["Administração Pública", "Ciências Sociais"] },
      { profissao: "Professor de Ensino Fundamental", cursos: ["Pedagogia"] }
    ],
    Exatas: [
      { profissao: "Analista de Qualidade", cursos: ["Engenharia de Produção", "Engenharia de Materiais"] },
      { profissao: "Técnico em Laboratório", cursos: ["Química", "Física"] },
      { profissao: "Analista de Processos", cursos: ["Engenharia de Produção"] },
      { profissao: "Analista de Dados", cursos: ["Estatística", "Matemática"] },
      { profissao: "Programador Back-End", cursos: ["Ciência da Computação"] },
      { profissao: "Modelador Matemático", cursos: ["Matemática", "Engenharia"] },
      { profissao: "Analista de Logística", cursos: ["Engenharia de Produção", "Logística"] },
      { profissao: "Pesquisador em Modelagem Computacional", cursos: ["Matemática Computacional", "Engenharia"] }
    ],
    Biologicas: [
      { profissao: "Biólogo de Laboratório", cursos: ["Ciências Biológicas"] },
      { profissao: "Técnico em Análises Clínicas", cursos: ["Biomedicina", "Farmácia"] },
      { profissao: "Pesquisador em Biologia", cursos: ["Ciências Biológicas"] },
      { profissao: "Analista Ambiental", cursos: ["Ecologia", "Ciências Biológicas"] },
      { profissao: "Técnico em Microbiologia", cursos: ["Biomedicina", "Microbiologia"] },
      { profissao: "Farmacêutico Analista", cursos: ["Farmácia"] },
      { profissao: "Laboratorista Veterinário", cursos: ["Medicina Veterinária"] },
      { profissao: "Técnico em Genética", cursos: ["Ciências Biológicas"] }
    ],
    Agrarias: [
      { profissao: "Técnico Agropecuário", cursos: ["Técnico em Agropecuária"] },
      { profissao: "Supervisor de Produção Agrícola", cursos: ["Agronomia"] },
      { profissao: "Analista de Qualidade de Alimentos", cursos: ["Engenharia de Alimentos"] },
      { profissao: "Técnico em Zootecnia", cursos: ["Zootecnia"] },
      { profissao: "Técnico Florestal", cursos: ["Engenharia Florestal"] },
      { profissao: "Técnico em Irrigação", cursos: ["Engenharia Agrícola"] },
      { profissao: "Analista de Agroindústria", cursos: ["Tecnologia em Agroindústria"] },
      { profissao: "Assistente de Pesquisa Agrícola", cursos: ["Agronomia"] }
    ],
    CienciasSociaisAplicadas: [
      { profissao: "Contador", cursos: ["Ciências Contábeis"] },
      { profissao: "Analista Administrativo", cursos: ["Administração"] },
      { profissao: "Analista Financeiro", cursos: ["Finanças", "Administração"] },
      { profissao: "Gestor de Contratos", cursos: ["Administração"] },
      { profissao: "Técnico em Recursos Humanos", cursos: ["Gestão de RH"] },
      { profissao: "Analista de Compliance", cursos: ["Administração", "Direito"] },
      { profissao: "Assistente Jurídico", cursos: ["Direito"] },
      { profissao: "Analista de Seguros", cursos: ["Administração", "Economia"] }
    ],
    LinguagensLetrasArtes: [
      { profissao: "Revisor de Textos", cursos: ["Letras"] },
      { profissao: "Tradutor Técnico", cursos: ["Letras"] },
      { profissao: "Editor de Conteúdo", cursos: ["Letras", "Comunicação"] },
      { profissao: "Diagramador", cursos: ["Design Gráfico"] },
      { profissao: "Ilustrador Técnico", cursos: ["Design", "Artes Visuais"] },
      { profissao: "Professor de Língua Portuguesa", cursos: ["Letras"] },
      { profissao: "Professor de Língua Estrangeira", cursos: ["Letras"] },
      { profissao: "Técnico em Multimídia", cursos: ["Design Gráfico", "Comunicação"] }
    ],
    Engenharias: [
      { profissao: "Engenheiro de Segurança do Trabalho", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Manutenção", cursos: ["Engenharia Mecânica", "Engenharia Elétrica"] },
      { profissao: "Engenheiro de Processos", cursos: ["Engenharia Química", "Engenharia de Produção"] },
      { profissao: "Engenheiro de Qualidade", cursos: ["Engenharia de Produção"] },
      { profissao: "Engenheiro de Materiais", cursos: ["Engenharia de Materiais"] },
      { profissao: "Engenheiro Agrícola", cursos: ["Engenharia Agrícola"] },
      { profissao: "Engenheiro Ambiental", cursos: ["Engenharia Ambiental"] },
      { profissao: "Engenheiro de Alimentos", cursos: ["Engenharia de Alimentos"] }
    ],
    Tecnologias: [
      { profissao: "Analista de Suporte Técnico", cursos: ["Sistemas de Informação", "Técnico em Informática"] },
      { profissao: "Administrador de Banco de Dados", cursos: ["Sistemas de Informação"] },
      { profissao: "Programador", cursos: ["Ciência da Computação", "Análise de Sistemas"] },
      { profissao: "Operador de Sistemas", cursos: ["Técnico em Informática"] },
      { profissao: "Analista de Testes de Software", cursos: ["Engenharia de Software"] },
      { profissao: "Administrador de Sistemas", cursos: ["Sistemas de Informação"] },
      { profissao: "Técnico em Redes", cursos: ["Redes de Computadores"] },
      { profissao: "Analista de Processos Digitais", cursos: ["Sistemas de Informação", "Tecnologia da Informação"] }
    ]
  },

  Conformidade: {
    Humanas: [
      { profissao: "Analista de Políticas Educacionais", cursos: ["Pedagogia", "Administração Pública"] },
      { profissao: "Técnico em Arquivo", cursos: ["Arquivologia"] },
      { profissao: "Analista de Documentação", cursos: ["Biblioteconomia"] },
      { profissao: "Fiscal de Direitos Humanos", cursos: ["Direito", "Serviço Social"] },
      { profissao: "Perito Social", cursos: ["Serviço Social"] },
      { profissao: "Técnico em Museologia", cursos: ["Museologia"] },
      { profissao: "Supervisor de Normas e Procedimentos", cursos: ["Administração"] },
      { profissao: "Auditor de Projetos Sociais", cursos: ["Administração Pública", "Ciências Sociais"] }
    ],
    Exatas: [
      { profissao: "Auditor Fiscal", cursos: ["Ciências Contábeis", "Direito"] },
      { profissao: "Analista de Controle de Qualidade", cursos: ["Engenharia Química", "Engenharia de Produção"] },
      { profissao: "Perito Criminal", cursos: ["Química", "Física", "Biomedicina"] },
      { profissao: "Analista de Processos Industriais", cursos: ["Engenharia de Produção"] },
      { profissao: "Analista de Custos", cursos: ["Administração", "Ciências Contábeis"] },
      { profissao: "Analista de Normas Técnicas", cursos: ["Engenharia", "Matemática"] },
      { profissao: "Especialista em Métodos Quantitativos", cursos: ["Matemática", "Estatística"] },
      { profissao: "Analista de Certificação", cursos: ["Engenharia", "Administração"] }
    ],
    Biologicas: [
      { profissao: "Fiscal Ambiental", cursos: ["Ecologia", "Engenharia Ambiental"] },
      { profissao: "Analista de Biossegurança", cursos: ["Biomedicina", "Biotecnologia"] },
      { profissao: "Perito Forense", cursos: ["Biomedicina", "Farmácia"] },
      { profissao: "Analista de Controle Sanitário", cursos: ["Farmácia", "Biomedicina"] },
      { profissao: "Analista de Vigilância Sanitária", cursos: ["Saúde Coletiva", "Farmácia"] },
      { profissao: "Auditor em Saúde", cursos: ["Saúde Coletiva", "Enfermagem"] },
      { profissao: "Especialista em Legislação de Alimentos", cursos: ["Engenharia de Alimentos", "Nutrição"] },
      { profissao: "Consultor de Normas Ambientais", cursos: ["Ecologia", "Engenharia Ambiental"] }
    ],
    Agrarias: [
      { profissao: "Fiscal Agropecuário", cursos: ["Agronomia", "Zootecnia"] },
      { profissao: "Analista em Certificação de Produtos", cursos: ["Engenharia de Alimentos"] },
      { profissao: "Técnico em Controle de Qualidade Agrícola", cursos: ["Tecnologia em Agroindústria"] },
      { profissao: "Auditor de Processos Rurais", cursos: ["Agronomia"] },
      { profissao: "Gestor de Certificação Florestal", cursos: ["Engenharia Florestal"] },
      { profissao: "Analista de Licenciamento Ambiental", cursos: ["Engenharia Ambiental"] },
      { profissao: "Especialista em Normas Agrárias", cursos: ["Direito", "Agronomia"] },
      { profissao: "Perito Agrário", cursos: ["Agronomia", "Engenharia Agrícola"] }
    ],
    CienciasSociaisAplicadas: [
      { profissao: "Analista de Compliance", cursos: ["Administração", "Direito"] },
      { profissao: "Auditor Interno", cursos: ["Ciências Contábeis"] },
      { profissao: "Analista de Licitações", cursos: ["Administração", "Direito"] },
      { profissao: "Perito Judicial", cursos: ["Direito", "Administração"] },
      { profissao: "Analista de Contratos", cursos: ["Direito"] },
      { profissao: "Especialista em Legislação Trabalhista", cursos: ["Direito"] },
      { profissao: "Analista de Documentos Fiscais", cursos: ["Ciências Contábeis"] },
      { profissao: "Técnico em Escrituração Fiscal", cursos: ["Administração", "Ciências Contábeis"] }
    ],
    LinguagensLetrasArtes: [
      { profissao: "Revisor Técnico", cursos: ["Letras"] },
      { profissao: "Analista de Normas Linguísticas", cursos: ["Letras"] },
      { profissao: "Técnico em Editoração", cursos: ["Letras", "Design"] },
      { profissao: "Analista de Documentação", cursos: ["Biblioteconomia"] },
      { profissao: "Corretor de Provas", cursos: ["Letras"] },
      { profissao: "Especialista em Linguagem Jurídica", cursos: ["Direito", "Letras"] },
      { profissao: "Analista de Comunicação Institucional", cursos: ["Comunicação Social"] },
      { profissao: "Consultor em Redação Oficial", cursos: ["Letras"] }
    ],
    Engenharias: [
      { profissao: "Analista de Projetos de Normas", cursos: ["Engenharia de Produção"] },
      { profissao: "Engenheiro de Qualidade", cursos: ["Engenharia de Produção"] },
      { profissao: "Analista de Certificação Técnica", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Segurança do Trabalho", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Inspeção", cursos: ["Engenharia"] },
      { profissao: "Engenheiro de Documentação Técnica", cursos: ["Engenharia"] },
      { profissao: "Analista de Processos", cursos: ["Engenharia de Produção"] },
      { profissao: "Auditor Técnico Industrial", cursos: ["Engenharia"] }
    ],
    Tecnologias: [
      { profissao: "Analista de Segurança da Informação", cursos: ["Sistemas de Informação", "Segurança da Informação"] },
      { profissao: "Especialista em Governança de TI", cursos: ["Gestão de TI"] },
      { profissao: "Auditor de Sistemas", cursos: ["Sistemas de Informação", "Engenharia de Computação"] },
      { profissao: "Analista de Testes", cursos: ["Engenharia de Software"] },
      { profissao: "Especialista em Qualidade de Software", cursos: ["Engenharia de Software"] },
      { profissao: "Administrador de Sistemas", cursos: ["Sistemas de Informação"] },
      { profissao: "Analista de Compliance Digital", cursos: ["Sistemas de Informação", "Direito"] },
      { profissao: "Analista de Processos Digitais", cursos: ["Tecnologia da Informação"] }
    ]
  }
};
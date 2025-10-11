"use client";

import { useState } from "react";

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const dashboards = [
    {
      id: 4,
      title: "Performance do Time de TI",
      slug: "ti",
      context:
        "Em um cenário simulado, a equipe de TI precisava monitorar o desempenho operacional e o cumprimento das metas mensais, garantindo que requisições e incidentes fossem tratados dentro dos prazos estabelecidos.",
      action:
        "Desenvolvi um dashboard em Power BI consolidando KPIs como percentual da meta alcançada no mês, número de incidentes dentro do prazo, fora do prazo e sem SLA, além de tickets não solucionados e pendentes. Incluí gráficos de linha com tendência e comparativo entre tickets abertos x solucionados, facilitando a visualização de padrões e gargalos.",
      result:
        "A simulação permitiu observar como uma equipe poderia utilizar indicadores para identificar áreas com maior volume de incidentes e tomar decisões estratégicas para reduzir atrasos, melhorar a alocação de recursos e aumentar a eficiência operacional.",
      imageCount: 2,
    },
    {
      id: 2,
      title: "Case Gestão Orçamentária",
      slug: "gestaoorcamentaria",
      context:
        "Em uma simulação de ambiente corporativo, a gestão financeira da organização precisava de uma visão consolidada do orçamento, com acompanhamento do consumo por setor e centros de custo.",
      action:
        "Criei um dashboard em Power BI que simula a gestão orçamentária, detalhando o consumo do orçamento por centro de custo, percentual economizado e comparação entre períodos. A solução permite análise de tendências e identificação de desvios.",
      result:
        "A simulação demonstra como a análise visual de dados pode trazer maior controle sobre os recursos financeiros, identificar setores com consumo excessivo e apontar oportunidades de economia.",
      imageCount: 2,
    },
    {
      id: 3,
      title: "Case Robótica Sustentável",
      slug: "roboticasustental",
      context:
        "Em um cenário simulado, o Instituto Robótica Sustentável precisava monitorar as coletas de resíduos, analisar stakeholders e otimizar a logística das atividades de sustentabilidade.",
      action:
        "Desenvolvi um dashboard em Power BI, consolidando KPIs de quantidade e peso das coletas, tipos de resíduos, stakeholders mais ativos e sazonalidade das arrecadações.",
      result:
        "A simulação gerou insights como stakeholders prioritários, otimização da capacidade de armazenamento, viabilidade de campanhas conforme tipos de resíduos e planejamento de eventos alinhado à sazonalidade das coletas.",
      imageCount: 2,
    },
    {
      id: 1,
      title: "Customer Service",
      slug: "customerservice",
      context:
        "Em um ambiente simulado, a equipe de atendimento ao consumidor precisava de uma visão completa do fluxo de tickets para melhorar a performance e a satisfação do cliente.",
      action:
        "Criei um dashboard em Power BI que simula o acompanhamento de atendimentos, mapeando etapa atual dos tickets, tipos de solicitação, setores mais demandados, status e performance individual dos atendentes.",
      result:
        "A simulação ilustra como dashboards podem otimizar priorização de tickets, gestão de recursos e elevar a eficiência e a satisfação do cliente.",
      imageCount: 2,
    },
  ];

  const getImages = (slug: string, count: number) => {
    return Array.from(
      { length: count },
      (_, i) => `/images/dashboards/${slug}${i + 1}.png`
    );
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-lg text-[#484848]">
            Jonas Lino | Data Analyst
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-yellow-500 font-semibold"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="hover:text-yellow-500 font-semibold"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="hover:text-yellow-500 font-semibold"
            >
              Habilidades
            </button>
          </div>
        </div>
      </nav>

      {/* Hero / Sobre Section */}
      <header id="sobre" className="relative bg-[#f0ead6] text-gray-900 pt-24 w-full">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-8">
          {/* Texto */}
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="whitespace-nowrap">Olá, me chamo Jonas Lino</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Analista de Sistemas e BI
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Transformo dados em insights visuais e dashboards interativos. Especializado em Power BI e
              soluções de análise de dados modernas.
            </p>

            {/* Botões */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
              {/* Seus botões aqui */}
            </div>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#ffffff]">
              <img
                src="/images/perfil/perfil.png"
                alt="Jonas Lino"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </header>


      {/* Seção Sobre texto detalhado */}
      <section id="sobre-detalhado" className="bg-white w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Sobre</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Especialização em Engenharia de Redes e Segurança de Dados (2024), graduando em Análise e Desenvolvimento de Sistemas (2025) e bacharel em Administração (2022).
            </p>
            <p>
              Exerço o cargo de Técnico em Desenvolvimento de Sistemas III no Centro Universitário Fametro, sendo responsável pela sustentação e implementação de funcionalidades no sistema ERP TOTVS RM e em soluções de BI.
            </p>
            <p>
              Fomento uma cultura organizacional orientada a dados (Data Driven), administrando bancos de dados e desenvolvendo, por meio do Microsoft Power BI, visões e indicadores-chave de desempenho (KPIs, NPS, SLA) para os setores Financeiro, Recursos Humanos, Comissão Própria de Avaliação e Núcleo de Tecnologia da Informação.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Projetos / Dashboards */}
      <section id="projetos" className="bg-[#f0ead6] w-full py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Projetos</h2>

          {dashboards.map((dash) => {
            const images = getImages(dash.slug, dash.imageCount);
            return (
              <section
                key={dash.id}
                aria-labelledby={`dashboard-title-${dash.id}`}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3
                  id={`dashboard-title-${dash.id}`}
                  className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900"
                >
                  {dash.title}
                </h3>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-4 md:w-1/2">
                    {images.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg border border-gray-200 group"
                      >
                        <img
                          src={imgSrc}
                          alt={`Imagem ${index + 1} do dashboard ${dash.title}`}
                          className="object-contain w-full max-h-64 transition-transform duration-300 group-hover:scale-105"
                        />
                        <button
                          onClick={() => setModalImage(imgSrc)}
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <span className="bg-white bg-opacity-90 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-100 hover:scale-105 transition-all duration-200">
                            Expandir
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-center text-gray-700 leading-relaxed space-y-4">
                    <p><strong>Contexto:</strong> {dash.context}</p>
                    <p><strong>Ação:</strong> {dash.action}</p>
                    <p><strong>Resultado:</strong> {dash.result}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="bg-white w-full container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {[
            { src: "/images/skills/powerbi.png", label: "Power BI" },
            { src: "/images/skills/sqlserver.png", label: "SQL Server" },
            { src: "/images/skills/mysql.png", label: "MySQL" },
            { src: "/images/skills/excel.png", label: "Excel" },
            { src: "/images/skills/figma.png", label: "Figma" },
            { src: "/images/skills/github.png", label: "GitHub" },
          ].map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col items-center justify-center bg-gray-100 w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={skill.src} alt={skill.label} className="w-12 h-12 mb-2" />
              <span className="mt-2 font-semibold text-gray-800 text-center text-sm sm:text-base">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* Modal de Imagem */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg z-50"
          >
            ×
          </button>
          <img
            src={modalImage}
            alt="Imagem expandida"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}

      <footer className="text-center py-8 mt-12 border-t border-gray-300 bg-white">
        <p className="text-gray-500">
          Desenvolvido para exibir projetos de Business Intelligence.
        </p>
      </footer>
    </div>
  );
}

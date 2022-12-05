import styles from "./App.css";

import logo from "./assets/fatec-logo.png";
import youtube from "./assets/youtube.webp";

function App() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/cWBEMN75IMc",
      title: "📚 Derivada - Definição e Cálculo - Cálculo 1 (#16)",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/b5m864fIKvA",
      title: "📚 A Regra da Cadeia - Cálculo 1 (#19)",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/U-5vck_1hjE",
      title: "📚 LIMITES DE UMA FUNÇÃO - Cálculos",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/wkijt8-uxpY",
      title: "📚 INTEGRAL - Noções básicas para iniciantes",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/UTELlQivogs",
      title: "📚 INTRODUÇÃO AO CURSO DE INTEGRAL ✅ INTEGRAL INDEFINIDA #01",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/CRF1e86DwNY",
      title: "📚 Pré-Cálculo - Introdução às funções",
    },
    {
      id: 7,
      src: "https://www.youtube.com/embed/MznHw2ZhT38",
      title: "📚 Aplicação de Derivadas - Aproximação Linear",
    },
    {
      id: 8,
      src: "https://www.youtube.com/embed/NnTTCYrrsUw",
      title: "📚 O que é a derivada? | Cálculo 1",
    },
    {
      id: 9,
      src: "https://www.youtube.com/embed/zHjJ5t7jadI",
      title: "📚 Diferenciabilidade | Cálculo 1",
    },
    {
      id: 10,
      src: "https://www.youtube.com/embed/qYdfXvkHkyM",
      title: 
        "📚 Produto Escalar: Analisando Ângulos entre Vetores | Geometria Analítica",
    },
  ];

  return (
    <div className={styles.app}>
      <header>
        <div>
          <span>Cálculo</span>
          <p>Júlia Nunes Oliveira Souza - 1430482123007</p>
          <p>Lucas Delmondes Mendes Da Silva - 1430481913055</p>
        </div>
      
        <img src={logo} alt="Logo da FATEC" />
        
      </header>

      <main>
        {videos.map((video) => (
          <div key={video.id}>
            <iframe
              width="500"
              height="315"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span>{video.title}</span>
          </div>
        ))}
      </main>

      <footer>
        <div>
          <span>Todos os direitos reservados ao</span>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="Logo YOUTUBE" />
            Youtube
          </a>
          <span>e aos criadores de conteúdo. Para fins educativos.</span>
        
        </div>
      </footer>
    </div>
  );
}

export default App;

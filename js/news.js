const NEWS = [
  {
    id: 1,
    title: "Ibibio sound machine confirmados no palco heikeken dos nos alive'23",
    date: "Abril 14, 2023",
    img: "/img/NOS_ALIVE_Ambience_05.jpg",
  },
  {
    id: 2,
    title: "Novas confirmações para o wtf clubbing dia 6 de julho no nos alive",
    date: "Abril 13, 2023",
    img: "/img/NOS_ALIVE_Ambience_07.jpg",
  },
  {
    id: 3,
    title: "Wtf clubbing com curadoria da decked out! dia 8 de julho",
    date: "Abril 13, 2023",
    img: "/img/NOS_ALIVE_Ambience_12.jpg",
  },
  {
    id: 4,
    title: "Wtf clubbing com curadoria bridgetown a 7 de julho",
    date: "Abril 13, 2023",
    img: "/img/NOS_ALIVE_AMBIENCE_HUGO_MACEDO.jpg",
  },
];

let newsWrapper = document.querySelector(".news__wrapper");

NEWS.forEach((item) => {
  let newsBox = document.createElement("a");
  newsBox.classList.add("news__box");
  newsBox.innerHTML = `
    <span class="news__date">${item.date}</span>
    <p class="news__headline">${item.title}</p>
    <div class="news__more">
        <span>Ler mais<span><i class="fa-solid fa-arrow-right"></i></span></span>
    </div>
  `;

  newsBox.style.backgroundImage = `url(${item.img})`; // Definir imagem de fundo na div
  newsBox.style.backgroundPosition = "center center";
  newsBox.style.backgroundSize = "cover";
  newsBox.style.backgroundRepeat = "no-repeat";
  newsWrapper.appendChild(newsBox);
});

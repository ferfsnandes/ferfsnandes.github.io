
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Dopefolio</title>
    <meta name="description" content="Portfolio Template for Developer" />

    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/carousel.css"/>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./assets/png/robo_logo.png"
              alt="Gabriel Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Gabriel Fernandes</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html" class="header__link"> Inicio </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link">Sobre Mim </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link">
                Projetos
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#footer" class="header__link"> Contato </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Inicio </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> Sobre Mim </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contato </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Olá, Meu nome é Gabriel Fernandes</h1>
        <div class="home-hero__info">
          <p class="text-primary">
    estou cursando <strong> Sistemas de Informação na UNICAMP</strong>, atualmente no 8º semestre. 
                Sou um <strong>Desenvolvedor</strong> com conhecimento em diferente linguagens de programação.
                Durante meus estudos, desenvolvi habilidades em programação, análise de sistemas, bancos de dados, gestão de projetos, entre
                outros. Atualmente estou pesquisando <strong>Machine Learning e sua aplicação na predição de doenças crônicas não transmissíveis.</strong>
                Também estou me aprofundando em AWS, Cloud e Data
                Science para ampliar meu conjunto de habilidades. Minha expertise em Python tambem está crescendo, especialmente no contexto de
                ML.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">Projetos</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
  <a href="https://www.linkedin.com/in/gabriel-ferfsnandes" class="home-hero__social-icon-link" target="_blank">
    <img src="./assets/png/linkedin-ico.png" alt="icon" class="home-hero__social-icon" />
  </a>
</div>
<div class="home-hero__social">
  <a href="https://github.com/ferfsnandes" class="home-hero__social-icon-link" target="_blank">
    <img src="./assets/png/github-ico.png" alt="icon" class="home-hero__social-icon" />
  </a>
</div>
<div class="home-hero__social">
  <a href="https://www.instagram.com/ferfsnandes_g/" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none" target="_blank">
    <img src="./assets/png/insta-ico.png" alt="icon" class="home-hero__social-icon" />
  </a>
</div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">Sobre Mim</span>
          <span class="heading-sec__sub">
           Busco uma oportunidade de estágio na área de Tecnologia da Informação, onde possa
aplicar e aprimorar meus conhecimentos adquiridos durante minha graduação em Sistemas
de Informação. Estou determinado a contribuir de forma significativa para os projetos da
empresa, enquanto continuo aprendendo e desenvolvendo minhas habilidades técnicas e
profissionais.
Embora eu ainda não tenha experiência profissional, trago uma sólida base teórica e prática
adquirida ao longo do curso
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Me conheça</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Sou uma pessoa dedicada, proativa e comprometida com o sucesso dos projetos em que
me envolvo. Tenho facilidade em trabalhar em equipe, comunicar ideias de forma clara e
resolver problemas de forma eficiente. Além disso, possuo uma grande capacidade de
adaptação e estou sempre aberto a novos desafios.
Estou confiante de que posso compensar minha falta de experiência com minha paixão
pela área e minha disposição para aprender e me desenvolver profissionalmente.
              </p>
            </div>
            >
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">Minhas Habilidades</h3>
            <div class="skills">
              <div class="skills__skill">Flutter</div>
<div class="skills__skill">HTML</div>
<div class="skills__skill">CSS</div>
<div class="skills__skill">Python</div>
<div class="skills__skill">Java</div>
<div class="skills__skill">JavaScript</div>
<div class="skills__skill">Flutter</div>
<div class="skills__skill">Bancos de Dados</div>
<div class="skills__skill">Análise de dados</div>
<div class="skills__skill">SQL</div>
<div class="skills__skill">C</div>
<div class="skills__skill">C++</div>
<div class="skills__skill">C#</div>
<div class="skills__skill">UX/UI</div>
<div class="skills__skill">Web Design</div>
<div class="skills__skill">Dart</div>
<div class="skills__skill">AWS</div>
<div class="skills__skill">WebGL</div>
<div class="skills__skill">MySQL</div>
<div class="skills__skill">Firebase</div>
<div class="skills__skill">Canva</div>
<div class="skills__skill">Pandas</div>
<div class="skills__skill">NumPy</div>
<div class="skills__skill">Matplotlib</div>
<div class="skills__skill">Plotly</div>
<div class="skills__skill">scikit-learn</div>
<div class="skills__skill">Git</div>
<div class="skills__skill">Inglês Avançado</div>
<div class="skills__skill">Espanhol Básico</div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
         <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Projetos</span>
         </h2>
         <div class="carousel">
            <!-- list item -->
            <div class="list">
               <div class="item">
                  <img src="images/memorygame.png">
                  <div class="content">
                     <div class="author">Web</div>
                     <div class="title">HTML, CSS, JavaScript</div>
                     <div class="topic">JOGO DA MEMÓRIA</div>
                     <div class="des">
                        <!-- lorem 50 -->
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="images/quicklist.jpg">
                  <div class="content">
                     <div class="author">Quicklist</div>
                     <div class="title">FLUTTER</div>
                     <div class="topic">APLICATIVO DE LISTA DE COMPRAS</div>
                     <div class="des"></div>
            
                  </div>
               </div>
               <div class="item">
                  <img src="images/reorganizador-textoBlack.png">
                  <div class="content">
                     <div class="author"></div>
                     <div class="title">Java</div>
                     <div class="topic">Reorganizador de Texto</div>
                     <div class="des"></div>
        
                  </div>
               </div>
               <div class="item">
                  <img src="images/scape.png">
                  <div class="content">
                     <div class="author">Exam Scape</div>
                     <div class="title">C#, Unity</div>
                     <div class="topic">JOGO DE TERROR</div>
                     <div class="des"></div>
        
                  </div>
               </div>
            </div>
            <!-- list thumbnail -->
            <div class="thumbnail">
               <div class="item">
                  <img src="images/memorygame.png">
                  <div class="content">
                     <div class="title">
                        Jogo da Memória
                     </div>
                     <div class="description">
    
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="images/quicklist.jpg">
                  <div class="content">
                     <div class="title">
                        Lista de Compras
                     </div>
                     <div class="description">
                        
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="images/reorganizador-texto.png">
                  <div class="content">
                     <div class="title">
                        Name Slider
                     </div>
                     <div class="description">
                        Description
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="images/scape.png">
                  <div class="content">
                     <div class="title">
                        Jogo de TERROR
                     </div>
                     <div class="description">
                        Description
                     </div>
                  </div>
               </div>
            </div>
            <!-- next prev -->
            <div class="arrows">
               <button id="prev"><</button>
               <button id="next">></button>
            </div>
            <!-- time running -->
            <div class="time"></div>
         </div>
      </div>
   </section>
   <script src="app.js"></script>
   
      </div>
    </section>
    <footer id="footer" class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
             <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-ferfsnandes">
  <img class="main-footer__icon" src="./assets/png/linkedin-ico.png" alt="icon" />
</a>
<a target="_blank" rel="noreferrer" href="https://github.com/ferfsnandes">
  <img class="main-footer__icon" src="./assets/png/github-ico.png" alt="icon" />
</a>
<a target="_blank" rel="noreferrer" href="https://www.instagram.com/ferfsnandes_g/">
  <img class="main-footer__icon main-footer__icon--mr-none" src="./assets/png/insta-ico.png" alt="icon" />
</a>

            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Gabriel Fernandes</h4>
            <p class="main-footer__short-desc">
              <strong> CONTATO:<p>
                <strong>Telefone:</strong> (11)941502527</p>
<p>
                <strong>Email:</strong> g247106@dac.unicamp.br / gabrielfs2311@gmail.com</p>
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2024. Made by
          <a rel="noreferrer" target="_blank"
            >Gabriel Fernandes</a
          >
        </div>
      </div>
    </footer>

    <script src="./index.js"></script>
  </body>
</html>
*/
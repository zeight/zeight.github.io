import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const About: React.FC = () => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zeight Frontend Developer</title>
        <link rel="canonical" href="https://zeight.github.io" />
      </Helmet>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-6">
            <h1>
              (Me) Andrea, <br />
              Freelance Frontend Web Developer
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Sono un <strong>frontend developer freelance</strong>, da un paio d'anni mi dedico esclusivamente a questo. 
              In una vita precedente sono stato un project manager e da sempre un web
              developer. Oggi lavoro principalmente in <strong>React</strong>, più occasionalmente in React Native e{" "}
              <strong>Angular</strong>, in ogni caso sempre con javascript e{" "}
              <strong>typescript</strong>.
            </p>
            <p>
              Mi sono sempre ritenuto un{" "}
              <a
                target="_blank"
                href="https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/"
                rel="noreferrer noopener"
              >
                front of the frontend
              </a>
              , più performante sulla parte di pura UI, UX e
              layout, ma il frontend è un mondo vasto e interessante del quale vale la pena conoscere il più possibile.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h2>Questo blog</h2>
            <p>
              Già da molto tempo ho scoperto che il modo migliore per imparare qualcosa è
              arrivare a saperne abbastanza per poterlo spiegare ad altri.
            </p>
            <p>
              Quando si è in grado di far comprendere un'idea con un linguaggio
              semplice ed in modo efficace significa che le basi fondamentali di
              questa idea sono parte del proprio bagaglio di conoscenza e, se
              non lo sono all'inizio, è probabile che che vi entreranno nel
              processo.
            </p>
            <p>
              Per questo ho deciso di iniziare a scrivere, per migliorare me
              stesso e magari essere d'aiuto a qualcuno.{" "}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

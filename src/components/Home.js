import { useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';




const Home = () => {
  let myBackgroundCanvas = useRef(null);
  let confetti; 

  useEffect(() => {
    console.log("Background Canvas:");
    console.log(myBackgroundCanvas.current);
  }, []);

  const fireConfetti = (color) => {
    const targetColor = {
      "orange": "#FFAA79",
      "blue": "#B4FAFA",
      "red": "#FF787D",
      "pink": "#EFB1ED",
      "yellow": "#FFE484",
    }[color];

    // starting the animation with custom settings
    console.log("starting the animation with custom settings => color: " + targetColor);
    // confetti({particleCount: Math.ceil(Math.random() * 1000), spread: 180});


    const randomInRange = (min, max) =>  Math.random() * (max - min) + min;

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0,
        particleCount: particleCount,
        origin: { 
          x: randomInRange(0.1, 0.3), 
          y: Math.random() - 0.2 
        },
        colors: [targetColor],
      });
      confetti({
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0,
        particleCount: 50,
        origin: { 
          x: randomInRange(0.7, 0.9), 
          y: Math.random() - 0.2 
        },
        colors: [targetColor],
      });

      // confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      // confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  const getInstance = (instance) => {
    // saving the instance to an internal property
    console.log("saving the instance to an internal property");
    confetti = instance;
  }

  return (
    <div className="home-container">
      <canvas ref={myBackgroundCanvas} id="background-canvas"></canvas>
      <ReactCanvasConfetti
        className={'confetti'}
        refConfetti={getInstance}
        ref={myBackgroundCanvas}
      />
      <div className="home-content">
        <header>
          <div className="nav">
            <div className="selected">Home</div>
            <div>Projects</div>
          </div>
        </header>

        <section>
          <h1 className="title-text">
            <div>
              <span>Hello, I'm Thomas!</span>
            </div>
            <div>
              <span className="light-grey">A fullstack web </span><br></br>
              <span className="light-grey">developer currently </span><br></br>
              <span className="light-grey">making & mostly </span><br></br>
              <span className="light-grey">breaking things at</span><br></br>
            </div>
            <div>
              <span>Google.</span>
            </div>
          </h1>
        </section>

        <footer>
          <div className="footer-container">
            <p className="send-text"><a className="remove-all-link-styling" href="mailto:dcts@google.com">dcts@google.com</a></p>
            <div className="color-container">
              <div onClick={() => fireConfetti("orange")} className="color-circle color-orange"></div>
              <div onClick={() => fireConfetti("blue")} className="color-circle color-blue"></div>
              <div onClick={() => fireConfetti("red")} className="color-circle color-red"></div>
              <div onClick={() => fireConfetti("pink")} className="color-circle color-pink"></div>
              <div onClick={() => fireConfetti("yellow")} className="color-circle color-yellow"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

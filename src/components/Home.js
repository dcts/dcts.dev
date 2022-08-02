import ReactCanvasConfetti from 'react-canvas-confetti';
import { useEffect } from 'react';
import { welcomeConsoleMessage } from './helper/Helper';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  let confetti; 

  useEffect(() => {
    welcomeConsoleMessage();
  }, [])
  
  const fireConfetti = (color) => {
    const targetColor = {
      "orange": "#FFAA79",
      "blue": "#B4FAFA",
      "red": "#FF787D",
      "pink": "#EFB1ED",
      "yellow": "#FFE484",
    }[color];
    
    // "fireworks" example, taken from canvas-confetti library and
    // translated to match react-canvas-confetti library
    // => https://www.kirilv.com/canvas-confetti/
    const randomInRange = (min, max) =>  Math.random() * (max - min) + min;
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      const defaultSettings = {
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0,
        particleCount: particleCount,
        colors: [targetColor],
      }
      // fire 2 x confetti per interval
      confetti({
        ...defaultSettings, 
        origin: { 
          x: randomInRange(0.1, 0.3), 
          y: Math.random() - 0.2 // since particles fall down, start a bit higher than random
        },
      });
      confetti({
        ...defaultSettings, 
        origin: { 
          x: randomInRange(0.7, 0.9), 
          y: Math.random() - 0.2 // since particles fall down, start a bit higher than random
        },
      });
    }, 250);
  }

  const getInstance = (instance) => {
    // saving the instance to an internal property
    confetti = instance;
  }


  return (
    <div className="home-container">
      {/* canvas for fluid webgl animation */}
      <canvas id="background-canvas"></canvas>
      
      {/* canvas for confetti cannon animation */}
      <ReactCanvasConfetti
        className={'confetti'}
        refConfetti={getInstance}
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
              <span>
                <a className="remove-all-link-styling underscore-on-hover" rel="noreferrer" href="https://liist.com" target="_blank">
                  Liist
                </a>.
              </span>
            </div>
          </h1>
        </section>

        <footer>
          <div className="footer-container">
            <div className="footer-left">
              <p className="send-text underscore-on-hover"><a className="remove-all-link-styling" href="mailto:thomas@dcts.dev">thomas@dcts.dev</a></p>
              <a className="unset" href="https://github.com/dcts" rel="noreferrer" target="_blank"><BsGithub className="social-icon"/></a>
              <a className="unset" href="https://www.linkedin.com/in/thomas-starzynski/" rel="noreferrer" target="_blank"><BsLinkedin className="social-icon"/></a>
            </div>
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

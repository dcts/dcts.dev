import { useEffect, useRef } from 'react';




const Home = () => {
  let myBackgroundCanvas = useRef(null);

  useEffect(() => {
    console.log("Background Canvas:");
    console.log(myBackgroundCanvas.current);
  }, []);

  const fireConfetti = (color) => {
    const targetColor = {
      "orange": "",
      "blue": "",
      "red": "",
      "pink": "",
      "yellow": "",
    }[color];

  }

  return (
    <div className="home-container">
      <canvas ref={myBackgroundCanvas} id="background-canvas"></canvas>
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
            <p>dcts@google.com</p>
            <div className="color-container">
              <div onClick={() => fireConfetti("orange")} className="color-circle color-orange"></div>
              <div onClick={() => fireConfetti("blue")} className="color-circle color-blue"></div>
              <div onClick={() => fireConfetti("red")} className="color-circle color-red"></div>
              <div onClick={() => fireConfetti("pink")} className="color-circle color-pink"></div>
              <div onClick={() => fireConfetti("yellow")} className="color-circle color-yellow"></div>
            </div>
          </div>
        </footer>
        {/* <div className="title-text">
        </div> */}
      </div>
    </div>
  );
};

export default Home;

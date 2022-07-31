const Home = () => {
  return (
    <div className="home-container">
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
              <div className="color-circle color-1"></div>
              <div className="color-circle color-2"></div>
              <div className="color-circle color-3"></div>
              <div className="color-circle color-4"></div>
              <div className="color-circle color-5"></div>
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

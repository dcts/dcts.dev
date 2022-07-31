const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <header>
          header content
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
          footer content
        </footer>
        {/* <div className="title-text">
        </div> */}
      </div>
    </div>
  );
};

export default Home;

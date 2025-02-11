import "./App.css";

function App() {
  return (
    <main>
      <div className="row">
        <div className="demo-box bg-gray-100"></div>
        <div className="demo-box bg-gray-300"></div>
        <div className="demo-box bg-gray-500"></div>
        <div className="demo-box bg-gray-700"></div>
        <div className="demo-box bg-gray-900"></div>
      </div>
      <div className="row">
        <div className="row">
          <div className="demo-box bg-primary-light"></div>
          <div className="demo-box bg-primary"></div>
          <div className="demo-box bg-primary-dark"></div>
        </div>
        <div className="row with-bg">
          <div className="demo-box bg-primary"></div>
          <div className="demo-box bg-primary-alpha-700"></div>
          <div className="demo-box bg-primary-alpha-500"></div>
          <div className="demo-box bg-primary-alpha-300"></div>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <div className="demo-box bg-secondary-light"></div>
          <div className="demo-box bg-secondary"></div>
          <div className="demo-box bg-secondary-dark"></div>
        </div>
        <div className="row with-bg">
          <div className="demo-box bg-secondary"></div>
          <div className="demo-box bg-secondary-alpha-700"></div>
          <div className="demo-box bg-secondary-alpha-500"></div>
          <div className="demo-box bg-secondary-alpha-300"></div>
        </div>
      </div>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

const express = require("express");
const app = express();
const port = process.env.PORT || "5000";



app.get('/', (req,res) =>{
  res.send("App")
} )

app.listen(port, () => console.log(`server started running on Port ${port}`));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Counter from './Components/Counter';
import UseEffect from './Components/UseEffect';
import RefCounter from './Components/RefCounter';

function App() {
  let name = "Arpan";
  // if (name === "Rahul") {
  //   name = 'Admin'
  // } else {
  //   name = "User"
  // }
  return (
    <div className="App">
      {/* Hello, {name === "Rahul" ? "Admin" : "User" }! */}
      {/* Hello, {(name === "Rahul" && "Admin") || "User"}!
      <Counter />
      <UseEffect /> */}
      <RefCounter />
    </div>
  );
}

export default App;

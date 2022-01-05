import { Navbar } from "./components/Navbar";
import Allroutes from "./routes/Allroutes";
//import { store } from "./store";
import "./styles.css";

export default function App() {
  //console.log(store.getState())
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

import { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [number, setNumber] = useState(0)

    return (
      <div className="Home">
        <div>
          Accueil
          <Navbar />
        </div>
        <div className="sandbox">
          {number}
        </div>
        <button onClick={() => setNumber(number+1)}>
          INCREMENTER
        </button>
      </div>
    );
  }
  
  export default Home;
  
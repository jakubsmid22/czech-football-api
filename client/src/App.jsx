import Header from "./Header";
import MainSection from "./MainSection";

const App = () => {

  const titles = [
    "bohemians",
    "budejovice",
    "dukla",
    "hradec",
    "jablonec",
    "liberec",
    "boleslav",
    "plzen",
    "olomouc",
    "banik",
    "pardubice",
    "slavia",
    "slovacko",
    "sparta",
    "teplice",
    "karvina"
  ]

  return (
    <div>
      <Header titles={titles} />
      <MainSection titles={titles}/>
    </div>
  );
};

export default App;

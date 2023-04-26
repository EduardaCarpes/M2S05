import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";

function App() {
  return (
    <div>
      <Componente1 />
      <Componente2 nome='Bart' raça='pug' idade={6} />
      <Componente3 name='Bart' animal='cachorro' />
    </div>

  );

  }
export default App
  
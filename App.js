import Menus from './src/componentes/Menus';
import Local from './src/componentes/Local';
import Clima from './src/telas/Clima';

export default function App() {
  return (
    <>
      <Menus></Menus>
      <Local texto="Bandung, Indonesia"></Local>
      <Clima></Clima>
    </>
  );
} 


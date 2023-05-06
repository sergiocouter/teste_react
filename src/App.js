import './App.css';
import HellowWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const nome = "Maria"

  return (
    <div className="App">
      <HellowWorld/>
      <SayMyName nome="Sérgio"/>
      <SayMyName nome="Priscila"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        foto= "https://github.com/sergiocouter.png"
        nome= "Sérgio Couter"
        idade= "31 anos"
        profissao= "Desenvolvedor Front-end"
      />
    </div>
  );
}
export default App;

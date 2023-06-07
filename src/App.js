import './App.css';
import HellowWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import NovaLista from './components/NovaLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';

function App() {
  
  const nome = "Maria"
  const meuItens =['Sérgio', 'Priscila', 'Arthur']
  const [nomes, setNomes] = useState()

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
      <List/>
      <h1>Testando Eventos</h1>
      <Eventos numero="1"/>
      <Form />
      <h1>Renderização condicional</h1>
      <Condicional />
      <h1>Renderização de Listas</h1>
      <NovaLista itens={meuItens}/>
      <h1>State Lift</h1>
      <SeuNome  setNomes={setNomes}/>
      {nomes}
    </div>
  );
}
export default App;

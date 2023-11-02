import logo from './logo.svg'
import './App.css'
import './components/cabecalho/index.js'
import Cabecalho from './components/cabecalho/index.js'
import Rodape from './components/rodape'
import Tabela from './components/tabela'
import Lista from './components/lista'

function App() {

  let nome = 'Antonio'

  return (
    <div className="App">   
      <Cabecalho nome = {nome} />

      <Tabela dados={ [ {id:1, desc:'Prego', emoji: '🔩'} , {id:2, desc:'Parafuso', emoji: '🪵'}]}/>

      <h3>Selecione o time:</h3>

      <Lista itens = { ["São Paulo","Santos","Palmeiras","Flamengo", "Bragantino","Portuguesa", "Botafogo"]}/>

      <Rodape nome = {nome}/>
    </div>
  )
}

export default App

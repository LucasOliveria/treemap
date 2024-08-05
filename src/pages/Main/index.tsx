import TreeMap from '../../components/TreeMap';
import './style.css';
import { valuationFII2024 } from "../../data/db";

function Main() {
  return (
    <div className='main'>
      <h1>Gráfico Treemap </h1>
      <h1> Ranking de FII's por Valorização de Cota + Proventos em 2024</h1>
      <TreeMap
        data={valuationFII2024}
        width={600}
        height={500}
      />
    </div>
  )
}

export default Main;

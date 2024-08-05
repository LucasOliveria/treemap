import './style.css';

// Define a interface ITreeElement para tipar os dados dos elementos do TreeMap
interface ITreeElement {
  id: number;
  name: string;
  variation_earnings: number;
  color: string;
}

// Componente TreeMap, que recebe os dados, largura e altura para renderizar o componente
function TreeMap({ data, width, height }: { data: ITreeElement[], width: number, height: number }) {
  // Calcula a área total do componente
  let totalArea = width * height;
  // Define um valor inicial para a transparência da cor
  let alfaColor = 1;

  // Calcula o valor total das variações de ganhos
  const totalValue = data.reduce((sum, currentElement) => sum + currentElement.variation_earnings, 0);

  // Ordena os dados em ordem decrescente de variação de ganhos
  const dataAscendingOrder = data.sort((a, b) => b.variation_earnings - a.variation_earnings);

  return (
    // Div principal que representa o TreeMap, com altura e largura definidas
    <div className="tree-map" style={{ width, height }}>
      {dataAscendingOrder.map((element) => {
        // Calcula a área desejada para cada elemento com base na variação de ganhos
        const desiredArea = (element.variation_earnings / totalValue) * totalArea;
        // Fator de escala para ajustar o tamanho do elemento
        const scaleFactor = Math.sqrt(desiredArea / totalArea);

        // Calcula a largura  e altura do elemento
        const elementWidth = width * scaleFactor;
        const elementHeight = height * scaleFactor

        // Define o estilo do elemento, incluindo cor de fundo e dimensões
        const elementStyle = {
          width: `${elementWidth}px`,
          height: `${elementHeight}px`,
          backgroundColor: `rgb(28, 77, 255, ${alfaColor})`,
        }
        alfaColor -= 0.09;

        return (
          // Div representando cada elemento do TreeMap
          <div className='tree-element' key={element.id} style={{ ...elementStyle }}>
            <div>
              <h3>{element.name}</h3>
              <h3>{element.variation_earnings}%</h3>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default TreeMap;
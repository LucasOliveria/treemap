import './style.css';

interface ITreeElement {
  id: number;
  name: string;
  variation_earnings: number;
  color: string;
}

function TreeMap({ data, width, height }: { data: ITreeElement[], width: number, height: number }) {
  let totalArea = width * height;
  let alfaColor = 1;

  const totalValue = data.reduce((sum, currentElement) => sum + currentElement.variation_earnings, 0);
  const dataAscendingOrder = data.sort((a, b) => b.variation_earnings - a.variation_earnings);


  return (
    <div className="tree-map" style={{ width, height }}>
      {dataAscendingOrder.map((element) => {
        const disiredArea = (element.variation_earnings / totalValue) * totalArea;
        const scaleFactor = Math.sqrt(disiredArea / totalArea);

        const elementWidth = width * scaleFactor;
        const elementHeight = height * scaleFactor


        const elementStyle = {
          width: `${elementWidth}px`,
          height: `${elementHeight}px`,
          backgroundColor: `rgb(28, 77, 255, ${alfaColor})`,
        }
        alfaColor -= 0.09;

        return (
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
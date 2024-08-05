import './style.css';

interface ITreeElement {
  id: number;
  name: string;
  variation_earnings: number;
  color: string;
}

function TreeMap({ data, width, height }: { data: ITreeElement[], width: number, height: number }) {
  let totalArea = width * height;
  const originalWidth = width;
  const originalHeight = height;

  const totalValue = data.reduce((sum, currentElement) => sum + currentElement.variation_earnings, 0);
  const dataAscendingOrder = data.sort((a, b) => b.variation_earnings - a.variation_earnings);

  const elementsDimensions = dataAscendingOrder.map((element) => {
    const desiredArea = (element.variation_earnings / totalValue) * totalArea;
    const scaleFactor = Math.sqrt(desiredArea / totalArea);
    const elementWidth = originalWidth * scaleFactor;
    const elementHeight = originalHeight * scaleFactor;

    return {
      id: element.id,
      name: element.name,
      color: element.color,
      variation_earnings: element.variation_earnings,
      elementWidth,
      elementHeight
    };
  });

  console.log(elementsDimensions);

  return (
    <div className="tree-map" style={{ width, height }}>
      {dataAscendingOrder.map((element) => {
        const disiredArea = (element.variation_earnings / totalValue) * totalArea;
        const scaleFactor = Math.sqrt(disiredArea / totalArea);

        const elementWidth = originalWidth * scaleFactor;
        const elementHeight = originalHeight * scaleFactor


        const elementStyle = {
          width: `${elementWidth}px`,
          height: `${elementHeight}px`,
          // flexGrow: elementWidth,
          backgroundColor: element.color,
        }

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
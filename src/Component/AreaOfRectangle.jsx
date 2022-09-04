import { areaOfRectangle } from "../Utility/general";
function AreaOfRectangle() {
  const length = 4;
  const width = 5;
  const currentArea = areaOfRectangle(length, width);
  return (
    <div className="App">
      Area of reactangle length:<b>{length}</b> and width: <b>{width}</b> so
      area = <b>{currentArea}</b>
    </div>
  );
}

export default AreaOfRectangle;

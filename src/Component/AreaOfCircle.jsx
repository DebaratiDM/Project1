import { areaOfCircle } from "../Utility/general";
function AreaOfCircle() {
  const radius = 6;
  const Pie = Math.PI;
  const areaCircle = areaOfCircle(Pie, radius);

  return (
    <div>
      Area of circle for radius<b>{radius}</b> is <b>{areaCircle}</b>
    </div>
  );
}
export default AreaOfCircle;

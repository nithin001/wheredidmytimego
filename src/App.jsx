import ChooseDate from "./ChooseDate";
import { useState } from "react";
import CurrentDay from "./CurrentDay";
import Colors from "./Colors";

function App() {
  const colors = ["amber", "cyan", "emerald"];
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState(colors[0]);
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  const handleTouch = (event) => {
    const touch = event.touches[0];
    if (touch) {
      setCoord({ x: touch.clientX, y: touch.clientY });
    }
  };

  const updateColor = (color) => {
    setCoord({ x: 0, y: 0 });
    setColor(color);
  };

  return (
    <div className="bg-amber-50">
      <div className="max-w-[500px] mx-auto p-4">
        <div className="bg-white h-full">
          <ChooseDate date={date} setDate={setDate} />
          <div
            onTouchMove={handleTouch}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouch}
          >
            <CurrentDay key={date} date={date} coord={coord} color={color} />
          </div>
          <Colors colors={colors} setColor={updateColor} color={color} />
        </div>
      </div>
    </div>
  );
}

export default App;

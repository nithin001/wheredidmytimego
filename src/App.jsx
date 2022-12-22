import ChooseDate from "./ChooseDate";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-amber-50 h-screen">
      <div className="w-[500px] mx-auto p-4 h-full">
        <div className="bg-white h-full">
          <ChooseDate date={date} setDate={setDate} />
        </div>
      </div>
    </div>
  );
}

export default App;

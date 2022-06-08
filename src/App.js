import { useState } from "react";
import Loading from "./Components/Loading";
import Add from "./Components/AddCoins";
import TickerCoins from "./Components/TickerCoins";
import tickCoins from "./Components/constants/TickerData";
function App() {
  const [coins, setCoins] = useState(tickCoins);
  const handleDelete = (id) => {
    const newCoins = coins.filter((coin) => coin.id !== id);
    setCoins(newCoins);
  };
  return (
    <div className="App">
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />
        <div className="container">
          <Add />
          <hr className="w-full border-t border-gray-600 my-4" />
          <TickerCoins handleDelete={handleDelete} coins={coins} />

          <hr className="w-full border-t border-gray-600 my-4" />
          <section className="relative">
            <h3 className="text-lg leading-6 font-medium text-gray-900 my-8">
              VUE - USD
            </h3>
            <div className="flex items-end border-gray-600 border-b border-l h-64">
              <div className="bg-purple-800 border w-10 h-24"></div>
              <div className="bg-purple-800 border w-10 h-32"></div>
              <div className="bg-purple-800 border w-10 h-48"></div>
              <div className="bg-purple-800 border w-10 h-16"></div>
            </div>
            <button type="button" className="absolute top-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssvgjs="http://svgjs.com/svgjs"
                version="1.1"
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 511.76 511.76"
                style={{ enableBackground: "0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                    fill="#718096"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

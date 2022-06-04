import "./App.css";
import Loading from "./Components/Loading";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />

        <div className="container">
          <section>
            <div className="flex">
              <div className="max-w-xs">
                <label
                  htmlFor="wallet"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ticker
                </label>
                <div className="mt-1 relative rounded-md shadow-md">
                  <input
                    type="text"
                    name="wallet"
                    id="wallet"
                    className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                    placeholder="Например DOGE"
                  />
                </div>
                <div className="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
                  <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    BTC
                  </span>
                  <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    DOGE
                  </span>
                  <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    BCH
                  </span>
                  <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    CHD
                  </span>
                </div>
                <div className="text-sm text-red-600">
                  This ticker has already been added
                </div>
              </div>
            </div>
            <button
              type="button"
              className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                className="-ml-0.5 mr-2 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
              Add
            </button>
          </section>

          <hr className="w-full border-t border-gray-600 my-4" />
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  WTF - USD
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  1.11
                </dd>
              </div>
              <div className="w-full border-t border-gray-200"></div>
              <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid border-4 cursor-pointer">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  VUE - RUB
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  80000.00
                </dd>
              </div>
              <div className="w-full border-t border-gray-200"></div>
              <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Удалить
              </button>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  BTC - USD
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  99999.99
                </dd>
              </div>
              <div className="w-full border-t border-gray-200"></div>
              <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Удалить
              </button>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  DOGE - USD
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  0.0014
                </dd>
              </div>
              <div className="w-full border-t border-gray-200"></div>
              <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Удалить
              </button>
            </div>
          </dl>
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

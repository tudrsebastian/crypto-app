import { useState, useEffect } from "react";
import { getAllCoinsList } from "../services/api/tickers";

let calledOnce = false;

const useAllCoinsList = (coinID) => {
  const [allCoinsList, setAllCoinsList] = useState([]);
  useEffect(() => {
    if (!calledOnce && allCoinsList.length === 0) {
      getAllCoinsList().then(setAllCoinsList);
    }

    if (!calledOnce) calledOnce = true;
  }, [allCoinsList]);
  return allCoinsList;
};

export { useAllCoinsList };

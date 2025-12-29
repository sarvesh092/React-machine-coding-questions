import { useEffect, useState } from "react";

const STOCKS = [
  { id: 1, name: "TCS", price: 3900 },
  { id: 2, name: "INFY", price: 1500 },
  { id: 3, name: "RELIANCE", price: 2800 },
  { id: 4, name: "HDFC", price: 1700 }
];


export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (stock) => {
    setWatchlist((prev) =>
      prev.some((item) => item.id === stock.id)
        ? prev.filter((item) => item.id !== stock.id)
        : [...prev, stock]
    );
  };

  return (
    <div>
      <h2>Stocks</h2>

      {STOCKS.map((stock) => (
        <div key={stock.id}>
          {stock.name} - ₹{stock.price}
          <button onClick={() => toggleWatchlist(stock)}>
            {watchlist.some((item) => item.id === stock.id)
              ? "Remove"
              : "Add"}
          </button>
        </div>
      ))}

      <h3>Watchlist</h3>
      {watchlist.map((stock) => (
        <div key={stock.id}>{stock.name}</div>
      ))}
    </div>
  );
}

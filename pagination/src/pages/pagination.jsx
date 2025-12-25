import React, { useEffect, useState } from "react";

const PRODUCT_PER_PAGE = 10;

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setData(data.products);
      } catch (error) {
        console.log("error fetching in data", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const handleClick = (index) => {
    setCurrentPage(index);
  };

  const noOfPages = Math.ceil(data.length / PRODUCT_PER_PAGE);
  const start = PRODUCT_PER_PAGE * currentPage;
  const end = start + PRODUCT_PER_PAGE;
  return (
    <>
      <div style={{ display: "flex", gap: "8px" }}>
        {[...new Array(noOfPages)].map((_, index) => (
          <div
            style={{
              border: "1px solid red",
              borderRadius: "4px",
              padding: "8px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div>
        {data.slice(start, end).map((product) => (
          <div>{product.title}</div>
        ))}
      </div>
    </>
  );
};

export default Pagination;

import OrderInvoice from "@/components/organisms/orderinvoice/OrderInvoice";

import RequestGIft from "@/components/organisms/requestgift/RequestGIft";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useState } from "react";
import { Header } from "@/components/organisms";
import Navbar from "@/components/organisms/navbar/Navbar";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const Arrow = (
    <button
      style={{ border: "none", background: "transparent" }}
      disabled={currentPage === 0}
    >
      <FaArrowLeftLong
        style={{ width: "25px", height: "20px" }}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      />
    </button>
  );

  return (
    <div>
      {currentPage === 0 && (
        <div>
          <Header
            title={`Open Gift Card`}
            description={`Learn about card gifting`}
          />
          <Navbar arrow={Arrow} />
          <main>
            <RequestGIft handlePageChange={handlePageChange} />
          </main>
        </div>
      )}

      {currentPage === 1 && (
        <div>
          <Navbar arrow={Arrow} />
          <OrderInvoice />
        </div>
      )}
    </div>
  );
};

export default Index;

import Image from "next/image";
import Link from "next/link";
import React from "react";
const NewsLinks = () => {
  return (
    <div className="news-links-container">
      <div className="news-links">
        <Link href="" className="links news-links">
          <h1 className="h1">Forbes</h1>
        </Link>
        <Link href="" className="links news-links">
          <Image src="/icons/bbc.svg" width={100} height={30} alt="" />
        </Link>
        <Link href="" className="links news-links">
          <h4>FINANCIAL TIMES</h4>
        </Link>
        <Link href="" className="links news-links">
          <Image src="/icons/tc.svg" width={65} height={30} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NewsLinks;

import Image from "next/image";
import Link from "next/link";

const MoreGiftLogo = () => {
  return (
    <div style={{ paddingInline: "25px", paddingTop: "25px" }}>
      <Link href="/">
        <img
          src="/icons/logo.svg"
          alt="moregift logo"
          height="42"
          width="115"
        />
      </Link>
    </div>
  );
};

export default MoreGiftLogo;

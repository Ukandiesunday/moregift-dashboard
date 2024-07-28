import Image from "next/image";
import Link from "next/link";

import { useGlobalContext } from "../../../../context/AppContext";

const Logo = () => {
  const { theme } = useGlobalContext();
  return (
    <div>
      <Link href="/home" className="links">
        {theme === "light" ? (
          <Image src="/icons/blogo.svg" alt="" width="115" height="24" />
        ) : (
          <Image src="/icons/whitelogo.svg" alt="" width="115" height="24" />
        )}
        <div className="life-is-gift">Life is a gift</div>
      </Link>
    </div>
  );
};

export default Logo;

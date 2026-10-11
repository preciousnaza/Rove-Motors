import { Link } from "react-router-dom";
import {
  BMWLogo,
  MBLogo,
  ToyotaLogo,
  PorscheLogo,
  AudiLogo,
  LexusLogo,
  TeslaLogo,
  FordLogo,
  HondaLogo,
  HyundaiLogo,
  KiaLogo,
  NissanLogo,
  VolkswagenLogo,
  VolvoLogo,
  LandroverLogo,
} from "@cardog-icons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const BrandSelect = () => {
  const LogoContainer = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    LogoContainer.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    LogoContainer.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mt-6 mx-2 font-bold text-lg">
        <h2>Browse by Brand</h2>

        <div
          ref={LogoContainer}
          className="flex flex-row gap-10 overflow-x-auto mt-1"
          style={{ scrollbarWidth: "none" }}
        >
          <button onClick={scrollRight} >
            <ChevronLeft size={24} />
          </button>
          <span>
            <Link to="/">
              <BMWLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <MBLogo fontSize={60} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <ToyotaLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <PorscheLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <AudiLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <LexusLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <TeslaLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <FordLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <HondaLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <HyundaiLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <KiaLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <NissanLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <VolkswagenLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <VolvoLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <span>
            <Link to="/">
              <LandroverLogo fontSize={48} />
              <p></p>
            </Link>
          </span>
          <button onClick={scrollLeft}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandSelect;

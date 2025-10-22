import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Buttons";
import Image from "next/image";
import AnimatedServiceNames from "./AnimatedServiceNames";

const CtaSection = ({ data = {} }) => {
  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <div className="cs_cta_thumb" data-aos="fade-right">
            <Image src={data?.imageUrl} alt="img" width={200} height={190}   />
            </div>
            <div className="cs_cta_info">
              <AnimatedServiceNames />
            </div>
          </div>
          {/* <div className="cs_cta_right">
            <Button
              btnText={data.buttonText}
              variant={"cs_btn cs_style_1 cs_color_3"}
              btnIcons={<FaAnglesRight />}
              btnUrl={data.buttonUrl}
            />
          </div> */}
        </div>
      </div>
      <div className="cs_cta_shape" />
    </>
  );
};

export default CtaSection;

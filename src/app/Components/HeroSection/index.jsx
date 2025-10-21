"use client"
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Buttons";
import Image from "next/image";

const HeroSection = ({ data }) => {
  // Display only the first banner image (static, no carousel)
  const firstBanner = data?.primarySlider?.[0];

  if (!firstBanner) {
    return null;
  }

  return (
    <>
      <section className="position-relative">
        <div className="cs_hero_slider_thumb">
          <div className="cs_hero_slider_thumb_item">
            <div
              className="cs_hero cs_style_1 cs_center cs_bg_filed"
              style={{
                backgroundImage: `url(${firstBanner.bgImageUrl})`,
              }}
            >
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_text_in">
                    <h1
                      className="cs_hero_title"
                      dangerouslySetInnerHTML={{ __html: firstBanner.title }}
                    />
                    <p
                      className="cs_hero_subtitle"
                      dangerouslySetInnerHTML={{
                        __html: firstBanner.contactSubtitle,
                      }}
                    />
                    <div className="cs_hero_info">
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: firstBanner.contactTitle,
                        }}
                      />
                      <p
                        dangerouslySetInnerHTML={{ __html: firstBanner.contact }}
                      />
                    </div>
                    <div className="cs_hero_btns">
                      <Button
                        btnText={firstBanner.btnText1}
                        variant={"cs_btn cs_style_1 cs_color_1"}
                        btnIcons={<FaAnglesRight />}
                        btnUrl={firstBanner.link}
                      />
                      <Button
                        btnText={firstBanner.btnText2}
                        variant={"cs_btn cs_style_1 cs_color_2"}
                        btnIcons={<FaAnglesRight />}
                        btnUrl={firstBanner.link2}
                      />
                    </div>
                  </div>
                  <div className="cs_hero_shape">
                    <Image src={firstBanner.iconImgUrl} className="cs_spinner_img" alt="img" width={142} height={190} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

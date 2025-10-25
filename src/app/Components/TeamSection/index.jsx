'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const TeamSection = ({ data, bgColor, variant, hr }) => {
  const [teamData, setTeamData] = useState(data);
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    // If data is provided, use it; otherwise fetch from API
    if (!data) {
      fetchTeamMembers();
    }
  }, [data]);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/team-members?active_only=true');
      const members = await response.json();

      // Transform API data to match component format
      const transformedData = {
        subtitle: 'The Team',
        title: 'Our Leadership',
        sliderData: members.map(member => ({
          name: member.name,
          profession: member.position,
          imageUrl: member.image_url || '/assets/img/team_1.jpg',
          link: '/doctors/doctor-details',
          facebook: member.social_links?.facebook || '/',
          pinterest: member.social_links?.pinterest || '/',
          twitter: member.social_links?.twitter || '/',
          instagram: member.social_links?.instagram || '/',
        })),
      };

      setTeamData(transformedData);
    } catch (error) {
      console.error('Error fetching team members:', error);
      // Fallback to provided data if fetch fails
      if (data) {
        setTeamData(data);
      }
    } finally {
      setLoading(false);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `${variant}`,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="about-team">
        <div className="container">
          <p>Loading team members...</p>
        </div>
      </div>
    );
  }

  if (!teamData || !teamData.sliderData || teamData.sliderData.length === 0) {
    return null;
  }

  return (
    <div className="about-team">
      <div className="container">
        <SectionHeading
          SectionSubtitle={teamData.subtitle}
          SectionTitle={teamData.title}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {teamData?.sliderData.map((item, index) => (
                  <div className="cs_slide" key={index}>
                    <div
                      className={`cs_team cs_style_1 ${
                        bgColor ? "cs_accent_bg" : "cs_blue_bg"
                      } `}
                    >
                      <div
                        className={`cs_team_shape ${
                          bgColor ? "cs_blue_bg" : "cs_accent_bg "
                        }`}
                      />
                      <Link href={item.link} className="cs_team_thumbnail">
                      <Image src={item.imageUrl} alt="img" width={306} height={429} style={{ width: 'auto', height: 'auto' }} />
                      </Link>
                      <div className="cs_team_bio">
                        <h3 className="cs_team_title cs_extra_bold mb-0">
                          <Link href={item.link}>{item.name}</Link>
                        </h3>
                        <p className="cs_team_subtitle">{item.profession}</p>
                        <div className="cs_social_btns cs_style_1">
                          <Link href={item.facebook} className="cs_center">
                            <i>
                              <FaFacebookF />
                            </i>
                          </Link>
                          <Link href={item.pinterest} className="cs_center">
                            <i>
                              <FaPinterestP />
                            </i>
                          </Link>
                          <Link href={item.twitter} className="cs_center">
                            <i>
                              <FaTwitter />
                            </i>
                          </Link>
                          <Link href={item.instagram} className="cs_center">
                            <i>
                              <FaInstagram />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {bgColor && (
        <div className="cs_team_bg_dark cs_blue_bg">
          <div className="cs_team_bg_white cs_white_bg" />
        </div>
      )}
      <Spacing lg={80} md={120} />

      {hr && <hr />}
    </div>
  );
};

export default TeamSection;

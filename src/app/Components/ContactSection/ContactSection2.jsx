"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import Link from "next/link";

const ContactSection2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <section className="cs_card cs_style_3 cs_gray_bg position-relative">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>JOIN OUR TEAM
              </p>
              <h2 className="cs_section_title">Career Opportunities</h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <div className="cs_contact_form row cs_gap_y_30 home_form_area">
              <div className="col-lg-12">
                <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                  Explore exciting career opportunities with Healwell Healthcare Services. We&apos;re looking for talented professionals to join our growing team.
                </p>
              </div>
              <div className="col-lg-12">
                <Link href="/careers" className="cs_btn cs_style_1 cs_color_1">
                  View All Careers
                </Link>
              </div>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_solution_thumbnail cs_bg_filed" data-background="/assets/img/medical_solution_1.jpg" >
              </div>
            </div>
          </div>
        </div>
        <div className="cs_solution_shape position-absolute">
        <Image src="/assets/img/stethoscope.png" alt="img" width={304} height={399}   />
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default ContactSection2;
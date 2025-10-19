import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import React from 'react';

const headingData = {
    title: "Our Service",
  };
  
  const serviceData = {
    serviceHeading: "All Service:",
    services: [],
    mainImage: "/assets/img/service_details_1.jpg",
    serviceDetails: [],
    footerText: "",
    additionalImages: "/assets/img/service_details_2.jpg",
    iconBoxes: [],
    subtitle: "",
    readMoreUrl: "/",
    readMoreText: "READ MORE +",
  };
  
  const counterData = [
    {
      iconSrc: "/assets/img/icons/counter_icon_1.png",
      countTo: 567,
      suffix: "+",
      title: "Active Clients",
    },
    {
      iconSrc: "/assets/img/icons/counter_icon_2.png",
      countTo: 23,
      suffix: "K+",
      title: "Team Support",
    },
    {
      iconSrc: "/assets/img/icons/counter_icon_3.png",
      countTo: 241,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      iconSrc: "/assets/img/icons/counter_icon_4.png",
      countTo: 16,
      suffix: "K+",
      title: "Award winner",
    },
  ];

const page = () => {
    return (
        <div>
       <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>           

      {/* Start Service Details Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ServiceSection4 data={serviceData} />
      </Section>
      {/* End Service Details Section */}

      {/* Start Counter Section */}
      <Section bottomSpaceLg="70" bottomSpaceMd="120">
        <CounterSection2 data={counterData} />
      </Section>
      {/* End Counter Section */}


        </div>
    );
};

export default page;
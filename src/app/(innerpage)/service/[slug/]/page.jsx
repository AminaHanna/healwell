'use client';

import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const headingData = {
  title: "Our Service",
};

const defaultServiceData = {
  serviceHeading: "All Service:",
  services: [
    { title: "Medical lab service", url: "/" },
    { title: "Dental best service", url: "/" },
    { title: "Dedicate doctor best", url: "/" },
    { title: "Team can help achieve", url: "/" },
    { title: "Medical goals lab", url: "/" },
  ],
  mainImage: "/assets/img/service_details_1.jpg",
  serviceDetails: [
    "Loading service details...",
  ],
  footerText:
    "We is a long established fact that a reader will be distractedrestore inexpensive e-markets vis tontellectual capital.",
  additionalImages: "/assets/img/service_details_2.jpg",
  iconBoxes: [
    {
      index: "01",
      title: "Service & Check",
      subtitle: "Medical competitor research startup to financial",
      icon: "/assets/img/icons/service_icon_1.png",
      bgImage: "/assets/img/service_bg.jpg",
      link: "/",
    },
  ],
  subtitle:
    "There are many variations of pass available this medical service the team",
  readMoreUrl: "/",
  readMoreText: "READ MORE +",
};

export default function ServiceDetailsPage({ params }) {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || params.slug;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services?slug=${slug}`);
        const data = await response.json();
        
        if (data && data.length > 0) {
          const serviceData = data[0];
          setService(serviceData);
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchService();
    }
  }, [slug]);

  const serviceData = service ? {
    ...defaultServiceData,
    serviceHeading: service.title,
    mainImage: service.featured_image || "/assets/img/service_details_1.jpg",
    serviceDetails: [service.description],
    footerText: service.short_description || service.description,
    subtitle: service.short_description || "Service details",
  } : defaultServiceData;

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        {loading ? (
          <div className="text-center py-8">Loading service...</div>
        ) : service ? (
          <ServiceSection4 data={serviceData} />
        ) : (
          <div className="text-center py-8">Service not found</div>
        )}
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <CounterSection2 />
      </Section>
    </div>
  );
}


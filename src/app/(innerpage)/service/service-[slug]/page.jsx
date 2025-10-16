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

const defaultServiceData = {
  serviceHeading: "Service Details",
  services: [],
  mainImage: "/assets/img/service_details_1.jpg",
  serviceDetails: [
    "Loading service details...",
  ],
  footerText: "",
  additionalImages: "/assets/img/service_details_2.jpg",
  iconBoxes: [],
  subtitle: "",
  readMoreUrl: "/",
  readMoreText: "READ MORE +",
};

export default function ServiceDetailsPage({ params }) {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || params.slug;
  // Remove 'service-' prefix if it exists
  const cleanSlug = slug && slug.startsWith('service-') ? slug.substring(8) : slug;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services?slug=${cleanSlug}`);
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

    if (cleanSlug) {
      fetchService();
    }
  }, [cleanSlug]);

  const serviceData = service ? {
    ...defaultServiceData,
    serviceHeading: service.title,
    mainImage: service.featured_image || "/assets/img/service_details_1.jpg",
    serviceDetails: [service.description],
    footerText: service.short_description || service.description,
    subtitle: service.short_description || "Service details",
    isHtmlContent: true,
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
        <CounterSection2 data={counterData} />
      </Section>
    </div>
  );
}


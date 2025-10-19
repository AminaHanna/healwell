'use client';

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Service from '@/app/Components/Service';
import React, { useEffect, useState } from 'react';

const headingData = {
    title: 'Service',
  };
  
  const serviceData = {
    subtitle: 'OUR BEST SERVICE',
    title: 'High-Quality Services This Doctor',
    description:
      'We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.',
    services: [],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText:
      'Delivering tomorrow’s health care for your family.<br>medical this View',
    footerLink: '/',
    footerLinkText: 'SEE MORE',
  };


const Page = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services?active=true');
        const data = await response.json();

        // Transform the data to match the component's expected format
        const transformedServices = data.map((service, index) => ({
          backgroundImage: service.featured_image || '/assets/img/service_bg.jpg',
          iconUrl: `/assets/img/icons/service_icon_${(index % 8) + 1}.png`,
          index: String(index + 1).padStart(2, '0'),
          title: service.title,
          subtitle: service.short_description || service.description.substring(0, 50),
          link: `/service/${service.slug}`,
        }));

        setServices(transformedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const dynamicServiceData = {
    ...serviceData,
    services: services.length > 0 ? services : serviceData.services,
  };

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
            <div className="text-center py-8">Loading services...</div>
          ) : services.length > 0 ? (
            <Service data={dynamicServiceData} />
          ) : (
            <div className="text-center py-12">
              <h3 className="cs_primary_color mb-3">No Services Available</h3>
              <p className="cs_secondary_color">Check back soon for new services!</p>
            </div>
          )}
        </Section>

        </div>
    );
};

export default Page;
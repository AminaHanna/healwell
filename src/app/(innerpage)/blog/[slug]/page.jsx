'use client';

import BlogsLeft from '@/app/Components/BlogsDetailsSide/BlogsLeft';
import BlogsRight from '@/app/Components/BlogsDetailsSide/BlogsRight';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AppointmentSection from '@/app/Components/AppointmentSection';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const headingData = {
  title: 'Blog Details',
};

const defaultLeftSideData = {
  imageSrc: '/assets/img/post_details_1.jpeg',
  imageAlt: 'Post Image',
  text: 'Medilo',
  secText: 'June,10,2024',
  content: [
    'Loading blog content...',
  ],
};

const appointmentData = {
  subtitle: 'Book Your Appointment',
  title: 'Meet Our Medical Professionals',
  doctorsData: [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'General Practitioner',
      imageUrl: '/assets/img/doctor_1.jpg',
      profileLink: '/doctor/sarah-johnson',
      iconUrl: 'https://facebook.com',
      iconUrl2: 'https://pinterest.com',
      iconUrl3: 'https://twitter.com',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dental Specialist',
      imageUrl: '/assets/img/doctor_2.jpg',
      profileLink: '/doctor/michael-chen',
      iconUrl: 'https://facebook.com',
      iconUrl2: 'https://pinterest.com',
      iconUrl3: 'https://twitter.com',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Cardiologist',
      imageUrl: '/assets/img/doctor_3.jpg',
      profileLink: '/doctor/emily-rodriguez',
      iconUrl: 'https://facebook.com',
      iconUrl2: 'https://pinterest.com',
      iconUrl3: 'https://twitter.com',
    },
  ],
};

const rightSideData = {
  searchPlaceholder: 'Search here...',
  service: {
    backgroundImage: '/assets/img/sidebar_service_bg.jpg',
    icon: '/assets/img/icons/service_icon.png',
    title: 'Need Help?',
    subtitle: 'Get in touch with our medical professionals',
    link: '/contact',
  },
  recentPosts: [],
  secTitle: 'Categories',
  categories: [],
  secTitle2: 'Tags',
  tags: [],
};

export default function BlogDetailsPage({ params }) {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || params.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?slug=${slug}`);
        const data = await response.json();

        if (data && data.length > 0) {
          const blogData = data[0];
          setBlog(blogData);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const leftSideData = blog ? {
    ...defaultLeftSideData,
    imageSrc: blog.featured_image || '/assets/img/post_details_1.jpeg',
    text: blog.author,
    secText: new Date(blog.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    content: [blog.content],
    isHtmlContent: true,
  } : defaultLeftSideData;

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
          <div className="text-center py-8">Loading blog...</div>
        ) : blog ? (
          <div className="container">
            <div className="row">
              <BlogsLeft data={leftSideData} />
              <BlogsRight data={rightSideData} />
            </div>
          </div>
        ) : (
          <div className="text-center py-8">Blog not found</div>
        )}
      </Section>

      {/* <Section topSpaceLg="80" topSpaceMd="120" bottomSpaceLg="80" bottomSpaceMd="120">
        <AppointmentSection data={appointmentData} />
      </Section> */}
    </div>
  );
}


'use client';

import BlogsLeft from '@/app/Components/BlogsDetailsSide/BlogsLeft';
import BlogsRight from '@/app/Components/BlogsDetailsSide/BlogsRight';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
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
  thirdSecTitle: 'Make an Appointment',
  content: [
    'Loading blog content...',
  ],
  testimonial: {
    rating: 4,
    subtitle:
      'We are privileged to work hundreds of ncluding many of the world\'s top hardware, dental, and brands , feel safe and comfortable',
    avatarSrc: '/assets/img/avatar_1.png',
    avatarAlt: 'Avatar',
    avatarName: 'Dr. Mehara Bara',
    avatarTitle: 'Dental Manager',
  },
  card: {
    title: 'Medical Lab:',
    subtitle: 'We businesss standard chunk of ness reproduced we bet it',
    progress: [
      { label: 'Dental', percentage: 85 },
      { label: 'Medical', percentage: 65 },
      { label: 'Solution', percentage: 78 },
    ],
  },
  commentTitle: 'Comments (0)',
  comments: [],
  serviceOption: [
    { value: 'general', label: 'General Consultation' },
    { value: 'dental', label: 'Dental' },
    { value: 'medical', label: 'Medical' },
    { value: 'surgery', label: 'Surgery' },
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
  recentPosts: [
    {
      imgSrc: '/assets/img/post_1.jpeg',
      title: 'Medical Of This Working Health Blog',
      date: 'May 02',
      link: '/blog',
    },
  ],
  secTitle: 'Categories',
  categories: [
    { name: 'Medical', link: '/blog' },
    { name: 'Health', link: '/blog' },
    { name: 'Technology', link: '/blog' },
  ],
  secTitle2: 'Tags',
  tags: [
    { tagTitle: 'Medical', tagUrl: '/blog' },
    { tagTitle: 'Health', tagUrl: '/blog' },
    { tagTitle: 'Doctor', tagUrl: '/blog' },
  ],
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
    card: defaultLeftSideData.card,
    testimonial: defaultLeftSideData.testimonial,
    comments: defaultLeftSideData.comments,
    commentTitle: defaultLeftSideData.commentTitle,
    serviceOption: defaultLeftSideData.serviceOption,
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
    </div>
  );
}


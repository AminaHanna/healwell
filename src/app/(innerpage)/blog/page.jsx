'use client';

import BlogsSection1 from '@/app/Components/BlogsSection/BlogsSection1';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useEffect, useState } from 'react';

const headingData = {
    title: 'Blog Page',
  };

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?published=true');
        const data = await response.json();

        // Transform the data to match the component's expected format
        const transformedBlogs = data.map((blog) => ({
          id: blog.id,
          category: 'Medical',
          date: new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }).replace(/(\w+) (\d+), (\d+)/, '$1 $2'),
          author: blog.author,
          comments: '0 Comments',
          title: blog.title,
          subtitle: blog.excerpt || blog.content.substring(0, 100),
          image: blog.featured_image || '/assets/img/post_1.jpeg',
          link: `/blog/${blog.slug}`,
          linkText: 'Read More',
        }));

        setBlogs(transformedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const blogsSectionData = {
    sectionSubtitle: 'OUR LARGEST BLOG',
    sectionTitle: 'Latest Posts &amp; Articles',
    blogsData: blogs.length > 0 ? blogs : [
      {
        id: 1,
        category: 'Technology',
        date: 'Jun 14',
        author: 'Admin',
        comments: '2 Comments',
        title: 'The Future of AI in Medicine',
        subtitle:
          'Explore the possibilities of AI in revolutionizing healthcare.',
        image: '/assets/img/post_1.jpeg',
        link: '/blog/blog-details',
        linkText: 'Read More',
      },
    ],
  };

    return (
        <div>

        <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        {loading ? (
          <div className="text-center py-8">Loading blogs...</div>
        ) : (
          <BlogsSection1 data={blogsSectionData} />
        )}
      </Section>
      {/* End Blog Section */}


        </div>
    );
};

export default Page;
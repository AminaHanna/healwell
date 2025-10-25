'use client';

import BlogsSection1 from '@/app/Components/BlogsSection/BlogsSection1';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useEffect, useState } from 'react';
import { stripHtmlAndTruncateRegex } from '@/lib/htmlUtils';

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
          subtitle: blog.excerpt || stripHtmlAndTruncateRegex(blog.content, 100),
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
    blogsData: blogs,
  };

    return (
        <div>

        <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} pageName="blog" />
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
        ) : blogs.length > 0 ? (
          <BlogsSection1 data={blogsSectionData} />
        ) : (
          <div className="text-center py-12">
            <h3 className="cs_primary_color mb-3">No Blog Posts Yet</h3>
            <p className="cs_secondary_color">Check back soon for new content!</p>
          </div>
        )}
      </Section>
      {/* End Blog Section */}


        </div>
    );
};

export default Page;
'use client';

import { useEffect, useState } from 'react';

const PageSEOContent = ({ pageName }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSEOContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/page-settings?page_name=${pageName}`);
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const contentMap = {};
          data.forEach((setting) => {
            if (setting.setting_key === 'page_heading') {
              contentMap.heading = setting.setting_value;
            } else if (setting.setting_key === 'page_description') {
              contentMap.description = setting.setting_value;
            }
          });
          setContent(contentMap);
        }
      } catch (error) {
        console.error('Error fetching SEO content:', error);
      } finally {
        setLoading(false);
      }
    };

    if (pageName) {
      fetchSEOContent();
    }
  }, [pageName]);

  if (loading || !content || (!content.heading && !content.description)) {
    return null;
  }

  return (
    <section className="cs_page_seo_content">
      <div className="container">
        {content.heading && (
          <h1 className="cs_seo_heading">{content.heading}</h1>
        )}
        {content.description && (
          <p className="cs_seo_description">{content.description}</p>
        )}
      </div>
    </section>
  );
};

export default PageSEOContent;


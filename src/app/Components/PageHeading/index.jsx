"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const PageHeading = ({ data, pageName }) => {
  const [urlSegments, setUrlSegments] = useState([]);
  const [seoContent, setSeoContent] = useState(null);
  const [seoLoading, setSeoLoading] = useState(true);

  useEffect(() => {
    const pathSegments = window.location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    setUrlSegments(pathSegments);
  }, []);

  useEffect(() => {
    const fetchSEOContent = async () => {
      if (!pageName) {
        setSeoLoading(false);
        return;
      }

      try {
        setSeoLoading(true);
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
          setSeoContent(contentMap);
        }
      } catch (error) {
        console.error('Error fetching SEO content:', error);
      } finally {
        setSeoLoading(false);
      }
    };

    fetchSEOContent();
  }, [pageName]);

  return (
    <div className="container">
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <Link href={`/${urlSegments.slice(0, index + 1).join("/")}`}>
                {segment}
              </Link>
            ) : (
              <span className="active">{segment}</span>
            )}
          </li>
        ))}
      </ol>

      {/* SEO Content - Now integrated into banner */}
      {!seoLoading && seoContent && (seoContent.heading || seoContent.description) && (
        <div className="cs_page_seo_content_banner">
          {seoContent.heading && (
            <h2 className="cs_seo_heading_banner">{seoContent.heading}</h2>
          )}
          {seoContent.description && (
            <p className="cs_seo_description_banner">{seoContent.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PageHeading;

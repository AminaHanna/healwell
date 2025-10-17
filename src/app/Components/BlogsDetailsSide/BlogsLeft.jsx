"use client"
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogsLeft = ({ data }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="cs_post_details cs_style_1">
          <div className="cs_post_thumb_thumbnail">
          <Image src={data.imageSrc} alt="img" width={856} height={486}   />
          </div>
          <ul className="cs_post_meta cs_mp0">
            <li>
              <i>
                <FaUser />
              </i>
              {data.text}
            </li>
            <li>
              <i>
                <FaCalendarAlt />
              </i>
              {data.secText}
            </li>
          </ul>
          {data?.content && data.content.length > 0 ? (
            data.content.map((paragraph, index) => (
              data.isHtmlContent ? (
                <div
                  key={index}
                  className="cs_blog_content"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ) : (
                <p key={index}>{paragraph}</p>
              )
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;

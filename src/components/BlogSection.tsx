import Link from 'next/link';

import LongArrow from '@/components/icons/LongArrow';
import type { BlogCard } from '@/types/blog';

interface BlogSectionProps {
  /** Section classes, which differ between the home, works and post pages. */
  sectionClassName: string;
  /** Only the home page's copy took part in the one-page scroll navigation. */
  scrollIndex?: string;
  title: string;
  posts: BlogCard[];
}

const isInternal = (href: string) => href.startsWith('/');

/** The "Latest News" / "Related Posts" three-card grid. */
export default function BlogSection({
  sectionClassName,
  scrollIndex,
  title,
  posts,
}: BlogSectionProps) {
  return (
    <section className={sectionClassName} data-scroll-index={scrollIndex}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-head bord-thin-bottom pb-20 mb-80">
              <h4 className="sub-title fz-28">{title}</h4>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {posts.map((post, index) => {
            const readMore = (
              <>
                Read More <LongArrow size={18} className="ml-5" />
              </>
            );

            return (
              <div className="col-lg-4" key={`${post.title}-${index}`}>
                <div className={post.itemClass}>
                  <div className="img">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="box">
                    <div className="cont">
                      <span className="date">
                        <i className="fas fa-calendar-alt mr-10 main-color"></i>
                        {` ${post.date}`}
                      </span>
                      <h5>
                        {isInternal(post.href) ? (
                          <Link href={post.href}>{post.title}</Link>
                        ) : (
                          <a
                            href={post.href}
                            {...(post.titleTargetBlank ? { target: '_blank' } : {})}
                          >
                            {post.title}
                          </a>
                        )}
                      </h5>
                    </div>
                    <div className="info d-flex align-items-center">
                      <div>
                        <span>
                          <i className="fas fa-comments fz-12 mr-5"></i>
                          {` ${post.comments}`}
                        </span>
                      </div>
                      <div className="ml-auto">
                        {isInternal(post.href) ? (
                          <Link href={post.href}>{readMore}</Link>
                        ) : (
                          <a href={post.href}>{readMore}</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

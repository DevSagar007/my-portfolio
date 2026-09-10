import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BlogSection from '@/components/BlogSection';
import BodyClass from '@/components/BodyClass';
import ContactForm from '@/components/ContactForm';
import BlogBlocks from '@/components/blog/BlogBlocks';
import { blogPosts, getBlogPostBySlug } from '@/data/blogs';
import { inlineList } from '@/utils/inline';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} - Sagor Hossen`,
    description: post.meta,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.meta,
      images: [post.image],
    },
  };
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BodyClass name="main-bg" />

      <main>
        <section className="main-post section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="caption text-center">
                  <div className="gat">
                    {inlineList(
                      post.categories.map((category) => (
                        <a href="#0" key={category}>
                          <span>{category}</span>
                        </a>
                      )),
                    )}
                  </div>
                  <h1 className="fz-55 mt-30">{post.title}</h1>
                  <p className="sub-title mt-15">{post.meta}</p>
                </div>
                <div className="main-img mb-80 mt-40">
                  <img src={post.image} alt="" className="radius-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="cont">
                  <BlogBlocks blocks={post.blocks} />

                  <div className="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
                    <div>
                      <div className="tags flex">
                        <div className="valign">
                          <span>Tags :</span>
                        </div>
                        <div>
                          {inlineList(
                            post.tags.map((tag) => (
                              <a href={tag.href} key={tag.label}>
                                {tag.label}
                              </a>
                            )),
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="share-icon flex">
                        <div className="valign">
                          <span>Share :</span>
                        </div>
                        <div>
                          {inlineList(
                            post.share.map((item) => (
                              <a href={item.href} key={item.icon}>
                                <i className={item.icon}></i>
                              </a>
                            )),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="author-area mt-50">
                    <div className="flex">
                      <div className="author-img mr-30">
                        <div className="img">
                          <img src={post.author.image} alt="" className="circle-img" />
                        </div>
                      </div>
                      <div className="cont valign">
                        <div className="full-width">
                          <h6 className="fw-500 mb-10">{post.author.name}</h6>
                          <p>{post.author.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="next-prv-post flex mt-50">
                    <div
                      className="thumb-post bg-img"
                      style={{ backgroundImage: `url(${post.prev.image})` }}
                    >
                      <Link href={`/blog/${post.prev.slug}`}>
                        <span className="fz-12 text-u ls1 main-color mb-15">
                          <i className="pe-7s-angle-left"></i> Prev Post
                        </span>
                        <h6 className="fw-500 fz-16">
                          {post.prev.titleLines.map((line, index) => (
                            <Fragment key={index}>
                              {index > 0 ? <br /> : null}
                              {line}
                            </Fragment>
                          ))}
                        </h6>
                      </Link>
                    </div>
                    <div
                      className="thumb-post ml-auto text-right bg-img"
                      style={{ backgroundImage: `url(${post.next.image})` }}
                    >
                      <Link href={`/blog/${post.next.slug}`}>
                        <span className="fz-12 text-u ls1 main-color mb-15">
                          Next Post <i className="pe-7s-angle-right"></i>
                        </span>
                        <h6 className="fw-500 fz-16">
                          {post.next.titleLines.map((line, index) => (
                            <Fragment key={index}>
                              {index > 0 ? <br /> : null}
                              {line}
                            </Fragment>
                          ))}
                        </h6>
                      </Link>
                    </div>
                  </div>

                  <div className="comments-post section-padding">
                    <div className="sec-head mb-60">
                      <h5>{post.commentsHeading}</h5>
                    </div>
                    {post.comments.map((comment, index) => (
                      <div
                        className={
                          comment.replied
                            ? 'item-box replayed'
                            : 'item-box bord-thin-bottom pb-30 mb-30'
                        }
                        key={index}
                      >
                        <div className="flex">
                          <div className="user-img mr-30">
                            <div className="img circle-60 line-height-1">
                              <img src={comment.avatar} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="cont">
                            <h6 className="mb-10">{comment.name}</h6>
                            <p>{comment.text}</p>
                          </div>
                        </div>
                        <div className="replay-butn">
                          <a href="#0">
                            <span>Replay</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="comments-from">
                    <div className="sec-head mb-60">
                      <h5>Leave a comment</h5>
                    </div>
                    <ContactForm variant="comment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlogSection
          sectionClassName="blog section-padding pt-0"
          title="Related Posts"
          posts={post.relatedPosts}
        />
      </main>
    </>
  );
}

import type { Metadata } from 'next';

import BlogSection from '@/components/BlogSection';
import BodyClass from '@/components/BodyClass';
import Portfolio from '@/components/portfolio/Portfolio';
import { relatedNews } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Projects - Sagor Hossen',
  description:
    'Selected front-end projects by Md Sagor Hossen: HTML templates, React and Next.js interfaces, and API integration work.',
};

export default function ProjectsPage() {
  return (
    <>
      <BodyClass name="main-bg" />

      <main>
        <Portfolio sectionClassName="portfolio section-padding" />

        <BlogSection
          sectionClassName="blog section-padding pt-0"
          title="Related Posts"
          posts={relatedNews}
        />
      </main>
    </>
  );
}

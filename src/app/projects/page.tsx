import type { Metadata } from 'next';

import BlogSection from '@/components/BlogSection';
import BodyClass from '@/components/BodyClass';
import Portfolio from '@/components/portfolio/Portfolio';
import { relatedNews } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Projects | Md Sagor Hossen',
  description:
    'Selected projects by Md Sagor Hossen, a Frontend-Focused Full-Stack Developer: React and Next.js applications, dashboards, REST API integration and responsive HTML templates.',
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

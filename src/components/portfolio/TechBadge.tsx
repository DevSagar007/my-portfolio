import type { IconType } from 'react-icons';
import { LuActivity, LuChartColumn, LuChartLine, LuCode, LuMonitorSmartphone, LuServer } from 'react-icons/lu';
import {
  SiAngular, SiAxios, SiBootstrap, SiFirebase, SiFramer, SiGit, SiHtml5, SiJavascript, SiJquery, SiJsonwebtokens,
  SiMui, SiNextdotjs, SiReact, SiReactquery, SiRedux, SiSass, SiShadcnui, SiTailwindcss, SiTypescript,
  SiVercel, SiZod,
} from 'react-icons/si';

/** Icon for each technology name used in `src/data/projects.ts`. */
const TECH_ICONS: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  'React.js': SiReact,
  Angular: SiAngular,
  'Angular SSR': SiAngular,
  Signals: LuActivity,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'RTK Query': SiRedux,
  'REST API': LuServer,
  'JWT Auth': SiJsonwebtokens,
  'Firebase Auth': SiFirebase,
  Zod: SiZod,
  'HTML5 / CSS3': SiHtml5,
  SCSS: SiSass,
  jQuery: SiJquery,
  'jQuery Plugins': SiJquery,
  Git: SiGit,
  'Bootstrap 5.x': SiBootstrap,
  'Material UI': SiMui,
  ApexCharts: LuChartColumn,
  Recharts: LuChartLine,
  'shadcn/ui': SiShadcnui,
  Redux: SiRedux,
  'TanStack Query': SiReactquery,
  Axios: SiAxios,
  'Framer Motion': SiFramer,
  Vercel: SiVercel,
  'Fully Responsive': LuMonitorSmartphone,
};

interface TechBadgeProps {
  tech: string;
  className?: string;
}

/** A technology pill with its brand icon; unknown names get a generic code icon. */
export default function TechBadge({ tech, className }: TechBadgeProps) {
  const Icon = TECH_ICONS[tech] ?? LuCode;

  return (
    <span className={`tech-badge${className ? ` ${className}` : ''}`}>
      <Icon className="tech-badge__icon" aria-hidden="true" focusable="false" />
      {tech}
    </span>
  );
}

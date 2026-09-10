import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  { ignores: ['.next/**', 'out/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  {
    rules: {
      // The migrated markup keeps the template's exact sizing and aspect
      // ratios, so plain <img> and the template's own font <link>s are
      // deliberate rather than oversights.
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];

export default config;

// eslint.config.mjs
import next from 'eslint-config-next';

export default [
  ...next,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'warn',
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-img-element': 'warn'
    }
  }
];
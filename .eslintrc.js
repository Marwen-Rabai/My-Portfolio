module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/no-children-prop': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-img-element': 'warn',
    'jsx-a11y/alt-text': 'warn',
    // Production-ready settings
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'react/jsx-key': 'error',
    'react/no-unescaped-entities': 'error'
  }
};
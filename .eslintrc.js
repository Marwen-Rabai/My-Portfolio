module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/no-children-prop': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-img-element': 'warn',
    'jsx-a11y/alt-text': 'warn'
  }
};
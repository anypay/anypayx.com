module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn', // Change to 'error' if you want it stricter
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-img-element': 'warn', // Change to 'error' if you want to enforce next/image
    'react/no-unescaped-entities': 'off',
    "react/no-children-prop": "off",
    '@next/next/no-img-element': 'off',
  }
};
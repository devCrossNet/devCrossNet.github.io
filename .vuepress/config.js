const path = require('path');

module.exports = {
  base: '/',
  title: 'Johannes Werner - Engineering Lead @BCG Digital Ventures',
  description: 'I try to solve problems.',
  dest: path.join(path.resolve(__dirname), '../dist'),
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`,
      },
    ],
  ],
  themeConfig: {
    profileImage: '/logo.png',
    socialLinks: [
      { text: 'GitHub', link: 'https://github.com/devcrossnet' },
      { text: 'Twitter', link: 'https://twitter.com/_jwerner_' },
    ],
  },
  markdown: {
    anchor: { permalink: false },
  },
};

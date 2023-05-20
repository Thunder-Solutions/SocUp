export default {
  'en-US': {
    nav: [
      {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Contact',
        href: '/contact'
      },
      {
        text: 'Examples',
        href: '/examples',
        children: [
          {
            text: 'To Do Example',
            href: '/examples/to-dos'
          },
          {
            text: 'Forms Example',
            href: '/examples/forms'
          },
        ],
      },
    ],
    siteMap: [
      {
        text: 'Boilerplate Theme',
        href: '/'
      },
      {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Contact',
        href: '/contact'
      },
      {
        text: 'To Do Example',
        href: '/to-dos'
      },
    ],
    social: [
      {
        type: 'Facebook',
        title: 'Follow Us On Facebook',
        href: 'https://www.facebook.com/thundersolutionsofficial'
      },
      {
        type: 'LinkedIn',
        title: 'Follow Us On LinkedIn',
        href: 'https://www.linkedin.com/company/thunder-solutions'
      },
    ],
    copyright: '© Thunder Solutions LLC {year} - ALL RIGHTS RESERVED',
  },
};

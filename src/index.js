const plugin = require('tailwindcss/plugin');

const pluginClassName = 'line-clamp-no-ellipsis';

const lineClampNoEllipsis = plugin(
  function ({ matchUtilities, addUtilities, theme, variants }) {
    const values = theme('lineClamp');

    matchUtilities(
      {
        [pluginClassName]: (value) => ({
          overflow: 'hidden',
          maxHeight: `calc(1lh * ${value})`,
          overflowWrap: 'break-word',
        }),
      },
      { values },
    );

    addUtilities(
      [
        {
          [`.${pluginClassName}-none`]: {
            overflow: 'unset',
            maxHeight: 'unset',
          },
        },
      ],
      variants('lineClamp'),
    );
  },
  {
    theme: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
    },
    variants: {
      lineClamp: ['responsive'],
    },
  },
);

module.exports = lineClampNoEllipsis;

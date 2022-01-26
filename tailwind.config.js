const fontSize = {
  font0: ['0rem', '0rem'],
  font50: ['0.50rem', '0.75rem'],
  font100: ['0.75rem', '1.25rem'],
  font200: ['0.875rem', '1.375rem'],
  font300: ['1rem', '1.5rem'],
  font400: ['1.25rem', '1.75rem'],
  font500: ['1.5rem', '2rem'],
  font600: ['1.875rem', '2.375rem'],
  font700: ['2.375rem', '2.875rem'],
  font800: ['2.875rem', '3.375rem'],
  font900: ['3.5rem', '4rem'],
  font1000: ['4.25rem', '4.75rem'],
};

module.exports = {
  theme: {
    fontSize,
    fontFamily: {
      primary: ['"Inter"', 'sans-serif'],
      secondary: ['"Hartwell"', '"Inter"', 'sans-serif'],
      mono: ['"Courier"', 'monospace'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      primary500: '#6E0B00',
      primary400: '#940F00',
      primary300: '#BD1200',
      primary200: '#AD1100',
      primary100: '#FA1900',

      lemon200: '#787940',
      lemon100: '#C8D25C',

      yellow200: '#8A6F36',
      yellow100: '#E9C957',

      peach200: '#A1665A',
      peach100: '#E88B80',

      gray900: '#493A31',
      gray800: '#64564F',
      gray700: '#847262',
      gray600: '#BCA58F',
      gray500: '#D1BDAB',
      gray400: '#DED4C9',
      gray300: '#E4DCD4',
      gray200: '#EBE5DF',
      gray100: '#F2EEEA',
      gray50: '#F8F6F4',

      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',

      danger900: '#5C0011',
      danger800: '#820014',
      danger700: '#A8071A',
      danger600: '#CF1322',
      danger500: '#F5222D',
      danger400: '#FF4D4F',
      danger300: '#FF7875',
      danger200: '#FFA39E',
      danger100: '#FFCCC7',
      danger50: '#FFF1F0',

      success900: '#092B00',
      success800: '#135200',
      success700: '#237804',
      success600: '#389E0D',
      success500: '#52C41A',
      success400: '#73D13D',
      success300: '#95DE64',
      success200: '#B7EB8F',
      success100: '#D9F7BE',
      success50: '#F6FFED',

      warning900: '#8D2B0B',
      warning800: '#B44D12',
      warning700: '#CB6E17',
      warning600: '#DE911D',
      warning500: '#F0B429',
      warning400: '#F7C948',
      warning300: '#FADB5F',
      warning200: '#FCE588',
      warning100: '#FFF3C4',
      warning50: '#FFFBEA',
    },
    inset: {
      '-300': '-0.75rem',
      '-200': '-0.5rem',
      '-100': '-0.25rem',
      0: '0rem',
      100: '0.25rem',
      200: '0.5rem',
      300: '0.75rem',
      400: '1rem',
      500: '1.5rem',
      600: '2rem',
      700: '3rem',
      800: '4rem',
      900: '6rem',
    },
    spacing: {
      '-600': '-2rem',
      0: '0rem',
      25: '0.0625rem',
      50: '0.125rem',
      100: '0.25rem',
      200: '0.5rem',
      300: '0.75rem',
      400: '1rem',
      500: '1.5rem',
      600: '2rem',
      700: '3rem',
      800: '4rem',
      900: '6rem',
    },
    borderRadius: {
      0: '0rem',
      100: '0.25rem',
      200: '0.5rem',
      300: '0.75rem',
      400: '1rem',
      500: '1.5rem',
      600: '2rem',
      700: '3rem',
      full: '999px',
    },
    extend: {
      width: {
        fit: 'fit-content', // built-in on tailwind v3
      },
      maxWidth: {
        50: '50%',
      },
      maxHeight: {
        // from tw docs scale
        80: '20rem',
      },
      boxShadow: {
        shadow100: '0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.2)',
        shadow200: '0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.2)',
        shadow300: '0rem 0.3125rem 0.9375rem rgba(0, 0, 0, 0.2)',
        shadow400: '0rem 0.625rem 1.5rem rgba(0, 0, 0, 0.2)',
        'shadow100-inner': 'inset 0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.2)',
        'shadow200-inner': 'inset 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.2)',
        'shadow300-inner': 'inset 0rem 0.3125rem 0.9375rem rgba(0, 0, 0, 0.2)',
        'shadow400-inner': 'inset 0rem 0.625rem 1.5rem rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-out',
        'fade-in-up': 'fade-in-up 300ms ease-out',
        'fade-in-right': 'fade-in-right 300ms ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.97)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        'fade-in-right': {
          '0%': { opacity: 0, transform: 'translateX(-20px) scale(0.97)' },
          '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
        },
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
        'row-resize': 'row-resize',
      },
    },
  },
  purge: {
    content: ['./src/**/*.{ts,tsx}'],
    safelist: [
      'duration-0',
      'duration-75',
      'duration-100',
      'duration-150',
      'duration-200',
      'duration-300',
      'duration-500',
      'duration-700',
      'duration-1000',
      'hidden',
      'block',
      ...Object.keys(fontSize).map((key) => `text-${key}`),
    ],
  },
};
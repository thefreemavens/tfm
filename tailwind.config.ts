import type { Config } from 'tailwindcss'
import FormKitVariants from '@formkit/themes/tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '2xs': ['10px', '14px']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      red: '#FF1111',
      orange: '#FF5C1B',
      amber: '#FFA922',
      yellow: '#FBFF29',
      lime: '#9CFF2F',
      green: '#3EFF36',
      emerald: '#36FFA1',
      sky: '#2EE3FF',
      indigo: '#2755FF',
      purple: '#8220FF',
      pink: '#FF18D7',
      grey: {
        50: '#F3F3F7',
        100: '#E8E8F0',
        200: '#D9D9E1',
        300: '#CACAD2',
        400: '#ACACB4',
        450: '#8E8E96',
        500: '#72727A',
        550: '#52525E',
        600: '#343444',
        700: '#272733',
        800: '#1A1A22',
        900: '#101016',
        950: '#0C0C11',
        975: '#060608'
      }
    },
    fontFamily: {
      'body': ['Inter'],
      'sans': [ 'Inter'],
      'mono': ['Victor Mono', 'SFMono-Regular'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'display': ['Major Mono Display'],
    }
  },
  plugins: [FormKitVariants],
  content: [
    './content/**/*.md',
    './.configs/formkit-tailwind-theme.js',
  ]
}
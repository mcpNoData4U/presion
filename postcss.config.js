import postcssPresetEnv from 'postcss-preset-env'; 
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': { 
      features: {
        'custom-properties': true, 
      },
    },
  },
}
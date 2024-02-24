export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // OSU Colors
          "primary": "#D63F09",           // Orange for highlights
          "accent": "#423f3d",            // Gray for text
          "neutral": "#F6F5F4",           // Off-White for backgrounds
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
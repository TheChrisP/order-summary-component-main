module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BluePale: "hsl(225, 100%, 94%)",
        BlueBright: "hsl(245, 75%, 52%)",
        BlueVeryPale: "hsl(225, 100%, 98%)",
        BlueDesaturated: "hsl(224, 23%, 55%)",
        BlueDark: "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        body: ["Red Hat Display"],
      },
      backgroundImage: (theme) => ({
        img_mobile: "url('/images/pattern-background-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

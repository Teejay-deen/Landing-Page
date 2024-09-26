module.exports = {
    theme: {
      extend: {
        animation: {
            "loop-scroll": "loop-scroll 50s linear inifinite"
        },

        keyframes: {
            "loop-scroll":{
                from: {transform: "translateX(0)"},
                to: {transform: "translateX(-100%)"},
            }
        },
        // fontFamily: {
        //   clash: ['"Clash Display"', 'sans-serif'],
        //   dmSans: ['"DM Sans"', 'sans-serif'],
        //   cabin: ["Cabin", "sans-serif"],
          
        // },
      },
    },
    plugins: [],
  }
  
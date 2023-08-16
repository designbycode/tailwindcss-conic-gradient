// @ts-expect-error
import plugin from "tailwindcss/plugin"
// @ts-expect-error
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

module.exports = plugin.withOptions(
  function () {
    return function ({ addComponents, addBase, matchUtilities, matchComponents, theme }: any) {
      addBase({
        ":root": {
          "--cg-conic-gradient-angle": "45deg",
          "--cg-conic-gradient-x": "50%",
          "--cg-conic-gradient-y": "50%",
          "--cg-conic-gradient-color-1": "#14b8a6",
          "--cg-conic-gradient-color-2": "#a855f7",
          "--cg-conic-gradient-color-3": "#c026d3",
          "--cg-conic-gradient-color-4": "#2563eb",
          "--cg-conic-gradient-color-5": "#c026d3",
          "--cg-conic-gradient-color-6": "#2563eb",
        },
      })

      addComponents({
        ".conic-gradient": {
          background: `conic-gradient(from var(--cg-conic-gradient-angle) at var(--cg-conic-gradient-x) var(--cg-conic-gradient-y) , var(--cg-conic-gradient-color-1), var(--cg-conic-gradient-color-2))`,
        },
      })

      matchComponents(
        {
          "conic-gradient": (value: string) => {
            const newClass = []
            for (let i = 0; i < parseInt(value); i++) {
              newClass.push(`var(--cg-conic-gradient-color-${i + 1})`)
            }
            return {
              background: `conic-gradient(from var(--cg-conic-gradient-angle) at var(--cg-conic-gradient-x) var(--cg-conic-gradient-y) , ${newClass.toString()})`,
            }
          },
        },
        {
          values: theme("conicColorCount"),
          type: "number",
        }
      )

      matchUtilities(
        {
          "conic-gradient-1": (value: string) => ({
            "--cg-conic-gradient-color-1": value,
          }),
          "conic-gradient-2": (value: string) => ({
            "--cg-conic-gradient-color-2": value,
          }),
          "conic-gradient-3": (value: string) => ({
            "--cg-conic-gradient-color-3": value,
          }),
          "conic-gradient-4": (value: string) => ({
            "--cg-conic-gradient-color-4": value,
          }),
          "conic-gradient-5": (value: string) => ({
            "--cg-conic-gradient-color-5": value,
          }),
          "conic-gradient-6": (value: string) => ({
            "--cg-conic-gradient-color-6": value,
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      )

      matchUtilities(
        {
          "conic-gradient-angle": (value: string) => ({
            "--cg-conic-gradient-angle": value,
          }),
        },
        {
          values: theme("conicAngle"),
        }
      )

      matchUtilities(
        {
          "conic-gradient-x": (value: string) => ({
            "--cg-conic-gradient-x": value,
          }),
          "conic-gradient-y": (value: string) => ({
            "--cg-conic-gradient-y": value,
          }),
        },
        {
          values: theme("conicPosition"),
        }
      )
    }
  },
  function () {
    return {
      theme: {
        conicColorCount: {
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
        },
        conicPosition: {
          0: "0%",
          5: "5%",
          10: "10%",
          15: "15%",
          20: "20%",
          25: "25%",
          30: "30%",
          35: "35%",
          40: "40%",
          45: "45%",
          50: "50%",
          55: "55%",
          60: "60%",
          65: "65%",
          70: "70%",
          75: "75%",
          80: "80%",
          85: "85%",
          90: "90%",
          95: "95%",
          100: "100%",
        },
        conicAngle: {
          0: "0deg",
          45: "45deg",
          90: "90deg",
          135: "135deg",
          180: "180deg",
          225: "225deg",
          270: "270deg",
          315: "315deg",
          360: "360deg",
        },
        conicDefaultColor: {
          1: "#14b8a6",
          2: "#a855f7",
          3: "#c026d3",
          4: "#2563eb",
          5: "transparent",
          6: "transparent",
        },
      },
    }
  }
)

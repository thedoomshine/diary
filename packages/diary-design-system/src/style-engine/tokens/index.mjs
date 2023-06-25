const tokens = {
  "colors.black": {
    "value": "#0d0d0d",
    "variable": "var(--colors-black)"
  },
  "colors.blue": {
    "value": "#00a3d1",
    "variable": "var(--colors-blue)"
  },
  "colors.charcoal": {
    "value": "#1f1f1f",
    "variable": "var(--colors-charcoal)"
  },
  "colors.green": {
    "value": "#00cc69",
    "variable": "var(--colors-green)"
  },
  "colors.grey": {
    "value": "#3e3e3e",
    "variable": "var(--colors-grey)"
  },
  "colors.orange": {
    "value": "#ff9338",
    "variable": "var(--colors-orange)"
  },
  "colors.purple": {
    "value": "#703faf",
    "variable": "var(--colors-purple)"
  },
  "colors.red": {
    "value": "#ff2e1f",
    "variable": "var(--colors-red)"
  },
  "colors.silver": {
    "value": "#b4b4b4",
    "variable": "var(--colors-silver)"
  },
  "colors.white": {
    "value": "#f5f5f5",
    "variable": "var(--colors-white)"
  },
  "colors.yellow": {
    "value": "#f8c630",
    "variable": "var(--colors-yellow)"
  },
  "durations.150": {
    "value": "150ms",
    "variable": "var(--durations-150)"
  },
  "durations.250": {
    "value": "250ms",
    "variable": "var(--durations-250)"
  },
  "durations.300": {
    "value": "300ms",
    "variable": "var(--durations-300)"
  },
  "durations.500": {
    "value": "500ms",
    "variable": "var(--durations-500)"
  },
  "easings.easeIn": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-ease-in)"
  },
  "easings.easeOut": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-ease-out)"
  },
  "easings.easeOutQuart": {
    "value": "cubic-bezier(0.16, 1, 0.3, 1)",
    "variable": "var(--easings-ease-out-quart)"
  },
  "easings.linear": {
    "value": "cubic-bezier(0, 0, 1, 1)",
    "variable": "var(--easings-linear)"
  },
  "fonts.mono": {
    "value": "'IBM Plex Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
    "variable": "var(--fonts-mono)"
  },
  "fonts.sans": {
    "value": "'Atkinson Hyperlegible', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "'Playfair Display', Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    "variable": "var(--fonts-serif)"
  },
  "fontSizes.h6": {
    "value": "0.7071rem",
    "variable": "var(--font-sizes-h6)"
  },
  "fontSizes.h5": {
    "value": "1rem",
    "variable": "var(--font-sizes-h5)"
  },
  "fontSizes.h4": {
    "value": "1.4142rem",
    "variable": "var(--font-sizes-h4)"
  },
  "fontSizes.h3": {
    "value": "2rem",
    "variable": "var(--font-sizes-h3)"
  },
  "fontSizes.h2": {
    "value": "2.8284rem",
    "variable": "var(--font-sizes-h2)"
  },
  "fontSizes.h1": {
    "value": "4rem",
    "variable": "var(--font-sizes-h1)"
  },
  "fontSizes.xs": {
    "value": "0.8409rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "1rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1.1892rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.4142rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.6818rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontWeights.100": {
    "value": "100",
    "variable": "var(--font-weights-100)"
  },
  "fontWeights.200": {
    "value": "200",
    "variable": "var(--font-weights-200)"
  },
  "fontWeights.300": {
    "value": "300",
    "variable": "var(--font-weights-300)"
  },
  "fontWeights.400": {
    "value": "400",
    "variable": "var(--font-weights-400)"
  },
  "fontWeights.500": {
    "value": "500",
    "variable": "var(--font-weights-500)"
  },
  "fontWeights.600": {
    "value": "600",
    "variable": "var(--font-weights-600)"
  },
  "fontWeights.700": {
    "value": "700",
    "variable": "var(--font-weights-700)"
  },
  "fontWeights.800": {
    "value": "800",
    "variable": "var(--font-weights-800)"
  },
  "lineHeights.body": {
    "value": "1.5",
    "variable": "var(--line-heights-body)"
  },
  "lineHeights.title": {
    "value": "1.25",
    "variable": "var(--line-heights-title)"
  },
  "opacity.0": {
    "value": 0,
    "variable": "var(--opacity-0)"
  },
  "opacity.5": {
    "value": 0.05,
    "variable": "var(--opacity-5)"
  },
  "opacity.50": {
    "value": 0.5,
    "variable": "var(--opacity-50)"
  },
  "opacity.75": {
    "value": 0.75,
    "variable": "var(--opacity-75)"
  },
  "opacity.100": {
    "value": 1,
    "variable": "var(--opacity-100)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.5rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "02rem",
    "variable": "var(--radii-lg)"
  },
  "radii.half": {
    "value": "50%",
    "variable": "var(--radii-half)"
  },
  "radii.full": {
    "value": "100%",
    "variable": "var(--radii-full)"
  },
  "shadows.normal": {
    "value": "0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5)",
    "variable": "var(--shadows-normal)"
  },
  "shadows.isometric": {
    "value": "0 0 0 #0d0d0d,\n  -1px 1px 0 var(--colors-black),\n  -2px 2px 0 var(--colors-black),\n  -3px 3px 0 var(--colors-black),\n  -4px 4px 0 var(--colors-black),\n  -5px 5px 0 var(--colors-black),\n  -6px 6px 0 var(--colors-black),\n  -7px 7px 0 var(--colors-black),\n  -8px 8px 0 var(--colors-black)",
    "variable": "var(--shadows-isometric)"
  },
  "shadows.glow": {
    "value": "0 0 16rem 0.125rem #f8c630",
    "variable": "var(--shadows-glow)"
  },
  "sizes.xs": {
    "value": "32rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "48rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "64rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "80rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "96rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.breakpoint-xs": {
    "value": "512px",
    "variable": "var(--sizes-breakpoint-xs)"
  },
  "sizes.breakpoint-sm": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "spacing.1/8": {
    "value": ".125rem",
    "variable": "var(--spacing-1/8)"
  },
  "spacing.1/4": {
    "value": ".25rem",
    "variable": "var(--spacing-1/4)"
  },
  "spacing.1/2": {
    "value": ".5rem",
    "variable": "var(--spacing-1/2)"
  },
  "spacing.3/4": {
    "value": ".75rem",
    "variable": "var(--spacing-3/4)"
  },
  "spacing.1/1": {
    "value": "1rem",
    "variable": "var(--spacing-1/1)"
  },
  "spacing.3/2": {
    "value": "1.5rem",
    "variable": "var(--spacing-3/2)"
  },
  "spacing.2/1": {
    "value": "2rem",
    "variable": "var(--spacing-2/1)"
  },
  "spacing.5/2": {
    "value": "2.5rem",
    "variable": "var(--spacing-5/2)"
  },
  "spacing.3/1": {
    "value": "3rem",
    "variable": "var(--spacing-3/1)"
  },
  "zIndex.behind": {
    "value": -1,
    "variable": "var(--z-index-behind)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.dropdown": {
    "value": 10,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 20,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.fixed": {
    "value": 30,
    "variable": "var(--z-index-fixed)"
  },
  "zIndex.overlay": {
    "value": 40,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.tooltip": {
    "value": 50,
    "variable": "var(--z-index-tooltip)"
  },
  "zIndex.popover": {
    "value": 60,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.toast": {
    "value": 70,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.modal": {
    "value": 80,
    "variable": "var(--z-index-modal)"
  },
  "breakpoints.xs": {
    "value": "512px",
    "variable": "var(--breakpoints-xs)"
  },
  "breakpoints.sm": {
    "value": "768px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "1024px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1280px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-xl)"
  },
  "spacing.-1/8": {
    "value": "calc(var(--spacing-1/8) * -1)",
    "variable": "var(--spacing-1/8)"
  },
  "spacing.-1/4": {
    "value": "calc(var(--spacing-1/4) * -1)",
    "variable": "var(--spacing-1/4)"
  },
  "spacing.-1/2": {
    "value": "calc(var(--spacing-1/2) * -1)",
    "variable": "var(--spacing-1/2)"
  },
  "spacing.-3/4": {
    "value": "calc(var(--spacing-3/4) * -1)",
    "variable": "var(--spacing-3/4)"
  },
  "spacing.-1/1": {
    "value": "calc(var(--spacing-1/1) * -1)",
    "variable": "var(--spacing-1/1)"
  },
  "spacing.-3/2": {
    "value": "calc(var(--spacing-3/2) * -1)",
    "variable": "var(--spacing-3/2)"
  },
  "spacing.-2/1": {
    "value": "calc(var(--spacing-2/1) * -1)",
    "variable": "var(--spacing-2/1)"
  },
  "spacing.-5/2": {
    "value": "calc(var(--spacing-5/2) * -1)",
    "variable": "var(--spacing-5/2)"
  },
  "spacing.-3/1": {
    "value": "calc(var(--spacing-3/1) * -1)",
    "variable": "var(--spacing-3/1)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
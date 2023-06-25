/* eslint-disable */
export type Token = "colors.black" | "colors.blue" | "colors.charcoal" | "colors.green" | "colors.grey" | "colors.orange" | "colors.purple" | "colors.red" | "colors.silver" | "colors.white" | "colors.yellow" | "durations.150" | "durations.250" | "durations.300" | "durations.500" | "easings.easeIn" | "easings.easeOut" | "easings.easeOutQuart" | "easings.linear" | "fonts.mono" | "fonts.sans" | "fonts.serif" | "fontSizes.h6" | "fontSizes.h5" | "fontSizes.h4" | "fontSizes.h3" | "fontSizes.h2" | "fontSizes.h1" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontWeights.100" | "fontWeights.200" | "fontWeights.300" | "fontWeights.400" | "fontWeights.500" | "fontWeights.600" | "fontWeights.700" | "fontWeights.800" | "lineHeights.body" | "lineHeights.title" | "opacity.0" | "opacity.5" | "opacity.50" | "opacity.75" | "opacity.100" | "radii.sm" | "radii.md" | "radii.lg" | "radii.half" | "radii.full" | "shadows.normal" | "shadows.isometric" | "shadows.glow" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.breakpoint-xs" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "spacing.1/8" | "spacing.1/4" | "spacing.1/2" | "spacing.3/4" | "spacing.1/1" | "spacing.3/2" | "spacing.2/1" | "spacing.5/2" | "spacing.3/1" | "zIndex.behind" | "zIndex.base" | "zIndex.dropdown" | "zIndex.sticky" | "zIndex.fixed" | "zIndex.overlay" | "zIndex.tooltip" | "zIndex.popover" | "zIndex.toast" | "zIndex.modal" | "breakpoints.xs" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "spacing.-1/8" | "spacing.-1/4" | "spacing.-1/2" | "spacing.-3/4" | "spacing.-1/1" | "spacing.-3/2" | "spacing.-2/1" | "spacing.-5/2" | "spacing.-3/1"

export type ColorToken = "black" | "blue" | "charcoal" | "green" | "grey" | "orange" | "purple" | "red" | "silver" | "white" | "yellow"

export type DurationToken = "150" | "250" | "300" | "500"

export type EasingToken = "easeIn" | "easeOut" | "easeOutQuart" | "linear"

export type FontToken = "mono" | "sans" | "serif"

export type FontSizeToken = "h6" | "h5" | "h4" | "h3" | "h2" | "h1" | "xs" | "sm" | "md" | "lg" | "xl"

export type FontWeightToken = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800"

export type LineHeightToken = "body" | "title"

export type OpacityToken = "0" | "5" | "50" | "75" | "100"

export type RadiusToken = "sm" | "md" | "lg" | "half" | "full"

export type ShadowToken = "normal" | "isometric" | "glow"

export type SizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl"

export type SpacingToken = "1/8" | "1/4" | "1/2" | "3/4" | "1/1" | "3/2" | "2/1" | "5/2" | "3/1" | "-1/8" | "-1/4" | "-1/2" | "-3/4" | "-1/1" | "-3/2" | "-2/1" | "-5/2" | "-3/1"

export type ZIndexToken = "behind" | "base" | "dropdown" | "sticky" | "fixed" | "overlay" | "tooltip" | "popover" | "toast" | "modal"

export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl"

export type Tokens = {
		colors: ColorToken
		durations: DurationToken
		easings: EasingToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		opacity: OpacityToken
		radii: RadiusToken
		shadows: ShadowToken
		sizes: SizeToken
		spacing: SpacingToken
		zIndex: ZIndexToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"
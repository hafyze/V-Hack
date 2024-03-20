
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #43659d 
		"--color-primary-50": "227 232 240", // #e3e8f0
		"--color-primary-100": "217 224 235", // #d9e0eb
		"--color-primary-200": "208 217 231", // #d0d9e7
		"--color-primary-300": "180 193 216", // #b4c1d8
		"--color-primary-400": "123 147 186", // #7b93ba
		"--color-primary-500": "67 101 157", // #43659d
		"--color-primary-600": "60 91 141", // #3c5b8d
		"--color-primary-700": "50 76 118", // #324c76
		"--color-primary-800": "40 61 94", // #283d5e
		"--color-primary-900": "33 49 77", // #21314d
		// secondary | #dee2f0 
		"--color-secondary-50": "250 251 253", // #fafbfd
		"--color-secondary-100": "248 249 252", // #f8f9fc
		"--color-secondary-200": "247 248 251", // #f7f8fb
		"--color-secondary-300": "242 243 249", // #f2f3f9
		"--color-secondary-400": "232 235 245", // #e8ebf5
		"--color-secondary-500": "222 226 240", // #dee2f0
		"--color-secondary-600": "200 203 216", // #c8cbd8
		"--color-secondary-700": "167 170 180", // #a7aab4
		"--color-secondary-800": "133 136 144", // #858890
		"--color-secondary-900": "109 111 118", // #6d6f76
		// tertiary | #18a0fb 
		"--color-tertiary-50": "220 241 254", // #dcf1fe
		"--color-tertiary-100": "209 236 254", // #d1ecfe
		"--color-tertiary-200": "197 231 254", // #c5e7fe
		"--color-tertiary-300": "163 217 253", // #a3d9fd
		"--color-tertiary-400": "93 189 252", // #5dbdfc
		"--color-tertiary-500": "24 160 251", // #18a0fb
		"--color-tertiary-600": "22 144 226", // #1690e2
		"--color-tertiary-700": "18 120 188", // #1278bc
		"--color-tertiary-800": "14 96 151", // #0e6097
		"--color-tertiary-900": "12 78 123", // #0c4e7b
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #ffc71f 
		"--color-warning-50": "255 247 221", // #fff7dd
		"--color-warning-100": "255 244 210", // #fff4d2
		"--color-warning-200": "255 241 199", // #fff1c7
		"--color-warning-300": "255 233 165", // #ffe9a5
		"--color-warning-400": "255 216 98", // #ffd862
		"--color-warning-500": "255 199 31", // #ffc71f
		"--color-warning-600": "230 179 28", // #e6b31c
		"--color-warning-700": "191 149 23", // #bf9517
		"--color-warning-800": "153 119 19", // #997713
		"--color-warning-900": "125 98 15", // #7d620f
		// error | #ce1c75 
		"--color-error-50": "248 221 234", // #f8ddea
		"--color-error-100": "245 210 227", // #f5d2e3
		"--color-error-200": "243 198 221", // #f3c6dd
		"--color-error-300": "235 164 200", // #eba4c8
		"--color-error-400": "221 96 158", // #dd609e
		"--color-error-500": "206 28 117", // #ce1c75
		"--color-error-600": "185 25 105", // #b91969
		"--color-error-700": "155 21 88", // #9b1558
		"--color-error-800": "124 17 70", // #7c1146
		"--color-error-900": "101 14 57", // #650e39
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}
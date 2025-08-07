import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				glow: 'hsl(var(--primary-glow))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		backgroundImage: {
    			'gradient-primary': 'var(--gradient-primary)',
    			'gradient-secondary': 'var(--gradient-secondary)',
    			'gradient-accent': 'var(--gradient-accent)',
    			'gradient-hero': 'var(--gradient-hero)'
    		},
    		boxShadow: {
    			glow: 'var(--shadow-glow)',
    			card: 'var(--shadow-card)',
    			intense: 'var(--shadow-intense)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-left': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'fade-in-right': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'slide-in-right': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(100px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'scale-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.8)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'bounce-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.3)'
    				},
    				'50%': {
    					transform: 'scale(1.05)'
    				},
    				'70%': {
    					transform: 'scale(0.9)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				}
    			},
    			'float-slow': {
    				'0%, 100%': {
    					transform: 'translateY(0px) rotate(0deg)'
    				},
    				'50%': {
    					transform: 'translateY(-15px) rotate(3deg)'
    				}
    			},
    			'pulse-glow': {
    				'0%, 100%': {
    					boxShadow: '0 0 20px hsl(220 100% 20% / 0.3)'
    				},
    				'50%': {
    					boxShadow: '0 0 50px hsl(220 100% 20% / 0.8)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				}
    			},
    			wiggle: {
    				'0%, 100%': {
    					transform: 'rotate(-3deg)'
    				},
    				'50%': {
    					transform: 'rotate(3deg)'
    				}
    			},
    			shimmer: {
    				'0%': {
    					backgroundPosition: '-200% 0'
    				},
    				'100%': {
    					backgroundPosition: '200% 0'
    				}
    			},
    			typewriter: {
    				'0%': {
    					width: '0'
    				},
    				'100%': {
    					width: '100%'
    				}
    			},
    			blink: {
    				'0%, 50%': {
    					opacity: '1'
    				},
    				'51%, 100%': {
    					opacity: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.8s ease-out',
    			'fade-in-up': 'fade-in-up 0.8s ease-out',
    			'fade-in-left': 'fade-in-left 0.8s ease-out',
    			'fade-in-right': 'fade-in-right 0.8s ease-out',
    			'slide-in-right': 'slide-in-right 1s ease-out',
    			'scale-in': 'scale-in 0.6s ease-out',
    			'bounce-in': 'bounce-in 0.8s ease-out',
    			float: 'float 4s ease-in-out infinite',
    			'float-slow': 'float-slow 6s ease-in-out infinite',
    			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
    			'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
    			wiggle: 'wiggle 1s ease-in-out infinite',
    			shimmer: 'shimmer 2s ease-in-out infinite',
    			typewriter: 'typewriter 4s steps(40, end)',
    			blink: 'blink 1s infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
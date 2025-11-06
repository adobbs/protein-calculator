# Protein Intake Calculator

A simple, privacy-focused web application that calculates daily protein intake recommendations based on body weight and the latest nutritional research.

## Features

- **Weight Input**: Enter your weight with support for both US (lbs) and metric (kg) units
- **Unit Toggle**: Easily switch between pounds and kilograms
- **Three Optimization Ranges**: Get protein recommendations across three scientifically-backed ranges
- **Real-time Calculations**: See results instantly as you input your weight
- **Privacy-First**: No data storage, tracking, or transmission—all calculations happen in your browser
- **Responsive Design**: Clean, modern UI that works on all devices

## Protein Intake Ranges

The calculator provides daily protein recommendations based on grams per pound of body weight:

| Range | g/lb | Purpose |
|-------|------|---------|
| **Almost Maximized** | 0.55-0.63 | Sufficient for most muscle protein synthesis benefits |
| **Very Likely Maximized** | 0.64-0.72 | Optimal range for most individuals |
| **Definitely Maximized** | 0.73-1.00 | Maximum muscle protein synthesis optimization |

These ranges are based on current nutritional science research regarding protein intake for muscle maintenance and growth.

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Mantine UI](https://mantine.dev/)** - Modern React component library
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/adobbs/protein-calculator.git

# Navigate to project directory
cd protein-calculator

# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Project Structure

```
protein-calculator/
├── app/
│   ├── layout.tsx          # Root layout with Mantine provider
│   ├── page.tsx            # Main calculator page
│   └── globals.css         # Global styles
├── components/
│   └── ProteinCalculator.tsx  # Calculator component
├── store/
│   └── useCalculatorStore.ts  # Zustand state management
├── package.json
├── tsconfig.json
└── next.config.js
```

## Privacy

Your privacy matters. This application:
- ✅ Runs entirely in your browser
- ✅ Does not collect any personal information
- ✅ Does not store or transmit your weight data
- ✅ Does not use cookies or tracking
- ✅ Does not require sign-up or authentication

## License

[MIT](LICENSE)

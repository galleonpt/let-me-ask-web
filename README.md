# Let me ask

A modern React application developed during the NLW Agents event. This project allows users to create rooms, ask questions, and manage audio recordings in an interactive environment.

## 🚀 Tech Stack

### Core Technologies

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework

### State Management & Data Fetching

- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### UI Components & Styling

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging

### Development Tools

- **Biome** - Fast linter and formatter
- **Ultracite** - Code quality preset
- **shadcn/ui** - Component library setup

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── *.tsx          # Custom components
├── http/              # API integration
│   ├── types/         # API type definitions
│   └── use-*.ts       # Custom hooks for API calls
├── lib/               # Utility functions
├── pages/             # Route components
└── main.tsx          # Application entry point
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/galleonpt/let-me-ask-web
   cd let-me-ask-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Configuration

### Code Quality

The project uses **Biome** for linting and formatting with the **Ultracite** preset for enhanced code quality.

### Component Library

Configured with **shadcn/ui** using the New York style variant and Lucide icons.

### Path Aliases

- `@/` - Points to `src/` directory
- `@/components` - UI components
- `@/lib` - Utility functions
- `@/hooks` - Custom hooks

## 🎨 Design System

- **Base Color**: Zinc
- **CSS Variables**: Enabled for theming
- **Component Style**: New York variant
- **Icons**: Lucide React

## 📱 Features

- Room creation and management
- Question submission and display
- Audio recording capabilities
- Responsive design
- Type-safe API integration

## 🚀 Development

The project follows modern React patterns with:

- Functional components with hooks
- TypeScript for type safety
- Custom hooks for API integration
- Component composition with Radix UI primitives
- Form handling with React Hook Form and Zod validation

---

*Developed during NLW Agents event*

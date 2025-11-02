# Web Developer Portfolio

A Next.js web application recreating the "Web Developer - Building the Digital World" design.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** that adapts to different screen sizes
- **Glowing text effects** on the main title
- **Gradient backgrounds** with tech-inspired patterns
- **Code snippet display** for visual appeal

## Getting Started

### Development Server

The development server is already running at:
```
http://localhost:3002
```

To start it manually in the future:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
canvatest/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page component
├── public/               # Static assets
├── package.json          # Dependencies
└── tailwind.config.ts    # Tailwind configuration
```

## Design Elements

- **Logo**: Arowwai Industries with gear icon (top-left)
- **Hero Text**: Large "WEB DEVELOPER" with neon glow effect
- **Subtitle**: "BUILDING THE DIGITAL WORLD"
- **Profile**: Mariana Napolitani attribution (bottom-left)
- **Code Display**: CSS snippet overlay (right side)
- **Background**: Dark theme with gradient and tech patterns

## Customization

To customize the design, edit `app/page.tsx`:
- Change colors in the gradient backgrounds
- Modify text content
- Adjust glow effects
- Update profile information

## Technologies Used

- Next.js 14.2.5
- React 18.3.1
- TypeScript 5
- Tailwind CSS 3.4.4
- PostCSS & Autoprefixer

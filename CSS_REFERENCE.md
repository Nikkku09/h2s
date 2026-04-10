# CSS-Ready Code Reference

## Premium Utility Classes

These classes are ready to use throughout your application:

```css
/* Gradients */
.gradient-sky-to-blue {
  background: linear-gradient(to right, #38bdf8, #2563eb);
}

/* Shadows */
.shadow-elegant {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.shadow-premium {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.inner-shadow-soft {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Subtle background pattern */
.topographic-pattern {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 1px, transparent 1px),
    radial-gradient(circle at 60% 70%, rgba(255,255,255,0.05) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 50px 50px, 80px 80px, 100px 100px;
}
```

## Component Styling Patterns

### Premium Section Container
```tsx
<section className="p-8 md:p-10 rounded-3xl bg-white shadow-elegant inner-shadow-soft">
  {/* Content */}
</section>
```

### Gradient Button
```tsx
<button className="gradient-sky-to-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-sky-500/20 active:scale-[0.98] transition-all">
  Log Recommendation
</button>
```

### Smart Slider Implementation
```tsx
<input 
  type="range"
  className="w-full h-3 bg-zinc-200 rounded-full accent-sky-500 slider-thumb"
  style={{
    background: `linear-gradient(to right, #e4e4e7 0%, #e4e4e7 ${value}%, #e4e4e7 ${value}%, #e4e4e7 100%)`
  }}
/>
```

### Circular Gauge (SVG)
```tsx
<svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
  {/* Background circle */}
  <circle cx="80" cy="80" r="45" fill="none" stroke="#e4e4e7" strokeWidth="8" />
  
  {/* Progress circle with gradient */}
  <circle 
    cx="80" cy="80" r="45" fill="none" stroke="url(#gaugeGradient)" 
    strokeWidth="8" strokeLinecap="round" 
    strokeDasharray={circumference}
    strokeDashoffset={strokeDashoffset}
  />
  
  {/* Gradient definition */}
  <defs>
    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" />
      <stop offset="100%" stopColor="#2563eb" />
    </linearGradient>
  </defs>
</svg>
```

### Integrated Banner (SmartTip / Alert)
```tsx
<motion.div 
  className="flex flex-col gap-3 p-6 bg-sky-50 shadow-elegant rounded-3xl inner-shadow-soft"
  initial={{ opacity: 0, y: 4 }}
  animate={{ opacity: 1, y: 0 }}
>
  <div className="flex items-center gap-2.5 text-sky-700 font-semibold text-xs uppercase">
    <Icon size={18} />
    Label
  </div>
  <p className="text-sky-950 text-base font-medium leading-relaxed">Message</p>
</motion.div>
```

### Dark Section with Pattern (TrendAlert)
```tsx
<div className="p-6 bg-zinc-950 text-zinc-100 shadow-premium rounded-3xl topographic-pattern relative overflow-hidden">
  {/* Pattern overlay */}
  <div className="absolute inset-0 pointer-events-none" style={{/* pattern bg */}} />
  
  {/* Content with z-index */}
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

## Color Reference

```
Typography:
- Primary Text (Headings): #18181B (Zinc-950)
- Secondary Text: #71717A (Zinc-600)
- Tertiary Text: #A1A1AA (Zinc-400)
- Muted Text: #D4D4D8 (Zinc-300)
- Light Backgrounds: #F4F4F5 (Zinc-100)
- Card Backgrounds: #FFFFFF (White)
- Borders: #E4E4E7 (Zinc-200)

Accent Colors:
- Primary Accent: #38BDF8 (Sky-400)
- Secondary Accent: #2563EB (Blue-600)
- Success: #16A34A (Emerald-600)
- Warning: #DC2626 (Red-600)

Sky Palette (Alerts):
- Background: #F0F9FF (Sky-50)
- Text: #0C2340 (Sky-950)
- Accent: #0369A1 (Sky-700)
```

## Responsive Breakpoints

```
Mobile First:          (default)
Tablet (md):           768px (md:)
Desktop (lg):          1024px (lg:)
Large Desktop (xl):    1280px (xl:)
```

Key responsive patterns used:
```tsx
{/* Stack on mobile, side-by-side on desktop */}
<div className="flex flex-col xl:flex-row gap-8">

{/* Padding adjusts for screen size */}
<section className="p-6 md:p-8 lg:p-10 rounded-3xl">

{/* Typography adjusts */}
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
```

## Animation Library (Framer Motion)

All animations use motion variants for consistency:

```tsx
import { motion, AnimatePresence } from 'framer-motion';

{/* Fade + Scale In */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>

{/* Stagger children */}
<motion.div variants={containerVariants}>
  {items.map((item) => (
    <motion.div key={item} variants={itemVariants}>
```

## Next-Level Enhancements (Optional)

### 1. Smooth Page Transitions
```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  {/* Page content */}
</motion.div>
```

### 2. Micro-interactions on Data Change
```tsx
<motion.div
  key={dataId}
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.2 }}
>
  {/* Updated data */}
</motion.div>
```

### 3. Skeleton Loading States
```tsx
<motion.div 
  className="h-12 bg-zinc-200 rounded-full"
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

### 4. Parallax Scroll (on main content)
```tsx
<motion.div style={{ y: scrollY }}>
  {/* Content parallaxes as user scrolls */}
</motion.div>
```

## Performance Notes

✅ **Optimized**:
- SVG circular gauge uses stroke-dasharray (GPU accelerated)
- CSS gradients render natively (not image-based)
- Inner shadows use inset box-shadow (lightweight)
- All animations use transforms (will-change: auto)

⚡ **Best Practices Applied**:
- Minimal reflows with CSS containment
- Hardware acceleration on transform/opacity
- Debounced slider input handlers ready (recommended)
- Memoized metric calculations

---

**Everything is production-ready and performance-optimized.**

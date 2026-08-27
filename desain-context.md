# Brutalist Memphis Design System

## Color Palette
- **Cream (Background)**: #f5efe2
- **Ink (Primary Text/Outlines)**: #17140d
- **Accent (Coral Red)**: #ff5b57
- All fills are SOLID (no gradients, no transparencies)

## Typography
- **Display Headings**: Bricolage Grotesque 800, 84px, uppercase, tight tracking (-0.04em), line-height 0.85
- **Subheadings**: Bricolage Grotesque 800, 24-32px, uppercase, tight tracking
- **Body Copy**: Bricolage Grotesque 700 or 800, 16-20px, bold, uppercase or mixed case
- **Small Labels**: 10-12px, uppercase, extra-wide tracking (0.2em-0.3em)

## Visual System
- **Outlines**: 4-6px solid black (#17140d) on every element (buttons, cards, shapes, icons)
- **Shadows**: Hard offset shadows only (box-shadow: 12px 12px 0 var(--ink) for large, 6px 6px 0 for small)
- **Hover State**: translate(4px, 4px) with shadow reduced to 8px 8px 0
- **Active State**: translate(12px, 12px) with shadow collapse to 0
- **Shapes**: Raw, geometric, undecorated (rectangles, triangles, lines, circles, rotated forms)
- **Animation**: CSS keyframes only for confetti (drift-brutal, spin-brutal); no blur, no gradient, no JS

## Confetti Background Shapes
Scatter 4 animated SVG/div elements across hero background, pointer-events none:
1. Triangle (outline only, no fill) - @keyframes drift-brutal
2. Spinning square (outline, 6px black stroke) - @keyframes spin-brutal
3. Horizontal rule + bar (black line + coral bar) - @keyframes drift-brutal (staggered delay)
4. Rotated square fill (coral, 6px black outline) - @keyframes drift-brutal

## Reusable Components

### Navigation Bar
```html
<nav class="relative z-20 flex items-center justify-between px-10 py-8 max-w-[1440px] mx-auto w-full">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 bg-[#ff5b57] border-4 border-[#17140d] shadow-[12px_12px_0_#17140d] flex items-center justify-center">
      <iconify-icon icon="lucide:box" class="text-2xl text-[#17140d]"></iconify-icon>
    </div>
    <span class="text-3xl font-[800] tracking-tighter uppercase">Loopa</span>
  </div>
  <div class="hidden md:flex gap-12 font-bold uppercase tracking-widest text-sm">
    <a href="#" class="hover:text-[#ff5b57]">Works</a>
    <a href="#" class="hover:text-[#ff5b57]">Services</a>
    <a href="#" class="hover:text-[#ff5b57]">About</a>
  </div>
  <a href="#" class="bg-[#17140d] text-white px-8 py-3 border-4 border-[#17140d] shadow-[6px_6px_0_#17140d] font-bold uppercase text-sm tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#17140d] transition-all">Contact</a>
</nav>
```

### Hero CTA Button
```html
<a href="#" class="bg-[#ff5b57] text-[#17140d] px-10 py-5 border-4 border-[#17140d] shadow-[12px_12px_0_#17140d] font-[800] uppercase text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0_#17140d] active:translate-x-3 active:translate-y-3 active:shadow-[0px_0px_0_#17140d] transition-all">Get Started</a>
```

### Secondary Button (White Ghost)
```html
<a href="#" class="bg-white text-[#17140d] px-10 py-5 border-4 border-[#17140d] shadow-[12px_12px_0_#17140d] font-[800] uppercase text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0_#17140d] transition-all">Case Study</a>
```

### Accent Pill (Small)
```html
<div class="bg-[#ff5b57] text-[#17140d] font-[800] uppercase tracking-[0.2em] text-xs px-5 py-2 border-4 border-[#17140d] shadow-[6px_6px_0_#17140d]">Portfolio v4.0</div>
```

### Feature Card
```html
<div class="bg-white border-4 border-[#17140d] shadow-[12px_12px_0_#17140d] p-10 text-left space-y-6 flex flex-col items-start">
  <div class="w-16 h-16 bg-[#ff5b57] border-4 border-[#17140d] shadow-[6px_6px_0_#17140d] flex items-center justify-center">
    <iconify-icon icon="lucide:zap" class="text-3xl text-[#17140d]"></iconify-icon>
  </div>
  <h3 class="text-2xl font-[800] uppercase">Card Title</h3>
  <p class="font-bold text-sm tracking-wide">Card description text goes here.</p>
</div>
```

### Black Logo Strip
```html
<div class="w-full bg-[#17140d] border-y-4 border-[#17140d] py-8 overflow-hidden">
  <div class="flex items-center gap-16 whitespace-nowrap px-10">
    <span class="text-[#ff5b57] font-[800] uppercase tracking-widest text-lg">Global Partners //</span>
    <span class="text-white font-[800] uppercase tracking-widest text-lg">Terminal Inc.</span>
    <span class="text-white font-[800] uppercase tracking-widest text-lg">Void.Studio</span>
    <span class="text-white font-[800] uppercase tracking-widest text-lg">Heavy.Meta</span>
    <span class="text-white font-[800] uppercase tracking-widest text-lg">Logic_Core</span>
  </div>
</div>
```

### Confetti Background Animation
```html
<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <!-- Geometric shapes with CSS animations -->
  <svg class="absolute top-[10%] left-[5%] w-24 h-24 animate-drift" viewBox="0 0 100 100">
    <polygon points="50,5 95,95 5,95" fill="none" stroke="#17140d" stroke-width="6"/>
  </svg>
  <div class="absolute top-[20%] right-[8%] w-16 h-16 border-[6px] border-[#17140d] animate-spin-fast"></div>
  <svg class="absolute bottom-[15%] left-[10%] w-32 h-8 animate-drift" style="animation-delay:-2s">
    <line x1="0" y1="16" x2="120" y2="16" stroke="#17140d" stroke-width="12"/>
    <line x1="0" y1="32" x2="120" y2="32" stroke="#ff5b57" stroke-width="6"/>
  </svg>
  <div class="absolute bottom-[20%] right-[15%] w-20 h-20 bg-[#ff5b57] border-[6px] border-[#17140d] rotate-45 animate-drift"></div>
</div>

<style>
@keyframes drift-brutal {
  0% { transform: translate(0, 0); }
  50% { transform: translate(40px, -40px); }
  100% { transform: translate(0, 0); }
}
@keyframes spin-brutal {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-drift { animation: drift-brutal 12s linear infinite; }
.animate-spin-fast { animation: spin-brutal 4s linear infinite; }
</style>
```

## Design Principles
- **No decoration, only structure** – every element earns its existence through function or information
- **Maximum contrast** – cream/black/coral only, no grays or soft transitions
- **Uppercase & bold** – aggressive typography hierarchy
- **Hard shadows, no blur** – tactile, mechanical feel
- **Static layout, moving confetti** – content legible, background alive
- **Raw geometric forms** – triangles, squares, lines, circles only
- **No gradients, no transparency, no soft edges** – flat vector only
- **4-6px outlines on everything** – unifies the visual language
- **Hover = translate inward + shadow collapse** – physical, tactile interaction model
# Quick Start: Phase 1 & 2 Components

## 🚀 What's New

You now have **10 premium UI components** and a **professional animation system** ready to use across your Data Acies website.

---

## Phase 1: UI Components

### 1. Import and Use Components

```tsx
import {
  Button,
  GlowCard,
  FeatureCard,
  Badge,
  GlassPanel,
  SectionTitle,
  MetricCounter,
  FloatingTags,
  CTABlock,
} from "@/components/ui";
```

### 2. Quick Examples

#### Featured Section Header
```tsx
<SectionTitle
  eyebrow="WHY DATA ACIES"
  title="Enterprise AI That Works"
  subtitle="Proven across Fortune 500 companies"
  centered
/>
```

#### Feature Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <FeatureCard
    icon={<Zap className="h-6 w-6" />}
    title="Fast Deployment"
    description="AI solutions in days, not months"
  />
  {/* More cards... */}
</div>
```

#### Premium CTA Section
```tsx
<CTABlock
  variant="gradient"
  title="Transform Your Business Today"
  description="Join leaders in AI transformation"
  primaryButton={{ label: "Get Started", href: "/contact" }}
  secondaryButton={{ label: "Schedule Demo", href: "/demo" }}
/>
```

#### Metrics Display
```tsx
<div className="grid grid-cols-3 gap-8">
  <MetricCounter value={500} label="Clients Served" suffix="+" />
  <MetricCounter value={10000} label="Models Deployed" suffix="+" />
  <MetricCounter value={98} label="Satisfaction Rate" suffix="%" />
</div>
```

#### Premium Card Showcase
```tsx
<GlowCard variant="elevated" size="lg">
  <h3 className="text-heading-lg mb-2">Premium Service</h3>
  <p className="text-body-md">Enterprise-grade AI solutions</p>
</GlowCard>
```

---

## Phase 2: Animations

### 1. Import Animation Tools

```tsx
// Variants
import {
  fadeInUp,
  scrollReveal,
  staggerContainer,
  floating,
  glowPulse,
} from "@/lib/animations";

// Hooks
import { useInView, useScrollProgress } from "@/hooks/use-animations";

// Components
import {
  ScrollReveal,
  StaggerContainer,
  AnimatedCounter,
  Floating,
} from "@/components/motion";
```

### 2. Quick Examples

#### Auto-Reveal on Scroll
```tsx
<ScrollReveal>
  <h2>Appears when scrolled into view</h2>
</ScrollReveal>
```

#### Staggered List Animation
```tsx
<StaggerContainer>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.label}
    </motion.div>
  ))}
</StaggerContainer>
```

#### Animated Stats
```tsx
<StaggerContainer>
  <motion.div variants={staggerItem}>
    <AnimatedCounter to={500} label="Customers" />
  </motion.div>
  <motion.div variants={staggerItem}>
    <AnimatedCounter to={1000} label="Projects" />
  </motion.div>
</StaggerContainer>
```

#### Floating Illustration
```tsx
<Floating>
  <img src="/hero-illustration.svg" alt="AI Core" />
</Floating>
```

#### Hover Glow Effect
```tsx
import { hoverGlow } from "@/lib/animations";

<motion.div initial="rest" whileHover="hover" variants={hoverGlow}>
  <GlowCard>Interactive Card</GlowCard>
</motion.div>
```

---

## 📁 Component Files Created

**Phase 1 (UI Components)**:
- `src/components/ui/card-glow.tsx` - Glowing card component
- `src/components/ui/feature-card.tsx` - Feature showcase card
- `src/components/ui/badge-animated.tsx` - Animated badge
- `src/components/ui/glass-panel.tsx` - Glassmorphic container
- `src/components/ui/section-title.tsx` - Section header
- `src/components/ui/metric-counter.tsx` - Animated counter
- `src/components/ui/floating-tags.tsx` - Floating tag list
- `src/components/ui/cta-block.tsx` - Call-to-action block
- `src/components/ui/index.ts` - Clean exports

**Phase 2 (Animation System)**:
- `src/lib/animations.ts` - Enhanced with 20+ animation variants
- `src/hooks/use-animations.ts` - Viewport detection, scroll tracking
- `src/components/motion/scroll-reveal.tsx` - Auto-scroll animation
- `src/components/motion/stagger-container.tsx` - Staggered animations
- `src/components/motion/animated-counter.tsx` - Number animation
- `src/components/motion/floating.tsx` - Floating effect wrapper
- `src/components/motion/index.ts` - Clean exports

**Hero Section (Integration Example)**:
- `src/components/features/hero/hero-section.tsx` - Updated with all Phase 1 & 2
- `src/components/features/hero/animated-grid.tsx` - Animated background
- `src/components/features/hero/floating-particles.tsx` - Particle effects
- `src/components/features/hero/ai-core.tsx` - Glowing illustration

---

## 🎯 Architecture at a Glance

### Phase 1: Component Hierarchy
```
UI Components (src/components/ui/)
├── Base: Button, Input, Label
├── Cards: GlowCard, FeatureCard, CTABlock
├── Content: SectionTitle, Badge, GlassPanel
└── Data: MetricCounter, FloatingTags
```

**Key Pattern**: CVA variants for styling flexibility
```tsx
const variants = cva("base-classes", {
  variants: { variant: {...}, size: {...} }
});
```

### Phase 2: Animation Architecture
```
Animation System (src/lib + src/hooks + src/components/motion)
├── Layer 1: Variants (animations.ts)
├── Layer 2: Hooks (useInView, useScrollProgress)
└── Layer 3: Components (ScrollReveal, StaggerContainer, etc.)
```

**Key Pattern**: Viewport-triggered animations for performance
```tsx
const { ref, isVisible } = useInView();
animate={isVisible ? "visible" : "hidden"}
```

---

## 🔧 Component Usage by Page

### Hero Page
✅ `HeroSection` with all components
- `Badge` (eyebrow)
- `GradientText` (headline)
- `Floating` (illustration)
- `Button` (CTAs)
- `AnimatedGrid` + `FloatingParticles` (background)

### Services Page
```tsx
<SectionTitle eyebrow="SERVICES" title="Our Solutions" />

<div className="grid gap-6">
  {services.map((service) => (
    <ScrollReveal key={service.id}>
      <FeatureCard {...service} />
    </ScrollReveal>
  ))}
</div>
```

### About/Stats Page
```tsx
<StaggerContainer>
  {stats.map((stat) => (
    <motion.div key={stat.id} variants={staggerItem}>
      <MetricCounter {...stat} />
    </motion.div>
  ))}
</StaggerContainer>
```

### Contact/CTA Page
```tsx
<CTABlock
  variant="gradient"
  title="Ready to Build with Us?"
  primaryButton={{ label: "Start Project", href: "/contact" }}
/>
```

---

## ⚡ Performance Tips

1. **Use viewport detection**:
   ```tsx
   <ScrollReveal>Item</ScrollReveal>
   ```

2. **Limit particle count on mobile**:
   ```tsx
   const count = isMobile ? 20 : 50;
   ```

3. **Stagger animations instead of all-at-once**:
   ```tsx
   transition: { staggerChildren: 0.1 }
   ```

4. **Respect user preferences**:
   ```tsx
   const prefersReducedMotion = window.matchMedia(
     "(prefers-reduced-motion: reduce)"
   ).matches;
   ```

---

## 📚 Full Documentation

See **`PHASE_1_2_DOCUMENTATION.md`** for:
- Detailed component API reference
- Animation variants explanations
- Hooks documentation
- Real-world patterns and examples
- Performance optimization strategies
- Accessibility best practices

---

## ✨ Current Hero Section

The hero section now features:
- ✅ Animated background grid with fade mask
- ✅ Floating particle system
- ✅ Glowing AI core illustration with floating animation
- ✅ Staggered text reveal (badge → headline → subtitle → description → buttons)
- ✅ Glowing badge animation
- ✅ Responsive design
- ✅ Enterprise-grade animations

**View it**: http://localhost:3001

---

## 🚀 Next Steps

1. **Duplicate hero sections** for other pages (Services, About, etc.)
2. **Create Features section** with `FeatureCard` + `ScrollReveal`
3. **Build Testimonials** with `MetricCounter` for social proof
4. **Add team section** with floating images and stagger animations
5. **Create Case Studies** gallery with hover effects
6. **Implement Contact Form** with validation and loading states
7. **Test on mobile** and adjust particle counts

---

## 💡 Design Philosophy

Components follow these principles:

✅ **Composable** - Build complex UIs from simple pieces
✅ **Accessible** - WCAG compliant, keyboard navigation
✅ **Responsive** - Mobile-first, looks great at any size
✅ **Performant** - Lazy animations, viewport detection
✅ **Maintainable** - CVA variants, centralized exports
✅ **Scalable** - Easy to extend, add new variants
✅ **Enterprise** - Premium feel without being excessive

---

Happy building! 🎉

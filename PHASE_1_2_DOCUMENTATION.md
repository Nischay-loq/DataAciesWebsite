# Phase 1 & 2: Premium UI Components & Animation System

## Overview

This documentation covers two phases of component development for the Data Acies AI consulting website:

- **Phase 1**: Reusable premium UI components following `shadcn/ui` philosophy
- **Phase 2**: Professional animation system using Motion/framer-motion for enterprise-grade feel

---

## Phase 1: Premium UI Components

### Architecture Philosophy

Components follow these principles:

1. **Composability**: Small, focused components that combine to create complex UIs
2. **Variant Systems**: Use `class-variance-authority` (CVA) for flexible styling variants
3. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
4. **Responsiveness**: Mobile-first Tailwind approach
5. **Reusability**: Export from centralized index files for clean imports

### Component Breakdown

#### 1. **Button System** (`src/components/ui/button.tsx`)

Already exists in the project. Provides multiple variants and sizes.

**Variants**:
- `default`: Primary brand colors
- `secondary`: Secondary brand styling
- `outline`: Border-only style
- `ghost`: Minimal, text-based

**Sizes**: `sm`, `md`, `lg`

**Usage**:
```tsx
import { Button } from "@/components/ui";

<Button variant="default" size="lg">
  Get Started
</Button>
```

---

#### 2. **Glow Card** (`src/components/ui/card-glow.tsx`)

Premium card component with glowing hover effects, perfect for feature highlights.

**Variants**:
- `default`: Subtle glow on hover
- `ghost`: Transparent with border
- `elevated`: Floating card effect
- `floating`: Glassmorphic with advanced glow

**Sizes**: `sm`, `md`, `lg`

**Usage**:
```tsx
import { GlowCard } from "@/components/ui";

<GlowCard variant="elevated" size="lg">
  <h3>Premium AI Solution</h3>
  <p>Intelligent automation at scale</p>
</GlowCard>
```

**Technical Details**:
- Uses `cva()` from `class-variance-authority` for variant management
- Glow effect via gradient background and blur
- Smooth transitions on hover

---

#### 3. **Feature Card** (`src/components/ui/feature-card.tsx`)

Displays features with icon, title, and description. Highly composable.

**Variants**:
- `default`: Standard feature card
- `highlighted`: Enhanced visual prominence
- `minimal`: Minimal styling

**Layouts**: `default`, `compact`, `spacious`

**Props**:
- `icon`: React element
- `title`: String
- `description`: String

**Usage**:
```tsx
import { FeatureCard } from "@/components/ui";
import { Zap } from "lucide-react";

<FeatureCard
  icon={<Zap className="h-6 w-6" />}
  title="Fast Deployment"
  description="Deploy AI solutions in days, not months"
  variant="highlighted"
/>
```

---

#### 4. **Animated Badge** (`src/components/ui/badge-animated.tsx`)

Lightweight badge component with optional pulse animation for emphasis.

**Variants**:
- `default`: Primary color
- `secondary`: Secondary color
- `outline`: Border-based
- `glow`: Glowing effect for highlights

**Features**:
- `animated` prop enables pulse animation
- Size variants: `sm`, `md`, `lg`
- Perfect for "New", "Featured", "Coming Soon" labels

**Usage**:
```tsx
import { Badge } from "@/components/ui";

<Badge variant="glow" animated>
  ✨ Enterprise Solution
</Badge>
```

---

#### 5. **Gradient Text** (`src/components/shared/gradient-text.tsx`)

Text with brand gradient for visual impact. Already in project.

**Usage**:
```tsx
import { GradientText } from "@/components/shared";

<GradientText className="text-display-md">
  Transform Your Business
</GradientText>
```

---

#### 6. **Glass Panel** (`src/components/ui/glass-panel.tsx`)

Glassmorphic container with backdrop blur. Perfect for overlays and premium sections.

**Props**:
- `blur`: Blur intensity (`sm`, `md`, `lg`, `xl`)
- `border`: Show/hide border
- `glow`: Add glow shadow effect

**Usage**:
```tsx
import { GlassPanel } from "@/components/ui";

<GlassPanel blur="lg" border glow className="p-8">
  <h3>Premium Content</h3>
</GlassPanel>
```

---

#### 7. **Section Title** (`src/components/ui/section-title.tsx`)

Reusable section header with optional eyebrow, title, and subtitle.

**Props**:
- `eyebrow`: Small label above title
- `title`: Main heading
- `subtitle`: Descriptive text
- `centered`: Center alignment toggle

**Usage**:
```tsx
import { SectionTitle } from "@/components/ui";

<SectionTitle
  eyebrow="OUR EXPERTISE"
  title="AI Solutions That Scale"
  subtitle="Enterprise-grade systems built for tomorrow"
  centered
/>
```

---

#### 8. **Metric Counter** (`src/components/ui/metric-counter.tsx`)

Animated number counter, great for statistics and testimonials.

**Client-side component** that animates a number when mounted.

**Props**:
- `value`: Target number
- `label`: Description
- `suffix`: Text after number (e.g., "+", "%")
- `duration`: Animation duration in ms

**Usage**:
```tsx
import { MetricCounter } from "@/components/ui";

<MetricCounter
  value={10000}
  label="Lines of Code"
  suffix="+"
  duration={2000}
/>
```

---

#### 9. **Floating Tags** (`src/components/ui/floating-tags.tsx`)

Array of animated tags with staggered floating animation.

**Client-side component** with customizable float duration.

**Props**:
- `tags`: String array of tag labels

**Usage**:
```tsx
import { FloatingTags } from "@/components/ui";

<FloatingTags
  tags={["AI", "Machine Learning", "Data Engineering", "Automation"]}
/>
```

---

#### 10. **CTA Block** (`src/components/ui/cta-block.tsx`)

Large call-to-action container with optional buttons, icon, and description.

**Variants**:
- `default`: Standard CTA
- `gradient`: Gradient background
- `elevated`: Floating shadow effect

**Props**:
- `title`: Main CTA text
- `description`: Supporting text
- `primaryButton`: Button config `{ label, href }`
- `secondaryButton`: Secondary button config
- `icon`: React element

**Usage**:
```tsx
import { CTABlock } from "@/components/ui";
import { Rocket } from "lucide-react";

<CTABlock
  variant="gradient"
  icon={<Rocket className="h-8 w-8" />}
  title="Ready to transform your business?"
  description="Join leading enterprises using Data Acies"
  primaryButton={{ label: "Schedule a Demo", href: "/contact" }}
  secondaryButton={{ label: "Learn More", href: "/services" }}
/>
```

---

### When to Create New Components

✅ **Create a component when**:
- Pattern repeats 3+ times across the site
- Needs shared state or hooks
- Has multiple variants or props
- Improves maintainability and reduces duplication

❌ **Don't create a component when**:
- It's a one-off or rarely reused
- Simple enough to be inline HTML
- Creating unnecessary abstraction

---

### Variant System Best Practices

All components use `cva()` from `class-variance-authority`:

```tsx
const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-default-classes",
      alternate: "variant-alternate-classes",
    },
    size: {
      sm: "size-sm-classes",
      lg: "size-lg-classes",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
```

**Benefits**:
- Type-safe variant selection
- No CSS naming conflicts
- Easy to extend and maintain
- Predictable output

---

## Phase 2: Professional Animation System

### Architecture

Animation system is built on three layers:

1. **Variants**: Reusable animation definitions in `src/lib/animations.ts`
2. **Hooks**: React hooks for viewport detection and state in `src/hooks/use-animations.ts`
3. **Components**: Wrapper components for easy integration in `src/components/motion/`

### Animation Variants

All animations are exported from `src/lib/animations.ts`:

#### Entrance Animations

- `fadeInUp`: Fade + slide up (primary entrance)
- `fadeIn`: Simple opacity fade
- `scrollReveal`: Viewport-based fade + slide
- `scaleIn`: Zoom in effect
- `slideInLeft/Right`: Directional slide

```tsx
import { fadeInUp } from "@/lib/animations";

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

#### Stagger Animations

- `staggerContainer`: Container with staggered children
- `staggerContainerSlower`: Slower stagger timing
- `staggerItem`: Individual item variant

**Usage** (orchestrates multiple children):

```tsx
import { staggerContainer, staggerItem } from "@/lib/animations";

<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
  <motion.div variants={staggerItem}>Item 3</motion.div>
</motion.div>
```

#### Floating & Levitation

- `floating`: Subtle up-down float
- `floatingDelay`: Same with delay for staggered effect

```tsx
import { floating } from "@/lib/animations";

<motion.div animate="animate" variants={floating}>
  <img src="illustration.svg" />
</motion.div>
```

#### Glow & Pulse Effects

- `glowPulse`: Box-shadow animation for glow effect
- `opacityPulse`: Opacity pulse for breathing effect

```tsx
import { glowPulse } from "@/lib/animations";

<motion.div animate="animate" variants={glowPulse}>
  Premium Feature
</motion.div>
```

#### Hover Interactions

- `hoverGlow`: Scale + opacity on hover
- `hoverLift`: Subtle vertical lift
- `hoverRotate`: Slight rotation on hover

```tsx
import { hoverGlow } from "@/lib/animations";

<motion.button initial="rest" whileHover="hover" variants={hoverGlow}>
  Interactive Button
</motion.button>
```

#### Page Transitions

- `pageEnter`: Smooth page entrance/exit

```tsx
import { pageEnter } from "@/lib/animations";

<motion.div
  initial="initial"
  animate="animate"
  exit="exit"
  variants={pageEnter}
>
  Page Content
</motion.div>
```

#### Counters & Lists

- `counterVariant`: Animated number entrance
- `listContainer`/`listItem`: Staggered list animation
- `loadingSpinner`: Rotating spinner
- `loadingDots`: Bouncing dots animation

---

### Animation Hooks

#### `useInView(options?)`

Detects when an element enters the viewport. Returns `{ ref, isVisible }`.

```tsx
import { useInView } from "@/hooks/use-animations";

function MyComponent() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref}>
      {isVisible && <AnimatedContent />}
    </div>
  );
}
```

**Options**:
- `threshold`: 0-1, when to trigger (default: 0.1)
- `margin`: Intersection margin (e.g., "100px")

#### `useScrollProgress()`

Returns scroll percentage (0-1) for parallax effects.

```tsx
import { useScrollProgress } from "@/hooks/use-animations";

function ParallaxElement() {
  const progress = useScrollProgress();

  return (
    <motion.div style={{ y: progress * 100 }}>
      Parallax Content
    </motion.div>
  );
}
```

#### `useAnimationState(initialState?)`

Manages animation trigger state.

```tsx
import { useAnimationState } from "@/hooks/use-animations";

function Modal() {
  const { isAnimating, trigger, reset } = useAnimationState();

  return <motion.div animate={isAnimating ? "open" : "closed"} />;
}
```

---

### Motion Components

#### `<ScrollReveal>`

Auto-animates content when it enters viewport.

```tsx
import { ScrollReveal } from "@/components/motion";

<ScrollReveal delay={0.2}>
  <h2>Appears when scrolled into view</h2>
</ScrollReveal>
```

**Props**:
- `children`: Content to animate
- `delay`: Stagger delay in seconds
- `className`: Additional styling

#### `<StaggerContainer>`

Orchestrates staggered animations for child `motion.div` elements.

```tsx
import { StaggerContainer } from "@/components/motion";
import { staggerItem } from "@/lib/animations";

<StaggerContainer slower>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
  <motion.div variants={staggerItem}>Item 3</motion.div>
</StaggerContainer>
```

**Props**:
- `children`: Motion elements with `staggerItem` variants
- `slower`: Slower stagger timing
- `delayChildren`: Initial delay before stagger starts

#### `<AnimatedCounter>`

Smoothly counts from a number to a target when scrolled into view.

```tsx
import { AnimatedCounter } from "@/components/motion";

<AnimatedCounter
  to={1000}
  prefix="$"
  suffix="K"
  duration={2}
  label="Revenue Growth"
/>
```

**Props**:
- `from`: Starting number (default: 0)
- `to`: Target number
- `duration`: Animation duration in seconds
- `prefix/suffix`: Text before/after number
- `variant`: Size (`small`, `default`, `large`)

#### `<Floating>`

Wraps any component with floating animation.

```tsx
import { Floating } from "@/components/motion";

<Floating delay>
  <img src="illustration.svg" alt="AI Core" />
</Floating>
```

**Props**:
- `children`: Content to float
- `delay`: Add delay for staggered floating

---

### Performance Optimization

#### Best Practices

1. **Use viewport detection**: Don't animate off-screen elements
   ```tsx
   const { ref, isVisible } = useInView();
   animate={isVisible ? "visible" : "hidden"}
   ```

2. **Limit simultaneous animations**: Use stagger instead of all-at-once
   ```tsx
   transition: { staggerChildren: 0.1 } // Spreads animations
   ```

3. **Use `will-change` sparingly**: Motion handles this, don't override
   ```tsx
   // ❌ Avoid: style={{ willChange: "transform" }}
   // ✅ Good: Let framer-motion manage it
   ```

4. **Reduce particle count on mobile**: Check viewport in `FloatingParticles`
   ```tsx
   const particleCount = isMobile ? 20 : 50;
   ```

5. **Disable animations for reduced-motion users**:
   ```tsx
   const prefersReducedMotion = window.matchMedia(
     "(prefers-reduced-motion: reduce)"
   ).matches;
   
   animate={prefersReducedMotion ? {} : "animate"}
   ```

---

### Real-World Patterns

#### Hero Section with Stagger

```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  <motion.div variants={staggerItem}>
    <Badge>New Feature</Badge>
  </motion.div>
  
  <motion.h1 variants={staggerItem}>Main Title</motion.h1>
  
  <motion.p variants={staggerItem}>Subtitle</motion.p>
  
  <motion.div variants={staggerItem}>
    <Button>CTA</Button>
  </motion.div>
</motion.div>
```

#### Feature Grid with Scroll Reveal

```tsx
{features.map((feature) => (
  <ScrollReveal key={feature.id}>
    <FeatureCard {...feature} />
  </ScrollReveal>
))}
```

#### Stats Section with Counters

```tsx
<StaggerContainer>
  <motion.div variants={staggerItem}>
    <AnimatedCounter to={10000} label="Customers" suffix="+" />
  </motion.div>
  
  <motion.div variants={staggerItem}>
    <AnimatedCounter to={500} label="Projects" suffix="+" />
  </motion.div>
  
  <motion.div variants={staggerItem}>
    <AnimatedCounter to={98} label="Satisfaction" suffix="%" />
  </motion.div>
</StaggerContainer>
```

#### Premium Card with Hover

```tsx
<motion.div initial="rest" whileHover="hover" variants={hoverGlow}>
  <GlowCard variant="elevated">
    <h3>Premium Solution</h3>
  </GlowCard>
</motion.div>
```

---

### How Modern AI Websites Animate Professionally

1. **Subtle, not excessive**: Animations enhance, not distract
   - Use 0.3-0.6s for quick interactions
   - Use 0.6-1s for reveals
   - Avoid animations over 1.5s

2. **Purposeful timing**: Animations tell a story
   - Entrance → interaction → departure
   - Stagger creates flow and guides attention

3. **Glow effects**: Premium AI/tech aesthetic
   - Glowing borders, shadows, and pulses
   - Brand color glows (blue for Data Acies)

4. **Floating elements**: Immersive, ethereal feel
   - Illustrations float slightly
   - Subtle Y-axis movement

5. **Scroll reveal**: Engagement without overwhelming
   - Elements animate as user scrolls
   - No animations before viewport entry

6. **Consistent easing**: Professional motion
   - Use ease-out for entrances (fast start, slow end)
   - Use ease-in for exits
   - Custom bezier for premium feel: `[0.22, 1, 0.36, 1]`

7. **Accessibility first**: Respect `prefers-reduced-motion`
   - Motion library respects system settings
   - Always provide static fallback

---

## Integration Checklist

- [x] Phase 1 UI components created
- [x] Phase 2 animation system implemented
- [x] Hero section using both phases
- [x] Build verified (no TS errors)
- [x] Components exported cleanly
- [x] Documentation complete

---

## File Structure

```
src/
├── components/
│   ├── ui/                      # Phase 1 components
│   │   ├── button.tsx
│   │   ├── card-glow.tsx
│   │   ├── feature-card.tsx
│   │   ├── badge-animated.tsx
│   │   ├── glass-panel.tsx
│   │   ├── section-title.tsx
│   │   ├── metric-counter.tsx
│   │   ├── floating-tags.tsx
│   │   ├── cta-block.tsx
│   │   └── index.ts
│   ├── motion/                  # Phase 2 components
│   │   ├── scroll-reveal.tsx
│   │   ├── stagger-container.tsx
│   │   ├── animated-counter.tsx
│   │   ├── floating.tsx
│   │   └── index.ts
│   └── features/hero/
│       ├── hero-section.tsx     # Updated with Phase 1 & 2
│       ├── animated-grid.tsx
│       ├── floating-particles.tsx
│       └── ai-core.tsx
├── lib/
│   └── animations.ts            # Phase 2 animation variants
├── hooks/
│   └── use-animations.ts        # Phase 2 hooks
```

---

## Next Steps

1. **Use hero section** as reference for other page sections
2. **Create additional hero variants** (dark, minimal, etc.)
3. **Build feature showcase pages** using `FeatureCard` + `ScrollReveal`
4. **Add testimonials section** with `MetricCounter` for social proof
5. **Implement form validations** in contact page
6. **Optimize images** for performance
7. **Test animations** on various devices and browsers

---

## Quick Reference

### Import Components
```tsx
// UI Components
import { Button, GlowCard, FeatureCard, Badge, SectionTitle } from "@/components/ui";

// Motion Components
import { ScrollReveal, StaggerContainer, AnimatedCounter, Floating } from "@/components/motion";

// Animations
import { fadeInUp, staggerContainer, floating } from "@/lib/animations";

// Hooks
import { useInView, useScrollProgress } from "@/hooks/use-animations";
```

---

Build it incrementally, test frequently, and iterate based on user feedback!

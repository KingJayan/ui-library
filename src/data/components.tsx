import { UIComponent } from '../types';
import '../styles/components.css';

// Button Components
const PrimaryButton = () => <button className="btn-primary">Primary Button</button>;
const SecondaryButton = () => <button className="btn-secondary">Secondary Button</button>;
const OutlineButton = () => <button className="btn-outline">Outline Button</button>;
const GhostButton = () => <button className="btn-ghost">Ghost Button</button>;
const GradientButton = () => <button className="btn-gradient">Gradient Button</button>;
const NeonButton = () => <button className="btn-neon">Neon Button</button>;
const GlassButton = () => <button className="btn-glass">Glass Button</button>;
const PulseButton = () => <button className="btn-pulse">Pulse Button</button>;
const ShineButton = () => <button className="btn-shine">Shine Button</button>;
const RippleButton = () => <button className="btn-ripple">Ripple Button</button>;
const SlideButton = () => <button className="btn-slide">Slide Button</button>;
const BounceButton = () => <button className="btn-bounce">Bounce Button</button>;
const RotateButton = () => <button className="btn-rotate">Rotate Button</button>;
const FlipButton = () => <button className="btn-flip">Flip Button</button>;
const SwipeButton = () => <button className="btn-swipe">Swipe Button</button>;
const GlowButton = () => <button className="btn-glow">Glow Button</button>;
const ShadowButton = () => <button className="btn-shadow">Shadow Button</button>;
const BorderButton = () => <button className="btn-border-animate">Border Animate</button>;
const FillButton = () => <button className="btn-fill">Fill Effect</button>;
const ScaleButton = () => <button className="btn-scale">Scale Button</button>;

// Icon Buttons
const IconButton = () => <button className="btn-icon">❤️</button>;
const IconCircle = () => <button className="btn-icon-circle">★</button>;
const IconSquare = () => <button className="btn-icon-square">✓</button>;
const IconGradient = () => <button className="btn-icon-gradient">🔥</button>;
const IconNeon = () => <button className="btn-icon-neon">⚡</button>;

// Size Variants
const SmallButton = () => <button className="btn-primary btn-sm">Small</button>;
const MediumButton = () => <button className="btn-primary btn-md">Medium</button>;
const LargeButton = () => <button className="btn-primary btn-lg">Large</button>;

// State Buttons
const SuccessButton = () => <button className="btn-success">Success</button>;
const DangerButton = () => <button className="btn-danger">Danger</button>;
const WarningButton = () => <button className="btn-warning">Warning</button>;
const InfoButton = () => <button className="btn-info">Info</button>;

// Pill Buttons
const PillButton = () => <button className="btn-pill">Pill Button</button>;
const PillOutline = () => <button className="btn-pill-outline">Pill Outline</button>;
const PillGradient = () => <button className="btn-pill-gradient">Pill Gradient</button>;

// 3D Buttons
const Button3D = () => <button className="btn-3d">3D Button</button>;
const ButtonPress = () => <button className="btn-press">Press Me</button>;
const ButtonRaised = () => <button className="btn-raised">Raised Button</button>;

// Special Effects
const ButtonLiquid = () => <button className="btn-liquid">Liquid</button>;
const ButtonSplit = () => <button className="btn-split">Split</button>;
const ButtonNeumorph = () => <button className="btn-neumorph">Neumorphic</button>;
const ButtonCyberpunk = () => <button className="btn-cyberpunk">Cyberpunk</button>;
const ButtonRetro = () => <button className="btn-retro">Retro</button>;
const ButtonMinimal = () => <button className="btn-minimal">Minimal</button>;

// Input Components
const TextInput = () => <input type="text" className="input-text" placeholder="Enter text..." />;
const InputFocus = () => <input type="text" className="input-focus" placeholder="Focus effect..." />;
const InputFloat = () => (
  <div className="input-float-wrapper">
    <input type="text" className="input-float" placeholder=" " />
    <label className="input-float-label">Floating Label</label>
  </div>
);
const InputUnderline = () => <input type="text" className="input-underline" placeholder="Underline..." />;
const InputGlow = () => <input type="text" className="input-glow" placeholder="Glow effect..." />;
const InputNeon = () => <input type="text" className="input-neon" placeholder="Neon input..." />;
const InputGlass = () => <input type="text" className="input-glass" placeholder="Glass input..." />;

// Checkboxes
const CheckboxDefault = () => <input type="checkbox" className="checkbox-default" />;
const CheckboxCustom = () => <input type="checkbox" className="checkbox-custom" />;
const CheckboxSwitch = () => <input type="checkbox" className="checkbox-switch" />;
const CheckboxToggle = () => <input type="checkbox" className="checkbox-toggle" />;
const CheckboxSlide = () => <input type="checkbox" className="checkbox-slide" />;

// Radio Buttons
const RadioDefault = () => <input type="radio" className="radio-default" name="radio1" />;
const RadioCustom = () => <input type="radio" className="radio-custom" name="radio2" />;
const RadioButton = () => <input type="radio" className="radio-button" name="radio3" />;

// Badges
const BadgePrimary = () => <span className="badge-primary">Primary</span>;
const BadgeSuccess = () => <span className="badge-success">Success</span>;
const BadgeDanger = () => <span className="badge-danger">Danger</span>;
const BadgeWarning = () => <span className="badge-warning">Warning</span>;
const BadgeInfo = () => <span className="badge-info">Info</span>;
const BadgePill = () => <span className="badge-pill">Pill Badge</span>;
const BadgeOutline = () => <span className="badge-outline">Outline</span>;
const BadgeGradient = () => <span className="badge-gradient">Gradient</span>;
const BadgeGlow = () => <span className="badge-glow">Glow</span>;
const BadgePulse = () => <span className="badge-pulse">Pulse</span>;

// Loaders
const LoaderSpinner = () => <div className="loader-spinner"></div>;
const LoaderDots = () => (
  <div className="loader-dots">
    <div></div><div></div><div></div>
  </div>
);
const LoaderBars = () => (
  <div className="loader-bars">
    <div></div><div></div><div></div><div></div>
  </div>
);
const LoaderCircle = () => <div className="loader-circle"></div>;
const LoaderRing = () => <div className="loader-ring"><div></div></div>;
const LoaderPulse = () => <div className="loader-pulse"></div>;
const LoaderWave = () => (
  <div className="loader-wave">
    <div></div><div></div><div></div><div></div><div></div>
  </div>
);
const LoaderBounce = () => (
  <div className="loader-bounce">
    <div></div><div></div>
  </div>
);
const LoaderGradient = () => <div className="loader-gradient"></div>;
const LoaderNeon = () => <div className="loader-neon"></div>;

// Cards
const CardBasic = () => (
  <div className="card-basic">
    <h4>Card Title</h4>
    <p>Card content</p>
  </div>
);
const CardHover = () => (
  <div className="card-hover">
    <h4>Hover Card</h4>
    <p>Hover me!</p>
  </div>
);
const CardGlass = () => (
  <div className="card-glass">
    <h4>Glass Card</h4>
    <p>Glass effect</p>
  </div>
);
const CardGradient = () => (
  <div className="card-gradient">
    <h4>Gradient Card</h4>
    <p>Gradient border</p>
  </div>
);
const CardNeon = () => (
  <div className="card-neon">
    <h4>Neon Card</h4>
    <p>Neon effect</p>
  </div>
);
const CardFlip = () => (
  <div className="card-flip">
    <div className="card-flip-inner">
      <div className="card-flip-front">Front</div>
    </div>
  </div>
);

// Progress Bars
const ProgressBar = () => (
  <div className="progress-bar">
    <div className="progress-fill" style={{ width: '70%' }}></div>
  </div>
);
const ProgressGradient = () => (
  <div className="progress-gradient">
    <div className="progress-fill-gradient" style={{ width: '60%' }}></div>
  </div>
);
const ProgressAnimated = () => (
  <div className="progress-animated">
    <div className="progress-fill-animated" style={{ width: '80%' }}></div>
  </div>
);
const ProgressStriped = () => (
  <div className="progress-striped">
    <div className="progress-fill-striped" style={{ width: '50%' }}></div>
  </div>
);
const ProgressCircle = () => (
  <div className="progress-circle">
    <svg viewBox="0 0 36 36">
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeDasharray="75, 100"
      />
    </svg>
  </div>
);

// Alerts
const AlertInfo = () => (
  <div className="alert-info">ℹ️ Information message</div>
);
const AlertSuccess = () => (
  <div className="alert-success">✓ Success message</div>
);
const AlertWarning = () => (
  <div className="alert-warning">⚠️ Warning message</div>
);
const AlertDanger = () => (
  <div className="alert-danger">❌ Error message</div>
);
const AlertGradient = () => (
  <div className="alert-gradient">✨ Gradient alert</div>
);

// Tooltips
const TooltipTop = () => (
  <div className="tooltip-container">
    <span className="tooltip-trigger">Hover me</span>
    <span className="tooltip-top">Tooltip text</span>
  </div>
);
const TooltipBottom = () => (
  <div className="tooltip-container">
    <span className="tooltip-trigger">Hover me</span>
    <span className="tooltip-bottom">Tooltip text</span>
  </div>
);

// Animations
const AnimBounce = () => <div className="anim-bounce">Bounce</div>;
const AnimShake = () => <div className="anim-shake">Shake</div>;
const AnimFade = () => <div className="anim-fade">Fade In</div>;
const AnimSlide = () => <div className="anim-slide">Slide In</div>;
const AnimRotate = () => <div className="anim-rotate">Rotate</div>;
const AnimPulse = () => <div className="anim-pulse">Pulse</div>;
const AnimFloat = () => <div className="anim-float">Float</div>;
const AnimGlow = () => <div className="anim-glow">Glow</div>;

// Additional Components inspired by uiverse.io and MUI

// Skeleton Loaders
const SkeletonText = () => <div className="skeleton-text"></div>;
const SkeletonCircle = () => <div className="skeleton-circle"></div>;
const SkeletonRectangle = () => <div className="skeleton-rectangle"></div>;
const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-circle-sm"></div>
    <div className="skeleton-line"></div>
    <div className="skeleton-line-short"></div>
  </div>
);
const SkeletonPulse = () => <div className="skeleton-pulse"></div>;

// Chips/Tags
const ChipBasic = () => <div className="chip-basic">Chip</div>;
const ChipRemovable = () => <div className="chip-removable">Removable ×</div>;
const ChipClickable = () => <button className="chip-clickable">Clickable</button>;
const ChipOutline = () => <div className="chip-outline">Outlined</div>;
const ChipGradient = () => <div className="chip-gradient">Gradient</div>;
const ChipAvatar = () => <div className="chip-avatar"><span className="chip-img">A</span>Avatar</div>;

// Tabs
const TabsBasic = () => (
  <div className="tabs-basic">
    <button className="tab active">Tab 1</button>
    <button className="tab">Tab 2</button>
    <button className="tab">Tab 3</button>
  </div>
);
const TabsPill = () => (
  <div className="tabs-pill">
    <button className="tab-pill active">One</button>
    <button className="tab-pill">Two</button>
    <button className="tab-pill">Three</button>
  </div>
);
const TabsUnderline = () => (
  <div className="tabs-underline">
    <button className="tab-underline active">Home</button>
    <button className="tab-underline">Profile</button>
    <button className="tab-underline">Settings</button>
  </div>
);

// Dividers
const DividerSolid = () => <div className="divider-solid"></div>;
const DividerDashed = () => <div className="divider-dashed"></div>;
const DividerGradient = () => <div className="divider-gradient"></div>;
const DividerText = () => (
  <div className="divider-text-wrapper">
    <div className="divider-line"></div>
    <span className="divider-text">OR</span>
    <div className="divider-line"></div>
  </div>
);
const DividerDotted = () => <div className="divider-dotted"></div>;

// Avatars

// Dropdown/Select
const SelectBasic = () => (
  <select className="select-basic">
    <option>Select option...</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
);
const SelectStyled = () => (
  <div className="select-styled-wrapper">
    <select className="select-styled">
      <option>Choose...</option>
      <option>Apple</option>
      <option>Banana</option>
    </select>
  </div>
);

// Breadcrumbs
const BreadcrumbsBasic = () => (
  <div className="breadcrumbs">
    <a href="#">Home</a>
    <span className="breadcrumb-sep">/</span>
    <a href="#">Products</a>
    <span className="breadcrumb-sep">/</span>
    <span className="breadcrumb-active">Item</span>
  </div>
);
const BreadcrumbsChevron = () => (
  <div className="breadcrumbs-chevron">
    <a href="#">Home</a>
    <span className="breadcrumb-arrow">›</span>
    <a href="#">Library</a>
    <span className="breadcrumb-arrow">›</span>
    <span className="breadcrumb-current">Data</span>
  </div>
);

// Pagination
const PaginationBasic = () => (
  <div className="pagination">
    <button className="page-btn">‹</button>
    <button className="page-btn active">1</button>
    <button className="page-btn">2</button>
    <button className="page-btn">3</button>
    <button className="page-btn">›</button>
  </div>
);
const PaginationPill = () => (
  <div className="pagination-pill">
    <button className="page-pill">Prev</button>
    <button className="page-pill active">1</button>
    <button className="page-pill">2</button>
    <button className="page-pill">Next</button>
  </div>
);

// Accordion
const AccordionItem = () => (
  <details className="accordion-item">
    <summary className="accordion-header">Click to expand</summary>
    <div className="accordion-content">Hidden content here</div>
  </details>
);

// Toggle Button Groups
const ToggleGroup = () => (
  <div className="toggle-group">
    <button className="toggle-btn active">Left</button>
    <button className="toggle-btn">Center</button>
    <button className="toggle-btn">Right</button>
  </div>
);

// Rating Stars
const RatingStars = () => (
  <div className="rating-stars">
    <span className="star filled">★</span>
    <span className="star filled">★</span>
    <span className="star filled">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
  </div>
);

// Notification Badges
const NotificationBadge = () => (
  <div className="notification-wrapper">
    <div className="notification-icon">🔔</div>
    <span className="notification-badge">3</span>
  </div>
);

// Stepper
const StepperBasic = () => (
  <div className="stepper">
    <div className="step completed">1</div>
    <div className="step-line completed"></div>
    <div className="step active">2</div>
    <div className="step-line"></div>
    <div className="step">3</div>
  </div>
);

// Timeline
const TimelineItem = () => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <div className="timeline-title">Event Title</div>
      <div className="timeline-desc">Description</div>
    </div>
  </div>
);

// Special Effect Components
const MorphingShape = () => <div className="morphing-shape"></div>;
const RainbowText = () => <div className="rainbow-text">Rainbow Text</div>;
const GlitchText = () => <div className="glitch-text" data-text="Glitch">Glitch</div>;
const NeonSign = () => <div className="neon-sign">NEON</div>;
const HolographicCard = () => <div className="holographic-card">Holographic</div>;
const ParticleButton = () => <button className="particle-button">Particle Effect</button>;
const WaveButton = () => <button className="wave-button">Wave</button>;
const MagneticButton = () => <button className="magnetic-button">Magnetic</button>;
const BlobMorph = () => <div className="blob-morph"></div>;
const GradientBorder = () => <div className="gradient-border-box">Gradient Border</div>;

const AvatarCircle = () => <div className="avatar-circle">AB</div>;
const AvatarSquare = () => <div className="avatar-square">CD</div>;
const AvatarStatus = () => (
  <div className="avatar-status-wrapper">
    <div className="avatar-circle">EF</div>
    <span className="avatar-status"></span>
  </div>
);
const AvatarGroup = () => (
  <div className="avatar-group">
    <div className="avatar-sm">A</div>
    <div className="avatar-sm">B</div>
    <div className="avatar-sm">C</div>
    <div className="avatar-sm">+5</div>
  </div>
);
const AvatarGradient = () => <div className="avatar-gradient">GH</div>;

export const components: UIComponent[] = [
  // Primary Buttons (20)
  {
    id: 'btn-primary',
    title: 'Primary Button',
    category: 'Buttons',
    description: 'Standard primary button with solid background',
    language: 'react',
    component: PrimaryButton,
    code: `<button className="btn-primary">Primary Button</button>\n\n/* CSS */\n.btn-primary {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}`
  },
  {
    id: 'btn-secondary',
    title: 'Secondary Button',
    category: 'Buttons',
    description: 'Secondary button with muted colors',
    language: 'react',
    component: SecondaryButton,
    code: `<button className="btn-secondary">Secondary Button</button>\n\n/* CSS */\n.btn-secondary {\n  background: #6b7280;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-secondary:hover {\n  background: #4b5563;\n  transform: translateY(-2px);\n}`
  },
  {
    id: 'btn-outline',
    title: 'Outline Button',
    category: 'Buttons',
    description: 'Button with transparent background and border',
    language: 'react',
    component: OutlineButton,
    code: `<button className="btn-outline">Outline Button</button>\n\n/* CSS */\n.btn-outline {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-outline:hover {\n  background: #3b82f6;\n  color: white;\n}`
  },
  {
    id: 'btn-ghost',
    title: 'Ghost Button',
    category: 'Buttons',
    description: 'Minimal button with hover background',
    language: 'react',
    component: GhostButton,
    code: `<button className="btn-ghost">Ghost Button</button>\n\n/* CSS */\n.btn-ghost {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-ghost:hover {\n  background: rgba(59, 130, 246, 0.1);\n}`
  },
  {
    id: 'btn-gradient',
    title: 'Gradient Button',
    category: 'Buttons',
    description: 'Button with gradient background',
    language: 'react',
    component: GradientButton,
    code: `<button className="btn-gradient">Gradient Button</button>\n\n/* CSS */\n.btn-gradient {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-gradient:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);\n}`
  },
  {
    id: 'btn-neon',
    title: 'Neon Button',
    category: 'Buttons',
    description: 'Button with neon glow effect',
    language: 'react',
    component: NeonButton,
    code: `<button className="btn-neon">Neon Button</button>\n\n/* CSS */\n.btn-neon {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: all 0.3s;\n}\n.btn-neon:hover {\n  box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);\n}`
  },
  {
    id: 'btn-glass',
    title: 'Glass Button',
    category: 'Buttons',
    description: 'Glassmorphism style button',
    language: 'react',
    component: GlassButton,
    code: `<button className="btn-glass">Glass Button</button>\n\n/* CSS */\n.btn-glass {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s;\n}\n.btn-glass:hover {\n  background: rgba(59, 130, 246, 0.2);\n}`
  },
  {
    id: 'btn-pulse',
    title: 'Pulse Button',
    category: 'Buttons',
    description: 'Button with pulsing animation',
    language: 'react',
    component: PulseButton,
    code: `<button className="btn-pulse">Pulse Button</button>\n\n/* CSS */\n.btn-pulse {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}`
  },
  {
    id: 'btn-shine',
    title: 'Shine Button',
    category: 'Buttons',
    description: 'Button with shine effect on hover',
    language: 'react',
    component: ShineButton,
    code: `<button className="btn-shine">Shine Button</button>\n\n/* CSS */\n.btn-shine {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.btn-shine::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\n  transition: left 0.5s;\n}\n.btn-shine:hover::before {\n  left: 100%;\n}`
  },
  {
    id: 'btn-ripple',
    title: 'Ripple Button',
    category: 'Buttons',
    description: 'Material design ripple effect',
    language: 'react',
    component: RippleButton,
    code: `<button className="btn-ripple">Ripple Button</button>\n\n/* CSS */\n.btn-ripple {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}`
  },
  {
    id: 'btn-slide',
    title: 'Slide Button',
    category: 'Buttons',
    description: 'Background slides on hover',
    language: 'react',
    component: SlideButton,
    code: `<button className="btn-slide">Slide Button</button>\n\n/* CSS */\n.btn-slide {\n  background: linear-gradient(to right, #3b82f6 50%, #2563eb 50%);\n  background-size: 200% 100%;\n  background-position: right;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-position 0.3s;\n}\n.btn-slide:hover {\n  background-position: left;\n}`
  },
  {
    id: 'btn-bounce',
    title: 'Bounce Button',
    category: 'Buttons',
    description: 'Bouncing animation on hover',
    language: 'react',
    component: BounceButton,
    code: `<button className="btn-bounce">Bounce Button</button>\n\n/* CSS */\n.btn-bounce {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-bounce:hover {\n  animation: bounce 0.5s;\n}\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}`
  },
  {
    id: 'btn-rotate',
    title: 'Rotate Button',
    category: 'Buttons',
    description: 'Rotates on hover',
    language: 'react',
    component: RotateButton,
    code: `<button className="btn-rotate">Rotate Button</button>\n\n/* CSS */\n.btn-rotate {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n.btn-rotate:hover {\n  transform: rotate(5deg);\n}`
  },
  {
    id: 'btn-flip',
    title: 'Flip Button',
    category: 'Buttons',
    description: '3D flip effect on hover',
    language: 'react',
    component: FlipButton,
    code: `<button className="btn-flip">Flip Button</button>\n\n/* CSS */\n.btn-flip {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.btn-flip:hover {\n  transform: rotateY(180deg);\n}`
  },
  {
    id: 'btn-swipe',
    title: 'Swipe Button',
    category: 'Buttons',
    description: 'Swipe color change effect',
    language: 'react',
    component: SwipeButton,
    code: `<button className="btn-swipe">Swipe Button</button>\n\n/* CSS */\n.btn-swipe {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.btn-swipe::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background: #2563eb;\n  transition: width 0.3s;\n  z-index: -1;\n}\n.btn-swipe:hover::before {\n  width: 100%;\n}`
  },
  {
    id: 'btn-glow',
    title: 'Glow Button',
    category: 'Buttons',
    description: 'Glowing shadow effect',
    language: 'react',
    component: GlowButton,
    code: `<button className="btn-glow">Glow Button</button>\n\n/* CSS */\n.btn-glow {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-glow:hover {\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);\n}`
  },
  {
    id: 'btn-shadow',
    title: 'Shadow Button',
    category: 'Buttons',
    description: 'Deep shadow on hover',
    language: 'react',
    component: ShadowButton,
    code: `<button className="btn-shadow">Shadow Button</button>\n\n/* CSS */\n.btn-shadow {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-shadow:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  transform: translateY(-3px);\n}`
  },
  {
    id: 'btn-border-animate',
    title: 'Border Animate',
    category: 'Buttons',
    description: 'Animated border effect',
    language: 'react',
    component: BorderButton,
    code: `<button className="btn-border-animate">Border Animate</button>\n\n/* CSS */\n.btn-border-animate {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n}\n.btn-border-animate::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: 8px;\n  padding: 2px;\n  background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.btn-border-animate:hover::before {\n  opacity: 1;\n}`
  },
  {
    id: 'btn-fill',
    title: 'Fill Effect Button',
    category: 'Buttons',
    description: 'Fills with color from bottom',
    language: 'react',
    component: FillButton,
    code: `<button className="btn-fill">Fill Effect</button>\n\n/* CSS */\n.btn-fill {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.btn-fill::before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  background: #3b82f6;\n  transition: height 0.3s;\n  z-index: -1;\n}\n.btn-fill:hover {\n  color: white;\n}\n.btn-fill:hover::before {\n  height: 100%;\n}`
  },
  {
    id: 'btn-scale',
    title: 'Scale Button',
    category: 'Buttons',
    description: 'Scales up on hover',
    language: 'react',
    component: ScaleButton,
    code: `<button className="btn-scale">Scale Button</button>\n\n/* CSS */\n.btn-scale {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n.btn-scale:hover {\n  transform: scale(1.1);\n}`
  },

  // Icon Buttons (5)
  {
    id: 'btn-icon',
    title: 'Icon Button',
    category: 'Icon Buttons',
    description: 'Simple icon button',
    language: 'react',
    component: IconButton,
    code: `<button className="btn-icon">❤️</button>\n\n/* CSS */\n.btn-icon {\n  background: #3b82f6;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon:hover {\n  transform: scale(1.1);\n}`
  },
  {
    id: 'btn-icon-circle',
    title: 'Circle Icon Button',
    category: 'Icon Buttons',
    description: 'Circular icon button',
    language: 'react',
    component: IconCircle,
    code: `<button className="btn-icon-circle">★</button>\n\n/* CSS */\n.btn-icon-circle {\n  background: #3b82f6;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon-circle:hover {\n  transform: rotate(360deg);\n}`
  },
  {
    id: 'btn-icon-square',
    title: 'Square Icon Button',
    category: 'Icon Buttons',
    description: 'Square icon button with sharp edges',
    language: 'react',
    component: IconSquare,
    code: `<button className="btn-icon-square">✓</button>\n\n/* CSS */\n.btn-icon-square {\n  background: #10b981;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 0;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon-square:hover {\n  background: #059669;\n}`
  },
  {
    id: 'btn-icon-gradient',
    title: 'Gradient Icon Button',
    category: 'Icon Buttons',
    description: 'Icon button with gradient background',
    language: 'react',
    component: IconGradient,
    code: `<button className="btn-icon-gradient">🔥</button>\n\n/* CSS */\n.btn-icon-gradient {\n  background: linear-gradient(135deg, #f59e0b, #ef4444);\n  color: white;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon-gradient:hover {\n  transform: scale(1.15);\n}`
  },
  {
    id: 'btn-icon-neon',
    title: 'Neon Icon Button',
    category: 'Icon Buttons',
    description: 'Icon button with neon glow',
    language: 'react',
    component: IconNeon,
    code: `<button className="btn-icon-neon">⚡</button>\n\n/* CSS */\n.btn-icon-neon {\n  background: transparent;\n  color: #3b82f6;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #3b82f6;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);\n  transition: all 0.3s;\n}\n.btn-icon-neon:hover {\n  box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);\n}`
  },

  // Size Variants (3)
  {
    id: 'btn-sm',
    title: 'Small Button',
    category: 'Button Sizes',
    description: 'Compact button size',
    language: 'react',
    component: SmallButton,
    code: `<button className="btn-primary btn-sm">Small</button>\n\n/* CSS */\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}`
  },
  {
    id: 'btn-md',
    title: 'Medium Button',
    category: 'Button Sizes',
    description: 'Default medium size',
    language: 'react',
    component: MediumButton,
    code: `<button className="btn-primary btn-md">Medium</button>\n\n/* CSS */\n.btn-md {\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n}`
  },
  {
    id: 'btn-lg',
    title: 'Large Button',
    category: 'Button Sizes',
    description: 'Large button for emphasis',
    language: 'react',
    component: LargeButton,
    code: `<button className="btn-primary btn-lg">Large</button>\n\n/* CSS */\n.btn-lg {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n}`
  },

  // State Buttons (4)
  {
    id: 'btn-success',
    title: 'Success Button',
    category: 'State Buttons',
    description: 'Green success state button',
    language: 'react',
    component: SuccessButton,
    code: `<button className="btn-success">Success</button>\n\n/* CSS */\n.btn-success {\n  background: #10b981;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-success:hover {\n  background: #059669;\n}`
  },
  {
    id: 'btn-danger',
    title: 'Danger Button',
    category: 'State Buttons',
    description: 'Red danger state button',
    language: 'react',
    component: DangerButton,
    code: `<button className="btn-danger">Danger</button>\n\n/* CSS */\n.btn-danger {\n  background: #ef4444;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-danger:hover {\n  background: #dc2626;\n}`
  },
  {
    id: 'btn-warning',
    title: 'Warning Button',
    category: 'State Buttons',
    description: 'Orange warning state button',
    language: 'react',
    component: WarningButton,
    code: `<button className="btn-warning">Warning</button>\n\n/* CSS */\n.btn-warning {\n  background: #f59e0b;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-warning:hover {\n  background: #d97706;\n}`
  },
  {
    id: 'btn-info',
    title: 'Info Button',
    category: 'State Buttons',
    description: 'Cyan info state button',
    language: 'react',
    component: InfoButton,
    code: `<button className="btn-info">Info</button>\n\n/* CSS */\n.btn-info {\n  background: #06b6d4;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-info:hover {\n  background: #0891b2;\n}`
  },

  // Pill Buttons (3)
  {
    id: 'btn-pill',
    title: 'Pill Button',
    category: 'Pill Buttons',
    description: 'Fully rounded pill button',
    language: 'react',
    component: PillButton,
    code: `<button className="btn-pill">Pill Button</button>\n\n/* CSS */\n.btn-pill {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-pill:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}`
  },
  {
    id: 'btn-pill-outline',
    title: 'Pill Outline Button',
    category: 'Pill Buttons',
    description: 'Outline pill button',
    language: 'react',
    component: PillOutline,
    code: `<button className="btn-pill-outline">Pill Outline</button>\n\n/* CSS */\n.btn-pill-outline {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 9999px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-pill-outline:hover {\n  background: #3b82f6;\n  color: white;\n}`
  },
  {
    id: 'btn-pill-gradient',
    title: 'Pill Gradient Button',
    category: 'Pill Buttons',
    description: 'Gradient pill button',
    language: 'react',
    component: PillGradient,
    code: `<button className="btn-pill-gradient">Pill Gradient</button>\n\n/* CSS */\n.btn-pill-gradient {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-pill-gradient:hover {\n  transform: scale(1.05);\n}`
  },

  // 3D Buttons (3)
  {
    id: 'btn-3d',
    title: '3D Button',
    category: '3D Buttons',
    description: 'Button with 3D depth effect',
    language: 'react',
    component: Button3D,
    code: `<button className="btn-3d">3D Button</button>\n\n/* CSS */\n.btn-3d {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 6px 0 #2563eb;\n  transition: all 0.1s;\n}\n.btn-3d:active {\n  box-shadow: 0 2px 0 #2563eb;\n  transform: translateY(4px);\n}`
  },
  {
    id: 'btn-press',
    title: 'Press Button',
    category: '3D Buttons',
    description: 'Physical press effect',
    language: 'react',
    component: ButtonPress,
    code: `<button className="btn-press">Press Me</button>\n\n/* CSS */\n.btn-press {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 5px 0 #1e40af, 0 8px 10px rgba(0,0,0,0.2);\n  transition: all 0.1s;\n}\n.btn-press:active {\n  box-shadow: 0 2px 0 #1e40af, 0 4px 6px rgba(0,0,0,0.2);\n  transform: translateY(3px);\n}`
  },
  {
    id: 'btn-raised',
    title: 'Raised Button',
    category: '3D Buttons',
    description: 'Material design raised button',
    language: 'react',
    component: ButtonRaised,
    code: `<button className="btn-raised">Raised Button</button>\n\n/* CSS */\n.btn-raised {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  transition: all 0.3s;\n}\n.btn-raised:hover {\n  box-shadow: 0 8px 12px rgba(0,0,0,0.15);\n  transform: translateY(-2px);\n}`
  },

  // Special Effect Buttons (6)
  {
    id: 'btn-liquid',
    title: 'Liquid Button',
    category: 'Special Effects',
    description: 'Liquid fill effect',
    language: 'react',
    component: ButtonLiquid,
    code: `<button className="btn-liquid">Liquid</button>\n\n/* CSS */\n.btn-liquid {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.btn-liquid::before {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #3b82f6;\n  transition: top 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  z-index: -1;\n}\n.btn-liquid:hover::before {\n  top: 0;\n}\n.btn-liquid:hover {\n  color: white;\n}`
  },
  {
    id: 'btn-split',
    title: 'Split Button',
    category: 'Special Effects',
    description: 'Split reveal effect',
    language: 'react',
    component: ButtonSplit,
    code: `<button className="btn-split">Split</button>\n\n/* CSS */\n.btn-split {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.btn-split::before,\n.btn-split::after {\n  content: '';\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  background: #2563eb;\n  transition: transform 0.3s;\n}\n.btn-split::before {\n  left: 0;\n  top: 0;\n}\n.btn-split::after {\n  right: 0;\n  top: 0;\n}\n.btn-split:hover::before {\n  transform: translateX(-100%);\n}\n.btn-split:hover::after {\n  transform: translateX(100%);\n}`
  },
  {
    id: 'btn-neumorph',
    title: 'Neumorphic Button',
    category: 'Special Effects',
    description: 'Soft UI neumorphic style',
    language: 'react',
    component: ButtonNeumorph,
    code: `<button className="btn-neumorph">Neumorphic</button>\n\n/* CSS */\n.btn-neumorph {\n  background: #1a1a1a;\n  color: #3b82f6;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 8px 8px 16px #0f0f0f, -8px -8px 16px #252525;\n  transition: all 0.3s;\n}\n.btn-neumorph:active {\n  box-shadow: inset 4px 4px 8px #0f0f0f, inset -4px -4px 8px #252525;\n}`
  },
  {
    id: 'btn-cyberpunk',
    title: 'Cyberpunk Button',
    category: 'Special Effects',
    description: 'Futuristic cyberpunk style',
    language: 'react',
    component: ButtonCyberpunk,
    code: `<button className="btn-cyberpunk">Cyberpunk</button>\n\n/* CSS */\n.btn-cyberpunk {\n  background: #000;\n  color: #0ff;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #0ff;\n  border-radius: 0;\n  font-weight: 700;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;\n  transition: all 0.3s;\n}\n.btn-cyberpunk:hover {\n  background: #0ff;\n  color: #000;\n  box-shadow: 0 0 20px #0ff, inset 0 0 0px #0ff;\n}`
  },
  {
    id: 'btn-retro',
    title: 'Retro Button',
    category: 'Special Effects',
    description: '80s retro aesthetic',
    language: 'react',
    component: ButtonRetro,
    code: `<button className="btn-retro">Retro</button>\n\n/* CSS */\n.btn-retro {\n  background: linear-gradient(180deg, #ff00ff 0%, #00ffff 100%);\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: 3px solid white;\n  border-radius: 0;\n  font-weight: 700;\n  cursor: pointer;\n  text-transform: uppercase;\n  text-shadow: 2px 2px 0 rgba(0,0,0,0.5);\n  box-shadow: 5px 5px 0 rgba(0,0,0,0.3);\n  transition: all 0.3s;\n}\n.btn-retro:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 7px 7px 0 rgba(0,0,0,0.3);\n}`
  },
  {
    id: 'btn-minimal',
    title: 'Minimal Button',
    category: 'Special Effects',
    description: 'Ultra minimal design',
    language: 'react',
    component: ButtonMinimal,
    code: `<button className="btn-minimal">Minimal</button>\n\n/* CSS */\n.btn-minimal {\n  background: transparent;\n  color: #a0a0a0;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-bottom: 1px solid #a0a0a0;\n  border-radius: 0;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-minimal:hover {\n  color: #ffffff;\n  border-bottom-color: #ffffff;\n}`
  },

  // Input Components (7)
  {
    id: 'input-text',
    title: 'Text Input',
    category: 'Inputs',
    description: 'Standard text input field',
    language: 'react',
    component: TextInput,
    code: `<input type="text" className="input-text" placeholder="Enter text..." />\n\n/* CSS */\n.input-text {\n  background: #1a1a1a;\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.3s;\n}\n.input-text:focus {\n  border-color: #3b82f6;\n}`
  },
  {
    id: 'input-focus',
    title: 'Focus Input',
    category: 'Inputs',
    description: 'Input with focus glow effect',
    language: 'react',
    component: InputFocus,
    code: `<input type="text" className="input-focus" placeholder="Focus effect..." />\n\n/* CSS */\n.input-focus {\n  background: #1a1a1a;\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 2px solid #2a2a2a;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.3s;\n}\n.input-focus:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}`
  },
  {
    id: 'input-float',
    title: 'Floating Label Input',
    category: 'Inputs',
    description: 'Input with floating label effect',
    language: 'react',
    component: InputFloat,
    code: `<div className="input-float-wrapper">\n  <input type="text" className="input-float" placeholder=" " />\n  <label className="input-float-label">Floating Label</label>\n</div>\n\n/* CSS */\n.input-float-wrapper {\n  position: relative;\n}\n.input-float {\n  background: #1a1a1a;\n  color: white;\n  padding: 1.25rem 1rem 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: none;\n  width: 200px;\n}\n.input-float-label {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #707070;\n  pointer-events: none;\n  transition: all 0.3s;\n}\n.input-float:focus ~ .input-float-label,\n.input-float:not(:placeholder-shown) ~ .input-float-label {\n  top: 0.5rem;\n  transform: translateY(0);\n  font-size: 0.75rem;\n  color: #3b82f6;\n}`
  },
  {
    id: 'input-underline',
    title: 'Underline Input',
    category: 'Inputs',
    description: 'Minimal underline style input',
    language: 'react',
    component: InputUnderline,
    code: `<input type="text" className="input-underline" placeholder="Underline..." />\n\n/* CSS */\n.input-underline {\n  background: transparent;\n  color: white;\n  padding: 0.5rem 0;\n  border: none;\n  border-bottom: 2px solid #2a2a2a;\n  border-radius: 0;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.3s;\n}\n.input-underline:focus {\n  border-bottom-color: #3b82f6;\n}`
  },
  {
    id: 'input-glow',
    title: 'Glow Input',
    category: 'Inputs',
    description: 'Input with glow effect on focus',
    language: 'react',
    component: InputGlow,
    code: `<input type="text" className="input-glow" placeholder="Glow effect..." />\n\n/* CSS */\n.input-glow {\n  background: #1a1a1a;\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.3s;\n}\n.input-glow:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);\n}`
  },
  {
    id: 'input-neon',
    title: 'Neon Input',
    category: 'Inputs',
    description: 'Cyberpunk style neon input',
    language: 'react',
    component: InputNeon,
    code: `<input type="text" className="input-neon" placeholder="Neon input..." />\n\n/* CSS */\n.input-neon {\n  background: transparent;\n  color: #0ff;\n  padding: 0.75rem 1rem;\n  border: 2px solid #0ff;\n  border-radius: 0;\n  font-size: 1rem;\n  outline: none;\n  box-shadow: 0 0 10px #0ff;\n  transition: all 0.3s;\n}\n.input-neon:focus {\n  box-shadow: 0 0 20px #0ff, inset 0 0 10px #0ff;\n}`
  },
  {
    id: 'input-glass',
    title: 'Glass Input',
    category: 'Inputs',
    description: 'Glassmorphism style input',
    language: 'react',
    component: InputGlass,
    code: `<input type="text" className="input-glass" placeholder="Glass input..." />\n\n/* CSS */\n.input-glass {\n  background: rgba(255, 255, 255, 0.05);\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  font-size: 1rem;\n  outline: none;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s;\n}\n.input-glass:focus {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(59, 130, 246, 0.5);\n}`
  },

  // Checkboxes (5)
  {
    id: 'checkbox-default',
    title: 'Default Checkbox',
    category: 'Checkboxes',
    description: 'Standard checkbox input',
    language: 'react',
    component: CheckboxDefault,
    code: `<input type="checkbox" className="checkbox-default" />\n\n/* CSS */\n.checkbox-default {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}`
  },
  {
    id: 'checkbox-custom',
    title: 'Custom Checkbox',
    category: 'Checkboxes',
    description: 'Styled custom checkbox',
    language: 'react',
    component: CheckboxCustom,
    code: `<input type="checkbox" className="checkbox-custom" />\n\n/* CSS */\n.checkbox-custom {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #3b82f6;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.checkbox-custom:checked {\n  background: #3b82f6;\n}\n.checkbox-custom:checked::after {\n  content: '✓';\n  position: absolute;\n  color: white;\n  font-size: 14px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}`
  },
  {
    id: 'checkbox-switch',
    title: 'Switch Checkbox',
    category: 'Checkboxes',
    description: 'iOS-style toggle switch',
    language: 'react',
    component: CheckboxSwitch,
    code: `<input type="checkbox" className="checkbox-switch" />\n\n/* CSS */\n.checkbox-switch {\n  appearance: none;\n  width: 50px;\n  height: 26px;\n  background: #2a2a2a;\n  border-radius: 13px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.checkbox-switch::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  top: 3px;\n  left: 3px;\n  transition: all 0.3s;\n}\n.checkbox-switch:checked {\n  background: #3b82f6;\n}\n.checkbox-switch:checked::before {\n  left: 27px;\n}`
  },
  {
    id: 'checkbox-toggle',
    title: 'Toggle Checkbox',
    category: 'Checkboxes',
    description: 'Flat toggle design',
    language: 'react',
    component: CheckboxToggle,
    code: `<input type="checkbox" className="checkbox-toggle" />\n\n/* CSS */\n.checkbox-toggle {\n  appearance: none;\n  width: 60px;\n  height: 30px;\n  background: #2a2a2a;\n  border-radius: 15px;\n  cursor: pointer;\n  position: relative;\n  border: 2px solid #3b82f6;\n  transition: all 0.3s;\n}\n.checkbox-toggle::before {\n  content: '';\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #3b82f6;\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s;\n}\n.checkbox-toggle:checked {\n  background: #3b82f6;\n}\n.checkbox-toggle:checked::before {\n  left: 32px;\n  background: white;\n}`
  },
  {
    id: 'checkbox-slide',
    title: 'Slide Checkbox',
    category: 'Checkboxes',
    description: 'Sliding animation checkbox',
    language: 'react',
    component: CheckboxSlide,
    code: `<input type="checkbox" className="checkbox-slide" />\n\n/* CSS */\n.checkbox-slide {\n  appearance: none;\n  width: 70px;\n  height: 34px;\n  background: linear-gradient(to right, #2a2a2a 50%, #3b82f6 50%);\n  background-size: 200% 100%;\n  background-position: right;\n  border-radius: 17px;\n  cursor: pointer;\n  position: relative;\n  transition: background-position 0.3s;\n}\n.checkbox-slide::before {\n  content: '';\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: white;\n  top: 3px;\n  left: 3px;\n  transition: all 0.3s;\n}\n.checkbox-slide:checked {\n  background-position: left;\n}\n.checkbox-slide:checked::before {\n  left: 39px;\n}`
  },

  // Radio Buttons (3)
  {
    id: 'radio-default',
    title: 'Default Radio',
    category: 'Radio Buttons',
    description: 'Standard radio button',
    language: 'react',
    component: RadioDefault,
    code: `<input type="radio" className="radio-default" name="radio1" />\n\n/* CSS */\n.radio-default {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}`
  },
  {
    id: 'radio-custom',
    title: 'Custom Radio',
    category: 'Radio Buttons',
    description: 'Styled custom radio button',
    language: 'react',
    component: RadioCustom,
    code: `<input type="radio" className="radio-custom" name="radio2" />\n\n/* CSS */\n.radio-custom {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #3b82f6;\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.radio-custom:checked::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #3b82f6;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}`
  },
  {
    id: 'radio-button',
    title: 'Button Radio',
    category: 'Radio Buttons',
    description: 'Button-style radio',
    language: 'react',
    component: RadioButton,
    code: `<input type="radio" className="radio-button" name="radio3" />\n\n/* CSS */\n.radio-button {\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border: 2px solid #3b82f6;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.radio-button:checked {\n  background: #3b82f6;\n  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);\n}`
  },

  // Badges (10)
  {
    id: 'badge-primary',
    title: 'Primary Badge',
    category: 'Badges',
    description: 'Primary color badge',
    language: 'react',
    component: BadgePrimary,
    code: `<span className="badge-primary">Primary</span>\n\n/* CSS */\n.badge-primary {\n  background: #3b82f6;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-success',
    title: 'Success Badge',
    category: 'Badges',
    description: 'Green success badge',
    language: 'react',
    component: BadgeSuccess,
    code: `<span className="badge-success">Success</span>\n\n/* CSS */\n.badge-success {\n  background: #10b981;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-danger',
    title: 'Danger Badge',
    category: 'Badges',
    description: 'Red danger badge',
    language: 'react',
    component: BadgeDanger,
    code: `<span className="badge-danger">Danger</span>\n\n/* CSS */\n.badge-danger {\n  background: #ef4444;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-warning',
    title: 'Warning Badge',
    category: 'Badges',
    description: 'Orange warning badge',
    language: 'react',
    component: BadgeWarning,
    code: `<span className="badge-warning">Warning</span>\n\n/* CSS */\n.badge-warning {\n  background: #f59e0b;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-info',
    title: 'Info Badge',
    category: 'Badges',
    description: 'Cyan info badge',
    language: 'react',
    component: BadgeInfo,
    code: `<span className="badge-info">Info</span>\n\n/* CSS */\n.badge-info {\n  background: #06b6d4;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-pill',
    title: 'Pill Badge',
    category: 'Badges',
    description: 'Rounded pill badge',
    language: 'react',
    component: BadgePill,
    code: `<span className="badge-pill">Pill Badge</span>\n\n/* CSS */\n.badge-pill {\n  background: #3b82f6;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-outline',
    title: 'Outline Badge',
    category: 'Badges',
    description: 'Outlined badge style',
    language: 'react',
    component: BadgeOutline,
    code: `<span className="badge-outline">Outline</span>\n\n/* CSS */\n.badge-outline {\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #3b82f6;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-gradient',
    title: 'Gradient Badge',
    category: 'Badges',
    description: 'Gradient background badge',
    language: 'react',
    component: BadgeGradient,
    code: `<span className="badge-gradient">Gradient</span>\n\n/* CSS */\n.badge-gradient {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}`
  },
  {
    id: 'badge-glow',
    title: 'Glow Badge',
    category: 'Badges',
    description: 'Badge with glow effect',
    language: 'react',
    component: BadgeGlow,
    code: `<span className="badge-glow">Glow</span>\n\n/* CSS */\n.badge-glow {\n  background: #3b82f6;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);\n}`
  },
  {
    id: 'badge-pulse',
    title: 'Pulse Badge',
    category: 'Badges',
    description: 'Pulsing animation badge',
    language: 'react',
    component: BadgePulse,
    code: `<span className="badge-pulse">Pulse</span>\n\n/* CSS */\n.badge-pulse {\n  background: #ef4444;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  animation: badge-pulse 2s infinite;\n}\n@keyframes badge-pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.6; }\n}`
  },

  // Loaders (10)
  {
    id: 'loader-spinner',
    title: 'Spinner Loader',
    category: 'Loaders',
    description: 'Classic spinning loader',
    language: 'react',
    component: LoaderSpinner,
    code: `<div className="loader-spinner"></div>\n\n/* CSS */\n.loader-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #2a2a2a;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}`
  },
  {
    id: 'loader-dots',
    title: 'Dots Loader',
    category: 'Loaders',
    description: 'Three bouncing dots',
    language: 'react',
    component: LoaderDots,
    code: `<div className="loader-dots">\n  <div></div><div></div><div></div>\n</div>\n\n/* CSS */\n.loader-dots {\n  display: flex;\n  gap: 8px;\n}\n.loader-dots div {\n  width: 12px;\n  height: 12px;\n  background: #3b82f6;\n  border-radius: 50%;\n  animation: bounce-dots 1.4s infinite ease-in-out both;\n}\n.loader-dots div:nth-child(1) { animation-delay: -0.32s; }\n.loader-dots div:nth-child(2) { animation-delay: -0.16s; }\n@keyframes bounce-dots {\n  0%, 80%, 100% { transform: scale(0); }\n  40% { transform: scale(1); }\n}`
  },
  {
    id: 'loader-bars',
    title: 'Bars Loader',
    category: 'Loaders',
    description: 'Animated bar graph',
    language: 'react',
    component: LoaderBars,
    code: `<div className="loader-bars">\n  <div></div><div></div><div></div><div></div>\n</div>\n\n/* CSS */\n.loader-bars {\n  display: flex;\n  gap: 4px;\n  align-items: flex-end;\n  height: 40px;\n}\n.loader-bars div {\n  width: 8px;\n  background: #3b82f6;\n  animation: bars 1.2s ease-in-out infinite;\n}\n.loader-bars div:nth-child(1) { animation-delay: 0s; }\n.loader-bars div:nth-child(2) { animation-delay: 0.1s; }\n.loader-bars div:nth-child(3) { animation-delay: 0.2s; }\n.loader-bars div:nth-child(4) { animation-delay: 0.3s; }\n@keyframes bars {\n  0%, 40%, 100% { height: 10px; }\n  20% { height: 40px; }\n}`
  },
  {
    id: 'loader-circle',
    title: 'Circle Loader',
    category: 'Loaders',
    description: 'Circular progress loader',
    language: 'react',
    component: LoaderCircle,
    code: `<div className="loader-circle"></div>\n\n/* CSS */\n.loader-circle {\n  width: 40px;\n  height: 40px;\n  border: 4px solid transparent;\n  border-top-color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 1.5s linear infinite;\n}`
  },
  {
    id: 'loader-ring',
    title: 'Ring Loader',
    category: 'Loaders',
    description: 'Growing ring animation',
    language: 'react',
    component: LoaderRing,
    code: `<div className="loader-ring"><div></div></div>\n\n/* CSS */\n.loader-ring {\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.loader-ring div {\n  width: 100%;\n  height: 100%;\n  border: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n}\n@keyframes ring {\n  0% { transform: scale(0); opacity: 1; }\n  100% { transform: scale(1); opacity: 0; }\n}`
  },
  {
    id: 'loader-pulse',
    title: 'Pulse Loader',
    category: 'Loaders',
    description: 'Pulsing circle',
    language: 'react',
    component: LoaderPulse,
    code: `<div className="loader-pulse"></div>\n\n/* CSS */\n.loader-pulse {\n  width: 40px;\n  height: 40px;\n  background: #3b82f6;\n  border-radius: 50%;\n  animation: pulse-anim 1.5s ease-in-out infinite;\n}\n@keyframes pulse-anim {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(0.5); opacity: 0.3; }\n}`
  },
  {
    id: 'loader-wave',
    title: 'Wave Loader',
    category: 'Loaders',
    description: 'Waving bars animation',
    language: 'react',
    component: LoaderWave,
    code: `<div className="loader-wave">\n  <div></div><div></div><div></div><div></div><div></div>\n</div>\n\n/* CSS */\n.loader-wave {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.loader-wave div {\n  width: 6px;\n  height: 30px;\n  background: #3b82f6;\n  animation: wave 1.2s ease-in-out infinite;\n}\n.loader-wave div:nth-child(1) { animation-delay: 0s; }\n.loader-wave div:nth-child(2) { animation-delay: 0.1s; }\n.loader-wave div:nth-child(3) { animation-delay: 0.2s; }\n.loader-wave div:nth-child(4) { animation-delay: 0.3s; }\n.loader-wave div:nth-child(5) { animation-delay: 0.4s; }\n@keyframes wave {\n  0%, 40%, 100% { transform: scaleY(0.5); }\n  20% { transform: scaleY(1); }\n}`
  },
  {
    id: 'loader-bounce',
    title: 'Bounce Loader',
    category: 'Loaders',
    description: 'Two bouncing balls',
    language: 'react',
    component: LoaderBounce,
    code: `<div className="loader-bounce">\n  <div></div><div></div>\n</div>\n\n/* CSS */\n.loader-bounce {\n  width: 60px;\n  display: flex;\n  justify-content: space-between;\n}\n.loader-bounce div {\n  width: 18px;\n  height: 18px;\n  background: #3b82f6;\n  border-radius: 50%;\n  animation: bounce-loader 2s infinite ease-in-out;\n}\n.loader-bounce div:nth-child(2) {\n  animation-delay: -1s;\n}\n@keyframes bounce-loader {\n  0%, 100% { transform: scale(0); }\n  50% { transform: scale(1); }\n}`
  },
  {
    id: 'loader-gradient',
    title: 'Gradient Loader',
    category: 'Loaders',
    description: 'Gradient spinner',
    language: 'react',
    component: LoaderGradient,
    code: `<div className="loader-gradient"></div>\n\n/* CSS */\n.loader-gradient {\n  width: 40px;\n  height: 40px;\n  border: 4px solid transparent;\n  border-top: 4px solid #3b82f6;\n  border-right: 4px solid #8b5cf6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}`
  },
  {
    id: 'loader-neon',
    title: 'Neon Loader',
    category: 'Loaders',
    description: 'Glowing neon spinner',
    language: 'react',
    component: LoaderNeon,
    code: `<div className="loader-neon"></div>\n\n/* CSS */\n.loader-neon {\n  width: 40px;\n  height: 40px;\n  border: 4px solid transparent;\n  border-top-color: #0ff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  box-shadow: 0 0 20px #0ff;\n}`
  },

  // Cards (6)
  {
    id: 'card-basic',
    title: 'Basic Card',
    category: 'Cards',
    description: 'Simple card component',
    language: 'react',
    component: CardBasic,
    code: `<div className="card-basic">\n  <h4>Card Title</h4>\n  <p>Card content</p>\n</div>\n\n/* CSS */\n.card-basic {\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  border-radius: 12px;\n  padding: 1.5rem;\n  width: 200px;\n}\n.card-basic h4 {\n  margin-bottom: 0.5rem;\n  color: #fff;\n}\n.card-basic p {\n  color: #a0a0a0;\n  font-size: 0.9rem;\n}`
  },
  {
    id: 'card-hover',
    title: 'Hover Card',
    category: 'Cards',
    description: 'Card with hover lift effect',
    language: 'react',
    component: CardHover,
    code: `<div className="card-hover">\n  <h4>Hover Card</h4>\n  <p>Hover me!</p>\n</div>\n\n/* CSS */\n.card-hover {\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  border-radius: 12px;\n  padding: 1.5rem;\n  width: 200px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.card-hover:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);\n  border-color: #3b82f6;\n}`
  },
  {
    id: 'card-glass',
    title: 'Glass Card',
    category: 'Cards',
    description: 'Glassmorphism card',
    language: 'react',
    component: CardGlass,
    code: `<div className="card-glass">\n  <h4>Glass Card</h4>\n  <p>Glass effect</p>\n</div>\n\n/* CSS */\n.card-glass {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 1.5rem;\n  width: 200px;\n  backdrop-filter: blur(10px);\n}`
  },
  {
    id: 'card-gradient',
    title: 'Gradient Card',
    category: 'Cards',
    description: 'Card with gradient border',
    language: 'react',
    component: CardGradient,
    code: `<div className="card-gradient">\n  <h4>Gradient Card</h4>\n  <p>Gradient border</p>\n</div>\n\n/* CSS */\n.card-gradient {\n  background: #1a1a1a;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  background-image: linear-gradient(#1a1a1a, #1a1a1a), \n                    linear-gradient(135deg, #3b82f6, #8b5cf6);\n  background-origin: border-box;\n  background-clip: padding-box, border-box;\n  padding: 1.5rem;\n  width: 200px;\n}`
  },
  {
    id: 'card-neon',
    title: 'Neon Card',
    category: 'Cards',
    description: 'Card with neon glow',
    language: 'react',
    component: CardNeon,
    code: `<div className="card-neon">\n  <h4>Neon Card</h4>\n  <p>Neon effect</p>\n</div>\n\n/* CSS */\n.card-neon {\n  background: #000;\n  border: 2px solid #0ff;\n  border-radius: 12px;\n  padding: 1.5rem;\n  width: 200px;\n  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5),\n              inset 0 0 20px rgba(0, 255, 255, 0.1);\n}`
  },
  {
    id: 'card-flip',
    title: 'Flip Card',
    category: 'Cards',
    description: '3D flip animation card',
    language: 'react',
    component: CardFlip,
    code: `<div className="card-flip">\n  <div className="card-flip-inner">\n    <div className="card-flip-front">Front</div>\n  </div>\n</div>\n\n/* CSS */\n.card-flip {\n  width: 150px;\n  height: 100px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.card-flip-inner {\n  width: 100%;\n  height: 100%;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.card-flip:hover .card-flip-inner {\n  transform: rotateY(180deg);\n}\n.card-flip-front {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  backface-visibility: hidden;\n  width: 100%;\n  height: 100%;\n}`
  },

  // Progress Bars (5)
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    category: 'Progress',
    description: 'Basic progress bar',
    language: 'react',
    component: ProgressBar,
    code: `<div className="progress-bar">\n  <div className="progress-fill" style={{ width: '70%' }}></div>\n</div>\n\n/* CSS */\n.progress-bar {\n  width: 200px;\n  height: 8px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #3b82f6;\n  transition: width 0.3s;\n}`
  },
  {
    id: 'progress-gradient',
    title: 'Gradient Progress',
    category: 'Progress',
    description: 'Progress bar with gradient',
    language: 'react',
    component: ProgressGradient,
    code: `<div className="progress-gradient">\n  <div className="progress-fill-gradient" style={{ width: '60%' }}></div>\n</div>\n\n/* CSS */\n.progress-gradient {\n  width: 200px;\n  height: 8px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill-gradient {\n  height: 100%;\n  background: linear-gradient(90deg, #3b82f6, #8b5cf6);\n  transition: width 0.3s;\n}`
  },
  {
    id: 'progress-animated',
    title: 'Animated Progress',
    category: 'Progress',
    description: 'Progress bar with shimmer',
    language: 'react',
    component: ProgressAnimated,
    code: `<div className="progress-animated">\n  <div className="progress-fill-animated" style={{ width: '80%' }}></div>\n</div>\n\n/* CSS */\n.progress-animated {\n  width: 200px;\n  height: 10px;\n  background: #2a2a2a;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.progress-fill-animated {\n  height: 100%;\n  background: linear-gradient(90deg, #3b82f6 25%, #60a5fa 50%, #3b82f6 75%);\n  background-size: 200% 100%;\n  animation: shimmer 2s infinite;\n  transition: width 0.3s;\n}\n@keyframes shimmer {\n  to { background-position: 200% 0; }\n}`
  },
  {
    id: 'progress-striped',
    title: 'Striped Progress',
    category: 'Progress',
    description: 'Progress bar with stripes',
    language: 'react',
    component: ProgressStriped,
    code: `<div className="progress-striped">\n  <div className="progress-fill-striped" style={{ width: '50%' }}></div>\n</div>\n\n/* CSS */\n.progress-striped {\n  width: 200px;\n  height: 10px;\n  background: #2a2a2a;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.progress-fill-striped {\n  height: 100%;\n  background: repeating-linear-gradient(\n    45deg,\n    #3b82f6,\n    #3b82f6 10px,\n    #2563eb 10px,\n    #2563eb 20px\n  );\n  background-size: 200% 100%;\n  animation: stripes 1s linear infinite;\n  transition: width 0.3s;\n}\n@keyframes stripes {\n  to { background-position: 40px 0; }\n}`
  },
  {
    id: 'progress-circle',
    title: 'Circular Progress',
    category: 'Progress',
    description: 'Circular progress indicator',
    language: 'react',
    component: ProgressCircle,
    code: `<div className="progress-circle">\n  <svg viewBox="0 0 36 36">\n    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"\n      fill="none" stroke="#3b82f6" strokeWidth="3"\n      strokeDasharray="75, 100" />\n  </svg>\n</div>\n\n/* CSS */\n.progress-circle {\n  width: 60px;\n  height: 60px;\n}\n.progress-circle svg {\n  transform: rotate(-90deg);\n}`
  },

  // Alerts (5)
  {
    id: 'alert-info',
    title: 'Info Alert',
    category: 'Alerts',
    description: 'Informational alert message',
    language: 'react',
    component: AlertInfo,
    code: `<div className="alert-info">ℹ️ Information message</div>\n\n/* CSS */\n.alert-info {\n  background: rgba(6, 182, 212, 0.1);\n  border: 1px solid #06b6d4;\n  border-left: 4px solid #06b6d4;\n  color: #67e8f9;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 250px;\n}`
  },
  {
    id: 'alert-success',
    title: 'Success Alert',
    category: 'Alerts',
    description: 'Success confirmation alert',
    language: 'react',
    component: AlertSuccess,
    code: `<div className="alert-success">✓ Success message</div>\n\n/* CSS */\n.alert-success {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid #10b981;\n  border-left: 4px solid #10b981;\n  color: #6ee7b7;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 250px;\n}`
  },
  {
    id: 'alert-warning',
    title: 'Warning Alert',
    category: 'Alerts',
    description: 'Warning alert message',
    language: 'react',
    component: AlertWarning,
    code: `<div className="alert-warning">⚠️ Warning message</div>\n\n/* CSS */\n.alert-warning {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid #f59e0b;\n  border-left: 4px solid #f59e0b;\n  color: #fbbf24;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 250px;\n}`
  },
  {
    id: 'alert-danger',
    title: 'Danger Alert',
    category: 'Alerts',
    description: 'Error or danger alert',
    language: 'react',
    component: AlertDanger,
    code: `<div className="alert-danger">❌ Error message</div>\n\n/* CSS */\n.alert-danger {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid #ef4444;\n  border-left: 4px solid #ef4444;\n  color: #fca5a5;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 250px;\n}`
  },
  {
    id: 'alert-gradient',
    title: 'Gradient Alert',
    category: 'Alerts',
    description: 'Alert with gradient border',
    language: 'react',
    component: AlertGradient,
    code: `<div className="alert-gradient">✨ Gradient alert</div>\n\n/* CSS */\n.alert-gradient {\n  background: #1a1a1a;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  background-image: linear-gradient(#1a1a1a, #1a1a1a), \n                    linear-gradient(135deg, #3b82f6, #8b5cf6);\n  background-origin: border-box;\n  background-clip: padding-box, border-box;\n  color: #fff;\n  padding: 1rem;\n  width: 250px;\n}`
  },

  // Tooltips (2)
  {
    id: 'tooltip-top',
    title: 'Top Tooltip',
    category: 'Tooltips',
    description: 'Tooltip appears above',
    language: 'react',
    component: TooltipTop,
    code: `<div className="tooltip-container">\n  <span className="tooltip-trigger">Hover me</span>\n  <span className="tooltip-top">Tooltip text</span>\n</div>\n\n/* CSS */\n.tooltip-container {\n  position: relative;\n  display: inline-block;\n}\n.tooltip-trigger {\n  color: #3b82f6;\n  cursor: help;\n}\n.tooltip-top {\n  visibility: hidden;\n  background: #1a1a1a;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.85rem;\n  white-space: nowrap;\n  border: 1px solid #2a2a2a;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.tooltip-container:hover .tooltip-top {\n  visibility: visible;\n  opacity: 1;\n}`
  },
  {
    id: 'tooltip-bottom',
    title: 'Bottom Tooltip',
    category: 'Tooltips',
    description: 'Tooltip appears below',
    language: 'react',
    component: TooltipBottom,
    code: `<div className="tooltip-container">\n  <span className="tooltip-trigger">Hover me</span>\n  <span className="tooltip-bottom">Tooltip text</span>\n</div>\n\n/* CSS */\n.tooltip-bottom {\n  visibility: hidden;\n  background: #1a1a1a;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  position: absolute;\n  top: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.85rem;\n  white-space: nowrap;\n  border: 1px solid #2a2a2a;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.tooltip-container:hover .tooltip-bottom {\n  visibility: visible;\n  opacity: 1;\n}`
  },

  // Animations (8)
  {
    id: 'anim-bounce',
    title: 'Bounce Animation',
    category: 'Animations',
    description: 'Bouncing effect',
    language: 'react',
    component: AnimBounce,
    code: `<div className="anim-bounce">Bounce</div>\n\n/* CSS */\n.anim-bounce {\n  background: #3b82f6;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: bounce-anim 2s infinite;\n}\n@keyframes bounce-anim {\n  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n  40% { transform: translateY(-20px); }\n  60% { transform: translateY(-10px); }\n}`
  },
  {
    id: 'anim-shake',
    title: 'Shake Animation',
    category: 'Animations',
    description: 'Shaking effect',
    language: 'react',
    component: AnimShake,
    code: `<div className="anim-shake">Shake</div>\n\n/* CSS */\n.anim-shake {\n  background: #ef4444;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: shake-anim 2s infinite;\n}\n@keyframes shake-anim {\n  0%, 100% { transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }\n  20%, 40%, 60%, 80% { transform: translateX(10px); }\n}`
  },
  {
    id: 'anim-fade',
    title: 'Fade In Animation',
    category: 'Animations',
    description: 'Fade in effect',
    language: 'react',
    component: AnimFade,
    code: `<div className="anim-fade">Fade In</div>\n\n/* CSS */\n.anim-fade {\n  background: #8b5cf6;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: fade-anim 3s infinite;\n}\n@keyframes fade-anim {\n  0%, 100% { opacity: 0; }\n  50% { opacity: 1; }\n}`
  },
  {
    id: 'anim-slide',
    title: 'Slide In Animation',
    category: 'Animations',
    description: 'Slide from left',
    language: 'react',
    component: AnimSlide,
    code: `<div className="anim-slide">Slide In</div>\n\n/* CSS */\n.anim-slide {\n  background: #06b6d4;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: slide-anim 2s infinite;\n}\n@keyframes slide-anim {\n  0% { transform: translateX(-100px); opacity: 0; }\n  50% { transform: translateX(0); opacity: 1; }\n  100% { transform: translateX(-100px); opacity: 0; }\n}`
  },
  {
    id: 'anim-rotate',
    title: 'Rotate Animation',
    category: 'Animations',
    description: 'Continuous rotation',
    language: 'react',
    component: AnimRotate,
    code: `<div className="anim-rotate">Rotate</div>\n\n/* CSS */\n.anim-rotate {\n  background: #10b981;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: rotate-anim 3s linear infinite;\n}\n@keyframes rotate-anim {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`
  },
  {
    id: 'anim-pulse',
    title: 'Pulse Animation',
    category: 'Animations',
    description: 'Pulsing scale effect',
    language: 'react',
    component: AnimPulse,
    code: `<div className="anim-pulse">Pulse</div>\n\n/* CSS */\n.anim-pulse {\n  background: #f59e0b;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: pulse-scale 2s infinite;\n}\n@keyframes pulse-scale {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}`
  },
  {
    id: 'anim-float',
    title: 'Float Animation',
    category: 'Animations',
    description: 'Floating up and down',
    language: 'react',
    component: AnimFloat,
    code: `<div className="anim-float">Float</div>\n\n/* CSS */\n.anim-float {\n  background: #ec4899;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: float-anim 3s ease-in-out infinite;\n}\n@keyframes float-anim {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-15px); }\n}`
  },
  {
    id: 'anim-glow',
    title: 'Glow Animation',
    category: 'Animations',
    description: 'Pulsing glow effect',
    language: 'react',
    component: AnimGlow,
    code: `<div className="anim-glow">Glow</div>\n\n/* CSS */\n.anim-glow {\n  background: #3b82f6;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  animation: glow-anim 2s infinite;\n}\n@keyframes glow-anim {\n  0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }\n  50% { box-shadow: 0 0 30px rgba(59, 130, 246, 1); }\n}`
  },

  // Skeleton Loaders (5)
  {
    id: 'skeleton-text',
    title: 'Skeleton Text',
    category: 'Skeletons',
    description: 'Text placeholder loading',
    language: 'react',
    component: SkeletonText,
    code: `<div className="skeleton-text"></div>\n\n/* CSS */\n.skeleton-text {\n  width: 200px;\n  height: 12px;\n  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes loading {\n  to { background-position: -200% 0; }\n}`
  },
  {
    id: 'skeleton-circle',
    title: 'Skeleton Circle',
    category: 'Skeletons',
    description: 'Circle avatar placeholder',
    language: 'react',
    component: SkeletonCircle,
    code: `<div className="skeleton-circle"></div>\n\n/* CSS */\n.skeleton-circle {\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 50%;\n}`
  },
  {
    id: 'skeleton-rectangle',
    title: 'Skeleton Rectangle',
    category: 'Skeletons',
    description: 'Rectangle image placeholder',
    language: 'react',
    component: SkeletonRectangle,
    code: `<div className="skeleton-rectangle"></div>\n\n/* CSS */\n.skeleton-rectangle {\n  width: 200px;\n  height: 120px;\n  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 8px;\n}`
  },
  {
    id: 'skeleton-card',
    title: 'Skeleton Card',
    category: 'Skeletons',
    description: 'Complete card skeleton',
    language: 'react',
    component: SkeletonCard,
    code: `<div className="skeleton-card">\n  <div className="skeleton-circle-sm"></div>\n  <div className="skeleton-line"></div>\n  <div className="skeleton-line-short"></div>\n</div>\n\n/* CSS */\n.skeleton-card {\n  background: #1a1a1a;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 200px;\n}\n.skeleton-circle-sm {\n  width: 40px;\n  height: 40px;\n  background: #2a2a2a;\n  border-radius: 50%;\n  margin-bottom: 0.5rem;\n  animation: loading 1.5s infinite;\n}\n.skeleton-line {\n  height: 10px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  animation: loading 1.5s infinite;\n}\n.skeleton-line-short {\n  height: 10px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  width: 60%;\n  animation: loading 1.5s infinite;\n}`
  },
  {
    id: 'skeleton-pulse',
    title: 'Skeleton Pulse',
    category: 'Skeletons',
    description: 'Pulsing skeleton loader',
    language: 'react',
    component: SkeletonPulse,
    code: `<div className="skeleton-pulse"></div>\n\n/* CSS */\n.skeleton-pulse {\n  width: 200px;\n  height: 20px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  animation: pulse-skeleton 2s ease-in-out infinite;\n}\n@keyframes pulse-skeleton {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}`
  },

  // Chips/Tags (6)
  {
    id: 'chip-basic',
    title: 'Basic Chip',
    category: 'Chips',
    description: 'Simple chip component',
    language: 'react',
    component: ChipBasic,
    code: `<div className="chip-basic">Chip</div>\n\n/* CSS */\n.chip-basic {\n  display: inline-block;\n  background: #2a2a2a;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  border-radius: 16px;\n  font-size: 0.875rem;\n}`
  },
  {
    id: 'chip-removable',
    title: 'Removable Chip',
    category: 'Chips',
    description: 'Chip with close button',
    language: 'react',
    component: ChipRemovable,
    code: `<div className="chip-removable">Removable ×</div>\n\n/* CSS */\n.chip-removable {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #3b82f6;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.chip-removable:hover {\n  background: #2563eb;\n}`
  },
  {
    id: 'chip-clickable',
    title: 'Clickable Chip',
    category: 'Chips',
    description: 'Interactive chip button',
    language: 'react',
    component: ChipClickable,
    code: `<button className="chip-clickable">Clickable</button>\n\n/* CSS */\n.chip-clickable {\n  background: #2a2a2a;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  border: 1px solid #3b82f6;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.chip-clickable:hover {\n  background: #3b82f6;\n}`
  },
  {
    id: 'chip-outline',
    title: 'Outlined Chip',
    category: 'Chips',
    description: 'Chip with outline style',
    language: 'react',
    component: ChipOutline,
    code: `<div className="chip-outline">Outlined</div>\n\n/* CSS */\n.chip-outline {\n  display: inline-block;\n  background: transparent;\n  color: #3b82f6;\n  padding: 0.5rem 1rem;\n  border: 1px solid #3b82f6;\n  border-radius: 16px;\n  font-size: 0.875rem;\n}`
  },
  {
    id: 'chip-gradient',
    title: 'Gradient Chip',
    category: 'Chips',
    description: 'Chip with gradient background',
    language: 'react',
    component: ChipGradient,
    code: `<div className="chip-gradient">Gradient</div>\n\n/* CSS */\n.chip-gradient {\n  display: inline-block;\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 16px;\n  font-size: 0.875rem;\n}`
  },
  {
    id: 'chip-avatar',
    title: 'Avatar Chip',
    category: 'Chips',
    description: 'Chip with avatar icon',
    language: 'react',
    component: ChipAvatar,
    code: `<div className="chip-avatar"><span className="chip-img">A</span>Avatar</div>\n\n/* CSS */\n.chip-avatar {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #2a2a2a;\n  color: #fff;\n  padding: 0.25rem 1rem 0.25rem 0.25rem;\n  border-radius: 16px;\n  font-size: 0.875rem;\n}\n.chip-img {\n  width: 28px;\n  height: 28px;\n  background: #3b82f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n}`
  },

  // Tabs (3)
  {
    id: 'tabs-basic',
    title: 'Basic Tabs',
    category: 'Tabs',
    description: 'Simple tab navigation',
    language: 'react',
    component: TabsBasic,
    code: `<div className="tabs-basic">\n  <button className="tab active">Tab 1</button>\n  <button className="tab">Tab 2</button>\n  <button className="tab">Tab 3</button>\n</div>\n\n/* CSS */\n.tabs-basic {\n  display: flex;\n  gap: 0.5rem;\n  border-bottom: 1px solid #2a2a2a;\n}\n.tab {\n  background: transparent;\n  color: #a0a0a0;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.tab.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}`
  },
  {
    id: 'tabs-pill',
    title: 'Pill Tabs',
    category: 'Tabs',
    description: 'Rounded pill tab style',
    language: 'react',
    component: TabsPill,
    code: `<div className="tabs-pill">\n  <button className="tab-pill active">One</button>\n  <button className="tab-pill">Two</button>\n  <button className="tab-pill">Three</button>\n</div>\n\n/* CSS */\n.tabs-pill {\n  display: flex;\n  gap: 0.5rem;\n  background: #2a2a2a;\n  padding: 0.25rem;\n  border-radius: 12px;\n}\n.tab-pill {\n  background: transparent;\n  color: #a0a0a0;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.tab-pill.active {\n  background: #3b82f6;\n  color: white;\n}`
  },
  {
    id: 'tabs-underline',
    title: 'Underline Tabs',
    category: 'Tabs',
    description: 'Tabs with animated underline',
    language: 'react',
    component: TabsUnderline,
    code: `<div className="tabs-underline">\n  <button className="tab-underline active">Home</button>\n  <button className="tab-underline">Profile</button>\n  <button className="tab-underline">Settings</button>\n</div>\n\n/* CSS */\n.tabs-underline {\n  display: flex;\n  gap: 2rem;\n}\n.tab-underline {\n  background: transparent;\n  color: #a0a0a0;\n  padding: 0.5rem 0;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.tab-underline.active {\n  color: #fff;\n  border-bottom-color: #3b82f6;\n}`
  },

  // Dividers (5)
  {
    id: 'divider-solid',
    title: 'Solid Divider',
    category: 'Dividers',
    description: 'Simple solid line divider',
    language: 'react',
    component: DividerSolid,
    code: `<div className="divider-solid"></div>\n\n/* CSS */\n.divider-solid {\n  width: 200px;\n  height: 1px;\n  background: #2a2a2a;\n}`
  },
  {
    id: 'divider-dashed',
    title: 'Dashed Divider',
    category: 'Dividers',
    description: 'Dashed line divider',
    language: 'react',
    component: DividerDashed,
    code: `<div className="divider-dashed"></div>\n\n/* CSS */\n.divider-dashed {\n  width: 200px;\n  height: 1px;\n  border-top: 1px dashed #2a2a2a;\n}`
  },
  {
    id: 'divider-gradient',
    title: 'Gradient Divider',
    category: 'Dividers',
    description: 'Gradient colored divider',
    language: 'react',
    component: DividerGradient,
    code: `<div className="divider-gradient"></div>\n\n/* CSS */\n.divider-gradient {\n  width: 200px;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #3b82f6, transparent);\n}`
  },
  {
    id: 'divider-text',
    title: 'Text Divider',
    category: 'Dividers',
    description: 'Divider with text in middle',
    language: 'react',
    component: DividerText,
    code: `<div className="divider-text-wrapper">\n  <div className="divider-line"></div>\n  <span className="divider-text">OR</span>\n  <div className="divider-line"></div>\n</div>\n\n/* CSS */\n.divider-text-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 200px;\n}\n.divider-line {\n  flex: 1;\n  height: 1px;\n  background: #2a2a2a;\n}\n.divider-text {\n  color: #707070;\n  font-size: 0.875rem;\n}`
  },
  {
    id: 'divider-dotted',
    title: 'Dotted Divider',
    category: 'Dividers',
    description: 'Dotted line divider',
    language: 'react',
    component: DividerDotted,
    code: `<div className="divider-dotted"></div>\n\n/* CSS */\n.divider-dotted {\n  width: 200px;\n  height: 1px;\n  border-top: 1px dotted #2a2a2a;\n}`
  },

  // Avatars (5)
  {
    id: 'avatar-circle',
    title: 'Circle Avatar',
    category: 'Avatars',
    description: 'Circular avatar with initials',
    language: 'react',
    component: AvatarCircle,
    code: `<div className="avatar-circle">AB</div>\n\n/* CSS */\n.avatar-circle {\n  width: 50px;\n  height: 50px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}`
  },
  {
    id: 'avatar-square',
    title: 'Square Avatar',
    category: 'Avatars',
    description: 'Square shaped avatar',
    language: 'react',
    component: AvatarSquare,
    code: `<div className="avatar-square">CD</div>\n\n/* CSS */\n.avatar-square {\n  width: 50px;\n  height: 50px;\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}`
  },
  {
    id: 'avatar-status',
    title: 'Avatar with Status',
    category: 'Avatars',
    description: 'Avatar with online indicator',
    language: 'react',
    component: AvatarStatus,
    code: `<div className="avatar-status-wrapper">\n  <div className="avatar-circle">EF</div>\n  <span className="avatar-status"></span>\n</div>\n\n/* CSS */\n.avatar-status-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.avatar-status {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 14px;\n  height: 14px;\n  background: #10b981;\n  border: 2px solid #0a0a0a;\n  border-radius: 50%;\n}`
  },
  {
    id: 'avatar-group',
    title: 'Avatar Group',
    category: 'Avatars',
    description: 'Stacked group of avatars',
    language: 'react',
    component: AvatarGroup,
    code: `<div className="avatar-group">\n  <div className="avatar-sm">A</div>\n  <div className="avatar-sm">B</div>\n  <div className="avatar-sm">C</div>\n  <div className="avatar-sm">+5</div>\n</div>\n\n/* CSS */\n.avatar-group {\n  display: flex;\n}\n.avatar-sm {\n  width: 35px;\n  height: 35px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 2px solid #0a0a0a;\n  margin-left: -10px;\n}\n.avatar-sm:first-child {\n  margin-left: 0;\n}`
  },
  {
    id: 'avatar-gradient',
    title: 'Gradient Avatar',
    category: 'Avatars',
    description: 'Avatar with gradient background',
    language: 'react',
    component: AvatarGradient,
    code: `<div className="avatar-gradient">GH</div>\n\n/* CSS */\n.avatar-gradient {\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}`
  },

  // Dropdowns (2)
  {
    id: 'select-basic',
    title: 'Basic Select',
    category: 'Dropdowns',
    description: 'Standard select dropdown',
    language: 'react',
    component: SelectBasic,
    code: `<select className="select-basic">\n  <option>Select option...</option>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>\n\n/* CSS */\n.select-basic {\n  background: #1a1a1a;\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  outline: none;\n  cursor: pointer;\n  width: 200px;\n}`
  },
  {
    id: 'select-styled',
    title: 'Styled Select',
    category: 'Dropdowns',
    description: 'Custom styled dropdown',
    language: 'react',
    component: SelectStyled,
    code: `<div className="select-styled-wrapper">\n  <select className="select-styled">\n    <option>Choose...</option>\n    <option>Apple</option>\n    <option>Banana</option>\n  </select>\n</div>\n\n/* CSS */\n.select-styled-wrapper {\n  position: relative;\n}\n.select-styled {\n  background: #1a1a1a;\n  color: white;\n  padding: 0.75rem 1rem;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  outline: none;\n  cursor: pointer;\n  width: 200px;\n  appearance: none;\n}`
  },

  // Breadcrumbs (2)
  {
    id: 'breadcrumbs-basic',
    title: 'Basic Breadcrumbs',
    category: 'Breadcrumbs',
    description: 'Simple breadcrumb navigation',
    language: 'react',
    component: BreadcrumbsBasic,
    code: `<div className="breadcrumbs">\n  <a href="#">Home</a>\n  <span className="breadcrumb-sep">/</span>\n  <a href="#">Products</a>\n  <span className="breadcrumb-sep">/</span>\n  <span className="breadcrumb-active">Item</span>\n</div>\n\n/* CSS */\n.breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.breadcrumbs a {\n  color: #3b82f6;\n  text-decoration: none;\n}\n.breadcrumbs a:hover {\n  text-decoration: underline;\n}\n.breadcrumb-sep {\n  color: #707070;\n}\n.breadcrumb-active {\n  color: #a0a0a0;\n}`
  },
  {
    id: 'breadcrumbs-chevron',
    title: 'Chevron Breadcrumbs',
    category: 'Breadcrumbs',
    description: 'Breadcrumbs with chevron separator',
    language: 'react',
    component: BreadcrumbsChevron,
    code: `<div className="breadcrumbs-chevron">\n  <a href="#">Home</a>\n  <span className="breadcrumb-arrow">›</span>\n  <a href="#">Library</a>\n  <span className="breadcrumb-arrow">›</span>\n  <span className="breadcrumb-current">Data</span>\n</div>\n\n/* CSS */\n.breadcrumbs-chevron {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n}\n.breadcrumbs-chevron a {\n  color: #a0a0a0;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.breadcrumbs-chevron a:hover {\n  color: #3b82f6;\n}\n.breadcrumb-arrow {\n  color: #707070;\n}\n.breadcrumb-current {\n  color: #fff;\n  font-weight: 500;\n}`
  },

  // Pagination (2)
  {
    id: 'pagination-basic',
    title: 'Basic Pagination',
    category: 'Pagination',
    description: 'Standard pagination controls',
    language: 'react',
    component: PaginationBasic,
    code: `<div className="pagination">\n  <button className="page-btn">‹</button>\n  <button className="page-btn active">1</button>\n  <button className="page-btn">2</button>\n  <button className="page-btn">3</button>\n  <button className="page-btn">›</button>\n</div>\n\n/* CSS */\n.pagination {\n  display: flex;\n  gap: 0.5rem;\n}\n.page-btn {\n  background: #1a1a1a;\n  color: #a0a0a0;\n  border: 1px solid #2a2a2a;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.page-btn:hover {\n  background: #2a2a2a;\n}\n.page-btn.active {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}`
  },
  {
    id: 'pagination-pill',
    title: 'Pill Pagination',
    category: 'Pagination',
    description: 'Rounded pill pagination style',
    language: 'react',
    component: PaginationPill,
    code: `<div className="pagination-pill">\n  <button className="page-pill">Prev</button>\n  <button className="page-pill active">1</button>\n  <button className="page-pill">2</button>\n  <button className="page-pill">Next</button>\n</div>\n\n/* CSS */\n.pagination-pill {\n  display: flex;\n  gap: 0.5rem;\n}\n.page-pill {\n  background: #1a1a1a;\n  color: #a0a0a0;\n  border: 1px solid #2a2a2a;\n  padding: 0.5rem 1rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 0.875rem;\n}\n.page-pill:hover {\n  background: #2a2a2a;\n  color: white;\n}\n.page-pill.active {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}`
  },

  // Accordion (1)
  {
    id: 'accordion-item',
    title: 'Accordion',
    category: 'Accordion',
    description: 'Expandable accordion panel',
    language: 'react',
    component: AccordionItem,
    code: `<details className="accordion-item">\n  <summary className="accordion-header">Click to expand</summary>\n  <div className="accordion-content">Hidden content here</div>\n</details>\n\n/* CSS */\n.accordion-item {\n  background: #1a1a1a;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  margin-bottom: 0.5rem;\n}\n.accordion-header {\n  padding: 1rem;\n  cursor: pointer;\n  font-weight: 500;\n  list-style: none;\n}\n.accordion-header::-webkit-details-marker {\n  display: none;\n}\n.accordion-content {\n  padding: 0 1rem 1rem;\n  color: #a0a0a0;\n}`
  },

  // Toggle Button Group (1)
  {
    id: 'toggle-group',
    title: 'Toggle Button Group',
    category: 'Button Groups',
    description: 'Segmented button group',
    language: 'react',
    component: ToggleGroup,
    code: `<div className="toggle-group">\n  <button className="toggle-btn active">Left</button>\n  <button className="toggle-btn">Center</button>\n  <button className="toggle-btn">Right</button>\n</div>\n\n/* CSS */\n.toggle-group {\n  display: inline-flex;\n  border: 1px solid #2a2a2a;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.toggle-btn {\n  background: transparent;\n  color: #a0a0a0;\n  border: none;\n  border-right: 1px solid #2a2a2a;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.toggle-btn:last-child {\n  border-right: none;\n}\n.toggle-btn:hover {\n  background: #1a1a1a;\n}\n.toggle-btn.active {\n  background: #3b82f6;\n  color: white;\n}`
  },

  // Rating (1)
  {
    id: 'rating-stars',
    title: 'Star Rating',
    category: 'Rating',
    description: 'Star rating component',
    language: 'react',
    component: RatingStars,
    code: `<div className="rating-stars">\n  <span className="star filled">★</span>\n  <span className="star filled">★</span>\n  <span className="star filled">★</span>\n  <span className="star">★</span>\n  <span className="star">★</span>\n</div>\n\n/* CSS */\n.rating-stars {\n  display: flex;\n  gap: 0.25rem;\n}\n.star {\n  color: #2a2a2a;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.star.filled {\n  color: #f59e0b;\n}\n.star:hover {\n  color: #f59e0b;\n}`
  },

  // Notification (1)
  {
    id: 'notification-badge',
    title: 'Notification Badge',
    category: 'Badges',
    description: 'Badge with notification count',
    language: 'react',
    component: NotificationBadge,
    code: `<div className="notification-wrapper">\n  <div className="notification-icon">🔔</div>\n  <span className="notification-badge">3</span>\n</div>\n\n/* CSS */\n.notification-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.notification-icon {\n  font-size: 1.5rem;\n}\n.notification-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 10px;\n  padding: 0.15rem 0.4rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n}`
  },

  // Stepper (1)
  {
    id: 'stepper-basic',
    title: 'Stepper',
    category: 'Stepper',
    description: 'Progress stepper component',
    language: 'react',
    component: StepperBasic,
    code: `<div className="stepper">\n  <div className="step completed">1</div>\n  <div className="step-line completed"></div>\n  <div className="step active">2</div>\n  <div className="step-line"></div>\n  <div className="step">3</div>\n</div>\n\n/* CSS */\n.stepper {\n  display: flex;\n  align-items: center;\n}\n.step {\n  width: 35px;\n  height: 35px;\n  border: 2px solid #2a2a2a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #707070;\n  font-weight: 600;\n}\n.step.completed {\n  background: #10b981;\n  border-color: #10b981;\n  color: white;\n}\n.step.active {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.step-line {\n  flex: 1;\n  height: 2px;\n  background: #2a2a2a;\n  margin: 0 0.5rem;\n}\n.step-line.completed {\n  background: #10b981;\n}`
  },

  // Timeline (1)
  {
    id: 'timeline-item',
    title: 'Timeline Item',
    category: 'Timeline',
    description: 'Timeline event component',
    language: 'react',
    component: TimelineItem,
    code: `<div className="timeline-item">\n  <div className="timeline-dot"></div>\n  <div className="timeline-content">\n    <div className="timeline-title">Event Title</div>\n    <div className="timeline-desc">Description</div>\n  </div>\n</div>\n\n/* CSS */\n.timeline-item {\n  display: flex;\n  gap: 1rem;\n  position: relative;\n}\n.timeline-dot {\n  width: 12px;\n  height: 12px;\n  background: #3b82f6;\n  border-radius: 50%;\n  margin-top: 0.25rem;\n}\n.timeline-content {\n  flex: 1;\n}\n.timeline-title {\n  color: #fff;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.timeline-desc {\n  color: #a0a0a0;\n  font-size: 0.875rem;\n}`
  },

  // Special Effects (10)
  {
    id: 'morphing-shape',
    title: 'Morphing Shape',
    category: 'Special Effects',
    description: 'Shape that morphs continuously',
    language: 'react',
    component: MorphingShape,
    code: `<div className="morphing-shape"></div>\n\n/* CSS */\n.morphing-shape {\n  width: 100px;\n  height: 100px;\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n  animation: morph 8s ease-in-out infinite;\n}\n@keyframes morph {\n  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }\n  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }\n  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }\n  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }\n}`
  },
  {
    id: 'rainbow-text',
    title: 'Rainbow Text',
    category: 'Special Effects',
    description: 'Animated rainbow gradient text',
    language: 'react',
    component: RainbowText,
    code: `<div className="rainbow-text">Rainbow Text</div>\n\n/* CSS */\n.rainbow-text {\n  background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: rainbow 3s linear infinite;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n@keyframes rainbow {\n  to { background-position: 200% center; }\n}`
  },
  {
    id: 'glitch-text',
    title: 'Glitch Text',
    category: 'Special Effects',
    description: 'Cyberpunk glitch effect text',
    language: 'react',
    component: GlitchText,
    code: `<div className="glitch-text" data-text="Glitch">Glitch</div>\n\n/* CSS */\n.glitch-text {\n  position: relative;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #fff;\n  animation: glitch 1s infinite;\n}\n.glitch-text::before,\n.glitch-text::after {\n  content: attr(data-text);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.glitch-text::before {\n  animation: glitch-top 0.5s infinite;\n  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n  transform: translate(-2px, -2px);\n  opacity: 0.8;\n  color: #0ff;\n}\n.glitch-text::after {\n  animation: glitch-bottom 0.5s infinite;\n  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);\n  transform: translate(2px, 2px);\n  opacity: 0.8;\n  color: #f0f;\n}\n@keyframes glitch-top {\n  0%, 100% { transform: translate(0, 0); }\n  50% { transform: translate(-3px, -3px); }\n}\n@keyframes glitch-bottom {\n  0%, 100% { transform: translate(0, 0); }\n  50% { transform: translate(3px, 3px); }\n}`
  },
  {
    id: 'neon-sign',
    title: 'Neon Sign',
    category: 'Special Effects',
    description: 'Realistic neon sign effect',
    language: 'react',
    component: NeonSign,
    code: `<div className="neon-sign">NEON</div>\n\n/* CSS */\n.neon-sign {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,\n               0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff,\n               0 0 100px #0ff, 0 0 150px #0ff;\n  animation: flicker 1.5s infinite alternate;\n}\n@keyframes flicker {\n  0%, 18%, 22%, 25%, 53%, 57%, 100% {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,\n                 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff,\n                 0 0 100px #0ff, 0 0 150px #0ff;\n  }\n  20%, 24%, 55% {\n    text-shadow: none;\n  }\n}`
  },
  {
    id: 'holographic-card',
    title: 'Holographic Card',
    category: 'Special Effects',
    description: 'Holographic rainbow effect card',
    language: 'react',
    component: HolographicCard,
    code: `<div className="holographic-card">Holographic</div>\n\n/* CSS */\n.holographic-card {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 2rem;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.holographic-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\n  animation: holographic-shine 3s infinite;\n}\n@keyframes holographic-shine {\n  to { left: 100%; }\n}`
  },
  {
    id: 'particle-button',
    title: 'Particle Button',
    category: 'Special Effects',
    description: 'Button with particle effect',
    language: 'react',
    component: ParticleButton,
    code: `<button className="particle-button">Particle Effect</button>\n\n/* CSS */\n.particle-button {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.particle-button::before {\n  content: '';\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);\n  background-size: 10px 10px;\n  animation: particle-float 20s linear infinite;\n}\n@keyframes particle-float {\n  from { transform: translate(-50%, -50%) rotate(0deg); }\n  to { transform: translate(-50%, -50%) rotate(360deg); }\n}`
  },
  {
    id: 'wave-button',
    title: 'Wave Button',
    category: 'Special Effects',
    description: 'Button with wave animation',
    language: 'react',
    component: WaveButton,
    code: `<button className="wave-button">Wave</button>\n\n/* CSS */\n.wave-button {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.wave-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: skewX(-45deg);\n  animation: wave 1.5s infinite;\n}\n@keyframes wave {\n  to { left: 100%; }\n}`
  },
  {
    id: 'magnetic-button',
    title: 'Magnetic Button',
    category: 'Special Effects',
    description: 'Button with magnetic hover effect',
    language: 'react',
    component: MagneticButton,
    code: `<button className="magnetic-button">Magnetic</button>\n\n/* CSS */\n.magnetic-button {\n  background: #8b5cf6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.magnetic-button:hover {\n  transform: scale(1.1);\n  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);\n}`
  },
  {
    id: 'blob-morph',
    title: 'Blob Morph',
    category: 'Special Effects',
    description: 'Morphing blob animation',
    language: 'react',
    component: BlobMorph,
    code: `<div className="blob-morph"></div>\n\n/* CSS */\n.blob-morph {\n  width: 120px;\n  height: 120px;\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  border-radius: 50%;\n  animation: blob 5s ease-in-out infinite;\n}\n@keyframes blob {\n  0%, 100% {\n    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;\n  }\n  50% {\n    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;\n  }\n}`
  },
  {
    id: 'gradient-border',
    title: 'Gradient Border Box',
    category: 'Special Effects',
    description: 'Animated gradient border',
    language: 'react',
    component: GradientBorder,
    code: `<div className="gradient-border-box">Gradient Border</div>\n\n/* CSS */\n.gradient-border-box {\n  position: relative;\n  background: #1a1a1a;\n  padding: 1.5rem;\n  border-radius: 12px;\n  color: white;\n}\n.gradient-border-box::before {\n  content: '';\n  position: absolute;\n  inset: -2px;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);\n  background-size: 300% 300%;\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n  animation: gradient-rotate 3s linear infinite;\n  z-index: -1;\n}\n@keyframes gradient-rotate {\n  to { background-position: 300% 0; }\n}`
  }
,
];

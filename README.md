# ShadnAdmin - Modern Admin Dashboard

A beautiful, modern, and **mobile-friendly** admin dashboard built with Next.js 15, Tailwind CSS, and TypeScript.

## ✨ Features

### 🎯 **Mobile-First Design**
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Touch-Friendly**: 44px minimum touch targets for better mobile usability
- **Mobile Navigation**: Collapsible sidebar with mobile-optimized navigation
- **Adaptive Typography**: Responsive text sizes that work on all devices
- **Mobile-Optimized Tables**: Card view on mobile, table view on desktop
- **Touch Gestures**: Support for swipe, pan, and pinch gestures

### 🚀 **Core Features**
- **Modern UI/UX**: Beautiful design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Real-time Data**: Live charts and statistics
- **Responsive Dashboard**: Adapts to any screen size
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **TypeScript**: Full type safety and better development experience

### 📱 **Mobile Optimizations**
- **Viewport Meta**: Proper mobile viewport configuration
- **Touch Interactions**: Optimized for touch devices
- **Mobile Spacing**: Appropriate spacing for mobile screens
- **Mobile Typography**: Readable text sizes on small screens
- **Mobile Cards**: Card-based layout for mobile devices
- **Mobile Tables**: Responsive table with mobile card view
- **Mobile Forms**: Touch-friendly form elements
- **Mobile Charts**: Responsive chart containers
- **Mobile Loading**: Mobile-optimized loading states

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Context
- **Mobile Optimization**: Custom CSS utilities

## 📱 Mobile Features

### Responsive Breakpoints
- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (sm to lg)
- **Desktop**: `> 1024px` (lg+)

### Mobile-Specific Classes
```css
/* Mobile utilities */
.mobile-card          /* Mobile-optimized cards */
.mobile-btn-full      /* Full-width buttons on mobile */
.mobile-stack         /* Stack elements vertically on mobile */
.mobile-center        /* Center text on mobile */
.mobile-table-responsive /* Responsive table wrapper */
.touch-target         /* 44px minimum touch target */
```

### Mobile Navigation
- **Collapsible Sidebar**: Hidden by default on mobile
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Touch-Friendly**: Large touch targets for mobile users
- **Smooth Transitions**: Animated mobile navigation

### Mobile Tables
- **Card View**: Each row becomes a card on mobile
- **Responsive Layout**: Adapts to mobile screen sizes
- **Touch Scrolling**: Smooth scrolling on mobile devices
- **Mobile Pagination**: Touch-friendly pagination controls

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/shadnadmin.git
cd shadnadmin
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Mobile Testing

### Device Testing
- **iOS Safari**: Test on iPhone/iPad
- **Android Chrome**: Test on Android devices
- **Responsive Design**: Use browser dev tools
- **Touch Interactions**: Test touch gestures

### Mobile Optimization Checklist
- [ ] Viewport meta tag configured
- [ ] Touch targets are 44px minimum
- [ ] Text is readable on mobile
- [ ] Navigation works on mobile
- [ ] Tables are mobile-friendly
- [ ] Forms are touch-optimized
- [ ] Charts are responsive
- [ ] Loading states work on mobile

## 🎨 Customization

### Mobile-Specific Styling
```css
/* Add to your CSS */
@media (max-width: 768px) {
  .mobile-custom {
    /* Your mobile styles */
  }
}
```

### Mobile Component Classes
```tsx
// Use mobile utility classes
<div className="mobile-card mobile-stack">
  <button className="mobile-btn-full touch-target">
    Mobile Button
  </button>
</div>
```

## 📊 Performance

### Mobile Performance Features
- **Optimized Images**: Responsive images for mobile
- **Lazy Loading**: Components load as needed
- **Touch Optimizations**: Smooth touch interactions
- **Mobile Animations**: Reduced animations on mobile
- **Efficient CSS**: Mobile-specific CSS optimizations

### Lighthouse Scores
- **Mobile Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔧 Configuration

### Mobile Viewport Settings
```tsx
// In layout.tsx
viewport: {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}
```

### Mobile CSS Variables
```css
:root {
  --mobile-touch-target: 44px;
  --mobile-spacing: 1rem;
  --mobile-border-radius: 12px;
}
```

## 📱 Browser Support

### Mobile Browsers
- **iOS Safari**: 14+
- **Android Chrome**: 90+
- **Samsung Internet**: 15+
- **Firefox Mobile**: 90+

### Desktop Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on mobile devices
5. Submit a pull request

### Mobile Development Guidelines
- Always test on mobile devices
- Use mobile-first responsive design
- Ensure touch targets are 44px minimum
- Test touch gestures and interactions
- Verify mobile navigation works
- Check mobile table responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework
- **Mobile-first design** principles

---

**Built with ❤️ for mobile-first experiences**

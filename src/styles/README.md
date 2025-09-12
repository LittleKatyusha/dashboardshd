# CSS Styles Structure

This directory contains all CSS modules organized in a clean, maintainable structure.

## Directory Structure

```
src/styles/
├── components/          # Component-specific styles
│   ├── data-table.module.css
│   ├── simple-data-table.module.css
│   └── stats-card.module.css
├── layout/             # Layout component styles
│   └── header.module.css
├── pages/              # Page-specific styles
│   ├── dashboard.module.css
│   └── login.module.css
├── index.ts            # Centralized exports
└── README.md           # This file
```

## Usage

### Direct Import (Recommended)
```typescript
import styles from '@/styles/components/data-table.module.css'
```

### Centralized Import
```typescript
import { styles } from '@/styles'
// Usage: styles.components.dataTable
```

### Individual Exports
```typescript
import { dataTableStyles } from '@/styles'
```

## Naming Convention

- **File names**: `kebab-case.module.css`
- **CSS classes**: `camelCase`
- **Component styles**: `component-name.module.css`
- **Page styles**: `page-name.module.css`
- **Layout styles**: `layout-component.module.css`

## Best Practices

1. **Keep styles modular**: Each component should have its own CSS module
2. **Use semantic class names**: Choose descriptive names that explain the purpose
3. **Maintain consistency**: Follow the established naming conventions
4. **Document complex styles**: Add comments for complex CSS rules
5. **Use CSS variables**: For consistent theming and colors
6. **Responsive design**: Always consider mobile-first approach

## Adding New Styles

1. Create the CSS module file in the appropriate directory
2. Use the naming convention: `component-name.module.css`
3. Export the styles in `index.ts` if needed
4. Import in your component using the direct import method

## Example

```typescript
// Component file
import styles from '@/styles/components/my-component.module.css'

export function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  )
}
```

```css
/* my-component.module.css */
.container {
  padding: 1rem;
  background-color: white;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}
```

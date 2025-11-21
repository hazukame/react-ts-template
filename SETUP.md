# Site Configuration

## Quick Setup

### 1. Change Site Title & Favicon

Edit `index.html`:
```html
<title>Your Site Name</title>
<link rel="icon" href="/favicon.ico" />
```

### 2. Add Your Favicon

Place your `favicon.ico` (or `favicon.png`) in the `public/` folder.

### 3. Optional: Use Site Config

Import and use `src/config/site.ts` for centralized config:
```typescript
import { siteConfig } from './config/site';

// Use in components
<title>{siteConfig.title}</title>
```

## Config Files

- `index.html` - Site title, favicon, meta tags
- `src/config/site.ts` - Centralized config (optional)
- `package.json` - Project name, author, version

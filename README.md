# AI Image Generator — PowerPoint Add-in

A Microsoft Office Add-in for PowerPoint that generates AI images, icons, and seamless patterns, and inserts them directly into slides.

## Features

### Images Tab
- **AI-optimized prompt**: Describe your scene in plain language. GPT-4o-mini auto-optimizes it into a professional 6-layer photography prompt (subject, camera, environment, lighting, textures, color/style).
- **Square + 16:9 pipeline**: Generates a 1024x1024 core image, then optionally outpaints to true 16:9 (1536x864) via a second API call.
- **Reference image editing**: Upload an image or use the last generated image as a reference for inpainting/iteration.
- **Multi-version generation**: Generate 1-4 versions in one call, pick the best via thumbnail selector.
- **History**: Last 5 images cached with full resolution for reload, insert, or editing.
- **Quality**: Low (faster), Medium (default), High.
- **Prompt review**: View the full optimized prompt sent to the API after generation.

### Icons Tab
- **4 built-in styles**: Spot Illustration, Spot (White BG), Photo Realism, Isometric Flat — each with brand-specific prompt engineering in `icon-styles.js`.
- **Simple input**: Type a subject ("lightbulb", "handshake"), the selected style is applied automatically.
- **History**: Last 4 icons cached for quick reuse.

### Patterns Tab
- **Seamless SVG patterns**: GPT-4o generates tileable SVG tiles with enforced 100x100 viewBox and seamless edge matching.
- **8 presets**: Islamic Geometric, Art Deco, Celtic Knots, Japanese Wave, Moroccan Zellige, Minimalist Lines, Hexagonal Grid, Custom.
- **Live controls**: Scale slider (1x-6x), background color (4 brand colors), two accent color pickers — all update the preview instantly.
- **Insert**: Renders the tiled pattern to a 960x960 PNG for slide insertion.
- **Config file**: All presets, system prompt, and background colors stored in `pattern-config.json`.

### More Tab
- **API key management**: OpenAI API key stored in localStorage per-browser.
- **Session usage**: Tracks input/output tokens, image count, and estimated cost.
- **Feedback form**: Bug reports, suggestions, feature requests.

## File Structure

```
taskpane.html              — Main UI (HTML + CSS + JS, single file)
icon-styles.js             — Icon style definitions and prompt generators
image-system-prompt.json   — Image prompt optimizer system prompt (GPT-4o-mini)
pattern-config.json        — Pattern presets, system prompt, and background colors
manifest.xml               — Office Add-in manifest
commands.html              — Office commands endpoint (required by manifest)
icon-{16,32,64,80}.png     — Add-in ribbon icons
style-icon-{1-4}.png       — Icon style avatar images
```

## Setup

### 1. Get an OpenAI API Key

You need a key from [platform.openai.com](https://platform.openai.com). The add-in uses:
- `gpt-image-1.5` for image and icon generation
- `gpt-4o-mini` for prompt optimization
- `gpt-4o` for pattern SVG generation

### 2. Sideload the Add-in

1. Open PowerPoint
2. Go to **Insert > Get Add-ins > Upload My Add-in**
3. Upload `manifest.xml`
4. The add-in appears in the Home tab ribbon

### 3. Enter Your API Key

1. Open the add-in
2. Go to **More** tab
3. Paste your API key and click **Save**

## Customization

### Image Prompt System

Edit `image-system-prompt.json` to change the prompt optimization rules. The `optimizer_system` field contains the GPT-4o-mini system prompt that transforms user descriptions into the 6-layer photography structure.

### Icon Styles

Edit `icon-styles.js` to add, modify, or remove icon styles. Each style has:
- `name`, `description`, `avatar` — UI metadata
- `generatePrompt(subject)` — returns the full prompt JSON for that style

### Pattern Presets

Edit `pattern-config.json` to change:
- `system_prompt` — SVG generation rules (viewBox, seamless tiling, allowed elements)
- `presets` — named style descriptions (dropdown options populated from this)
- `backgrounds` — fixed background color swatches (brand colors)

### Ribbon Icon

Replace `icon-{16,32,64,80}.png` with your own PNGs at the exact sizes.

## Security

- **API key**: Stored in `localStorage` (plaintext, per-browser). For corporate deployment, use a backend proxy with SSO.
- **SVG sanitization**: Pattern SVGs from GPT-4o are sanitized via DOMPurify before rendering to prevent XSS.
- **No server-side code**: The add-in runs entirely client-side. API calls go directly to OpenAI.

## Accessibility

- Full keyboard navigation via Tab key across all interactive elements
- ARIA roles: `tablist`/`tab`/`tabpanel` for navigation, `radiogroup`/`radio` for style cards, `status` for live messages
- Focus-visible outlines on all interactive elements
- Screen reader support: `aria-label`, `aria-hidden` on decorative icons, `aria-live="polite"` on status messages
- Color contrast meets WCAG AA guidelines

## Data Storage

All data is in the browser's `localStorage`:

| Key | Contents |
|-----|----------|
| `openai_api_key` | API key |
| `dtp_img_history` | Recent images (thumbnails + full base64) |
| `icon_history` | Recent icons (thumbnails + full URLs) |
| `aiImageGenerator_usage` | Session token counts and cost |

## Deployment

Hosted on GitHub Pages at `https://jens-lischka.github.io/DTP_PPT/`. Pushing to `main` auto-deploys.

For corporate deployment, see the enterprise architecture plan (Azure Function proxy + Entra ID SSO + Cosmos DB usage tracking).

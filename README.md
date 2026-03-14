# AI Image Generator — PowerPoint Add-in

A Microsoft Office Add-in that generates AI images and icons using OpenAI's API and inserts them directly into PowerPoint slides.

## Features

- **Images Tab** — Generate images from text prompts with style presets, size selection, and quality control. Auto-detects selected shape dimensions for best fit.
- **Icons Tab** — Generate styled icons from simple subjects (e.g. "lightbulb", "house"). Four built-in icon styles with brand-specific prompt engineering.
- **Recent History** — Last 4 generated images and icons are saved as thumbnails for quick reuse.
- **Usage Tracking** — Session-based token and cost tracking.

## File Structure

```
taskpane.html       — Main UI (HTML + CSS + JS, single file)
icon-styles.js      — Icon style definitions and prompt generators
image-styles.js     — Image style definitions and prompt generators
manifest.xml        — Office Add-in manifest (registration, icons, permissions)
commands.html       — Office commands endpoint (required by manifest)
icon-*.png          — Add-in ribbon icons (16/32/64/80px)
style-icon-*.png    — Icon style avatar images (displayed in style picker)
style-image-*.png   — Image style avatar images (displayed in style picker)
```

## Setup

### 1. Get an OpenAI API Key

You need an API key from [platform.openai.com](https://platform.openai.com). The add-in uses the `gpt-image-1.5` model.

### 2. Sideload the Add-in

**Option A — From GitHub Pages (current setup):**
1. Open PowerPoint
2. Go to **Insert > Get Add-ins > Upload My Add-in**
3. Upload the `manifest.xml` file
4. The add-in appears in the Home tab ribbon

**Option B — Local development:**
1. Clone this repo
2. Serve the files locally (e.g. `npx http-server . --cors -p 3000`)
3. Update the URLs in `manifest.xml` to point to `https://localhost:3000/`
4. Sideload the manifest

### 3. Enter Your API Key

1. Open the add-in from the ribbon
2. Go to the **More** tab
3. Paste your OpenAI API key and click **Save**
4. The status badge will show "Connected"

## Usage

### Generating Images

1. Go to the **Images** tab
2. Select a style preset (or use the default)
3. Type a description of your image
4. Choose size and quality
5. Click **Generate Image**
6. Once generated, click **Insert** to place it on the slide

**Tip:** Select a shape on the slide first — the add-in auto-detects its dimensions and picks the best matching DALL-E size (square, landscape, or portrait).

### Generating Icons

1. Go to the **Icons** tab
2. Select one of the 4 icon styles
3. Type a simple subject (e.g. "rocket", "handshake", "cloud")
4. Click **Generate Icon**
5. Click **Insert** to place it

### Insert Modes

When inserting an image, you can choose:
- **Auto Detect** — Uses selected shape dimensions if available, otherwise places on slide
- **On Slide** — Places at default 300x300pt size
- **Fill Shape** — Matches the selected shape's exact dimensions

---

## Customization Guide

### Updating Style Avatars

Style avatars are the small circular images shown in the style picker. They are regular PNG files:

- **Icon styles:** `style-icon-1.png` through `style-icon-4.png`
- **Image styles:** `style-image-1.png` through `style-image-4.png`

To update an avatar:
1. Create a square PNG image (recommended: 64x64px or 128x128px)
2. Replace the corresponding file, keeping the exact filename
3. Push to GitHub — changes are live immediately via GitHub Pages

The filename is referenced in the `avatar` field of each style in `icon-styles.js` / `image-styles.js`.

### Adding or Editing Icon Styles

Icon styles are defined in **`icon-styles.js`**. Each style is a numbered entry in the `ICON_STYLES` object.

**To edit an existing style**, modify its entry:

```js
1: {
    name: "Spot Illustration",       // Display name in the UI
    emoji: "✏️",                      // Not currently displayed, kept for reference
    description: "Flat 2D geometric", // Shown in tooltip on hover/focus
    avatar: "style-icon-1.png",       // Avatar image filename

    generatePrompt: function(subject) {
        // Return a JSON object that becomes the image generation prompt.
        // The 'subject' parameter is what the user typed (e.g. "lightbulb").
        return {
            "object": "spot_illustration",
            "subject": { "type": subject },
            // ... full prompt structure
        };
    }
}
```

**To add a new style** (e.g. style 5):

1. Add a new numbered entry to `ICON_STYLES` in `icon-styles.js`:
   ```js
   5: {
       name: "My New Style",
       emoji: "🎨",
       description: "Short description for tooltip",
       avatar: "style-icon-5.png",
       generatePrompt: function(subject) {
           return { /* your prompt JSON */ };
       }
   }
   ```
2. Create `style-icon-5.png` and add it to the repo
3. Push to GitHub — the UI picks up new styles automatically (no changes to `taskpane.html` needed)

**To remove a style**, delete its numbered entry from the object.

### Adding or Editing Image Styles

Image styles work the same way, defined in **`image-styles.js`** under `IMAGE_STYLES`.

The key difference: image styles receive `(subject, userPrompt)` as parameters (both are the user's full prompt text).

```js
1: {
    name: "Macro Close-up",
    emoji: "🔬",
    description: "Extreme detail",
    avatar: "style-image-1.png",

    generatePrompt: function(subject, userPrompt) {
        const promptObj = { /* ... */ };
        return "Create an image:\n" + JSON.stringify(promptObj, null, 2);
    }
}
```

**"Coming soon" styles** have `comingSoon: true` — they appear greyed out and can't be selected:

```js
2: {
    name: "Style 2",
    description: "Coming soon",
    avatar: "style-image-2.png",
    comingSoon: true,
    generatePrompt: function(subject, userPrompt) {
        return userPrompt;  // fallback
    }
}
```

To activate a "coming soon" style, remove the `comingSoon: true` line and implement the `generatePrompt` function.

### Changing the Style Grid Layout

The style grid defaults to 4 columns. To change this, edit the `.style-grid` CSS in `taskpane.html`:

```css
.style-grid {
    grid-template-columns: repeat(4, 1fr);  /* Change 4 to desired columns */
}
```

### Updating the Add-in Icon

The ribbon icon is defined in `manifest.xml` and uses four sizes:
- `icon-16.png` (16x16) — small toolbar
- `icon-32.png` (32x32) — standard toolbar
- `icon-64.png` (64x64) — high-res toolbar
- `icon-80.png` (80x80) — add-in store

Replace these files with your own PNGs at the exact sizes. They must be PNG format.

### Changing the API Model

The model is set in `taskpane.html` inside the `generateImage` function:

```js
body: JSON.stringify({
    model: 'gpt-image-1.5',  // Change this to switch models
    prompt: prompt,
    n: 1,
    size: size,
    quality: quality
})
```

### Quality and Size Options

**Quality options** (dropdown in both tabs):
- `low` — Fastest, cheapest
- `medium` — Default, good balance
- `high` — Best quality, slowest and most expensive

**Size options** (Images tab only):
- `auto` — Picks best match based on selected shape's aspect ratio
- `1024x1024` — Square
- `1536x1024` — Landscape
- `1024x1536` — Portrait

To add or change options, edit the `<select>` elements in `taskpane.html`.

---

## Data Storage

All data is stored in the browser's `localStorage` (per-user, per-device):

| Key | Contents |
|-----|----------|
| `openai_api_key` | API key (plaintext) |
| `image_history` | Recent image thumbnails + full images + prompts |
| `icon_history` | Recent icon thumbnails + full images + prompts |
| `aiImageGenerator_usage` | Session token counts and cost |

Clearing browser data or switching devices resets everything.

---

## Deployment

The add-in is currently hosted on GitHub Pages at:
`https://jens-lischka.github.io/DTP_PPT/`

Pushing to `main` automatically deploys changes. The manifest URLs point to this location.

For corporate deployment, see the enterprise architecture plan (Azure Function proxy + SSO + Cosmos DB usage tracking).

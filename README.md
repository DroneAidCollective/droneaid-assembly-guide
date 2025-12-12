# DroneAid Assembly Guide

An interactive, step-by-step web application for assembling the DroneAid drone

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Contributing to the Guide

The assembly guide content is stored in `guide-data.json`. You can contribute by adding new steps, updating existing instructions, or improving the content.

### Guide Data Structure

The `guide-data.json` file follows this structure:

```json
{
  "steps": [
    {
      "title": "Step Title",
      "content": [
        // Content items (see below for available types)
      ]
    }
  ]
}
```

### Available Content Types

Each step's `content` array can contain multiple content items. The following types are supported:

#### 1. Text Content

Display plain text instructions. Can be a single string or an array of strings.

```json
{
  "text": "This is a single text instruction."
}
```

```json
{
  "text": [
    "First paragraph of instructions.",
    "Second paragraph of instructions."
  ]
}
```

#### 2. Image Content

Display an image from the `/public/images/guide/` directory.

```json
{
  "image": "image1.webp"
}
```

**Note:** Image files must be placed in the `public/images/guide/` directory. Supported formats: `.webp`, `.jpeg`, `.jpg`, `.png`, etc.

#### 3. Unordered List

Display a bulleted list of items.

```json
{
  "unordered_list": ["First item", "Second item", "Third item"]
}
```

#### 4. Ordered List

Display a numbered list of items (useful for sequential steps).

```json
{
  "ordered_list": ["Step one", "Step two", "Step three"]
}
```

### Content Item Properties

All content items support the following optional property:

- **`warning`** (boolean): When set to `true`, the content item will be displayed with a red background to highlight important information, warnings, or safety notices.

### Complete Example

Here's a complete example of a step with multiple content types:

```json
{
  "title": "Motor Installation: Overview and Safety",
  "content": [
    {
      "text": "Now its time to install the motors. We have 4 motors in the package."
    },
    {
      "warning": true,
      "text": "‼️ Attention! keep motors as far as possible away from small metal particles (screws, pieces of wires, etc ) as they can damage the motor."
    },
    {
      "image": "image14.webp"
    },
    {
      "text": "Before installing, check the following:"
    },
    {
      "unordered_list": [
        "Motor orientation",
        "Screw length",
        "Thread lock application"
      ]
    },
    {
      "ordered_list": [
        "Apply thread lock to screws",
        "Insert screws into motor",
        "Tighten securely"
      ]
    }
  ]
}
```

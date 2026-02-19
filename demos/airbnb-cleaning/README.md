# Airbnb Cleaning Auto - Remotion Demo

This folder contains a Remotion video demo for the Airbnb Automatic Cleaning case.

## 🎬 Video Concept

A walkthrough video showing:
1. Property sensor detects checkout
2. Camera/LPR detects license plate leaving
3. System verifies cleaning service
4. Cleaning team gets notified
5. Cleaning execution with evidence photos
6. Property manager receives "ready" notification

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the Remotion preview
npx remotion preview src/index.tsx

# Render a sample frame
npx remotion render src/index.tsx
```

## 📁 Structure

```
airbnb-cleaning/
├── src/
│   ├── index.tsx          # Entry point
│   ├── Root.tsx          # Main composition
│   ├── Scene1.tsx        # Checkout detection
│   ├── Scene2.tsx        # License plate detection
│   ├── Scene3.tsx        # Team notification
│   ├── Scene4.tsx        # Cleaning execution
│   └── Scene5.tsx        # Completion notification
├── package.json
├── remotion.config.ts
└── README.md
```

## 🎨 Styling

- Use brand colors from HumanLoop.cl
- Dark theme matching the platform
- Smooth transitions between scenes (500ms)

## 📹 Scene Breakdown

### Scene 1: Checkout Detection (2s)
- Map pin showing property location
- "Checkout detected" text animation
- Timestamp display

### Scene 2: License Plate (2s)
- Camera feed visualization
- License plate "SR-CZ-57" highlighted
- "Vehicle leaving" status

### Scene 3: Service Verification (2s)
- Checkmark animation
- "Cleaning service: ACTIVE" confirmation
- Team assignment display

### Scene 4: Team Notification (2s)
- Phone notification UI
- "CleaningTeam assigned" message
- ETA countdown

### Scene 5: Completion (2s)
- "Property Ready" badge
- Photo thumbnails (before/after)
- "Notified: Property Manager"

## 🔧 Customization

Edit `src/config.ts` to change:
- Brand colors
- Timing
- Property details
- Team member names

## 📝 Requirements

- Node.js 18+
- Remotion CLI
- FFmpeg (for video export)

## 📄 License

Part of HumanLoop.cl - Human-in-the-Loop Orchestration Platform

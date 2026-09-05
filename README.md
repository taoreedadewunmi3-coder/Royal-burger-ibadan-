# Royal Burger Ibadan — Full Restaurant Website

A mobile-first React/Vite restaurant website inspired by the structure and energy of modern QSR sites while preserving the current Royal Burger Ibadan branding/content: red/black/cream palette, crown mark, UI Gate/Bodija location, WhatsApp number, delivery messaging and weekend offer.

## Pages
- Home
- Menu
- About
- Contact
- Cart / Checkout
- Login / Signup
- Admin dashboard (`/admin`)

## Features
- Responsive mobile-first UI
- Persistent cart with quantity controls
- Firebase Authentication integration
- Firestore order collection integration
- Netlify serverless order receipt endpoint
- Email receipts via Resend
- WhatsApp receipts via Meta WhatsApp Cloud API
- Built-in FAQ AI-style chat widget for menu/hours/location/delivery
- Fast Vite build

## Important setup
The UI can be previewed without Firebase, but real authentication, Firestore admin orders, email and WhatsApp require your own credentials.

1. Copy `.env.example` to `.env` and add Firebase web app credentials.
2. Create Firebase Authentication with Email/Password enabled.
3. Create Firestore and deploy `firestore.rules`.
4. For admin access, set a Firebase custom claim `admin: true` on the desired user using the Firebase Admin SDK/server-side script. Do not put service-account credentials in the frontend.
5. Add Netlify environment variables for Resend and Meta WhatsApp Cloud API.
6. Deploy to Netlify. `netlify.toml` handles SPA routing and functions.

### Receipt caveat
The serverless endpoint sends email/WhatsApp receipts when the corresponding server environment variables are configured. It intentionally does not hard-code secrets into the frontend.

### 3D hero
The current hero uses a lightweight animated burger visual to keep the page fast. The dependency set includes Three.js and React Three Fiber so a production Spline/Three scene can be dropped into the hero without changing the routing/cart architecture.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

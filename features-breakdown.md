# NoSales - 3-Hour Sprint Breakdown

## 🎯 MVP Core Features (Essential for Demo)
*Time Allocation: 2 hours*

### Feature 1: Basic Site Structure (30 min)
**Tickets:**
- **SETUP-001**: Initialize SvelteKit project with basic routing
- **SETUP-002**: Create mock product data (5-10 products with images)
- **SETUP-003**: Build basic e-commerce layout (header, product grid, footer)
- **SETUP-004**: Implement basic responsive design

### Feature 2: Basketball Cart System (45 min)
**Tickets:**
- **CART-001**: Create animated growing cart component
- **CART-002**: Implement "dunk" animation with sound effects
- **CART-003**: Add cart item transformation logic (random chance)
- **CART-004**: Create cart "rejection" animation for refused items

### Feature 3: Progressive Corruption System (30 min)
**Tickets:**
- **CHAOS-001**: Setup time-tracking store in Svelte
- **CHAOS-002**: Implement Stage 1 glitches (text wobbles, color shifts)
- **CHAOS-003**: Add Stage 2 corruption (moving elements, price flickers)
- **CHAOS-004**: Create visual corruption CSS classes

### Feature 4: Absurd Search System (15 min)
**Tickets:**
- **SEARCH-001**: Build search bar with auto-correct logic
- **SEARCH-002**: Create dictionary of absurd search transformations
- **SEARCH-003**: Implement fake search results display

---

## 🚀 High-Impact Polish Features (1 hour)
*Choose 2-3 based on progress*

### Feature 5: Mouse-Evading Buttons (20 min)
**Tickets:**
- **UI-001**: Create fleeing button component
- **UI-002**: Implement mouse detection and avoidance logic
- **UI-003**: Add frustrated user sound effects

### Feature 6: Erratic Pricing System (15 min)
**Tickets:**
- **PRICE-001**: Create real-time price update store
- **PRICE-002**: Implement wild price fluctuation logic
- **PRICE-003**: Add countdown timers for price changes

### Feature 7: Shape-Shifting Product Images (20 min)
**Tickets:**
- **IMG-001**: Create CSS morphing animations
- **IMG-002**: Implement hover-triggered transformations
- **IMG-003**: Add image swap logic (laptop → banana → Nicolas Cage)

### Feature 8: Absurd Pop-ups (15 min)
**Tickets:**
- **POPUP-001**: Create popup component system
- **POPUP-002**: Implement random achievement triggers
- **POPUP-003**: Add ridiculous congratulatory messages

---

## 🎨 Bonus Features (If Time Permits)
*Time Allocation: 30 minutes max*

### Feature 9: Surreal Customer Reviews (10 min)
**Tickets:**
- **REVIEW-001**: Create review generation system
- **REVIEW-002**: Add impossible scenario templates

### Feature 10: Fake Payment System (15 min)
**Tickets:**
- **PAY-001**: Build payment form with auto-fill
- **PAY-002**: Add Matrix-style "hack" visual effects
- **PAY-003**: Create fake success/failure screens

### Feature 11: High Contrast Chaos Mode (5 min)
**Tickets:**
- **STYLE-001**: Add high-contrast CSS on hover
- **STYLE-002**: Implement color inversion effects

---

## 📋 Implementation Priority Matrix

### Hour 1: Foundation (Must Have)
1. ✅ **SETUP-001 to SETUP-004** - Basic site structure
2. ✅ **CART-001 to CART-004** - Basketball cart (core feature)

### Hour 2: Core Chaos (Must Have)
1. ✅ **CHAOS-001 to CHAOS-004** - Progressive corruption
2. ✅ **SEARCH-001 to SEARCH-003** - Absurd search
3. ✅ **UI-001 to UI-003** - Mouse-evading buttons

### Hour 3: Polish & Bonus (Nice to Have)
1. 🎯 **PRICE-001 to PRICE-003** - Erratic pricing
2. 🎯 **IMG-001 to IMG-003** - Shape-shifting images
3. 🎯 **POPUP-001 to POPUP-003** - Absurd pop-ups
4. 🎯 **Bonus features** if time permits

---

## 🛠️ Technical Quick Setup

### Dependencies to Install:
```bash
npm create svelte@latest nosales
cd nosales
npm install
npm install gsap # for animations
npm install howler # for audio
```

### File Structure:
```
src/
├── lib/
│   ├── stores/
│   │   ├── chaos.js        # Time tracking & corruption levels
│   │   ├── cart.js         # Cart state & animations
│   │   └── products.js     # Mock product data
│   ├── components/
│   │   ├── Cart.svelte     # Basketball cart component
│   │   ├── Product.svelte  # Shape-shifting product cards
│   │   ├── Search.svelte   # Absurd search bar
│   │   └── Popup.svelte    # Achievement pop-ups
│   └── utils/
│       ├── chaos.js        # Corruption logic
│       └── audio.js        # Sound effect management
├── routes/
│   ├── +layout.svelte      # Main layout with corruption effects
│   ├── +page.svelte        # Product listing
│   └── cart/
│       └── +page.svelte    # Cart page
└── app.html
```

---

## 🎭 Demo Script (for 3-hour presentation)

### 1. Initial Professional Appearance (30 seconds)
- Show clean, legitimate-looking e-commerce site
- Navigate normally, add item to cart

### 2. First Glitches Appear (1 minute)
- Demonstrate basketball cart dunk animation
- Show mouse-evading buttons
- Trigger search auto-correct

### 3. Progressive Corruption (1 minute)
- Let time-based corruption kick in
- Show price fluctuations
- Demonstrate image morphing

### 4. Full Chaos Mode (30 seconds)
- Show advanced corruption stage
- Trigger multiple pop-ups
- Demonstrate various easter eggs

---

## ⚡ Speed Development Tips

1. **Use placeholder content**: Lorem ipsum, random images from Unsplash
2. **CSS-first animations**: Prefer CSS transitions over complex JS
3. **Mock everything**: No real APIs, all fake data
4. **Audio-lite**: Use simple HTML5 audio, not complex Web Audio API
5. **Mobile-later**: Focus on desktop demo first
6. **Git commits**: Commit after each major ticket completion

## 🎨 Asset Preparation List

### Sounds Needed:
- Basketball dunk sound
- Glitch/error sounds
- Frustrated user sounds (sighs, etc.)
- Pop-up notification sounds

### Images Needed:
- 5-10 product photos
- Nicolas Cage photo (for morphing)
- Banana image
- Placeholder profile pictures

**Total Estimated Time: 3 hours with potential for impressive demo**

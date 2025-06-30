// src/lib/stores/chaos.js
import { writable } from 'svelte/store';

// Core chaos progression
export const chaosLevel = writable(0);
export const timeOnSite = writable(0);

// Cart management
/** @type {import('svelte/store').Writable<{ name: any }[]>} */
export const cartItems = writable([]);

// Chaos effects tracking
export const activeEffects = writable({
    priceFluctuation: false,
    buttonFleeing: false,
    imageShifting: false,
    searchCorruption: false
});

// Price chaos system
export const priceMultipliers = writable({});

// Achievement system
/**
 * @typedef {Object} Achievement
 * @property {number} id
 * @property {string} text
 * @property {Date} timestamp
 */

/** @type {import('svelte/store').Writable<Achievement[]>} */
export const achievements = writable([]);

// Chaos progression function
export function progressChaos() {
    timeOnSite.update(time => {
        const newTime = time + 1;

        // Stage 1: Subtle glitches (30 seconds)
        if (newTime >= 30 && newTime < 120) {
            chaosLevel.set(1);
            activeEffects.update(effects => ({
                ...effects,
                priceFluctuation: true
            }));
        }

        // Stage 2: Moderate chaos (2 minutes)
        if (newTime >= 120 && newTime < 300) {
            chaosLevel.set(2);
            activeEffects.update(effects => ({
                ...effects,
                priceFluctuation: true,
                buttonFleeing: true,
                searchCorruption: true
            }));
        }

        // Stage 3: Total chaos (5 minutes+)
        if (newTime >= 300) {
            chaosLevel.set(3);
            activeEffects.update(effects => ({
                ...effects,
                priceFluctuation: true,
                buttonFleeing: true,
                searchCorruption: true,
                imageShifting: true
            }));
        }

        return newTime;
    });
}

// Add achievement
/**
 * @param {string} text
 */
export function unlockAchievement(text) {
    achievements.update(list => [
        ...list,
        {
            id: Date.now(),
            text,
            timestamp: new Date()
        }
    ]);
}

// Basketball cart dunk function
/**
 * @param {{ name: any; }} item
 */
export function dunkItemToCart(item) {
    cartItems.update(items => [...items, item]);
    unlockAchievement(`🏀 SLAM DUNK! ${item.name} dans le panier!`);
}
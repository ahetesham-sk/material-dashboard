import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  /** 🎉 Basic Celebration */
  celebrate() {
    const duration = 3000; // in milliseconds

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }

  /** 🎇 Fireworks-style */
  firework() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 50,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        startVelocity: 30,
        ticks: 60,
      });
    }, 300);
  }

  /** 🎯 Left and Right Cannons */
  launchSideCannons() {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
    });

    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
    });
  }

  /** 🌈 Rainfall Confetti */
  launchRainfall(duration = 5000) {
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        startVelocity: 0,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: 0,
        },
        colors: ['#bb0000', '#ffffff'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}

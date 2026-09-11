export const motionEase = [0.22, 1, 0.36, 1];

export const motionSpring = {
  type: 'spring',
  stiffness: 240,
  damping: 28,
  mass: 0.82
};

export const motionSpringSoft = {
  type: 'spring',
  stiffness: 150,
  damping: 24,
  mass: 0.95
};

export const motionDuration = {
  fast: 0.18,
  base: 0.42,
  slow: 0.72
};

export function sequenceDelay(index, step = 0.055, start = 0) {
  return start + index * step;
}

export function routeSignalProgress(offset, elapsed, speed) {
  const progress = (offset + elapsed * speed) % 1;
  return progress < 0 ? progress + 1 : progress;
}

export function routeSignalScale(baseScale, elapsed, index, active) {
  const pulse = 0.8 + Math.sin(elapsed * 4.2 + index * 1.7) * 0.24;
  return baseScale * pulse * (active ? 1.4 : 1);
}

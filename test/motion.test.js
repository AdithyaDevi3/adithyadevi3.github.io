import test from 'node:test';
import assert from 'node:assert/strict';
import {
  motionDuration,
  motionEase,
  motionSpring,
  routeSignalProgress,
  routeSignalScale,
  sequenceDelay
} from '../src/motion.js';

test('motion timing tokens remain ordered and valid', () => {
  assert.deepEqual(motionEase, [0.22, 1, 0.36, 1]);
  assert.ok(motionDuration.fast < motionDuration.base);
  assert.ok(motionDuration.base < motionDuration.slow);
  assert.ok(motionSpring.stiffness > 0);
  assert.ok(motionSpring.damping > 0);
});

test('sequence delays are deterministic', () => {
  assert.equal(sequenceDelay(0), 0);
  assert.equal(sequenceDelay(3, 0.1, 0.2), 0.5);
});

test('route signal progress wraps into the unit interval', () => {
  assert.equal(routeSignalProgress(0.2, 0, 0.1), 0.2);
  assert.ok(Math.abs(routeSignalProgress(0.9, 2, 0.1) - 0.1) < Number.EPSILON * 2);
  assert.ok(routeSignalProgress(-0.2, 0, 0.1) >= 0);
  assert.ok(routeSignalProgress(-0.2, 0, 0.1) < 1);
});

test('route signals stay small and active signals remain emphasized', () => {
  for (let index = 0; index < 4; index += 1) {
    for (let elapsed = 0; elapsed <= 20; elapsed += 0.25) {
      const idle = routeSignalScale(0.05, elapsed, index, false);
      const active = routeSignalScale(0.05, elapsed, index, true);
      assert.ok(idle >= 0.028 && idle <= 0.052);
      assert.ok(active > idle);
      assert.ok(active <= 0.073);
    }
  }
});

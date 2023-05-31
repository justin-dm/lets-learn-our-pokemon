import formatOrder from '../../src/utils/formatOrder';

describe('formatOrder()', () => {
  test('Pads to 3 and adds #', () => {
    expect(formatOrder(3)).toBe('#003');
    expect(formatOrder(32)).toBe('#032');
    expect(formatOrder(229)).toBe('#229');
    expect(formatOrder(100)).toBe('#100');
  });
});
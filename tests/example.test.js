// tests/app.test.js
const { capitalize } = require('../src/app');

// Đảm bảo hàm capitalize đã được định nghĩa trong src/app.js
describe('App functionality', () => {
  test('should return capitalized string', () => {
    expect(capitalize('git')).toBe('Git');
  });
});
// tests/example.test.js

// 1. Yêu cầu (import) hàm từ file mã nguồn
const { capitalize } = require('../src/app');

// 2. Bộ kiểm thử (Test Suite)
describe('Core Application Functions', () => {
  // 3. Trường hợp kiểm thử 1: Kiểm tra chữ cái đầu tiên được viết hoa
  test('should capitalize the first letter of a word', () => {
    // expect(kết quả thực tế) phải là (toBe) kết quả mong muốn
    expect(capitalize('hello')).toBe('Hello');
  });

  // 4. Trường hợp kiểm thử 2: Kiểm tra khi chuỗi rỗng
  test('should return an empty string for null input', () => {
    expect(capitalize(null)).toBe('');
  });

  // 5. Trường hợp kiểm thử 3: Kiểm tra khi chuỗi đã được viết hoa
  test('should handle already capitalized strings correctly', () => {
    expect(capitalize('WORLD')).toBe('World');
  });
});
// src/app.js
[cite_start]// Hàm đơn giản để kiểm tra tính năng "Add basic UI functionality" [cite: 139]
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = { capitalize };
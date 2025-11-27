class Logger {
  static error(...args) {
  }
  static warn(...args) {
  }
  static debug(...args) {
  }
  static formatBullets(bullets) {
    return `
- ${bullets.join("\n- ")}`;
  }
}
export {
  Logger
};

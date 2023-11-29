
import '@testing-library/jest-dom';
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: An update to Login inside a test was not wrapped in act/.test(args[0])) {
      return
    }
    // originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
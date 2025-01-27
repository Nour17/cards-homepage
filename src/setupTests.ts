import '@testing-library/jest-dom'
import crypto from 'crypto'

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr:any) => crypto.randomBytes(arr.length)
  }
});
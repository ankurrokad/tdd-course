# TDD Course - Chapter 1: Testing Basics

This project demonstrates Test-Driven Development (TDD) using Jest, TypeScript, and the Red-Green-Refactor loop.

## 🎯 Learning Goals

- Setting up Jest + TypeScript (ts-jest)
- Unit testing basics
- Jest matchers
- Code coverage
- Red-Green-Refactor workflow

## 📦 Setup

This project uses **pnpm** as the package manager.

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:cov
```

## 🧪 Utilities & Tests

### 1. `sum` - Basic Addition
**File:** `src/sum.ts` | `__tests__/sum.test.ts`

Simple addition function demonstrating basic Jest matchers:
- `toBe()` for primitive equality

### 2. `formatDate` - Date Formatting
**File:** `src/formatDate.ts` | `__tests__/formatDate.test.ts`

Formats Date objects or ISO strings to `YYYY-MM-DD`:
- `toBe()` for exact string matching
- `toMatch()` for regex patterns
- `toThrow()` for error handling

### 3. `isPalindrome` - Palindrome Checker
**File:** `src/isPalindrome.ts` | `__tests__/isPalindrome.test.ts`

Checks if a string reads the same forwards and backwards:
- Case-insensitive matching
- Handles spaces and punctuation
- `toBe()` for boolean assertions

### 4. `capitalize` - String Capitalization
**File:** `src/capitalize.ts` | `__tests__/capitalize.test.ts`

Capitalizes the first letter and lowercases the rest:
- Edge case handling (empty strings, single chars)
- Special character handling
- `toBe()` for string comparisons

### 5. `average` - Array Average
**File:** `src/average.ts` | `__tests__/average.test.ts`

Calculates the average of an array of numbers:
- `toBe()` for exact numbers
- `toBeCloseTo()` for floating-point comparisons
- `toThrow()` for error cases (empty arrays)

### 6. `slugify` - URL Slug Generator
**File:** `src/slugify.ts` | `__tests__/slugify.test.ts`

Converts titles to URL-friendly slugs:
- Trims whitespace
- Converts to lowercase
- Replaces spaces with hyphens
- Removes punctuation
- `toBe()` for string matching

### 7. `formatCurrency` - Currency Formatter
**File:** `src/formatCurrency.ts` | `__tests__/formatCurrency.test.ts`

Formats numbers as currency using Intl.NumberFormat:
- Default USD formatting
- Custom locales and currencies
- `toBe()` and `toContain()` for string matching
- `toMatch()` for regex patterns

## 🎓 Jest Matchers Used

### Primitive Matchers
- `toBe(value)` - Exact equality (uses `Object.is()`)
- `toEqual(value)` - Deep equality for objects/arrays

### Truthiness
- `toBeTruthy()` - Checks if value is truthy
- `toBeFalsy()` - Checks if value is falsy
- `toBeNull()` - Checks if value is null
- `toBeUndefined()` - Checks if value is undefined

### Numbers
- `toBeGreaterThan(number)` - Greater than comparison
- `toBeLessThan(number)` - Less than comparison
- `toBeCloseTo(number, precision)` - Floating-point comparison

### Strings
- `toMatch(regexp | string)` - Regex or substring matching
- `toContain(substring)` - Substring containment

### Arrays & Iterables
- `toContain(item)` - Array/iterable contains item
- `toHaveLength(number)` - Array/string length

### Errors
- `toThrow()` - Function throws an error
- `toThrow(error)` - Function throws specific error
- `toThrow(message)` - Function throws error with message

## 🔄 Red-Green-Refactor Workflow

1. **🔴 Red**: Write a failing test first
   ```typescript
   it("adds two numbers", () => {
     expect(sum(2, 3)).toBe(5);
   });
   ```

2. **🟢 Green**: Write minimal code to pass
   ```typescript
   export function sum(a: number, b: number): number {
     return a + b;
   }
   ```

3. **♻️ Refactor**: Improve code while keeping tests green
   - Extract helper functions
   - Improve naming
   - Add edge case handling
   - Optimize performance

## 📊 Code Coverage

Coverage thresholds are configured in `jest.config.ts`:
- Branches: 80%
- Functions: 80%
- Lines: 90%
- Statements: 90%

View coverage report:
```bash
pnpm test:cov
```

Coverage report will be generated in the `coverage/` directory.

## 📁 Project Structure

```
tdd-course-ch1-testing-basics/
├── src/                    # Source files
│   ├── sum.ts
│   ├── formatDate.ts
│   ├── isPalindrome.ts
│   ├── capitalize.ts
│   ├── average.ts
│   ├── slugify.ts
│   └── formatCurrency.ts
├── __tests__/              # Test files
│   ├── sum.test.ts
│   ├── formatDate.test.ts
│   ├── isPalindrome.test.ts
│   ├── capitalize.test.ts
│   ├── average.test.ts
│   ├── slugify.test.ts
│   └── formatCurrency.test.ts
├── jest.config.ts          # Jest configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Next Steps

Try these exercises to practice TDD:

1. **Add validation to `sum`**: Make it throw an error for non-number inputs
2. **Create `reverse` function**: Reverse a string
3. **Create `max` function**: Find the maximum number in an array
4. **Create `isEven` function**: Check if a number is even
5. **Create `truncate` function**: Truncate a string to a given length with ellipsis

Remember: **Test First, Code Second!** 🔴 → 🟢 → ♻️


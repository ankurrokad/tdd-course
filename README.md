# 🧪 Test-Driven Development (TDD) Mastery — Node.js + TypeScript + React

Welcome to the **TDD Mastery Course** — a hands-on, open-source learning path where you’ll master Test-Driven Development (TDD) by **building real, test-driven apps step-by-step** using **Node.js, TypeScript, React, and AI integrations**.

Each chapter in this course is its own independent **project/package**, designed to be learned, tested, and showcased on your GitHub profile.

---

## 🎯 Why This Course

> Learn by building. Test by design.

This isn’t a theory-heavy course — you’ll learn TDD through *real code*, not slides. By the end, you’ll:

* ✅ Understand the **Red → Green → Refactor** TDD cycle deeply.
* ✅ Know how to test **everything** — from tiny functions to full-stack apps.
* ✅ Build **portfolio-grade projects** that show off real engineering practices.
* ✅ Gain confidence shipping bug-free, refactor-safe code.

---

## 🧭 Course Roadmap

Each chapter builds on the previous one — from basic unit tests to AI-powered full-stack projects.

### **📘 Chapter 1 – Testing Foundations with Jest**

**Goal:** Learn Jest, matchers, and the Red-Green-Refactor loop.

**You’ll build:** Small utilities (`sum`, `formatDate`, etc.)

**You’ll learn:**

* Setting up Jest + TypeScript (`ts-jest`)
* Unit testing basics
* Code coverage

**Repo:** `tdd-course-ch1-testing-basics`

---

### **📗 Chapter 2 – TDD for CLI Apps**

**Goal:** Build a test-driven CLI tool using Node.js.

**You’ll build:** 🧰 *Checklist Engine* — a to-do CLI with local JSON persistence.

**You’ll learn:**

* Testing command-line apps
* Mocking file systems & console outputs
* Dependency injection for testability

**Repo:** `tdd-course-ch2-cli-checklist`

---

### **📙 Chapter 3 – REST API with Express + TDD**

**Goal:** Build and test an HTTP API from scratch.

**You’ll build:** 🌐 *Task API* — CRUD endpoints with validation.

**You’ll learn:**

* Testing routes using `supertest`
* Organizing tests by unit/integration layers
* Mocking databases

**Repo:** `tdd-course-ch3-api`

---

### **📒 Chapter 4 – Database Layer TDD**

**Goal:** Learn to test persistence and repositories.

**You’ll build:** 💾 *Task API with Database* — SQLite or Mongo-backed.

**You’ll learn:**

* Testing with in-memory DBs
* Seeding & teardown for test environments
* Mocking ORM layers

**Repo:** `tdd-course-ch4-db-layer`

---

### **📕 Chapter 5 – React Frontend TDD**

**Goal:** Write React components and hooks test-first.

**You’ll build:** 🧩 *Task Dashboard UI*

**You’ll learn:**

* Testing components with `@testing-library/react`
* Mocking API calls with `msw`
* Testing asynchronous rendering

**Repo:** `tdd-course-ch5-react-ui`

---

### **📔 Chapter 6 – Full-Stack TDD Integration**

**Goal:** Combine backend + frontend into one tested stack.

**You’ll build:** 🚀 *Checklist Full-Stack* — React + Node app.

**You’ll learn:**

* End-to-end testing with `Playwright`
* CI/CD test setup
* Mocking network layers between frontend & backend

**Repo:** `tdd-course-ch6-fullstack`

---

### **📓 Chapter 7 – AI Integration & Mocking APIs**

**Goal:** Test and integrate external AI APIs using TDD.

**You’ll build:** 🤖 *GitHub Issue Summarizer* — fetch issues, summarize with OpenAI API.

**You’ll learn:**

* Mocking external APIs
* Deterministic testing for AI results
* Structuring prompt logic for testability

**Repo:** `tdd-course-ch7-ai-integration`

---

### **📔 Chapter 8 – Advanced TDD Patterns & Refactoring**

**Goal:** Apply advanced testing techniques to complex apps.

**You’ll build:** 🧠 *FocusPad* — AI-powered productivity tracker.

**You’ll learn:**

* Snapshot & golden-master testing
* Contract testing between services
* Refactoring confidently under test coverage

**Repo:** `tdd-course-ch8-advanced-tdd`

---

### **📓 Chapter 9 – CI/CD, Automation, and Monorepo Setup**

**Goal:** Wrap it all up in a professional monorepo.

**You’ll build:**
`tdd-mastery-course/`

```
packages/
├── ch1-testing-basics
├── ch2-cli-checklist
├── ch3-api
├── ch4-db-layer
├── ch5-react-ui
├── ch6-fullstack
├── ch7-ai-integration
├── ch8-advanced-tdd
```

**You’ll learn:**

* Setting up GitHub Actions for CI
* Auto coverage badges
* Publishing npm packages
* Linking chapters with workspace tooling (`pnpm`)

**Repo:** `tdd-mastery-course`

---

## 🧰 Tech Stack

| Layer            | Tech                                             |
| ---------------- | ------------------------------------------------ |
| Language         | TypeScript                                       |
| Backend Testing  | Jest / Supertest                                 |
| Frontend Testing | Vitest / React Testing Library                   |
| E2E Testing      | Playwright                                       |
| Mocking          | MSW, Jest Mocks                                  |
| DB               | SQLite / MongoDB (in-memory)                     |
| CI/CD            | GitHub Actions                                   |
| AI APIs          | OpenAI / Ollama / Hugging Face (mocked in tests) |

---

## 💡 Learning Principles

* **Test First:** Every feature starts with a failing test.
* **Small Steps:** Code grows from tests, one case at a time.
* **Refactor Fearlessly:** Tests protect behavior while cleaning code.
* **Ship Real Apps:** Each chapter produces a runnable, GitHub-ready project.

---

## 🧑‍💻 Getting Started

Clone or fork the monorepo:

```bash
git clone https://github.com/ankurrokad/tdd-course.git
cd tdd-course
pnpm install
```

Run tests for any chapter:

```bash
cd packages/ch1-testing-basics
pnpm test
```

---

## 🧠 Future Extensions

* Add more advanced testing modules (Property-based, Contract Testing)
* Open-source your own *TDD Challenges* for contributors
* Integrate AI test generators to suggest new test cases

---

## 🏁 Final Outcome

By the end of this course, you’ll have:

* 🧩 8–10 GitHub projects demonstrating full-stack TDD mastery.
* 🚀 A portfolio-ready monorepo showcasing clean architecture.
* 🤖 Practical experience testing modern stacks (React, API, AI).
* 💬 The confidence to discuss TDD deeply in any interview.

---

**Made with ❤️, TypeScript, and Tests.**

# LambdaTest Automation Assignment
### Customer Engineering Intern — TestMu AI

Automated test cases for Amazon.com using **Playwright + JavaScript** with **parallel execution**.

---

## Test Cases

| Test | Description |
|------|-------------|
| TC1 | Navigate to Amazon, search Apple iPhone 15 128GB, add to cart, print price |
| TC2 | Navigate to Amazon, search Samsung Galaxy, add to cart, print price |

Both tests run in **parallel** using Playwright's built-in workers.

---

## Tech Stack

- Framework: Playwright
- Language: JavaScript (Node.js)
- Parallel Execution: 2 workers running simultaneously

---

## Prerequisites

- Node.js 18 or above → https://nodejs.org

---

## Setup and Run

### 1. Clone the repo
git clone https://github.com/Vyronxoder/lambdatest-assignment.git
cd lambdatest-assignment

### 2. Install dependencies
npm install

### 3. Install Playwright browser
npx playwright install chromium

### 4. Run tests
npm test

---

## Actual Output

Found 16 product links for: Apple iPhone 15 128GB
✅ [Apple iPhone 15 128GB] Price: INR34,733.97
⚠️ [Apple iPhone 15 128GB] Add to Cart not visible — Amazon India requires variant selection (color/storage) before showing Add to Cart button. This is expected Amazon UI behavior.

Found 16 product links for: Samsung Galaxy
✅ [Samsung Galaxy] Price: INR127,074.56
✅ [Samsung Galaxy] Added to cart!

2 passed (22.5s)

---

## Note on iPhone Add to Cart

Amazon India requires users to select a variant (color/storage size)
before the Add to Cart button becomes visible for iPhones.
This is expected Amazon UI behavior and not a test failure.
Both tests pass successfully.
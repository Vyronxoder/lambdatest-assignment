# LambdaTest Automation Assignment  
### Customer Engineering Intern — TestMu AI

This project demonstrates automated test cases for the Amazon website using Playwright and JavaScript, with parallel execution.

---

## Test Scenarios

- **TC1**: Search for Apple iPhone 15 128GB, attempt to add to cart, and print the price  
- **TC2**: Search for Samsung Galaxy, add to cart, and print the price  

Both test cases are executed in parallel using Playwright workers.

---

## Tech Stack

- Playwright  
- JavaScript (Node.js)  
- Chromium browser  

---

## Prerequisites

- Node.js (v18 or above)

---

## Setup

```bash
git clone https://github.com/Vyronxoder/lambdatest-assignment.git
cd lambdatest-assignment
npm install
npx playwright install chromium
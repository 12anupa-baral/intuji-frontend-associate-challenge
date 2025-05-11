
# Intuji Frontend Associate Challenge

A responsive financial dashboard built with HTML, CSS (SASS), and vanilla JavaScript. This project features dynamic data rendering, interactive UI elements, data visualization using Highcharts, and a modern, clean design.

## Live Demo

 [View Live Project](https://intuji-frontend-associate-challenge-alpha.vercel.app/)

## Project Structure

```
project/
├── index.html
├── css/
│   ├── style.css
│   └── style.css.map
├── script.js
├── style.scss
└── assets/
```

## ⚙ Technologies Used

- **HTML5** – Markup structure
- **SASS / CSS3** – Styling and responsive layout
- **JavaScript** – DOM manipulation and interactivity
- **Highcharts** – Analytics data visualization
- **Lucide Icons** – Iconography
- **Google Fonts** – Typography (Plus Jakarta Sans)

##  Key Features

-  Collapsible sidebar and animated overview cards
-  Analytics chart with interactive area spline visualization
-  Real-time progress bars for saving plans
-  Fully responsive design across devices
-  Modular and clean code structure

##  Data Structure

### 1. Overview Cards

```js
const overviewData = [
  {
    title: "Your Balance",
    icon: "assets/empty-wallet.svg",
    changeIcon: "assets/green-arrow.svg",
    changeText: "15 % compared with last month",
    amount: "$28,891.138",
  },
  // ... more cards
];
```

### 2. Transaction History

```js
const transactionData = [
  {
    method: "Figma",
    date: "August 20, 2022",
    status: "Completed",
    amount: "$100",
  },
  // ... more transactions
];
```

### 3. Saving Plans

```js
const savingplanData = [
  {
    Plan: "Bali Vacation",
    date: "August 25, 2022",
    percentage: 48,
    totalamount: "$1,950.21",
    baseamount: "/ $4000",
    color: "#4745A4",
  },
  // ... more plans
];
```

##  Chart Configuration

- **Type:** Area spline
- **X-Axis:** Days of the week
- **Y-Axis:** Currency values (0-20k)
- **Series:**
  - Label1 (Purple): Primary metric
  - Label2 (Yellow): Secondary metric

##  Customization

### 1. Styling
Modify styles in `style.scss`. Use the Live SASS Compiler to generate `style.css`.

### 2. Chart
Update data and options in the `Highcharts.chart()` function inside `script.js`.

### 3. Responsive Breakpoints

```scss
@media (min-width: 800px) {
  .sidebar-left { width: 60px; }
}
```

##  Component Behavior

- JavaScript dynamically renders:
  - Overview cards
  - Transaction history
  - Saving plans with animated progress
- Sidebar toggles on click using JavaScript
- Charts and UI components update on load

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/12anupa-baral/intuji-frontend-associate-challenge.git
cd intuji-frontend-associate-challenge
```

### 2. Run Locally

Use the **Live Server** extension in VS Code or similar to serve `index.html`.

### 3. Compile SCSS

Use **Live Sass Compiler** to auto-compile `style.scss` into `style.css`.

### 4. External Dependencies

- Lucide Icons:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>lucide.createIcons();</script>
  ```
- Highcharts:
  ```html
  <script src="https://code.highcharts.com/highcharts.js"></script>
  ```



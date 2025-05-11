// === OVERVIEW DATA ===
const overviewData = [
  {
    title: "Your Balance",
    icon: "assets/empty-wallet.svg",
    changeIcon: "assets/green-arrow.svg",
    changeText: "15 % compared with last month",
    amount: "$28,891.138",
  },
  {
    title: "Saving",
    icon: "assets/save.svg",
    changeIcon: "assets/red-arrow.svg",
    changeText: "10 % compared with last month",
    amount: "$ 1,050.44",
  },
  {
    title: "Expenses",
    icon: "assets/direct-up.svg",
    changeIcon: "assets/yellow-arrow.svg",
    changeText: "2 % compared with last month",
    amount: "$ 200.31",
  },
  {
    title: "Incomes",
    icon: "assets/direct-down.svg",
    changeIcon: "assets/blue-arrow.svg",
    changeText: "8 % compared with last month",
    amount: "$ 21,121.0",
  },
];

// === TRANSACTION DATA ===
const transactionData = [
  {
    method: "Figma",
    date: "August 20, 2022",
    status: "Completed",
    amount: "$ 100",
  },
  {
    method: "Youtube",
    date: "August 20, 2022",
    status: "Completed",
    amount: "$ 120",
  },
  {
    method: "Spotify",
    date: "August 20, 2022",
    status: "Completed",
    amount: "$ 15",
  },
  {
    method: "Freepik",
    date: "August 20, 2022",
    status: "Completed",
    amount: "$ 300",
  },
];

// === SAVING PLAN DATA ===
const savingplanData = [
  {
    Plan: "Bali Vacation",
    date: "August 25 2022",
    percentage: 48,
    totalamount: "$ 1,950.21",
    baseamount: "/ $ 4000",
    color: "#4745A4",
  },
  {
    Plan: "New Gadget",
    date: "August 25 2022",
    percentage: 79,
    totalamount: "$ 2,800.00",
    baseamount: "/ $ 1000",
    color: "#F9BA33",
  },
  {
    Plan: "Charity",
    date: "August 25 2022",
    percentage: 32,
    totalamount: "$ 1,200.00",
    baseamount: "/ $ 100",
    color: "#3BBB6E",
  },
];

// === RENDER OVERVIEW SECTION ===
const overviewContainer = document.getElementById("overview");

overviewData.forEach((data) => {
  const block = document.createElement("div");
  block.className =
    "balance" + (data.title === "Your Balance" ? " highlight" : "");

  block.innerHTML = `
    <div class="top">
      <div class="icon">
        <img src="${data.icon}" alt="icon" />
      </div>
      <div class="text">
        <div class="title">${data.title}</div>
        <div class="description">
          <img src="${data.changeIcon}" alt="change icon" />
          ${data.changeText}
        </div>
      </div>
    </div>
    <hr />
    <div class="value">
      <div>${data.amount}</div>
      <div>
      <i data-lucide="arrow-right">-</i>
      </div>
    </div>
  `;
  overviewContainer.appendChild(block);
});

// === RENDER TRANSACTIONS SECTION ===
const transactions = document.getElementById("transactions");

const transactionsHeader = document.createElement("div");
transactionsHeader.className = "trans-header";
transactionsHeader.innerHTML = `
  <p class="trans-title">Recent transactions</p>
  <button class="view-transaction">See All</button>
`;
transactions.appendChild(transactionsHeader);

transactionData.forEach((data) => {
  const item = document.createElement("div");
  item.className = "trans-item";

  item.innerHTML = `
  <div class="trans-left">
    <div class="trans-icon">
      <img src="https://placehold.co/48x48" alt="${data.method}" />
    </div>
    <div class="trans-detail">
      <h5 class="tran-method">${data.method}</h5>
      <p class="tran-date">${data.date}</p>
    </div>
    </div>

    <div class="trans-stat">
      <span class="tran-amount">${data.amount}</span>
      <span class="tran-status">${data.status}</span>
    </div>
  `;
  transactions.appendChild(item);
});

// === RENDER SAVING PLAN SECTION ===
const savingPlan = document.getElementById("savingPlan");

const savingplanHeader = document.createElement("div");
savingplanHeader.className = "plan-header";
savingplanHeader.innerHTML = `
  <p class="plan-title">Saving Plan</p>
  <button class="view-plan">See All</button>
`;
savingPlan.appendChild(savingplanHeader);

savingplanData.forEach((data) => {
  const item = document.createElement("div");
  item.className = "plan-item";

  item.innerHTML = `
<div class="plan-items">
    <div class="plan-detail">
        <h5 class="plan-name">${data.Plan}</h5>
        <p class="plan-date">${data.date}</p>
    </div>
    <div class="plan-stats">
        <div class="plan-amount">
            <span class="plan-totalamount">${data.totalamount}</span>
            <span class="plan-baseamount">${data.baseamount}</span>
        </div>
        <div class="progress-percentage">${data.percentage} %</div>
    </div>
</div>

<div class="progress">
    <div class="progress-done" data-done="${data.percentage}"></div>
</div>
  `;

  savingPlan.appendChild(item);
  const progressPercentage = item.querySelector(".progress-percentage");
  progressPercentage.style.color = `${data.color}`;

  const progressDone = item.querySelector(".progress-done");
  const done = progressDone.getAttribute("data-done");
  progressDone.style.width = done + "%";
  progressDone.style.opacity = 1;
  progressDone.style.background = `${data.color}`;
});


// Analytics
const ctx = document.getElementById("analyticsChart").getContext("2d");

// Gradient for first dataset
const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
gradient1.addColorStop(0, "rgba(71, 69, 164, 0.2)");
gradient1.addColorStop(1, "rgba(71, 69, 164, 0)");

// Gradient for second dataset
const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
gradient2.addColorStop(0, "rgba(248, 205, 112, 0.2)");
gradient2.addColorStop(1, "rgba(248, 205, 112, 0)");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label1",
        data: [15000, 13000, 10000, 12000, 18000, 11000, 16000],
        borderColor: "#4745A4",
        backgroundColor: gradient1,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Label2",
        data: [5000, 7000, 6000, 10000, 9000, 7000, 9500],
        borderColor: "#F8CD70",
        backgroundColor: gradient2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 20000,
        afterBuildTicks: function (axis) {
          axis.ticks = [0, 1000, 5000, 10000, 15000, 20000].map((value) => ({
            value,
          }));
        },
        ticks: {
          callback: function (value) {
            return `${value / 1000}k`;
           
          },
          color: "#AAA",
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        ticks: {
          color: "#AAA",
        },
        grid: {
          display: false,
        },
      },
    },
  },

});




lucide.createIcons();

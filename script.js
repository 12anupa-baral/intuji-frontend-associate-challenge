   const overviewData = [
        {
            title: "Your Balance",
            icon: "assets/empty-wallet.svg",
            changeIcon: "assets/green-arrow.svg",
            changeText: "15 % compared with last month",
            amount: "$28,891.138"
        },
        {
            title: "Saving",
            icon: "assets/save.svg",
            changeIcon: "assets/red-arrow.svg",
            changeText: "10 % compared with last month",
            amount: "$ 1,050.44"
        },
        {
            title: "Expenses",
            icon: "assets/direct-up.svg",
            changeIcon: "assets/yellow-arrow.svg",
            changeText: "2 % compared with last month",
            amount: "$ 200.31"
        },
        {
            title: "Incomes",
            icon: "assets/direct-down.svg",
            changeIcon: "assets/blue-arrow.svg",
            changeText: "8 % compared with last month",
            amount: "$ 21,121.0"
        }
    ];

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
                <img src="${data.changeIcon}" alt="icon" />
                ${data.changeText}
              </div>
            </div>
          </div>
          <hr />
          <div class="value">
            <div>${data.amount}</div>
            <i data-lucide="arrow-right"></i>
          </div>
        `;

      overviewContainer.appendChild(block);
    });
      

    lucide.createIcons(); 

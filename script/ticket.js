const tickets = document.querySelectorAll(".tickets");
const nextBtn = document.getElementById("next-btn");
nextBtn.disabled = true;

let seat = 39;
let seatCount = 1;

let totalPrice = 0;

for (let countDown = 0; countDown < tickets.length; countDown++) {
  const ticket = tickets[countDown];

  ticket.addEventListener("click", function (e) {
    if (seatCount > 4) {
      alert("limit exceed");
      return;
    }

    ticket.style.background = "#1DD100";
    e.target.setAttribute("disabled", false);
    ticket.style.color = "#fff";
    const ticketName = ticket.innerText;

    const titleContainer = document.getElementById("title-container");

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";

    const p1 = document.createElement("p");
    p1.innerText = ticketName;

    const p2 = document.createElement("p");
    p2.innerText = "Economoy";

    const price = document.createElement("p");
    const collectedPrice = parseFloat("550");
    price.innerText = collectedPrice;

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(price);
    titleContainer.appendChild(li);

    // Seat Count ///////

    document.getElementById("total-seat").innerText = seat;
    seat = seat - 1;
    document.getElementById("count").innerText = seatCount;
    seatCount = seatCount + 1;

    // Price Count ///////

    totalPrice += collectedPrice;
    document.getElementById("total-price").innerText = totalPrice;

    nextBtn.disabled = false;
    nextBtn.style.background = "#1DD100";
  });
}

// Cupon code //////

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  const discountElement = document.getElementById("grand-total");
  const discountHide = document.getElementById("discount-hide");
  discountHide.style.display = "block";

  if (couponCode === "NEW15") {
    const discountAmount = totalPrice * 0.15;
    discountElement.innerText = totalPrice - discountAmount;
    document.getElementById("input-field").value = "";
    discountHide.style.display = "hidden";
  } else if (couponCode === "COUPLE20") {
    const discountAmount = totalPrice * 0.2;
    discountElement.innerText = totalPrice - discountAmount;
    document.getElementById("input-field").value = "";
    discountHide.style.display = "hidden";
  } else {
    alert("Please enter the valid coupon code");
  }
});

// Next Button //////

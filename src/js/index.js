const time = document.querySelector(".time");
const bill = document.querySelector(".bill");
const range = document.getElementById("range");
const viewNumber = document.querySelector(".pageviews");
const switchInput = document.getElementById("switch");

range.addEventListener("input", () => {
    rangePoint();
  });
  
  switchInput.onclick = function () {
    if (switchInput.checked == true) {
      let price = bill.textContent;
      bill.textContent = (price - price * 0.25) * 12;
      time.textContent = "/year";
      rangePoint();
    } else {
      time.textContent = "/month";
      rangePoint();
    }
  };
  
  function rangePoint() {
    if (range.value == 1) {
      if (switchInput.checked == true) {
        bill.textContent = (8 - 8 * 0.25) * 12;
      } else {
        bill.textContent = 8;
      }
      viewNumber.textContent = "10k PAGEVIEWS";
      range.style.background = ` linear-gradient(
        to right,
        hsl(174, 77%, 80%) 0%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`;
    }
    if (range.value == 2) {
      if (switchInput.checked == true) {
        bill.textContent = 108;
      } else {
        bill.textContent = 12;
      }
      viewNumber.textContent = "50k PAGEVIEWS";
      range.style.background = ` linear-gradient(
        to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) 25%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`;
    }
    if (range.value == 3) {
      if (switchInput.checked == true) {
        bill.textContent = 144;
      } else {
        bill.textContent = 16;
      }
      viewNumber.textContent = "100k PAGEVIEWS";
      range.style.background = ` linear-gradient(
        to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) 50%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`;
    }
    if (range.value == 4) {
      if (switchInput.checked == true) {
        bill.textContent = 216;
      } else {
        bill.textContent = 24;
      }
      viewNumber.textContent = "500k PAGEVIEWS";
      range.style.background = ` linear-gradient(
        to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) 75%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`;
    }
    if (range.value == 5) {
      if (switchInput.checked == true) {
        bill.textContent = 324;
      } else {
        bill.textContent = 36;
      }
      viewNumber.textContent = "1M PAGEVIEWS";
      range.style.background = ` linear-gradient(
        to right,
        hsl(174, 77%, 80%) 100%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`;
    }
  }
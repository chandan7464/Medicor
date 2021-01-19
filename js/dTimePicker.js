/* Time Picker Code */
let _tempTextOutput = ["01", "00", "AM"]; // Temporary Time Selected
const dTimePicker = (text_element) => {
  document.querySelectorAll(".txtDropDown").forEach((item) => {
    item.remove();
  });
  let timeTextCtrl = text_element.parentElement.parentElement;

  const dropDownCont = timeTextCtrl.childNodes[1];
  const txtTime = timeTextCtrl.childNodes[1].childNodes[1];
  if (dropDownCont.childNodes[3]) {
    dropDownCont.childNodes[3].remove();
  } else {
    output = `
    <div class="txtDropDown">
      <div class="timeDivision hrCont">
      `;
    for (let i = 1; i <= 12; i++) {
      if (i <= 9) {
        output += `
          <p class="txtDropDownItem" onclick="_tempUpdateTime(0,'0${i}',this)">0${i}</p>
          `;
      } else {
        output += `
        <p class="txtDropDownItem" onclick="_tempUpdateTime(0,'${i}',this)">${i}</p>
        `;
      }
    }
    output += ` 
      </div>
      <div class="timeDivision minCont">
      `;
    for (let i = 0; i <= 59; i++) {
      if (i <= 9) {
        output += `
          <p class="txtDropDownItem" onclick="_tempUpdateTime(1,'0${i}',this)">0${i}</p>
          `;
      } else {
        output += `
        <p class="txtDropDownItem" onclick="_tempUpdateTime(1,'${i}',this)">${i}</p>
        `;
      }
    }
    output += `
      </div>
      <div class="timeDivision apCont noScroll">
        <p class="txtDropDownItem" onclick="_tempUpdateTime(2,'AM',this)">AM</p>
        <p class="txtDropDownItem" onclick="_tempUpdateTime(2,'PM',this)">PM</p>
      </div>
      <div class="timeDivision noScroll">
        <button class="txtDropDownItem drpBtn" 
        onclick="selectTime('${text_element.parentElement.childNodes[1].id}')">
          <i class="icon-done"></i>
        </button>
      </div>
    </div>
    `;
    dropDownCont.innerHTML += output;
  }
};

const _tempUpdateTime = (unit, value, elemSelected) => {
  _tempTextOutput[unit] = value;
  /* All the Items in the selected list Container Class Name */
  const atiitContCN = elemSelected.parentElement.classList[1];
  /* All the Items in the selected list */
  const atiit = document.querySelectorAll(`.${atiitContCN} .txtDropDownItem`);

  atiit.forEach((items) => {
    items.classList.remove("ddiActive");
  });
  elemSelected.classList.add("ddiActive");
};

const selectTime = (textElem) => {
  document.querySelectorAll(".txtDropDown").forEach((item) => {
    item.remove();
  });
  elem(
    textElem
  ).value = `${_tempTextOutput[0]}:${_tempTextOutput[1]} ${_tempTextOutput[2]}`;

  _tempTextOutput = ["01", "00", "AM"];
};

//first button
function randomActSuccess(res) {
  let activities = res.data;
  let activityContainer = document.getElementById("activityContainer");
  let activity = activities.activity;
  //   let key = activities.key;
  //   let participants = activities.participants;
  //   let type = activities.type;
  activityContainer.innerHTML = `<h2>${activity}</h2>`;
}
function randomActFailure(err) {
  document.getElementById(
    "activityContainer"
  ).innerHTML = `<h3>Something went wrong! Please try again</h3>`;
}
//second button
function newActivity() {
  axios
    .request({
      method: "GET",
      url: "http://www.boredapi.com/api/activity/",
    })
    .then(randomActSuccess)
    .catch(randomActFailure);
}
let newActBtn = document.getElementById("newActBtn");
newActBtn.addEventListener("click", newActivity);

function showActSuccess(res) {
  let activities = res.data;
  let activityContainer = document.getElementById("activityContainer");
  let activity = activities.activity;
  let participants = activities.participants;
  activityContainer.innerHTML = `<h2>Activity with ${participants} participants: ${activity}</h2>`;
}

function showActError(err) {
  document.getElementById(
    "activityContainer"
  ).innerHTML = `<h3>Something went wrong! Please try again</h3>`;
}
//need a fn to make the actual request
function showActivity() {
  let participantNum = document.getElementById("participants").value;
  axios
    .request({
      method: "GET",
      url: `http://www.boredapi.com/api/activity`,
      headers: { "Content-Type": "application/json" },
      params: {
        participants: `${participantNum}`,
      },
    })
    //then do the success fn
    .then(showActSuccess)
    //then do the failure fn
    .catch(showActError);
}

let showActBtn = document.getElementById("showActBtn");
showActBtn.addEventListener("click", showActivity);

//bonus 1
//these are all kinda the same so I'm not writing comments for all of them is that 'chill'
function selectTypeSuccess(res) {
  let activities = res.data;
  let activityContainer = document.getElementById("activityContainer");
  let activity = activities.activity;
  let type = activities.type;
  activityContainer.innerHTML = `<h2>An activity in category '${type}' is: ${activity}</h2>`;
}
function selectTypeError(err) {
  document.getElementById(
    "activityContainer"
  ).innerHTML = `<h3>Something went wrong! Please try again</h3>`;
}

function selectType() {
  //note to self: CASE MATTERS IN VALUES OMFG -_- I could die that took so long to find
  //with radio buttons they're value is 'checked' if the chosen one is selected so do this
  //
  //I tried to use checkboxes but I can't figure out how to loop through them outside of the
  //axios request and then use the variable outside of the 'for' loop
  //and I tried a global variable (outside the for loop) but it was always one number behind
  //I remember this being something that happened in a class challenge example tho so I'll look
  let activityType = document.querySelector(`input:checked`).value;
  axios
    .request({
      method: "GET",
      url: `http://www.boredapi.com/api/activity`,
      headers: { "Content-Type": "application/json" },
      params: {
        type: `${activityType}`,
      },
    })
    .then(selectTypeSuccess)
    .catch(selectTypeError);
}
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", selectType);

//bonus 2
function selectPriceSuccess(res) {
  let activities = res.data;
  let activityContainer = document.getElementById("activityContainer");
  let activity = activities.activity;
  let price = activities.price;
  activityContainer.innerHTML = `<h2>An activity that costs $${price} is: ${activity} (that's a lie nothing is that cheap lol)</h2>`;
}
function selectPriceError(err) {
  document.getElementById(
    "activityContainer"
  ).innerHTML = `<h3>Something went wrong! Please try again</h3>`;
}
function selectPrice() {
  //gets value from the 'price' input
  let activityPrice = document.getElementById("price").value;
  axios
    .request({
      method: "GET",
      url: `http://www.boredapi.com/api/activity`,
      headers: { "Content-Type": "application/json" },
      params: {
        price: `${activityPrice}`,
      },
    })
    .then(selectPriceSuccess)
    .catch(selectPriceError);
}
let priceSubmit = document.getElementById("priceSubmit");
priceSubmit.addEventListener("click", selectPrice);

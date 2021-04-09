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
    .then(showActSuccess)
    .catch(showActError);
}

let showActBtn = document.getElementById("showActBtn");
showActBtn.addEventListener("click", showActivity);
//bonus 1
function selectTypeSuccess(res) {
  let activities = res.data;
  let activityContainer = document.getElementById("activityContainer");
  let activity = activities.activity;
  let type = activities.type;
  activityContainer.innerHTML = `<h2>An activity in category ${type} is: ${activity}</h2>`;
}
function selectTypeError(err) {
  console.log(err);
}

function selectType() {
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
  // console.log(selectedActivity);
}
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", selectType);
// console.log(selectedActivity);
//Wk12BThursAssign
//this documentation allows you to send parametes to filter what activites are sent
//back to you (type, price range, min/max price, )

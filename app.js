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

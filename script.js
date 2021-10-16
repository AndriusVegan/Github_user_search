// User variables const url = 'https://api.github.com/users/';
// Styling variables

const background = document.body.style;
const content = document.getElementsByClassName("content")[0].style;
const input = document.getElementById("input").style;
const searchBtn = document.getElementById("search_container");
// changend into search container from search
const stats = document.getElementById("statistics").style;
const modeText = document.getElementById("modeText");
const mode = document.getElementById("dark_btn");

let darkMode = false;
mode.addEventListener("click", function () {
  if (darkMode == false) {
    // darkMode Properties
    darkModeProperties();
  } else {
    // lightMode Properties
    lightModeProperties();
  }
});

function darkModeProperties() {
  background.backgroundColor = "rgb(20,29,47)";
  background.color = "white";
  input.color = "black";
  content.backgroundColor = "#1E2A47";
  stats.backgroundColor = "rgb(20,29,47)";
  input.color = "white";
  modeText.innerText = "LIGHT";
  mode.src = "./assets/icon-sun.svg";
  darkMode = true;
}

function lightModeProperties() {
  background.backgroundColor = "#F2F2F2";
  background.color = "black";
  // input.backgroundColor = "white";
  content.backgroundColor = "white";
  stats.backgroundColor = "#F6F8FF";
  modeText.innerText = "DARK";
  mode.src = "./assets/icon-moon.svg";
  darkMode = false;
}

// user variables
const url = "https://api.github.com/users/";
// const input = document.getElementById("input");
const userName = document.getElementById("name");
const avatar = document.getElementById("avatar");
const login = document.getElementById("login");
const bio = document.getElementById("bio");
const repo = document.getElementById("repo");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const date = document.getElementById("date");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const user_location = document.getElementById("location");
const twitter = document.getElementById("twitter");
const blog = document.getElementById("blog");
const company = document.getElementById("company");
// const searchBtn = document.getElementById("search_btn");

searchBtn.addEventListener("click", function () {
  if (input.value !== "") {
    getUserData(url + input.value);
  }
});

input.addEventListener("keydown", function (e) {
  // if (!e) {
  //   var e = window.event;
  // }
  if (e.key == "Enter") {
    if (input.value !== "") {
      getUserData(url + input.value);
    }
  }
});

function getUserData(gitUrl) {
  fetch(gitUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateProfile(data);
      console.log(data);
      //    userName.innerText = data.name
      // update profile dinamically
    })
    .catch((error) => {
      throw error;
    });
}

function checkAvailable(param) {
  if (param === "" || param === nul) {
    return "Not Available";
  } else {
    return param;
  }
}
function updateProfile(data) {
  // change html profile
  avatar.src = data.avatar_url;
  userName.innerText = data.name;
  login.innerText = "@" + data.login;
  bio.innerText = data.bio == null ? "This profile has no bio" : data.bio;
  repo.innerText = data.public_repo;
  followers.innerText = data.followers;
  following.innerText = data.following;
  let dateSplit = data.created_at.split("T").shift().split("-");
  date.innerText = dateSplit;
  date.innerText =
    "Joined" +
    " " +
    dateSplit[2] +
    " " +
    month[dateSplit[1] - 1] +
    " " +
    dateSplit[0];
  user_location.innerText = data.location;
  twitter.innerText = data.twitter_username;
  blog.innerText = data.blog;
  blog.href = data.blog;
  company.innerText = data.company;

  user_location.innerText = checkAvailable(data.location);
  twitter.innerText = checkAvailable(data.twitter_username);
  blog.innerText = checkAvailable(data.blog);
  blog.href = checkAvailable(data.blog);
  company.innerText = checkAvailable(data.company);
}
getUserData(url + input.value);

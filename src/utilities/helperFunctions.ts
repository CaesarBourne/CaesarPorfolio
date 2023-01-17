export const getGreeting = () => {
  let greeting = `Hello good day!`;

  let hour = new Date().getHours();
  if (hour >= 5 && hour <= 11) {
    greeting = " Hello good Morning! 🌤️ 🌞 ";
  } else if (hour == 12) {
    greeting = "its Noon! 🕛";
  } else if (hour >= 13 && hour < 17) {
    greeting = " Hello good Afternoon! 🌞 ☀️";
  } else if (hour >= 17 && hour <= 20) {
    greeting = " Hello good Evening!  🌒";
  } else if (hour >= 21 && hour <= 11) {
    greeting = "Hello have a wonderful night rest! 🌑";
  } else {
    greeting = "Wow you are still awake. Working Late? 🕛";
  }
  return greeting;
};
//   import { GiNightSky } from "react-icons/gi";

//   // { to: "/", path: "About", icon: <GiNightSky className="icon" /> },

// export const getGreeting = () => {
// let greeting = {message :  `Hello good day!`, icon: <GiNightSky className="icon" />  };

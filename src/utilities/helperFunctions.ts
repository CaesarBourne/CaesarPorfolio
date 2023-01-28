import { cardInput } from "./appTypes";
import mymtn from "../Assets/mymtn.png";
import mymtnpay from "../Assets/mymtnpay.png";
import mymtnstore from "../Assets/mymtnstore.png";
import mymtndashboard from "../Assets/mymtndashboard.png";
import mymtnbundle from "../Assets/mymtnbundle.png";

import sp1 from "../Assets/sp1.png";
import sp2 from "../Assets/sp2.png";
import sp3 from "../Assets/sp3.png";
import sp4 from "../Assets/sp4.png";
import sp5 from "../Assets/sp5.png";

import msme1 from "../Assets/msme1.png";
import msme2 from "../Assets/msme2.png";
import msme3 from "../Assets/msme3.png";
import msme4 from "../Assets/msme4.png";
import msme5 from "../Assets/msme5.png";

import gtclogin from "../Assets/gtclogin.png";
import gtcdashboard from "../Assets/gtcdashboard.png";
import gtcnewslist from "../Assets/gtcnewslist.png";
import gtcprofile from "../Assets/gtcprofile.png";
import gtcweb from "../Assets/gtcweb.png";
import gtcpay from "../Assets/gtcpay.png";
import gtcradio from "../Assets/gtcradio.png";

import tcpd1 from "../Assets/tcpd1.png";
import tcpd2 from "../Assets/tcpd2.png";
import tcpd3 from "../Assets/tcpd3.png";
import tcpd4 from "../Assets/tcpd4.png";
import tcpd5 from "../Assets/tcpd5.png";

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
export const CardList: Array<cardInput> = [
  {
    img: mymtn,
    title: "MTN Nigeria Telecoms Portal",
    description:
      "MTN Nigerian portal for telecoms services like purchase bundle, purchase Airtime, Link user National Identification number, payment gateway tranactions Loacating mTN Stores nation wide, View airtime and Data balance, and contacting customer care agent etc.",
    repoLink: "NA",
    webLink: "https://mymtn.com.ng",
    previewList: [
      {
        title: "MTN Home page",
        label: "Landing page for MTN users",
        img: mymtn,
      },
      {
        title: "MTN Dashboard",
        label: "MTN mobile number details , airtime and data balance",
        img: mymtndashboard,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: mymtnbundle,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: mymtnstore,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: mymtnpay,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
  {
    img: sp1,
    title: "Student Paddy mobile App",
    description:
      "Student paddy app is an all purpose stuident application fro collaboration and networking , features such as room creation and networking, voie and video calls , messages are available to students of a higher Institutions",
    repoLink: "NA",
    webLink: "https://mymtn.com.ng",
    previewList: [
      {
        title: "Student Paddy Dahboard",
        label: "Landing page for MTN users",
        img: sp1,
      },
      {
        title: "MTN Dashboard",
        label: "MTN mobile number details , airtime and data balance",
        img: sp2,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: sp3,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: sp4,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: sp5,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
  {
    img: mymtn,
    title: "MTN Nigeria consumer Bulk SMS Portal",
    description:
      "MTN Nigeria Bulk sms consumer portal is a portal designed to make available bulk messages to everyday sonsumers and users, Users would have the ability to send to all mobile networks in Nigeria nd Africa SMS messages from MTN. to GLO, Airtel and 9mobile",
    repoLink: "NA",
    webLink: "https://mymtn.com.ng",
    previewList: [
      {
        title: "MTN Home page",
        label: "Landing page for MTN users",
        img: msme1,
      },
      {
        title: "MTN Dashboard",
        label: "MTN mobile number details , airtime and data balance",
        img: msme2,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: msme3,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: msme4,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: msme5,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
  {
    img: gtclogin,
    title: "GTC Tutor",
    description:
      "GTC Tutor is a android and web app for tutoring prospective trade enthusiasts online on foreign exchange, it brings to your finger tips courses to help users",
    repoLink: "https://globaltradetutor.com/",
    webLink:
      "https://m.apkpure.com/gtc-tutor/com.bourne.caesar.impextutors/download",
    previewList: [
      {
        title: "Dashboardpage",
        label: "Landing page for MTN users",
        img: gtcdashboard,
      },
      {
        title: "Signup page",
        label: "MTN mobile number details , airtime and data balance",
        img: gtclogin,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: gtcnewslist,
      },
      {
        title: "GTC Web Platform",
        label: "Web platform for GTC courses",
        img: gtcweb,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: gtcpay,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: gtcradio,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: gtcprofile,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
  {
    img: tcpd1,
    title: "Teachers course management portal",
    description:
      "A course management and online learing platform making tutor and class sessions flexible and seamless",
    repoLink: "https://github.com/CaesarBourne/TeacherCPDWeb",
    webLink: "https://github.com/CaesarBourne/TeacherCPDAPI",
    previewList: [
      {
        title: "Dashboard",
        label: "Dashboard metrics for course management",
        img: tcpd1,
      },
      {
        title: "MTN Dashboard",
        label: "MTN mobile number details , airtime and data balance",
        img: tcpd2,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: tcpd3,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: tcpd4,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: tcpd5,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
  {
    img: mymtn,
    title: "MTN Nigeria Telecoms Portal",
    description:
      "MTN Nigerian portal for telecoms services like purchase bundle, purchase Airtime, Link user National Identification number, payment gateway tranactions Loacating mTN Stores nation wide, View airtime and Data balance, and contacting customer care agent etc.",
    repoLink: "NA",
    webLink: "https://mymtn.com.ng",
    previewList: [
      {
        title: "MTN Home page",
        label: "Landing page for MTN users",
        img: sp1,
      },
      {
        title: "MTN Dashboard",
        label: "MTN mobile number details , airtime and data balance",
        img: sp2,
      },
      {
        title: "MTN Bundle page",
        label: "Purchase data bundle for MTN customers",
        img: sp3,
      },
      {
        title: "MTN store locator page",
        label: "Locate MTN stores in Nigeria and Africa ",
        img: sp4,
      },
      {
        title: "MTN payment page",
        label: "Payment gateway SDK incorporation for mtn users",
        img: sp5,
      },
    ],
    setPreviewList: "",
    setShowModal: "any",
  },
];
//   import { GiNightSky } from "react-icons/gi";

//   // { to: "/", path: "About", icon: <GiNightSky className="icon" /> },

// export const getGreeting = () => {
// let greeting = {message :  `Hello good day!`, icon: <GiNightSky className="icon" />  };

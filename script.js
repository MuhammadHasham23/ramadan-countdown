/**
  *  getDate() - compares date with all dates and selects
  *  the object which matches with current date.
  *  returns - date object.
**/

function getDate() {
 const arr = [
	{
		"no": "#1",
		"date": "2020-04-25",
		"sehar": "3:55 AM",
		"iftar": "6:40 PM"
	},
	{
		"no": "#2",
		"date": "2020-04-26",
		"sehar": "3:54 AM",
		"iftar": "6:40 PM"
	},
	{
		"no": "#3",
		"date": "2020-04-27",
		"sehar": "3:52 AM",
		"iftar": "6:41 PM"
	},
	{
		"no": "#4",
		"date": "2020-04-28",
		"sehar": "3:51 AM",
		"iftar": "6:42 PM"
	},
	{
		"no": "#5",
		"date": "2020-04-29",
		"sehar": "3:50 AM",
		"iftar": "6:43 PM"
	},
	{
		"no": "#6",
		"date": "2020-04-30",
		"sehar": "3:49 AM",
		"iftar": "6:43 PM"
	},
	{
		"no": "#7",
		"date": "2020-05-01",
		"sehar": "3:47 AM",
		"iftar": "6:44 PM"
	},
	{
		"no": "#8",
		"date": "2020-05-02",
		"sehar": "3:46 AM",
		"iftar": "6:45 PM"
	},
	{
		"no": "#9",
		"date": "2020-05-03",
		"sehar": "3:45 AM",
		"iftar": "6:45 PM"
	},
	{
		"no": "#10",
		"date": "2020-05-04",
		"sehar": "3:44 AM",
		"iftar": "6:46 PM"
	},
	{
		"no": "#11",
		"date": "2020-05-05",
		"sehar": "3:43 AM",
		"iftar": "6:47 PM"
	},
	{
		"no": "#12",
		"date": "2020-05-06",
		"sehar": "3:41 AM",
		"iftar": "6:47 PM"
	},
	{
		"no": "#13",
		"date": "2020-05-07",
		"sehar": "3:40 AM",
		"iftar": "6:48 PM"
	},
	{
		"no": "#14",
		"date": "2020-05-08",
		"sehar": "3:39 AM",
		"iftar": "6:49 PM"
	},
	{
		"no": "#15",
		"date": "2020-05-09",
		"sehar": "3:38 AM",
		"iftar": "6:50 PM"
	},
	{
		"no": "#16",
		"date": "2020-05-10",
		"sehar": "3:37 AM",
		"iftar": "6:50 PM"
	},
	{
		"no": "#17",
		"date": "2020-05-11",
		"sehar": "3:36 AM",
		"iftar": "6:51 PM"
	},
	{
		"no": "#18",
		"date": "2020-05-12",
		"sehar": "3:35 AM",
		"iftar": "6:52 PM"
	},
	{
		"no": "#19",
		"date": "2020-05-13",
		"sehar": "3:34 AM",
		"iftar": "6:52 PM"
	},
	{
		"no": "#20",
		"date": "2020-05-14",
		"sehar": "3:33 AM",
		"iftar": "6:53 PM"
	},
	{
		"no": "#21",
		"date": "2020-05-15",
		"sehar": "3:32 AM",
		"iftar": "6:54 PM"
	},
	{
		"no": "#22",
		"date": "2020-05-16",
		"sehar": "3:31 AM",
		"iftar": "6:54 PM"
	},
	{
		"no": "#23",
		"date": "2020-05-17",
		"sehar": "3:30 AM",
		"iftar": "6:55 PM"
	},
	{
		"no": "#24",
		"date": "2020-05-18",
		"sehar": "3:29 AM",
		"iftar": "6:56 PM"
	},
	{
		"no": "#25",
		"date": "2020-05-19",
		"sehar": "3:29 AM",
		"iftar": "6:56 PM"
	},
	{
		"no": "#26",
		"date": "2020-05-20",
		"sehar": "3:28 AM",
		"iftar": "6:57 PM"
	},
	{
		"no": "#27",
		"date": "2020-05-21",
		"sehar": "3:27 AM",
		"iftar": "6:58 PM"
	},
	{
		"no": "#28",
		"date": "2020-05-22",
		"sehar": "3:26 AM",
		"iftar": "6:58 PM"
	},
	{
		"no": "#29",
		"date": "2020-05-23",
		"sehar": "3:25 AM",
		"iftar": "6:59 PM"
	},
	{
		"no": "#30",
		"date": "2020-05-24",
		"sehar": "3:25 AM",
		"iftar": "7:00 PM"
	}
];
 return arr.filter((item) => moment(item.date).isSame(moment().format("YYYY-MM-DD")));
}


const date = 	getDate()[0]
const timezone = moment().format("A");

/**
 *
 *  Selectors for HTML Elements
 *
**/
const counter = document.querySelector('.countdown');
const bar = document.querySelector("#progressBar");
const elem = document.querySelector("#progressBar div");
const timer = document.querySelector('.time-remaining');

/**
 * Global Variables
**/

let isIftar = false;
let interval;


/**
  * Setting counter for iftar or sehar based
  * on timezone.
**/
if(timezone === "PM") {
  interval = setInterval(()=>calcTime(date.iftar),1000);
  isIftar = true;
  timer.innerHTML = "Time Remaining for <span>Aftari</span>"
} else {
 interval = setInterval(()=>calcTime(date.sehar),1000);
 timer.innerHTML = "Time Remaining for <span>Sehri</span>"
}

/**
 * Getting difference for seconds
 * endTimeSeconds - currentStartTimeSeconds
**/
const finalTimeSeconds =  moment(isIftar ? date.iftar : date.sehar, 'hh:mm:ss: A').diff(moment().startOf('day'), 'seconds');
const currentTimeSeconds = moment(moment(), 'hh:mm:ss: A').diff(moment().startOf('day'), 'seconds');
let diffSeconds = finalTimeSeconds - currentTimeSeconds;
let variableSeconds = diffSeconds;


function calcTime(time) {
  const then  = `${moment().hour()}:${moment().minute()}:${moment().second()}`;
  const now = moment(time, "h:mm:ss A").format("HH:mm:ss");
  
/**
 * If currentTime > Aftar/Sehar time
 * set counter to 00:00:00
**/
  if(moment().isAfter(moment(time,"hh:mm A"))) { 
    counter.innerHTML = "00:00:00";
    elem.style.width = 0+'px';
    clearInterval(interval);
    return;
  };
  
  
  let difference = moment.utc(moment(now,"HH:mm:ss").diff(moment(then,"HH:mm:ss"))).format("HH:mm:ss");
  counter.innerHTML = difference;
  
  /**
    * Calculating Percentage
  **/
  const progressBarWidth = variableSeconds * bar.clientWidth / diffSeconds;
  
  elem.style.width = progressBarWidth + "px";
  variableSeconds--;
}
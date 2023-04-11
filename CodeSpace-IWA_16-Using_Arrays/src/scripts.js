/**
 * @typedef {Object} AthleteData
 * @property {string} firstName
 * @property {string} surname
 * @property {string} id
 * @property {Object[]} races
 * @property {string} races.date
 * @property {number[]} races.time
 *
 * @typedef {Object} ResponseData
 * @property {string} requestType
 * @property {string} requestBy
 * @property {string} forDisplay
 * @property {Object.<string, AthleteData>} data
 *
 * @typedef {Object} DataObject
 * @property {ResponseData} response
 */

const MONTHS = [
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

/**
 * @type {DataObject}
 */
const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T22:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T22:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T22:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T22:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T22:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T22:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

/**
 * Created html for each individual athlete to be displayed
 * in the sections provided in the html
 * @param {Object} athlete Athlete object that is taken in
 * @returns {string} html that will be rendered inside of dedicated sections
 */
const createHtml = (athlete) => {
  const {
    races,
    firstName,
    surname,
    id,
    totalRaces = races.length,
    latestRace = races[races.length - 1],
  } = athlete;

  console.log("Athlete: ", firstName, surname);
  console.log("Total races: ", totalRaces);

  const fragment = document.createDocumentFragment();

  /**
   * h2 element for the title
   */
  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);

  /**
   * The full date of the last race
   */
  const date = new Date(latestRace.date);

  /**
   * Array that contains the times for the athletes laps
   */
  const timeAsArray = latestRace.time;

  /**
   * The day of the last race
   */
  const day = date.getDate() - 1;
  /**
   * The month of the last race
   */
  const month = MONTHS[date.getMonth()];
  /**
   * The year of the last race
   */
  const year = date.getFullYear();

  console.log("Event date (latest): ", day, month, year);

  const [first, second, third, fourth] = timeAsArray;
  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  console.log("Time: ", `${hours}:${minutes}`);

  const list = document.createElement("dl");

  list.innerHTML = /* html */ `
      <dt>Athlete:</dt>
      <dd>${firstName}  ${surname}</dd>

      <dt>Total Races:</dt>
      <dd>${totalRaces}</dd>

      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>

      <dt>Total Time (Latest):</dt>
      <dd>${hours}:${minutes}</dd>
    `;

  fragment.appendChild(list);

  return fragment;
};

const {
  response: {
    data: { NM372, SV782 },
  },
} = data;

createHtml(NM372);
createHtml(SV782);

document.querySelector("[data-athlete='NM372']").appendChild(createHtml(NM372));
document.querySelector("[data-athlete='SV782']").appendChild(createHtml(SV782));

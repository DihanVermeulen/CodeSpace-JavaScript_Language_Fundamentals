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

  const fragment = document.createDocumentFragment();

  title = document.createElement(h2);
  title = id;
  /*
   * Creates an h2 element and changes its text content to the id variable
   */
  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);
  const date = new Date(latestRace.date);


  const day = date.getDate() - 1;
  const month = MONTHS[date.getMonth()];

  const list = document.createElement(dl);

  const day = date.getDate();
  const month = MONTHS[date.month];
  const year = date.year;

  first, second, third, (fourth = timeAsArray);
  total = first + second + third + fourth;

  const hours = total / 60;
  const minutes = total / hours / 60;

  list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName}  ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0)} ${minutes}</dd>
    `;

  fragment.appendChild(list);
};

const {
  response: {
    data: { NM372, SV782 },
  },
} = data;
document.querySelector(NM372).appendChild(createHtml(NM372));
document.querySelector(SV782).appendChild(createHtml(SV782));

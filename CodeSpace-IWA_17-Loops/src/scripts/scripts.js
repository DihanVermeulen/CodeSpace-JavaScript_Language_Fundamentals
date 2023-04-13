const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

/** Creates array out of the length that is provided
 * @param length Length of array
 * @returns An array with the same length provided
 */
const createArray = (length) => {
  const result = [];

  for (let i = 1; i <= length; i++) {
    result.push(i);
  }
  return result;
};

/**
 * Creates data for calendar
 * @returns Data for calendar
 */
const createData = () => {
  /** Current day */
  const current = new Date();
  // Sets the date to the 1st of the month
  current.setDate(1);

  /** The first weekday of the month */
  const startDay = current.getDay() + 1;
  /** Total days in the current month */
  const daysInMonth = getDaysInMonth(current);
  /** The total weeks in the month */
  const weeksInMonth = Math.ceil((daysInMonth + startDay) / 7);

  /** Array that has the same length as the total weeks in the month */
  const weeks = createArray(weeksInMonth);
  /** Array that contains the total days in a week */
  const days = createArray(7);

  /** Result array that is returned */
  const result = [];
  /** Counter that is used to add every day until the end
   * of the month
   */
  let dayCount = 1;
  // Loops for the amount of weeks there are
  for (const weekIndex in weeks) {
    const value = {
      week: parseInt(weekIndex) + 1,
      days: [],
    };

    // Loops for the amount of days there are
    for (const dayIndex in days) {
      /** Current weekday */
      let day = parseInt(dayIndex) + 1;

      /* Checks if the day is on the correct start day or if it is
       * higher than the days in the month and pushes the value as null.
       * If it is within the correct start day of the week and the day is
       * not more than the total days of the month, then the dayCount will increase.
       */
      if (weekIndex === "0" && day < startDay) {
        value.days.push({ dayOfWeek: day, value: null });
      } else if (dayCount > daysInMonth) {
        value.days.push({ dayOfWeek: day, value: null });
      } else {
        value.days.push({ dayOfWeek: day, value: dayCount });
        dayCount++;
      }
    }
    result.push(value);
  }
  return result;
};

/**
 * Creates a cell for a table
 * @param {*} existing Existing cells in the table row
 * @param {*} classString Class that the cell will inherit
 * @param {*} value Value inside of cell i.e. the date
 * @returns HTML to a table cell
 */
const addCell = (existing, classString, value) => {
  /** Result that is returned */
  const result = /* html */ `
        ${existing}
        <td class="${classString}">
            ${value ? value : ""}
        </td>
    `;

  return result;
};
/**
 *
 * @param {*} data The data {@link createData} required to create HTML
 * @returns HTML to the body of the table
 */
const createHtml = (data) => {
  let result = "";
  // Loops through data
  for (let days in data) {
    const week = data[days].week;
    let inner = "";
    inner += addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (let dayOfWeek in data[days].days) {
      /**
       * The date that the loop reads
       */
      const value = data[days].days[dayOfWeek].value;

      /**
       * Checks if the date in the loop is equal to the current
       * date
       */
      // const isToday = new Date().getDate() === value;
      const isToday = 16 === value;
      /**
       * Checks if a day is in the weekend
       */
      const isWeekend = dayOfWeek == 1 && dayOfWeek == 7;
      /** Checks every second row */
      const isAlternate = week % 2 == 0 ? true : false;

      /**
       * String that contains default class
       */
      let classString = "table__cell";

      if (isToday) classString = `${classString} table__cell_today`;
      if (isToday && isAlternate)
        classString = `${classString} table__cell_alternate table__cell_today `;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;
      inner = addCell(inner, classString, value);
    }

    result += `<tr>${inner}</tr>`;
  }
  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);

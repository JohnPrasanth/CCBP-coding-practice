var addDays = require("date-fns/addDays");
let date = new Date("2020-08-22");
function adddays(days) {
  return addDays(date, days);
}
module.exports = adddays;

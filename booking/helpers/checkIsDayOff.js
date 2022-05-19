export const checkIsDayOff = (date, daysOffCodes) => {
   let plussOneDay = 86400000;
   if (daysOffCodes.includes(date.getDay())) {
     return new Date(date.getTime() + plussOneDay);
   } else {
     return new Date()
   }
 };
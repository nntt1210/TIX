import moment from "moment";
export const getFullDate = (jsonDate) => {
  let formatedDate = new Date(jsonDate);

  let date = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  let year = formatedDate.getFullYear();

  if (date < 10) {
    date = String("0" + date).slice(-2);
  }

  if (month < 10) {
    month = String("0" + month).slice(-2);
  }

  return date + "/" + month + "/" + year;
};

export const getFullDateTime = (jsonDate) => {
  let formatedDate = new Date(jsonDate);
  let date = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  let year = formatedDate.getFullYear();
  let hour = formatedDate.getHours();
  let min = formatedDate.getMinutes();

  if (date < 10) {
    date = String("0" + date).slice(-2);
  }

  if (month < 10) {
    month = String("0" + month).slice(-2);
  }

  if (hour < 10) {
    hour = String("0" + hour).slice(-2);
  }

  if (min < 10) {
    min = String("0" + min).slice(-2);
  }

  return date + "/" + month + "/" + year + " " + hour + ":" + min + ":00";
};

export const getTime = (jsonDate, duration = 0) => {
  return moment(jsonDate)
    .minute(moment(jsonDate).minute() + duration)
    .format("HH:mm");
};

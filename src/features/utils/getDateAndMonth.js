export const getDateAndMonth = (date) => {
    const monthNames = [
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
    const dateOfMonth = new Date(date).getDate();
    const monthOfYear = new Date(date).getMonth();
    return `${monthNames[monthOfYear]} ${dateOfMonth}`;
  };
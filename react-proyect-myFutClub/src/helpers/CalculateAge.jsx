// Method that returns the user's age in years.
// Receive an string with the "Date" format.
export const calculateAge = (date) => {
    const birthday = new Date(date);
    const dateNow = new Date();

    console.log(dateNow.getFullYear());
}
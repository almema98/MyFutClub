// Method that returns the user's age in years.
// Receive an string with the "Date" format.
export const calculateAge = (date) => {
    const birthday = new Date(date);
    const dateNow = new Date();

    let age = dateNow.getFullYear() - birthday.getFullYear();

    const birthdayMonthHasNotYetPassed = (dateNow.getMonth() - birthday.getMonth()) < 0;
    const birthdayMonthNow = (dateNow.getMonth() - birthday.getMonth()) == 0;
    const birthdayDayHasNotYetPassed = (dateNow.getDate() - birthday.getDate()) < 0;

    // The user has not yet had a birthday this year.
    if ( birthdayMonthHasNotYetPassed || (birthdayMonthNow && birthdayDayHasNotYetPassed) ) {
        age -= 1;
    }
    
    return (age);
}
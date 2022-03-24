const users = [
    { id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false },
    { id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true },
    { id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false },
    { id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true },
    { id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false },
    { id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true },
    { id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false },
    { id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false }
];
// const userFirstName = users.find(user => user.firstName == 'Jose');
// console.log(userFirstName);
// const premiumNumbers = users.filter((premium) => premium.isPremiumMember == true);
// console.log(premiumNumbers);
// const userLastnames = users.filter(x => x.lastName);
// console.log(userLastnames);
const getFullName = users.filter(x => x.logins > 10);
const filteredName = getFullName.map(x => x.firstName + " " + x.lastName); //get firstName and lastName of filtered list
// console.log(filteredName);
console.log(getFullName);
//Get the total number of logins for the current list of users.

// loginTotal = getFullName.forEach(loginSum(getFullName.logins));
const loginAmount = getFullName.filter(x => x.logins);
const totalLoginAmount = 0;
const total = loginAmount.forEach(function(totalLoginAmount) {
    return totalLoginAmount + loginAmount.logins;
})
console.log(totalLoginAmount);

// console.log("Total logins " + loginTotal);

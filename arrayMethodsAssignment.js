const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const userFirstName = users.find(user => user.firstName == 'Jose'); //find a user named Jose
console.log(userFirstName);
const premiumNumbers = users.filter((premium) => premium.isPremiumMember == true); //array of all premium members
console.log(premiumNumbers);
const userLastnames = users.map(x => x.lastName); //array of all the last names
console.log(userLastnames);
const getFullName = users.filter(x => x.logins > 10); //array of all the users with more than 10 logins
const filteredName = getFullName.map(x => x.firstName + " " + x.lastName); //gets the full name of all users with more than 10 logins
console.log(filteredName);
console.log(getFullName);
const arrayLogins = users.map(user => user.logins);//pulls the array of the logins 
console.log(arrayLogins);
const totalLogins = arrayLogins.reduce(function(login , total){
    return login + total;
},0); //total number of logins for list of users
console.log(totalLogins); 
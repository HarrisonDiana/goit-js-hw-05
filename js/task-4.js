const getTotalBalanceByGender = (users, gender) => {
    return users
    .filter(user => user.gender === gender) 
    .map(user => user.balance) 
    .reduce((total, balance) => total + balance, 0); 
};

console.log(getTotalBalanceByGender(clients, "male"));   
console.log(getTotalBalanceByGender(clients, "female")); 

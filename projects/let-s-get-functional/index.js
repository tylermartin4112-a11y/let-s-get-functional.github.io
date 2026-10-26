// #!/usr/bin/env node

'use strict';

var maleCount = function (array){
    return array.filter(customer => customer.gender === 'male').length;
};


var femaleCount = function (array){
    return array.filter(customer => customer.gender === 'female').length;
};


var oldestCustomer = function oldestCustomer(customers) {
    return customers.reduce((oldest, current) => {
      return current.age > oldest.age ? current : oldest;
    }).name;
  }
  
var youngestCustomer = function youngestCustomer(customers) {
    return customers.reduce((youngest, current) => {
      return current.age < youngest.age ? current : youngest;
    }).name;
  }

var averageBalance = function averageBalance(customers) {
    if (!customers || customers.length === 0) return 0;
    
    const totalBalance = customers.reduce((sum, customer) => {
      // Assumes balance is stored as a number (or parses it if it's formatted as a string with symbols like "$")
      const balance = typeof customer.balance === 'string' 
        ? parseFloat(customer.balance.replace(/[^0-9.-]+/g, "")) 
        : customer.balance;
        
      return sum + (isNaN(balance) ? 0 : balance);
    }, 0);
  
    return totalBalance / customers.length;
  }

var firstLetterCount = firstLetterCount = function(array, letter) {
    return array.filter(function(customer) {
        // Ensure name exists and compare the first letter case-insensitively
        return customer.name && customer.name[0].toLowerCase() === letter.toLowerCase();
    }).length;
};

var friendFirstLetterCount = function friendFirstLetterCount(customers, targetCustomer, letter) {
  // Find the target customer in the array (supporting either a name string or a customer object)
  const customer = typeof targetCustomer === 'string'
    ? customers.find(c => c.name === targetCustomer)
    : targetCustomer;

  // If the customer or their friends list doesn't exist, return 0
  if (!customer || !customer.friends) {
    return 0;
  }

  // Count how many friends' names start with the given letter (case-insensitive)
  const targetLetter = letter.toLowerCase();
  
  return customer.friends.filter(friend => {
    // Assuming friends can be objects with a name property or strings. Adjust based on your schema:
    const friendName = typeof friend === 'object' ? friend.name : friend;
    return friendName && friendName.toLowerCase().startsWith(targetLetter);
  }).length;
}

var friendsCount = function friendsCount(customers, name) {
  return customers
      .filter(customer => {
          // Ensure the customer has a friends array and check if it includes the name
          return customer.friends && customer.friends.some(friend => friend.name === name);
      })
      .map(customer => customer.name);
}
var topThreeTags = function topThreeTags(customers) {
 
  const tagCounts = customers.reduce((acc, customer) => {
    if (customer.tags) {
      customer.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {});

  // 2. Convert the count object into an array of [tag, count] pairs, then sort descending
  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  // 3. Extract just the top 3 tag names
  return sortedTags.slice(0, 3).map(entry => entry[0]);
}

var genderCount = function genderCount(customers) {
  return customers.reduce((summary, customer) => {
      // Increment the count for the customer's gender, initializing to 0 if it doesn't exist yet
      summary[customer.gender] = (summary[customer.gender] || 0) + 1;
      return summary;
  }, {});
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;

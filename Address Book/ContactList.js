var friends = new Object();
friends.bill = {
    firstName: 'Bill',
    lastName: 'Gates',
    number: 1,
    address: ['1', 'WA']
};
friends.steve = {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: 2,
    address: ['2', 'CA']
};

var list = function (object) {
    for (var key in object) {
        console.log(key);
    }
};

var search = function (name) {
    for (var property in friends) {
        if (friends[property].firstName === name) {
            console.log(friends.name);
            return friends[property];
        }
    }
};
'use strict';

exports.users = (event, context, callback) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const users = {
         "1": {"id": "1", "name": "Dmitry", "email": "dmitry@mailinator.com"},
         "2": {"id": "2", "name": "Mike", "email": "mike@mailinator.com"},
         "3": {"id": "3", "name": "Anna", "email": "anna@mailinator.com"},
         "4": {"id": "4", "name": "Julia", "email": "julia@mailinator.com"}
	};

    console.log("Got an Invoke Request.");
    switch(event.field) {
        case "getUser":
            var id = event.arguments.id;
            callback(null, users[id]);
            break;
        case "getAllUsers":
            var values = [];
            for(var d in users){
                values.push(users[d]);
            }
            callback(null, values);
            break;
        case "createUser":
            // return the arguments back
            callback(null, event.arguments);
            break;
        default:
            callback("Unknown field, unable to resolve" + event.field, null);
            break;
    }
};

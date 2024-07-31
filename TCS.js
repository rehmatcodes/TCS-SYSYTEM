function calculateFare(FromCity, ToCity, parcelType, Weight, DeliverySpeed) {
    let baseFare;
    let deliveryDays;
    let baseWeightLimit = 5; // kg
    let extraWeightCharge = 50; // per kg

    // Determine base fare and delivery days based on cities
    if ((FromCity === "Dg khan" && ToCity === "Multan") || (FromCity === "Multan" && ToCity === "Dg khan")) {
        baseFare = 200;
        deliveryDays = 1;
    } else if ((FromCity === "Dg khan" && ToCity === "Bahawalpur") || (FromCity === "Bahawalpur" && ToCity === "Dg khan")) {
        baseFare = 300;
        deliveryDays = 1.5;
    } else if ((FromCity === "Multan" && ToCity === "Bahawalpur") || (FromCity === "Bahawalpur" && ToCity === "Multan")) {
        baseFare = 400;
        deliveryDays = 2;
    } else if ((FromCity === "Lahore" && ToCity === "Islamabad") || (FromCity === "Islamabad" && ToCity === "Lahore")) {
        baseFare = 500;
        deliveryDays = 3;
    } else if ((FromCity === "Karachi" && ToCity === "Faisalabad") || (FromCity === "Faisalabad" && ToCity === "Karachi")) {
        baseFare = 600;
        deliveryDays = 4;
    } else if ((FromCity === "MuzafarGarh" && ToCity === "Chook Qureshi") || (FromCity === "Chook Qureshi" && ToCity === "MuzafarGarh")) {
        baseFare = 700;
        deliveryDays = 5;
    } else if ((FromCity === "Jampur" && ToCity === "Rajanpur") || (FromCity === "Rajanpur" && ToCity === "Jampur")) {
        baseFare = 800;
        deliveryDays = 6;
    } else if ((FromCity === "Ahmad Pur" && ToCity === "Muhammad Pur") || (FromCity === "Muhammad Pur" && ToCity === "Ahmad Pur")) {
        baseFare = 900;
        deliveryDays = 7;
    } else if ((FromCity === "Kot Chutta" && ToCity === "Mathma") || (FromCity === "Mathma" && ToCity === "Kot Chutta")) {
        baseFare = 1000;
        deliveryDays = 8;
    } else if ((FromCity === "Okara" && ToCity === "Depalpur") || (FromCity === "Depalpur" && ToCity === "Okara")) {
        baseFare = 1100;
        deliveryDays = 9;
    } else if ((FromCity === "Sahiwal" && ToCity === "Monsara") || (FromCity === "Monsara" && ToCity === "Sahiwal")) {
        baseFare = 1200;
        deliveryDays = 10;
    } else if ((FromCity === "Rawind" && ToCity === "Sakhar") || (FromCity === "Sakhar" && ToCity === "Rawind")) {
        baseFare = 1300;
        deliveryDays = 11;
    } else if ((FromCity === "Naran" && ToCity === "Kaghan") || (FromCity === "Kaghan" && ToCity === "Naran")) {
        baseFare = 1400;
        deliveryDays = 12;
    } else if ((FromCity === "Hasilpur" && ToCity === "Jahania") || (FromCity === "Jahania" && ToCity === "Hasilpur")) {
        baseFare = 1500;
        deliveryDays = 13;
    } else if ((FromCity === "Swat" && ToCity === "Aptabad") || (FromCity === "Aptabad" && ToCity === "Swat")) {
        baseFare = 1600;
        deliveryDays = 14;
    } else if ((FromCity === "Quetta" && ToCity === "Peshawar") || (FromCity === "Peshawar" && ToCity === "Quetta")) {
        baseFare = 1700;
        deliveryDays = 15;
    } else if ((FromCity === "Attock" && ToCity === "Balochistan") || (FromCity === "Balochistan" && ToCity === "Attock")) {
        baseFare = 1800;
        deliveryDays = 16;
    } else if ((FromCity === "Dera Ismail Khan" && ToCity === "Rahim Yar Khan") || (FromCity === "Rahim Yar Khan" && ToCity === "Dera Ismail Khan")) {
        baseFare = 1900;
        deliveryDays = 17;
    } else if ((FromCity === "Rawalpindi" && ToCity === "Murree") || (FromCity === "Murree" && ToCity === "Rawalpindi")) {
        baseFare = 2000;
        deliveryDays = 18;
    } else if ((FromCity === "Layyah" && ToCity === "Taunsa") || (FromCity === "Taunsa" && ToCity === "Layyah")) {
        baseFare = 2100;
        deliveryDays = 19;
    } else {
        // Apply international service with higher base fare and more days
        baseFare = 5000;
        deliveryDays = 50;
    }

    // Adjust fare based on parcel type
    if (parcelType === "Document") {
        baseFare *= 1.0;
    } else {
        baseFare *= 1.2;
    }

    // Adjust fare based on weight
    if (Weight > baseWeightLimit) {
        baseFare += (Weight - baseWeightLimit) * extraWeightCharge;
    }

    // Adjust fare based on delivery speed
    if (DeliverySpeed === "Express") {
        baseFare *= 1.5;
        deliveryDays = Math.ceil(deliveryDays / 2);
    }

    return {
        fare: baseFare,
        days: deliveryDays
    };
}

const cities = [
    "Dg khan", "Multan", "Bahawalpur", "Lahore", "Islamabad", "Karachi", "Faisalabad", "MuzafarGarh", "Chook Qureshi", "Jampur",
    "Rajanpur", "Ahmad Pur", "Muhammad Pur", "Kot Chutta", "Mathma", "Okara", "Depalpur", "Sahiwal", "Monsara", "Rawind", "Sakhar",
    "Naran", "Kaghan", "Hasilpur", "Jahania", "Swat", "Aptabad", "Attock", "Balochistan", "Dera Ismail Khan", "Rahim Yar Khan",
    "Rawalpindi", "Murree", "Layyah", "Taunsa"
];

// Prompt user for input
let fromCity = prompt(`Enter the city from which the parcel is being sent (${cities.join("/")}/International):`);
let toCity = prompt(`Enter the destination city (${cities.join("/")}/International):`);
let parcelType = prompt("Enter the type of parcel (Document/Other):");
let weight = parseFloat(prompt("Enter the weight of the parcel in kg:"));
let deliverySpeed = prompt("Enter the delivery speed (Standard/Express):");
let riderRating = parseFloat(prompt("Enter the rider's rating (1 to 5):"));
let customerRating = parseFloat(prompt("Enter the customer's rating (1 to 5):"));

// Calculate the fare and delivery days
let { fare, days } = calculateFare(fromCity, toCity, parcelType, weight, deliverySpeed);

// Adjust fare based on ratings
if (riderRating >= 4) {
    fare *= 1.1;
}
if (customerRating <= 2) {
    fare *= 0.9;
}

// Calculate and format the estimated delivery date
let currentDate = new Date();
let deliveryDate = new Date();
deliveryDate.setDate(currentDate.getDate() + days);

let deliveryDateString = deliveryDate.toDateString();

// Show the results
alert(`The fare for sending a ${parcelType} from ${fromCity} to ${toCity} with a weight of ${weight}kg and ${deliverySpeed} delivery is: ${fare.toFixed(2)} units.`);
alert(`The estimated delivery time is: ${days} days.`);
alert(`The estimated delivery date is: ${deliveryDateString}.`);

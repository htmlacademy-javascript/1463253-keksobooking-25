import {createOffer} from "./data.js"

console.log(createOffer());

const createOfferList = Array.from({length: 10}, createOffer);

console.log(createOfferList);

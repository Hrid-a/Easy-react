import React from "react";
import ReactDOM  from "react-dom/client";
import "./main.scss";

const Header = () => {
    return (
        <header>
            <div  className="container">
                <div className="logo">
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.47iguDl7iyEqOZZTobaKegHaEK%26pid%3DApi&f=1&ipt=6e5097d42e2e74e07b785224f3e0cd5dab008c884bea7ccabf5aea946a5906a9&ipo=images"
                        alt="Swigi's Logo"
                    />
                </div>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item">Home</li>
                        <li className="nav__item">Offers</li>
                        <li className="nav__item">Help</li>
                        <li className="nav__item">Sign in</li>
                        <li className="nav__item">Cart</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
const Heading = () => {
    return(
        <>
            <h1>Pure Veg</h1>
            <p>A vegetarian paradise loaded with options to satisfy your cravings.</p>
        </>

    )
}

const Card = ({cardData})=> {
    const {name, cuisines, costForTwo, deliveryTime, avgRating, cloudinaryImageId} = cardData.data.data
    return (
        <article className="card">
            <div className="card-image">
              <img 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
                alt={name}
              />
            </div>
            <div className="card-body">
              <h2>{name}</h2>
              <p>{cuisines.map(item =>(<span>{item}</span>))}</p>
            <ul >
              <li>{avgRating}star</li>
              <li>{deliveryTime}</li>
              <li>{costForTwo / 2} for TWO</li>
            </ul>
            </div>
            <div className="card-footer">
              <button className="btn">Quick View </button>
            </div>
        </article>
    )
}

const cardlist = [
    {"data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "44058",
        "name": "Wah Ji Wah",
        "uuid": "9b3849fd-6481-4089-84ea-a769fb9753b4",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "1ebb03f7ddc11fa416ac040de11fcf6c",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "wah-ji-wah-rohini-rohini-3",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "1st Phase",
        "parentId": 966,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7803181~p=1~eid=00000189-c127-1b2c-10be-538c0086015f~srvts=1691162712876~80439",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=44058",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 0,
          "lastMileDistance": 2.2,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "623754",
        "name": "Kaleva",
        "uuid": "5d6e84bc-63c2-4fcb-a3fc-b9247c9e25e9",
        "city": "4",
        "area": "Pitampura",
        "totalRatingsString": "",
        "cloudinaryImageId": "z6c9c6qtujcxhpbn5sxq",
        "cuisines": [
          "Indian",
          "Street Food",
          "Desserts",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "kaleva-nsp-nsp-2",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Lala Jagat Narayan Marg",
        "parentId": 2216,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7785634~p=2~eid=00000189-c127-1b2c-10be-538d00860232~srvts=1691162712876~80439",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=623754",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 0,
          "lastMileDistance": 4.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "397744",
        "name": "Modern Caterers",
        "uuid": "af4ee183-9704-48d4-9a03-fdff4e6cd643",
        "city": "4",
        "area": "Pitampura",
        "totalRatingsString": "",
        "cloudinaryImageId": "i7zjeyk2e4oub9kwdxhm",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "modern-caterers-nsp-nsp",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Krishna Market",
        "parentId": 250753,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7694072~p=3~eid=00000189-c127-1b2c-10be-538e00860316~srvts=1691162712876~80439",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.2 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=397744",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "lastMileTravel": 0,
          "lastMileDistance": 4.2,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "256285",
        "name": "Jai Mata Di Annapurna Rasoi",
        "uuid": "47ceb1e8-8741-4308-80c4-956cd1073dcb",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "ftjnehico84kl0aocdv7",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "jai-mata-di-annapurna-rasoi-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 6",
        "parentId": 108627,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7609053~p=4~eid=00000189-c127-1b2c-10be-538f0086044c~srvts=1691162712876~80439",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=256285",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 0,
          "lastMileDistance": 1.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "14564",
        "name": "Chitrakut",
        "uuid": "2e70a67c-5eed-4229-9b42-fe032e355bb1",
        "city": "4",
        "area": "Ashok vihar",
        "totalRatingsString": "",
        "cloudinaryImageId": "xoumav4ednzrl3qvo8kl",
        "cuisines": [
          "Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "chitrakut-shalimar-bagh-nsp",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "AD Market",
        "parentId": 16703,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 8300,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 8300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "8300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7803080~p=6~eid=00000189-c127-1b2c-10be-53910086067e~srvts=1691162712876~80439",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=14564",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 0,
          "lastMileDistance": 8.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "336272",
        "name": "Punjabi Angithi",
        "uuid": "e96108ae-f4d4-41f8-aa8c-4652849356dc",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "wynnlcwjqfltykkbuudv",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Punjabi",
          "Kebabs",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "punjabi-angithi-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 16",
        "parentId": 4464,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=336272",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 0,
          "lastMileDistance": 5.6,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "258189",
        "name": "Great Indian Khichdi by EatFit",
        "uuid": "23a56093-c354-4eea-bc4f-d7a6d6e08752",
        "city": "4",
        "area": "Pushpanjali",
        "totalRatingsString": "",
        "cloudinaryImageId": "89741ecb1291788f128600a5da5f18b4",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "great-indian-khichdi-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Village Naharpur",
        "parentId": 319582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=258189",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0,
          "lastMileDistance": 1.7,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "10324",
        "name": "Jaiveer Naan & Chaap",
        "uuid": "70fcf0ee-e540-4b6d-a677-14a432ae11a5",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "03704a7e088a34643f5e72923d0d74ba",
        "cuisines": [
          "North Indian",
          "Snacks",
          "Punjabi"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "jaiveer-foods-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 3",
        "parentId": 109221,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=10324",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0,
          "lastMileDistance": 2,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "404496",
        "name": "Veer Ji Malai Chaap Wale",
        "uuid": "f8ce6875-790a-4597-8425-4e710c0c4a7e",
        "city": "4",
        "area": "Prashant Vihar",
        "totalRatingsString": "",
        "cloudinaryImageId": "7d6e7d0aca9c1bc548242886a1c41ac4",
        "cuisines": [
          "Indian",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "veer-ji-malai-chaap-wale-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 14",
        "parentId": 12056,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=404496",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 0,
          "lastMileDistance": 4.4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "67259",
        "name": "Gulshan Di Chaap",
        "uuid": "6defe1dc-9b57-4b23-87b4-f8f94d642259",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "kpgmrhsmfthtdw77gpgi",
        "cuisines": [
          "North Indian",
          "Mughlai"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "gulshan-di-chaap-rohini-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 7",
        "parentId": 16623,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=67259",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0,
          "lastMileDistance": 1.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "18493",
        "name": "Apni Rasoi (Int.) (Sector 9 DC Chowk, Rohini)",
        "uuid": "9f123f5c-c436-4ada-bf1f-68d1e035c0f2",
        "city": "4",
        "area": "Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "dic2afld8afnnqo5e5qg",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "apni-rasoi-rohini-rohini-2",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "DC Chowk",
        "parentId": 35021,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=18493",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 0,
          "lastMileDistance": 3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "233108",
        "name": "Vaishno Punjabi Dhaba",
        "uuid": "47ae1699-f252-4ffb-804e-3f60ce742bac",
        "city": "4",
        "area": "Sector 8 Rohini",
        "totalRatingsString": "",
        "cloudinaryImageId": "jypub0mcny1ajggqcmcg",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "vaishno-punjabi-dhaba-rohini-rohini-2",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 8",
        "parentId": 18202,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5100,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=233108",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0,
          "lastMileDistance": 2.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "160883",
        "name": "Pandit Ji Ka Dhaba",
        "uuid": "60a0a8d6-7323-42ae-8bbe-7ccabb744dd5",
        "city": "4",
        "area": "Begampur",
        "totalRatingsString": "",
        "cloudinaryImageId": "ckxnq1s7sw5vbbynch0g",
        "cuisines": [
          "North Indian",
          "Thalis"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "pandit-ji-ka-dhaba-begampur",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "R-18th Phase",
        "parentId": 14514,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3600,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3600",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=160883",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 0,
          "lastMileDistance": 1.7,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "174954",
        "name": "Standard Rabri Faluda and Shakes",
        "uuid": "f4b413ea-bf65-4202-bca5-a2e77deef72c",
        "city": "4",
        "area": "Rohini Sector 8",
        "totalRatingsString": "",
        "cloudinaryImageId": "mrhwh4q8velgbsncnfns",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "standard-rabri-faluda-and-shakes-rohini",
          "city": "Delhi"
        },
        "cityState": "4",
        "address": "",
        "locality": "Sector 8",
        "parentId": 195279,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=174954",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0,
          "lastMileDistance": 3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }
]
console.log(cardlist[0].data.data);
const Cards = ()=> {
    
    return (
        <div className="cards section">
          {cardlist.map(cardItem => (<Card key={cardItem.data.data.id} cardData = {cardItem}/>))}
        </div>
    )
}

const Body = ()=> {
    return (
        <section className="section">
            <div className="container">
                <Heading />
                <Cards />
            </div>
        </section>
    )
}

const Footer = ()=> {
  return(
    <div className="container footer">
      copyRight will be reseved Ahmed Hrid
    </div>
  )
}

const App = ()=> {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
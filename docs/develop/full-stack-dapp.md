---
id: full-stack-dapp-with-pos
title: PoS (Full Stack DApp)
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## What this tutorial covers

This tutorial is a brief introduction to Full Stack DApp deployed on Matic with Proof of Stake Security.
As a DApp developer, to build on PoS security, the procedure is as simple as taking your smart contract and deploying it on Matic. This is possible because of the account based architecture enabling an EVM-compatible sidechain.

## Building a Decentralized Airbnb

## Installation and Prerequisites

**Installation**

1. Nodej 8.10+
```js
node -v
v12.16.0
```
If you need to update node:
```js  
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bashnvm install --ltsnvm use lts
```
2. Metamask

You can download the Metamask extension by using this link: https://metamask.io/
### What are we building?

We plan to build a Decentralized Airbnb that incorporates three main functionalities:

- Rent out a space
- View available spaces
- Rent a space

Go ahead and clone the [repository](https://github.com/maticnetwork/ethindia-workshop) and install dependencies and then run `npm install`

### Setting up Data Structures

We’d like a property with a name, description, owner and a price to be rented.

So we’d like a structure named ‘property’ that would include a name, description, price, owner, boolean flag denoting if its active or not, and a boolean array denoting the booked days of the property.
```js
struct Property{
string name;
string description;
bool isActive;      // is property active
uint256 price;      // per day price in wei (1 ether = 10^18 wei)
address owner;      // Owner of the property
// Is the property booked on a particular day,
// For the sake of simplicity, we assign 0 to Jan 1, 1 to Jan 2 and so on
// so isBooked[31] will denote whether the property is booked for Feb 1
bool[] isBooked;
}
```
We’d also like to keep track of the Property object we just created by mapping a unique property id to each new Property object.

For this, we first declare a variable propertyId followed by a mapping of propertyId to property, called properties.
```js
uint256 public propertyId;
// mapping of propertyId to Property object
mapping(uint256 => Property) public properties;
```
Having a property we’d also like to keep track of all the bookings made till date.

We can do that by creating another structure for a Booking with properties such as: propertyId, check in and check out date and the user who made the booking.
```js
struct Booking {
uint256 propertyId;
uint256 checkInDate;
uint256 checkoutDate;
address user;
}
```
Similar to what we did to keep track of each property, we can do to keep track of each booking - by mapping each booking id to a particular booking object.
```js
uint256 public bookingId;
// mapping of bookingId to Booking object
mapping(uint256 => Booking) 
public bookings;
```
### Defining events

Next, we would want to add some logic to the flow of data and the working of the smart contract. For this, we add functions.

On the whole, we require three basic functions:

- To put up a property for rent on Airbnb market - `rentOutproperty`
- To make a booking - `rentProperty`
- To take down a property from the market - `markPropertyAsInactive`

### Defining functions

1. `rentOutProperty`
```js
function rentOutproperty(string memory name, string memory description, uint256 price) public {
Property memory property = Property(name, description, true /* isActive */, price, msg.sender /* owner */, new bool[](365));

// Persist `property` object to the "permanent" storage
properties[propertyId] = property;

// emit an event to notify the clients
emit NewProperty(propertyId++);
```
2. `rentProperty`
```js
function rentProperty(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) public payable {
// Retrieve `property` object from the storage
Property storage property = properties[_propertyId];

// Assert that property is active
require(
  property.isActive == true,
  "property with this ID is not active"
);

// Assert that property is available for the dates
for (uint256 i = checkInDate; i < checkoutDate; i++) {
  if (property.isBooked[i] == true) {
    // if property is booked on a day, revert the transaction
    revert("property is not available for the selected dates");
  }
}
```
3. `markPropertyAsInactive`
```js
function markPropertyAsInactive(uint256 _propertyId) public {
require(
  properties[_propertyId].owner == msg.sender,
  "THIS IS NOT YOUR PROPERTY"
);
properties[_propertyId].isActive = false;
}
```
We used two functions `_sendFunds` and `_createBooking` in the `rentProperty` function. These two functions are internal functions and as the naming convention in Solidity goes, they are prefixed with an underscore. We require these to be internal for we won’t want anyone to be able to send funds to their own account or create a booking on an inactive property.

These two functions are defined as:

1. `_sendFunds` You can read more about the particular transfer function we’ve used [here](https://solidity.readthedocs.io/en/v0.5.10/050-breaking-changes.html?highlight=address%20payable#explicitness-requirements).
```js
function _sendFunds (address beneficiary, uint256 value) internal {
  address(uint160(beneficiary)).transfer(value);
}
```
2. `_createBooking`
```js
function _createBooking(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) internal {
// Create a new booking object
bookings[bookingId] = Booking(_propertyId, checkInDate, checkoutDate, msg.sender);

// Retrieve `property` object from the storage
Property storage property = properties[_propertyId];

// Mark the property booked on the requested dates
for (uint256 i = checkInDate; i < checkoutDate; i++) {
  property.isBooked[i] = true;
}

// Emit an event to notify clients
emit NewBooking(_propertyId, bookingId++);

}
```
You can view the entire code [here](https://github.com/maticnetwork/ethindia-workshop/blob/master/contracts/Airbnb.sol).

Once you have the contract code ready, next steps would be to deploy the code on a testnet and test its working.

## Deploy and Test!

For this, we use the Remix IDE - an online IDE to develop smart contracts.

- Head over to https://remix.ethereum.org If you’re new to Remix, You’ll first need to activate two modules: Solidity Compiler and Deploy and Run Transactions.

<img src={useBaseUrl("img/solidity/remix-ethereum.png")} />

<img src={useBaseUrl("img/solidity/remix-plugin-manager.png")} />

If not already activated, you will need to activate plugins such as `Deploy & Run Transactions` and `Solidity Complier`

Your left menu should look something like this:

<img src={useBaseUrl("img/solidity/remix-left-menu.png")} />

- Create a new file, Airbnb.sol
- Copy the entire smart contract code and paste it in the editor

```js
pragma solidity ^0.5.7;

contract Airbnb {

  // Property to be rented out on Airbnb
  struct Property {
    string name;
    string description;
    bool isActive; // is property active
    uint256 price; // per day price in wei (1 ether = 10^18 wei)
    address owner; // Owner of the property
    // Is the property booked on a particular day,
    // For the sake of simplicity, we assign 0 to Jan 1, 1 to Jan 2 and so on
    // so isBooked[31] will denote whether the property is booked for Feb 1
    bool[] isBooked;
  }

  uint256 public propertyId;

  // mapping of propertyId to Property object
  mapping(uint256 => Property) public properties;

  // Details of a particular booking
  struct Booking {
    uint256 propertyId;
    uint256 checkInDate;
    uint256 checkoutDate;
    address user;
  }

  uint256 public bookingId;

  // mapping of bookingId to Booking object
  mapping(uint256 => Booking) public bookings;

  // This event is emitted when a new property is put up for sale
  event NewProperty (
    uint256 indexed propertyId
  );

  // This event is emitted when a NewBooking is made
  event NewBooking (
    uint256 indexed propertyId,
    uint256 indexed bookingId
  );

  /**
   * @dev Put up an Airbnb property in the market
   * @param name Name of the property
   * @param description Short description of your property
   * @param price Price per day in wei (1 ether = 10^18 wei)
   */
  function rentOutproperty(string memory name, string memory description, uint256 price) public {
    Property memory property = Property(name, description, true /* isActive */, price, msg.sender /* owner */, new bool[](365));

    // Persist `property` object to the "permanent" storage
    properties[propertyId] = property;

    // emit an event to notify the clients
    emit NewProperty(propertyId++);
  }

  /**
   * @dev Make an Airbnb booking
   * @param _propertyId id of the property to rent out
   * @param checkInDate Check-in date
   * @param checkoutDate Check-out date
   */
  function rentProperty(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) public payable {
    // Retrieve `property` object from the storage
    Property storage property = properties[_propertyId];

    // Assert that property is active
    require(
      property.isActive == true,
      "property with this ID is not active"
    );

    // Assert that property is available for the dates
    for (uint256 i = checkInDate; i < checkoutDate; i++) {
      if (property.isBooked[i] == true) {
        // if property is booked on a day, revert the transaction
        revert("property is not available for the selected dates");
      }
    }

    // Check the customer has sent an amount equal to (pricePerDay * numberOfDays)
    require(
      msg.value == property.price * (checkoutDate - checkInDate),
      "Sent insufficient funds"
    );

    // send funds to the owner of the property
    _sendFunds(property.owner, msg.value);

    // conditions for a booking are satisfied, so make the booking
    _createBooking(_propertyId, checkInDate, checkoutDate);
  }

  function _createBooking(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) internal {
    // Create a new booking object
    bookings[bookingId] = Booking(_propertyId, checkInDate, checkoutDate, msg.sender);

    // Retrieve `property` object from the storage
    Property storage property = properties[_propertyId];

    // Mark the property booked on the requested dates
    for (uint256 i = checkInDate; i < checkoutDate; i++) {
      property.isBooked[i] = true;
    }

    // Emit an event to notify clients
    emit NewBooking(_propertyId, bookingId++);
  }

  function _sendFunds (address beneficiary, uint256 value) internal {
    // address(uint160()) is a weird solidity quirk
    // Read more here: https://solidity.readthedocs.io/en/v0.5.10/050-breaking-changes.html?highlight=address%20payable#explicitness-requirements
    address(uint160(beneficiary)).transfer(value);
  }

  /**
   * @dev Take down the property from the market
   * @param _propertyId Property ID
   */
  function markPropertyAsInactive(uint256 _propertyId) public {
    require(
      properties[_propertyId].owner == msg.sender,
      "THIS IS NOT YOUR PROPERTY"
    );
    properties[_propertyId].isActive = false;
  }
}
```

- Select `0.5.7+commit.6da8b019` as the compiler and compile the smart contract
- Once compiled, the smart contract is ready to be deployed onto the testnet/mainnet. For this tutorial
- Copy the generated ABI - we would be needing that for our next steps

<img src={useBaseUrl("img/solidity/remix-abi.png")} />

- Select Javascript VM as the environment in the dropdown -  this connects remix to a simple blockchain environment via your browser - we'll learn more about deploying on Matic's test network in the next tutorial [link]

<img src={useBaseUrl("img/solidity/remix-contract-test-functions.png")} />

<img src={useBaseUrl("img/solidity/remix-metamask-connect-request.png")} />

Once Metamask is connected to Remix, the ‘Deploy’ transaction would generate another metamask popup that requires transaction confirmation.

<img src={useBaseUrl("img/solidity/remix-metamask-tx-confirm.png")} />

- Click Deploy
- And once the contract is deployed you can test the functions

## Setting up our DApp

Inside the cloned repository, navigate to `plugins` directory inside `dapp-ui`

Paste the contract address copied in previous step to the `airbnbContractAddress` variable present in `utils.js`.

Get the ABI copied from the previous step

- navigate to `dapp-ui/plugins/airbnbABI.json` and add the following:
```
{"abi":}
```
- Paste the ABI as the value of the “abi” key just defined
- It should look something like this:
```
{"abi": [{"constant": true,"inputs": [],"name": "bookingId","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},.................................]}
```
## Connect UI to Metamask

Next, we’d like the UI to be connected with Metamask. For this we follow the following two steps:

First, add the `setProvider()` method inside `mounted()` method in `dapp-ui/pages/index.vue`

Note: You might face indentation issues after pasting it.
```js
// init Metamask
await setProvider()
// fetch all properties
const properties = await fetchAllProperties()this.posts = properties
```

Next we’d like to inject metamask instance - for this we define the `setProvider()` method in `dapp-ui/plugins/utils.js`
```js
if (window.ethereum)
{
  metamaskWeb3 = new Web3(ethereum);
  try{
  // Request account access if needed
  await ethereum.enable();
  }
  catch (error){
  // User denied account access...
  }
}
else if (window.web3){
    metamaskWeb3 = new Web3(web3.currentProvider);
}
account = await metamaskWeb3.eth.getAccounts()
```
### Defining components and functions

Once we have connected metamask, we’d next want to be able to communicate with the deployed contract. For this, we’ll create a new contract object - that represents our airbnb smart contract

Inside `dapp-ui/plugins/utils.js` create the following function that instantiates and returns the `airbnbContract`
```js
function getAirbnbContract(){
  airbnbContract = airbnbContract || new metamaskWeb3.eth.Contract(AirbnbABI.abi, airbnbContractAddress)
  return airbnbContract
}
```
With metamask connected and contract initiated we can go forward with interacting with our contract

The `dapp-ui` folder structure looks something like this:

<img src={useBaseUrl("img/dapp/folder-structure.png")} />

Inside the `dapp-ui/components` directory, we have the separate components that make up our app interface.

The three main functions we’d like our app to support are:

- Post a new property - or rent out space
- View all available properties
- Rent a new property from all available spaces

We’ll first set up our property form - which is used to rent out a property - on the backend it interacts with the `rentOutProperty` function of our Airbnb smart contract

Navigate to `dapp-ui/components/propertyForm.vue` and add the following code inside `postAd()` method. The `postAd()` method should look something like this:
```js
// convert price from ETH to Wei
const weiValue = web3().utils.toWei(this.price, 'ether');
// call utils.postProperty
postProperty(this.title, this.description, weiValue);
```
The `postProperty` function is to be defined inside `dapp-ui/plugins/utils.js`. Which should look something like this:
```js
const prop = await getAirbnbContract().methods.rentOutproperty(name, description, price).send(
  {from: account[0]
})
alert('Property Posted Successfully')
```
Next, to incorporate booking of a new property, we’ll define the `book()` function in `dapp-ui/components/detailsModal.vue`. Copy the code snippet inside the `book()`
```js
// get Start date
const startDay = this.getDayOfYear(this.startDate)
// get End date
const endDay = this.getDayOfYear(this.endDate)
// price calculation
const totalPrice = web3().utils.toWei(this.propData.price, 'ether') * (endDay - startDay)
// call utils.bookProperty
bookProperty(this.propData.id, startDay, endDay, totalPrice)
```
The `bookProperty()` function is to be defined inside `utils.js` and should look something like this:
```js
const prop = await getAirbnbContract().methods.rentProperty(spaceId, checkInDate, checkOutDate).send(
  {from: account[0],value: totalPrice,})
  alert('Property Booked Successfully')
```
Copy the code snippet inside the `bookProperty()`

The next and final functionality to add is fetching and displaying all available spaces. `fetchAllProperties()` function is invoked inside `index.vue` and defined inside `utils.js`

Navigate to `dapp-ui/plugins/utils.js` and add the following code to the `fetchAllProperties()` method:
```js
const propertyId = await getAirbnbContract().methods.propertyId().call()
// iterate till property Id
const properties = []for (let i = 0; i < propertyId; i++){
  const p = await airbnbContract.methods.properties(i).call()
  properties.push(
    {id: i,name: p.name,description: p.description,price: metamaskWeb3.utils.fromWei(p.price)}
  )}
  return properties
```
## Run and Test!

Aaand this marks the end of our DApp tutorial! We know it’s been a long one.

Execute `npm run dev` to view and interact with your decentralized application!

<img src={useBaseUrl("img/dapp/rent-your-property.png")} />

Click on ‘Rent your Property’ button on top right, it displays a dialogue box requiring title, description and price. The submit button sends these values to the function ‘rentOutProperty’ on the smart contract in the form of a transaction. Since it ‘transacts’ with the blockchain it would create a metamask popup requiring you to sign the transaction, shown below.

<img src={useBaseUrl("img/dapp/dapp-metamask-tx-confirm.png")} />

The Metamask popup displays the gas price for the transaction.
<img src={useBaseUrl("img/dapp/rent-out-success.png")} />

<img src={useBaseUrl("img/dapp/dapp-rent-success.png")} />

After the transaction is confirmed, the property lives on the blockchain and since it is available to be booked, it is displayed on the homepage.


<img src={useBaseUrl("img/dapp/dapp-property-details.png")} />
<img src={useBaseUrl("img/dapp/dapp-rent-success%201.png")} />

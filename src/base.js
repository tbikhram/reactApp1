import Rebase from 're-base';

//connection to firebase 
const base = Rebase.createClass({
	apiKey: "AIzaSyBbpG3ly7w5ewNk7CsTpuajhSD655E4csM",
    authDomain: "catch-of-the-day-tb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tb.firebaseio.com",
});

export default base;
//Barcode function variables
var keyPressed = "";
var modalClosed = true;

//Barcode Reader
$(document).ready(function(){

	//Get values entered and chk if matched card once enter(carrige return) is pressed
$(document).keydown(function(e) {
    //chk if enter was hit
    var code = (e.keyCode ? e.keyCode : e.which);
    // Enter key hit
    if(code==13) {
      //Log barocde scan trigger
      console.log("Enter Hit");
      //Chk if modal is open
      if(modalClosed) {
          for (var i = 0; i < cards.length; i++) {
           if(keyPressed  === cards[i].Barcode) {
            //Show modal
            openModal(cards[i].Background);
            oldEmoji = cards[i].Emoji;
           }
         }
      }
      //clear invalid barcodes
      keyPressed ="";
    }

    //Build string with input values
      else {
      	//Capture input
      	keyPressed = keyPressed + String.fromCharCode(code).toLowerCase();
      	console.log("var keyPressed = " + keyPressed);
      }
    });
  });

//Cards
var cards = [
{
	Title: "Were so proud of you, try again...",
  Background: "images/try-again.jpg",
	Barcode: "000001"
},
{
	Title: "You won a dollar in the canteen!!",
  Background: "images/one-dollar.jpg",
	Barcode: "000002"
},
{
	Title: "You won fifty cents in canateen!",
  Background: "images/50-cents.jpg",
	Barcode: "000003"
},
{
	Title: "Wohaa...! Ice cream for your bunk!!",
  Background: "images/Ice-cream.jpg",
	Barcode: "000004"
},
{
	Title: "You won a mini prize!",
  Background: "images/mini-prize.jpg",
	Barcode: "000005"
},
{
	Title: "You won a medium prize!",
  Background: "images/medium-prize.jpg",
	Barcode: "000006"
},
{
  Title: "You won a MEGA prize!",
  Background: "images/mega-prize.png",
  Barcode: "000007"
},
{
  Title: "You won!!",
  Background: "images/you-won.jpg",
  Barcode: "000008"
},
{
  Title: "Beats",
  Background: "images/beats.jpg",
  Barcode: "000009"
},
{
  Title: "You won a MEGA prize!",
  Background: "images/mega-prize2.jpg",
  Barcode: "000010"
},
{
  Title: "You won a GRAND prize!",
  Background: "images/grand-prize-f.jpg",
  Barcode: "000011"
},
{
  Title: "You won a SQUISHY prize!",
  Background: "images/squishy-f.jpg",
  Barcode: "000012"
}];

//only do something if modal is closed
function openModal(background) {
  if (modalClosed) {
    //Add Card info
    $(".modal").css("background-image", "url(" + background + ")");
      //Modal open
      modalClosed = false;
      //Clear input
      keyPressed ="";
      //Open modal and blur background
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
    //Set timer to close modal after 3 seconds
    var modalTimer = setTimeout( function() { closeModal()}, 3000);
  }
}

//close modal
function closeModal() {
    //Close modal and clear blur
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
  //modal closed
  modalClosed = true;
}

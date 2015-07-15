// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function (){
  $('.gallery').click(function (event){
    event.preventDefault();
    var photoswipeEl = $('.pswp').get(0);

    var items = [{
        src: 'images/lamoure/travel-inn-lamoure.jpg',
        w: 1500,
        h: 1125,
        title: "The Travel Inn in LaMoure, ND."
      }, {
        src: 'images/oakes/room-beds.jpg',
        w: 1500,
        h: 1125,
        title: "Comfortable beds in every Oakes room."
      }, {
        src: 'images/oakes/travel-inn-oakes-greenery.jpg',
        w: 1500,
        h: 1125,
        title: "The Travel Inn in Oakes, ND."
      }, {
        src: 'images/lamoure/queen-beds.jpg',
        w: 1125,
        h: 1500,
        title: "Brand new queen-size beds in every LaMoure room."
      }, {
        src: 'images/oakes/room-desk.jpg',
        w: 1500,
        h: 1125,
        title: "Each room is clean and spacious. This one is in Oakes."
      }, {
        src: 'images/oakes/bathroom.jpg',
        w: 1125,
        h: 1500,
        title: "The bathrooms are kept very clean. This is one in Oakes."
      }, {
        src: 'images/oakes/breakfast-nook-kitchen.jpg',
        w: 1125,
        h: 1500,
        title: "The Oakes location has a nook where breakfast is served."
      }, {
        src: 'images/oakes/breakfast-nook-tables.jpg',
        w: 1500,
        h: 1125
      }, {
        src: 'images/lamoure/bathroom.jpg',
        w: 1125,
        h: 1500,
        title: "This is a sparkling clean bathroom in LaMoure."
      }, {
        src: 'images/lamoure/fire-pit.jpg',
        w: 1500,
        h: 1125,
        title: "Hang out with your canine or human buddies at the fire pit in LaMoure."
      }, {
        src: 'images/oakes/grill.jpg',
        w: 1125,
        h: 1500,
        title: "The Oakes hotel is outfitted with a grill for delicious barbecues."
      }, {
        src: 'images/lamoure/breakfast-bar.jpg',
        w: 1125,
        h: 1500,
        title: "The LaMoure breakfast bar provides a good start to the day."
      }, {
        src: 'images/lamoure/game-fish-cleaning-area.jpg',
        w: 1125,
        h: 1500,
        title: "The LaMoure game and fish cleaning area is a great place to clean your catch."
      }, {
        src: 'images/oakes/game-fish-cleaning-station.jpg',
        w: 1125,
        h: 1500,
        title: "The Oakes cleaning station is very useful after a successful hunt."
      }
    ];

    var gallery = new PhotoSwipe(photoswipeEl, PhotoSwipeUI_Default, items, {});
    gallery.init();
  });
});

/*
* Document setup.
*/

$(document).ready(function() {
  $('#slider1').tinycarousel({
    bullets: true
  });
    
    
});

var renderer = PIXI.autoDetectRenderer(440,300);

renderer.backgroundColor = 0xFFFFFF;
   // document.body.appendChild(renderer.view);

    $("#avatar").append(renderer.view);

    
    
    
    // create the root of the scene graph
    var stage = new PIXI.Container();

    var spineBoy = null;

    // load spine data
    PIXI.loader
        .add('avatar', 'avatar/Avitar.json')
        .load(onAssetsLoaded);


    $("#test").click(function(){

            spineBoy.state.addAnimationByName(1, 'Idle2', false);
            //spineBoy.state.setAnimationByName(0, 'Idle', true);
    });

function onAssetsLoaded(loader, res)
{
    // create a spine boy
    spineBoy = new PIXI.spine.Spine(res.avatar.spineData);

    // set the position
    spineBoy.position.x = renderer.width / 2;
    spineBoy.position.y = renderer.height;

    spineBoy.scale.set(0.9);
    
   

    // set up the mixes!
//    spineBoy.stateData.setMixByName('Idle', 'Idle2', 0.1);
//    spineBoy.stateData.setMixByName('Idle2', 'Idle', 0.4);

    // play animation
    //spineBoy.state.setAnimationByName(0, 'Idle2', false);
    spineBoy.state.addAnimationByName(0, 'Idle', true);


    stage.addChild(spineBoy);
    stage.setBackgroundColor('0xFFFFFF');
    
    

//    stage.on('click', function ()
//    {
//        spineBoy.state.setAnimationByName(0, 'Jump', false);
//        spineBoy.state.addAnimationByName(0, 'Idle', true, 0);
//    });
}

requestAnimationFrame(animate);

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
}


/*
 * Click Actions.
 */

//$("#hairstyles, #faces, #hats, #shirts, #torsos, #other").click(function(event) {
$("#shirts").click(function(event) {

  // Store which parent item triggered the menu display.
  localStorage.setItem("selectedArea", event.target.id);
  document.getElementById("selectedArea").innerHTML = event.target.id;
  toggleMenuDisplay();
});

$("#doneButton").click(function(event) {
  toggleMenuDisplay();
});




$('#leftNavigationArrow').click(function() {
  $('#picker').trigger('backward');
});

$('#rightNavigationArrow').click(function() {
  $('#picker').trigger('forward');
});

/*
 * Utility Functions.
 */

function toggleMenuDisplay() {

  if ($('#builderMenu').is(':visible')) {
    $("#builderMenu").fadeOut("slow", function() {
      $("#builderSlideMenu").fadeIn("slow", function() {
         $('#demo').tinycarousel();
      });
    });

  } else {
    $("#builderSlideMenu").fadeOut("slow", function() {
      $("#builderMenu").fadeIn("slow", function() {});
    });
  }
}

$('.overview li').click(function (event) {
    //alert($(this).index());
    
    var item = $(this).index();
    
    
    spineBoy.state.addAnimationByName(1, 'Idle' + item, false);

    localStorage.setItem(localStorage.getItem("selectedArea"), $(this).index());

});

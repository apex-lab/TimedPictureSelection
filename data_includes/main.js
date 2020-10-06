PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/apex-lab/TimedPictureSelection/tree/master/chunk_includes/");
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "welcome" , randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will first see an alien moving in four different kinds of ways. </p>")
    ,
    newText("<p>Press <strong> [w] [a] [s] [d] </strong>to catch these aliens as quickly as possible.</p>")
    ,
    newText("<p>For aliens moving <strong>from middle left to middle right </strong>(shown in the upper left video), press <strong>[w]</strong>; </p>")
    ,
    newText("<p>For aliens moving <strong>from lower left to upper right </strong>(shown in the upper right video), press <strong>[a]</strong>;</p>")
    ,
    newText("<p>For aliens moving <strong>from upper left, down to the bottom, then to upper right </strong>(shown in the lower right video), press <strong>[s]</strong>; </p>")
    ,
    newText("<p>For aliens moving <strong>from upper right to bottom left </strong>(shown in the lower right video), press <strong>[d]</strong>. </p>")
    ,
    newText("<p>Please get yourself familiar with the action required for catching aliens. </p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newVideo("1","alien1.mp4")
         .size(200,200)
         .play()
    ,
    newVideo("2","alien2.mp4")
         .size(200,200)
         .play()
    ,
    newVideo("3","alien3.mp4")
         .size(200,200)
         .play()
    ,
    newVideo("4","alien4.mp4")
         .size(200,200)
         .play()
    ,
    newCanvas(400,400)
         .add(   0 , 0 , getVideo("1") )
         .add(   200 , 0 , getVideo("2") )
         .add(   0 , 200 , getVideo("3") )
         .add(   200 , 200 , getVideo("4") )
         .print()
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )
Template( variable =>
    newTrial( "experiment" ,
    newAudio('bgm',"drumloop_65.wav")
        .play()
    ,
    newText("fixation",'+')
        .print()
    ,

    newTimer("wait", 800)
        .start()
        .wait()
    ,

    getText('fixation')
        .remove()
    ,

    newAudio("tone", variable.AudioFile)
        .play("loop")
    ,
    newTimer("wait", 800)
        .start()
        .wait()
    ,

    //newAudio("tone", variable.AudioFile)
        //.play()
    //,
    newVideo("gesture_key",variable.ImageFile)
        .size(400,400)
        .play("loop")
    ,
    newCanvas("alien",400,400)
        .add(   0 , 0 , getVideo("gesture_key") )
        .print()
    ,
    newKey('response',"wasd")
        .log()
        .wait()
    ,
    getAudio("tone")
        .stop()
    ,
   getKey("response")
       .test.pressed(variable.key)
       .success( newAudio("success", "success.wav").play() )
       .failure( newAudio("failure", "failure.wav").play(), newText(variable.key).bold().center().color("red").settings.css("font-size", "400%").print() )
    ,
   newTimer("wait", 800)
        .start()
        .wait()
    ,         
    getCanvas("alien")
        .remove()
    


    //newText("continue","Press space bar to continue;")
        //.print()
    //,
    //newKey('space',' ')
         //.wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)

SendResults( "send" )
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)

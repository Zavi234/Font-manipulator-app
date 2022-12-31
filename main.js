function preload()
{

}

function setup()
{
   canvas= createCanvas(550,450)
   canvas.position(750,130) 

   video= createCapture(VIDEO)
   video.size(550,550)

   poseneto= ml5.poseNet(video,modelLoaded)
   poseneto.on("pose",got_results)
}

function draw()
{

}

function got_results(results)
{
    if(results.length>0)
    {
        
    }
}

function modelLoaded()
{
    console.log("Posenet has initialized")
}
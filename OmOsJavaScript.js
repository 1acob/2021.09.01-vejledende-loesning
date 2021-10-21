function handler(entries) {

    //TODO: something 
     for ( const entry of entries ) {
         if (entry.isIntersecting === true ) 
         {

            entry.target.classList.add("transition");

         }
         else
         {
            entry.target.classList.remove("transition");
            
         }
     }
}

const observer = new IntersectionObserver(handler,
{
    threshold: 0.5, 
});

 const img = document.getElementById('image1');
 img.classList.add("fade-scale-in");

observer.observe(img);
// Video handler

function videoHandler(entries)
{
    for (const entry of entries) 
    {
        if (entry.isIntersecting)
        {
            entry.target.play();
        }
        else
        {
            entry.target.pause();
        }
    }
}

const videoObserver = new IntersectionObserver(videoHandler)
const video1 = document.getElementById("video-1");
videoObserver.observe(video1);

pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "v2osk-P_hTMaVlkzk-unsplash.jpg"
});

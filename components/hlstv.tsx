import Script from "next/script";
import sleep from "../utils/sleep";

export default function HlsTV() {
    const sourceUrlHLS = "http://localhost:8000/live/vintage-tv/index.m3u8";


    return (
        <div>
            <video
            id="my-video"
            className="video-js"
            preload="auto"
            width="640"
            height="264"
            data-setup="{}"
            autoPlay={true}
            muted={true}
          >
            <source src={sourceUrlHLS} />
            
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">supports HTML5 video</a>
            </p>
          </video>

          <Script 
        src="https://vjs.zencdn.net/7.20.3/video.min.js"
        onReady={() => {
          let myPlayer = videojs('my-video');

          if (myPlayer) {
            console.log("hls tv ready")
            myPlayer.on('ended', async () => {
              console.log("video ended")
              // essaye 5 fois de passer à la vidéos suivantes
              let c = 0;
              let ok = false;
              while (c < 5 && !ok) {
                myPlayer.src(sourceUrlHLS);

                if (myPlayer.paused()) {
                    c++;
                    console.log("waiting 500ms");
                    await sleep(500);
                } else {
                    ok = true;
                }
              }
            });
          }
        }}/>
        </div>
    );
}
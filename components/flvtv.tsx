import Script from "next/script";
import sleep from "../utils/sleep";

export default function FlvTV() {

    const sourceUrl = "http://localhost:8000/live/vintage-tv.flv";

    return (
        <div>
            <video id="videoElement"
                width="100%"
                height="100%"
                muted />

            <Script
                id="flvJs"
                src="https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.6.2/flv.min.js"
                onReady={() => {
                    console.log("flv tv ready");
                    if (flvjs.isSupported()) {
                        flvjs.LoggingControl.enableVerbose = false;
                        const videoElement = document.getElementById('videoElement');
                        var flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            isLive: true,
                            url: sourceUrl,
                            //enableStashBuffer: false,
                            //autoCleanupSourceBuffer: true,
                        });
                        
                        flvPlayer.attachMediaElement(videoElement);
                        flvPlayer.load();
                        flvPlayer.play();

                        if (videoElement) videoElement.addEventListener('ended', async () => {
                            // essaye 5 fois de passer à la vidéos suivantes
                            let c = 0;
                            let ok = false;
                            while (c < 5 && !ok) {
                                flvPlayer.unload();
                                flvPlayer.load();
                                flvPlayer.play();

                                if (videoElement && videoElement.paused) {
                                    c++;
                                    console.log("waiting 500ms")
                                    await sleep(500);
                                } else {
                                    ok = true;
                                }
                            }
                            
                        });
                    }
                }}
            />

        </div>
    );
}
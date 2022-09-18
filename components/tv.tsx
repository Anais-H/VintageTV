import Script from "next/script";

export default function TV() {

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
                    console.log("onReady");
                    if (flvjs.isSupported()) {
                        var videoElement = document.getElementById('videoElement');
                        var flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            isLive: true,
                            url: sourceUrl
                        });
                        
                        flvPlayer.attachMediaElement(videoElement);
                        flvPlayer.load();
                        flvPlayer.play();

                        if (videoElement) videoElement.addEventListener('ended', () => {
                            flvPlayer.unload();
                            flvPlayer.load();
                            flvPlayer.play();
                        });
                    }
                }}
            />

        </div>
    );
}
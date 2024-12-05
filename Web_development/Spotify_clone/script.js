console.log("let's write js");
async function getsongs() {

    let a = await fetch("http://127.0.0.1:3000/Web_development/Spotify_clone/songs/")
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("-")[1])
        }

    }
    return songs
}
const playmusic=(track)=> 
{
    let audio = new Audio("/songs/"+track)
    audio.play();

}
async function main() {
    let songs = await getsongs()
    console.log(songs)
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
                            <img style="filter: invert();" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>Song Artist</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img src="play.svg" alt="">
                            </div></li><br>`;
    }
    Array.from(document.querySelector(".playbar")).getElementsByTagName("div").forEach(e=> {
       console.log(e)    
    });
}
main()
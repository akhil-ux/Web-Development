console.log("let's write js");
async function getsongs() {

    let a = await fetch("http://127.0.0.1:3000/Web_development/Spotify_clone/songs/")
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3"))
        {
            songs.push(element.href.split("/songs/")[1])
        }
        
    }
    return songs
}
async function main()
{
    // let songs= await getsongs()
    // console.log(songs)
    // let songUl=document.querySelector(".songlist").getElementsByTagName("ul")[0]
    // for(const song of songs)
    // {
    //     songUl.innerHTML=songUl.innerHTML+`<li> ${song.replaceAll("%20"," ")}</li>`;
    // }
    // var audio = new Audio(songs[0]);
    // audio.play();
    // audio.play(songs)

}
main()
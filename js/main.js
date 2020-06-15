let song;
let playSong;
function getSong(id,event){
    switch(id){
        case 'fig1':{
            event.stopPropagation()
            clickedElement(0,3)
            break;
        }
        case 'fig2':{
            event.stopPropagation()
            clickedElement(1,3)
            break;
        }
        case 'fig3':{
            event.stopPropagation()
            clickedElement(2,0)
            break;
        }
        case 'fig4':{
            event.stopPropagation()
            clickedElement(3,4)
            break;
        }
        case 'fig5':{
            event.stopPropagation()
            clickedElement(4,3)
            break;
        }
        case 'fig6':{
            event.stopPropagation()
            clickedElement(5,1)
            break;
        }
    }
}
async function clickedElement(img_index, item_index, event){
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', 'Bearer BQCMaWIrT73ozpJEplX9EYikb96pGFvbixPmgzinbZvdlAFNcuPGgFME2U7YF7QncgHM0yqJ76yU3WoWdXNgJkWrbPJ7zFv9189M_zJ48GFDIShuDwHxSGk4DSHkrhjWY2OSpzIEQHaRdy4']
    ]);
    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers 
    })
    await fetch(request)
        .then((response)=> response.json())
        .then((rawData) => {
            console.log(rawData)
            song = rawData.tracks.items[item_index].preview_url
        })
        songSnippet(song)
}

function songSnippet(url)
{
    playSong =  new Audio(url)
    playSong.play()
}
function stopSnippet(){
    return playSong.pause();
}
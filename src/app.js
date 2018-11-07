const links = document.querySelectorAll('.dropdown-content a')
console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        if (links[i].className === 'ww') {
            link = "https://api.deezer.com/playlist/3155776842"
        }
        else if (links[i].className === 'sr') {
            link = "https://api.deezer.com/playlist/1266972981"
        }
        else if (links[i].className === 'usa') {
            link = "https://api.deezer.com/playlist/1313621735"
        }
        fetch(link)
            .then(res => res.json())
            .then((data) => {
                console.log(data);

                let output = ''

                data.tracks.data.forEach(track => {
                    // console.log(data);

                    output += `<div class="artist">
                        <a href="${track.artist.link}"><img src="${track.album.cover_medium}"></img></a>
                        <div class="info">
                        <p class="title">${track.artist.name}<br>${track.title_short}</p>
                        <div>
                        <audio id="${track.id}" src=${track.preview}></audio>
                            <a onclick="document.getElementById('${track.id}').play()"><i class="fas fa-play-circle fa-lg"></i></a>
                            <a onclick="document.getElementById('${track.id}').pause()"><i class="fas fa-pause-circle fa-lg"></i></a>
                        </div>
                        </div>
                        </div>`

                    document.getElementById('output').innerHTML = output

                });

            })
    })
}


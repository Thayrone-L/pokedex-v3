import "../styles/Fundo.css";
function Fundo({ tipo }) {

    console.log(tipo.tipo);
    
    var srcFundo;
    switch (tipo.tipo) {

        case "bug":
        
            srcFundo = "https://wallpaperaccess.com/full/3694023.jpg"
            break
        case "dark":
        
            srcFundo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1681e8bc-7288-4cd4-95c6-d102bfc8c6c2/d7qzuky-14195770-d1aa-4389-99ae-0b644ff34508.jpg/v1/fill/w_1024,h_576,q_75,strp/dark_pokemon_wallpaper_by_captainpenguin98_d7qzuky-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMTY4MWU4YmMtNzI4OC00Y2Q0LTk1YzYtZDEwMmJmYzhjNmMyXC9kN3F6dWt5LTE0MTk1NzcwLWQxYWEtNDM4OS05OWFlLTBiNjQ0ZmYzNDUwOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._VucqrnRGlcwcgpG8vEBMse2n1N1FA7huKY95vtSQ9M"
            break
        case "dragon":
        
            srcFundo = "https://img.wallpapersafari.com/desktop/1024/576/35/22/HUDopw.jpg"
            break
        case "electric":
        
            srcFundo = "https://wallpaperaccess.com/full/2359756.jpg"
            break
        case "fairy":
            
            srcFundo = "https://cutewallpaper.org/21/fairy-pokemon-wallpapers/Pokemon-Jigglypuff-Wallpaper-pokemon-galery.jpg"
            break
        case "fighting":
            
            srcFundo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b8f8ca3-3176-4d5f-8a78-784a7149f6ed/d75tb8f-7d6888f8-8aae-4695-8f01-fab04f0116ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiOGY4Y2EzLTMxNzYtNGQ1Zi04YTc4LTc4NGE3MTQ5ZjZlZFwvZDc1dGI4Zi03ZDY4ODhmOC04YWFlLTQ2OTUtOGYwMS1mYWIwNGYwMTE2ZmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fDCBrU00HFeA20XFLg0vbK7KlCzYTse3iK-kPKcOdn8"
            break
        case "fire":
            
            srcFundo = "https://wallpaperaccess.com/full/162914.jpg"
            break
        case "flying":
            
            srcFundo = "https://wallpaperaccess.com/full/760771.jpg"
            break
        case "ghost":
            
            srcFundo = "https://i.redd.it/e2aiwmfjv0g51.png"
            break
        case "grass":
            
            srcFundo = "https://wallpaperaccess.com/full/2019209.jpg"
            break
        case "ground":
            
            srcFundo = "https://i.pinimg.com/originals/58/c1/87/58c187d046de1852dbbf009f44df6159.jpg"
            break
        case "ice":
            
            srcFundo = "https://wallpaperaccess.com/full/1360986.jpg"
            break
        case "normal":
            
            srcFundo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b8f8ca3-3176-4d5f-8a78-784a7149f6ed/d75tbtp-1208d9ea-76dc-4ac2-a637-5fe0064f797a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiOGY4Y2EzLTMxNzYtNGQ1Zi04YTc4LTc4NGE3MTQ5ZjZlZFwvZDc1dGJ0cC0xMjA4ZDllYS03NmRjLTRhYzItYTYzNy01ZmUwMDY0Zjc5N2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gvMoA5Xgg3rc6iTpjl6nHx2kEoFJg8hJfpOP7Q5BDZI"
            break
        case "poison":
            
            srcFundo = "http://static.minitokyo.net/downloads/40/43/604690.jpg"
            break
        case "psychic":
            
            srcFundo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1681e8bc-7288-4cd4-95c6-d102bfc8c6c2/d7qu09n-7a3f0fe6-9a69-4e6f-af00-d29fad988af7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2ODFlOGJjLTcyODgtNGNkNC05NWM2LWQxMDJiZmM4YzZjMlwvZDdxdTA5bi03YTNmMGZlNi05YTY5LTRlNmYtYWYwMC1kMjlmYWQ5ODhhZjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UNQXGeamXiaGLrIdrcOChV7TIIprKqIhi-pcYQtj-vQ"
            break
        case "rock":
            
            srcFundo = "https://i.imgur.com/WV3hUjF.jpg"
            break
        case "steel":
            
            srcFundo = "https://pm1.narvii.com/6319/1260c5adab2f80cdbbf36576fb6d8f1aa5d52f90_hq.jpg"
            break
        case "water":
            
            srcFundo = "https://images5.alphacoders.com/389/389247.png"
            break
        default:
            
            srcFundo = "https://i.redd.it/e2aiwmfjv0g51.png"

    }

    
    var Fundo = <img className="fundo" src={srcFundo} height="100px" alt={tipo.tipo} />;
    return (
        <div>
            
            <div className="filtro"></div>
            <div>{Fundo}</div>
          
            
        </div>

    );

}

export default Fundo;
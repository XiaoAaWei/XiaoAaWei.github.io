const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '芥末',
        artist: 'さユり',
        url: 'http://music.163.com/song/media/outer/url?id=1974348403.mp3',
        cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
        lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
    }
    ]
});
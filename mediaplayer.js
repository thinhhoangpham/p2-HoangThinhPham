class MediaPlayer {
    constructor(playlist, songs) {
        this.playlist = playlist;
        this.songs = songs;
        this.currentSongMT = 0;
        this.currentSong = 0;
        this.playing = false;
    }

    display() {
        console.log(this.currentSong);
        this.playSong();
    }

    playSong() {
        this.songs[this.currentSong].play();
        this.playing = true;
    }

    pauseSong() {
        this.songs[this.currentSong].pause();
        this.playing = false;
    }

    nextSong() {
        if (this.currentSong < this.songs.length) {
            this.currentSong++;
        }
    }
    prevSong() {
        if (this.currentSong > 0) {
            this.currentSong--;
        }
    }

    playing() {
        return this.playing;
    }
}
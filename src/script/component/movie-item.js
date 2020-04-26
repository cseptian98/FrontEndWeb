const img = "https://image.tmdb.org/t/p/w500/";
class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
        * {
            margin : 0;
            padding : 0;
            box-sizing : border-box;
        }
        :host {
            display: flex;
            margin-bottom: 20px;
            box-shadow: 10px 12px 5px 0 rgba(0, 0, 0.8, 0.5);
            border-style: solid;
            border-radius: 10px;
            overflow: hidden;
        }

        .fan-art-movie {
            width: 50%;
            object-fit: none;
            object-position: center;
        }

        .movie-info {
            width: 50%;
            padding: 24px;
        }
        
        .movie-info > h2 {
            font-family: 'Anton', sans-serif;
            font-weight: bolder;
            color: #00A572;            ;
        }
        
        .movie-info > p {
            font-family: 'PT Serif', serif;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            /* number of lines to show */
        }

        .movie-info > p:hover{
            overflow: visible;
            -webkit-line-clamp: 12;
        }
        </style>
        <img class="fan-art-movie" src="${img}.${this._movie.backdrop_path}" alt="Fan Art">
            <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <p>Release Date : ${this._movie.release_date}</p>
            <p>Rating : ${this._movie.vote_average}</p>
            <p>${this._movie.overview}</p>
        </div>`;
    }
}

customElements.define("movie-item", MovieItem);
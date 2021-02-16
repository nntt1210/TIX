import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';
import MovieRow from '../MovieRow/MovieRow';



class MovieLayout extends Component {

    render() {
        const { movieList } = this.props;
        console.log("movieList-MovieLayout", movieList);
        return (
            <>
                <div className="col-12 col-sm-6 news__card px-sm-3 px-5">
                    <Movie movieF={movieList[0]} />
                </div>
                <div className="col-12 col-sm-6 news__card px-sm-3 px-5">
                    <Movie movieF={movieList[1]} />
                </div>
                <div className="col-12 col-sm-4 news__card px-sm-3 px-5">
                    <Movie movieF={movieList[2]} />
                </div>
                <div className="col-12 col-sm-4 news__card px-sm-3 px-5">
                    <Movie movieF={movieList[3]} />
                </div>
                <div className="col-12 col-sm-4 news__card px-sm-3 px-5">
                    <div className="row d-flex p-1 innerCard">
                        <MovieRow movie={movieList[4]} />
                    </div>
                    <div className="row d-flex p-1  innerCard">
                        <MovieRow movie={movieList[5]} />
                    </div>
                    <div className="row d-flex p-1  innerCard">
                        <MovieRow movie={movieList[6]} />
                    </div>
                    <div className="row d-flex p-1  innerCard">
                        <MovieRow movie={movieList[7]} />
                    </div>
                </div>
            </>

        );
    }
}

export default MovieLayout;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import MovieLichChieu from '../MovieLichChieu/MovieLichChieu';


class OwlItemComingSoon extends Component {
    render() {
        const { movieLichChieu } = this.props;
        console.log("check", movieLichChieu);
        var currentPosition = 0;
        if (movieLichChieu.length == 0) return <Loader />
        return movieLichChieu.map((item, idex,) => {
            console.log("run");
            var newMovieList = movieLichChieu.slice(currentPosition, currentPosition + 8);
            console.log("newMovieList", newMovieList);
            return (
                <>
                    <div className="item">
                        <div className="row">
                            <MovieLichChieu movieLichChieu={newMovieList} />
                        </div>
                    </div>

                </>
            );
        })


    }
}

export default OwlItemComingSoon;
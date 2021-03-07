import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLichChieu from '../../../components/MovieLichChieu/MovieLichChieu';
import { actFetchComingSoonApi } from "./module/actions";
import OwlItemComingSoon from '../../../components/OwlItemComingSoon/OwlItemComingSoon';
import Loader from '../../../components/Loader';

//using owl Carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

class ComingSoon extends Component {

    renderItem = () => {
        const { movieList } = this.props;
        console.log('ComingSoon', movieList);
        if (movieList && movieList.length > 0) {
            console.log('check', movieList);
            var currentPosition = 0;
            return () => {
                for (let i = 0; i < (movieList.length / 8); i++) {
                    var newMovieList = movieList.slice(currentPosition, currentPosition + 8);

                    console.log("newMovieList", newMovieList, currentPosition);
                    currentPosition += 8;
                    return (
                        <>
                            <div className="item">
                                <div className="row">
                                    <MovieLichChieu
                                        movieLichChieu={newMovieList}

                                    />
                                </div>
                            </div>

                        </>
                    )
                }
            }

        }

    }
    render() {
        const { movieList, isLoading } = this.props;
        console.log('ComingSoon', movieList);
        if (isLoading) return <Loader />
        return (
            <section id="now" className="comingSoon">
                <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#nowShowingFilms" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" data-target="#comingFilms" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="nowShowingFilms" role="tabpanel" aria-labelledby="home-tab">
                        <OwlCarousel
                            items="1"
                            autoplay="false"
                            dots="false"
                            nav=" true"
                            loop="true"
                            navText={[`<img src=${process.env.PUBLIC_URL}/img/back-session.png />`
                                , `<img src=${process.env.PUBLIC_URL}/img/next-session.png />`]}
                            responsive={
                                {
                                    0: {
                                        nav: false,
                                        dots: false,
                                    }
                                },
                                {
                                    600: {
                                        nav: true,
                                        dots: false,
                                    }
                                }

                            }
                            className="owl-theme" >
                            <OwlItemComingSoon movieLichChieu={movieList} />
                        </OwlCarousel >
                        {/* <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><img src={`<img src=${process.env.PUBLIC_URL}/img/back-session.png />`} /></button>
                            <button type="button" role="presentation" className="owl-next"><img src={`<img src=${process.env.PUBLIC_URL}/img/next-session.png />`} /></button></div> */}

                    </div>
                    <div className="tab-pane fade show active owl-carousel owl-theme  owl-loaded owl-drag" id="comingFilms" role="tabpanel" aria-labelledby="home-tab">
                        <div className="item">
                            <div className="row">
                                <div className=" col-3 film">
                                    <a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                                        <div className="showDetail">
                                            <img src="./img/ac-quy-doi-dau-deliver-us-from-evil-c16-15984134403610_215x318.png" alt />
                                            <div className="hoverInfo showHover">
                                            </div>
                                        </div>
                                        <span className="avgPoint">
                                            <p className="txtPoint">8.8</p>
                                            <p>
                                                <img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="half" src="./img/star1.2.png" alt />
                                            </p>
                                        </span>
                                    </a><div className="info"><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                                        <div className="nameFilm hideHover">
                                            <span className="ageType">
                                                C18
                  </span>
                                            <span>Ác Quỷ Đối Đầu - Deliver Us From Evil - (C18)</span>
                                        </div>
                                        <div className="infoFilm hideHover">
                                            100 phút
                </div>
                                    </a><div className="showHover"><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                                    </a><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau" className="buyNow">MUA VÉ</a>
                                        </div>
                                    </div>
                                    <button className="playTrailer" data-toggle="modal" data-target="#Modal" onclick="displayModal(this)">
                                        <span className="d-none">https://www.youtube.com/embed/jU06ylSH-BY</span>
                                        <img src="./img/play-video.png" alt />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        );
    }
}
function mapStateToProps(state) {
    return {
        // movieList: state.reducerComingSoon.movieComingSoon,
        // isLoading: state.reducerComingSoon.isLoading,
        movieList: state.reducerHomePage.moviesHomePage,
        isLoading: state.reducerHomePage.isLoading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleFetchApi: () => {
            dispatch(actFetchComingSoonApi());
        }
    })
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ComingSoon);

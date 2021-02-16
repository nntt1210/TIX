import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../components/Loader';
import MovieLayout from '../../../components/MovieLayout/MovieLayout';
import { actFetchListMovieTinTucApi } from './module/action';

class TinTucPage extends Component {
    // componentDidMount() {
    //     this.props.handleFetchApi();
    // }

    handleRenderHTML = () => {
        let { movies } = this.props;
        // console.log(movies);
        if (movies && movies.length > 0) {
            return <MovieLayout movieList={movies} />
        }
    }
    render() {
        return (
            <div className="filmDetails" id="homeNews">
                <div className="container films__all">
                    <div className="row">
                        <div className=" mainMaxWidth ">
                            <div className="nav__content pb-3">
                                <ul className="nav nav-tabs justify-content-center border-white tabCenter">
                                    <li className="nav-item  active">
                                        <a className="nav-link" data-toggle="tab" href="#showingNews">Điện Ảnh 24h</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#showingReview">Review</a>
                                        <div className="wing wingLeft" />
                                        <div className="wing wingRight" />
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#showingPromotion">Khuyến Mãi</a>
                                        <div className="wing wingLeft" />
                                        <div className="wing wingRight" />
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content pt-3">
                                <div id="showingNews" class="tab-pane active">
                                    <div class="row content__row">
                                        {this.handleRenderHTML()}
                                    </div>
                                </div>
                                <div id="showingReview" class="tab-pane fade">
                                    <div class="row content__row">
                                        {this.handleRenderHTML()}
                                    </div>
                                </div>
                                <div id="showingPromotion" class="tab-pane fade">
                                    <div class="row content__row">
                                        {this.handleRenderHTML()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return ({
        movies: state.reducerTinTuc.movieTinTuc,
        isLoading: state.reducerTinTuc.isLoading,
        err: state.reducerHomePage.err,
    })
}
// const mapDispatchToProps = (dispatch) => {
//     return ({
//         handleFetchApi: () => {
//             dispatch(actFetchListMovieTinTucApi(8));
//         }
//     })
// }
export default connect(mapStateToProps, null)(TinTucPage);

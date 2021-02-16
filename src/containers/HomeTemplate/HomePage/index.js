import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchListMovieHomePageApi } from './module/action';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlItem from '../../../components/OwlItem';
import Loader from '../../../components/Loader';


class HomePage extends Component {
    componentDidMount() {
        this.props.handleFetchApi();
    }
    renderHTML = () => {
        const { movieCarousel } = this.props;
        // console.log("renderhtml", movieCarousel);
        if (movieCarousel && movieCarousel.length > 0) {
            return (
                <OwlCarousel
                    items="1"
                    autoplay="true"
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
                                dots: true,
                            }
                        }

                    }
                    className="owl-theme" >
                    <OwlItem item={movieCarousel} />
                </OwlCarousel >
            )
        }
    }
    render() {
        const { modalItem, isLoading } = this.props;
        // console.log("modalItem", modalItem);
        if (isLoading) return <Loader />
        return (
            <section className="tixCarousel">
                {this.renderHTML()}
                <div id="Modal" className="modal fade" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal">
                                    <img src="./img/close.png" alt />
                                </button>
                                <iframe id="iframe" width={560} height={315} src={modalItem} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buyTicketsBox">
                    <div className="row m-0">
                        <div className="col-4 selectMovie dropdown">
                            <div className="selectMenu border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Phim
                            </div>
                            <ul className="dropdown-menu selectScroll">
                                <li>
                                    <a href="#">
                                        Ác Quỷ Đối Đầu - Deliver Us From Evil - (C18)
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-2 selectCinema dropdown">
                            <div className="selectMenu border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rạp
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Vui lòng chọn rạp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 selectDate dropdown">
                            <div className="selectMenu border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ngày xem
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Vui lòng chọn rạp và phim</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 selectTime dropdown">
                            <div className="selectMenu border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Suất chiếu
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Vui lòng chọn rạp, phim và ngày xem</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 buyNow">
                            <button type="button" className="btn btn-primary">Mua vé ngay</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return ({
        isLoading: state.reducerHomePage.isLoading,
        movieCarousel: state.reducerHomePage.moviesHomePage,
        modalItem: state.reducerHomePage.modalItem,
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleFetchApi: () => {
            dispatch(actFetchListMovieHomePageApi(4));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
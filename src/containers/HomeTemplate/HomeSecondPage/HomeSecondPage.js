import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentDetailLayout from '../../../components/ContentDetailLayout/ContentDetailLayout';
import Loader from '../../../components/Loader';
import MovieDetailLayout from '../../../components/MovieDetailLayout/MovieDetailLayout';
import * as action from "./modules/actions";


class HomeSecondPage extends Component {

    componentDidMount() {
        console.log("HomeSecondPage", this.props.match.params.id);
        const id = this.props.match.params.id;
        console.log("dispatch");
        this.props.fetchMovieSecondPage(id);
    }

    render() {

        const { detailMovie, loading } = this.props;
        if (loading) return <Loader />;
        console.log("HomeSecondPage", detailMovie);
        return (
            <div className=" homeSecondPage" >
                <div className="background" style={{ height: 600 }}>
                    <div className="col-sm-12 movieDetail">
                        <MovieDetailLayout detailMovieLayout={detailMovie} />
                    </div>
                </div>
                <div className="bgContent">
                    <div className=" contentDetail py-3">
                        <ContentDetailLayout detailContentLayout={detailMovie} />
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        detailMovie: state.reducerSecondPage.data,
        loading: state.reducerSecondPage.isLoading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieSecondPage: (id) => {
            dispatch(action.actFetchDetailMovie(id));
        }
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(HomeSecondPage);
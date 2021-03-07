import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };  
}
//movie row in tin tuc Page
class MovieRow extends Component {
    render() {
        const { movie } = this.props;
        console.log('Layout2', movie);
        return (
            <>
                <div className="col-2 p-0 cardImage">
                    <img className="imageS" src={movie.hinhAnh} />
                </div>
                <div className="col-10 p-0 card-text">
                    <a href="#">
                        <p>{movie.moTa}</p>
                    </a>
                </div>
            </>

        );
    }
}

export default connect(
    mapStateToProps,
)(MovieRow);
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Movie extends Component {

    render() {
        const { movieF } = this.props;
        // console.log("movieF", movieF);
        return (
            <>
                <img className="imgSize1" src={movieF.hinhAnh} />
                <div className="card-body px-0">
                    <a href="#" className="card-title">{movieF.moTa}</a>
                    <p className="card-text">{movieF.moTa}</p>
                    <div className="iconCard d-flex px-1">
                        <div className="like wrapIcon d-flex align-self-sm-center">
                            <a href="#"><img src="./img/like.png" alt className="iconFacebook postCmt" /></a>
                            <p>1</p>
                        </div>
                        <div className="comment wrapIcon d-flex">
                            <a href="#"><img src="./img/comment.png" alt className="iconFacebook postCmt" /></a>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps,)(Movie);
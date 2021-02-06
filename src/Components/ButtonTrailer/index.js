import { Button } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetMovieTrailer } from "./modules/action";

// const styles = (theme) => ({
//   button: {
//     width: "50px",
//     height: "50px",
//     padding: 0,
//   },
// });

class ButtonTrailer extends Component {
  render() {
    const { trailer } = this.props;
    return (
      <Button
        data-toggle="modal"
        data-target="#movieTrailer"
        style={{ width: "50px", height: "50px", padding: 0 }}
        onClick={() => this.props.updateMovieTrailer(trailer)}
      >
        <img className="img-fluid" src="/img/play-video.png" />
      </Button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovieTrailer: (trailer) => {
      dispatch(actGetMovieTrailer(trailer));
    },
  };
};

// export default withStyles(styles, { withTheme: true })(ButtonTrailer);
export default connect(null, mapDispatchToProps)(ButtonTrailer);

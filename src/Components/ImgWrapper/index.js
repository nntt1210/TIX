import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  img: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "4px",
  },
});

class ImgWrapper extends Component {
  render() {
    const { classes, src, alt } = this.props;
    return (
      <img className={classes.img} src={src} alt={alt}/>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImgWrapper);

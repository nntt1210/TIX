import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Letter from "../Alphabet";
import Seat from "../Seat";

export default class SeatList extends Component {
  RenderSeats = (type, currentRow = 0) => {
    return this.props.list
      .filter((seat) => seat.loaiGhe === type)
      .map((seat, index) => {
        if (index % 11 === 0) {
          rowIndex++;
          return (
            <>
              <Grid key={index} item xs={1}>
                <Letter index={index / 11 + currentRow} />
              </Grid>
              <Grid key={seat.maGhe} item xs={1}>
                <Seat
                  seat={seat}
                  type={type}
                  seatNumber={seat.tenGhe}
                  reserved={seat.daDat}
                />
              </Grid>
            </>
          );
        }

        return (
          <>
            <Grid key={seat.maGhe} item xs={1}>
              <Seat
                seat={seat}
                type={type}
                seatNumber={seat.tenGhe}
                reserved={seat.daDat}
              />
            </Grid>
          </>
        );
      });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={11}>
          <Grid container>{this.RenderSeats("Thuong")}</Grid>
          <Grid container>{this.RenderSeats("Vip", rowIndex)}</Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    );
  }
}

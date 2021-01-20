import React, { Component } from "react";
import Slider from "react-slick";
import BuyTicketBoxComponent from "../BuyTicketBox/BuyTicketBoxComponent";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listImg: [
        {
          src: "./img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16011908558560.jpg",
          trailer: "https://www.youtube.com/embed/XRm1P7oGpMQ",
        },
        {
          src: "./img/rom-c18-16008300686919.png",
          trailer: "https://www.youtube.com/embed/XRm1P7oGpMQ",
        },
        {
          src: "./img/greenland-tham-hoa-thien-thach-16000538668854.png",
          trailer: "https://www.youtube.com/embed/HU70ECwum2s",
        },
        {
          src:
            "./img/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg",
          trailer: "https://www.youtube.com/embed/jU06ylSH-BY",
        },
        {
          src: "./img/tenet-15984144207145.png",
          trailer: "https://www.youtube.com/embed/LdOM0x0XDMo",
        },
      ],
      trailer: null,
    };
  }

  setTrailer = (trailer) => {
    this.setState({
      trailer,
    });
  };

  renderSlide = () => {
    return this.state.listImg.map((item, index) => {
      return (
        <div key={index} className="item">
          <img className="d-block w-100" src={item.src} alt="" />
          <div className="playBtn__overlay">
            <button
              data-toggle="modal"
              data-target="#movieTrailer"
              onClick={() => this.setTrailer(item.trailer)}
            >
              <img src="img/play-video.png" />
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="tixCarousel">
        <Slider {...settings}>{this.renderSlide()}</Slider>
        <div
          id="movieTrailer"
          className="modal fade"
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                {/* <button type="button" className="close" data-dismiss="modal">
                  <img src="./img/close.png" alt />
                </button> */}
                <iframe
                  id="iframe"
                  width="100%"
                  height="100%"
                  src={this.state.trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <BuyTicketBoxComponent />
      </section>
    );
  }
}

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CarouselComponent extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

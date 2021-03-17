import UserService from "./user";
import AdminService from "./admin";
import MovieService from "./movie";
import CinemaService from "./cinema";
import ShowTimeService from "./showtime";
import BookingService from "./booking";

export const userService = new UserService();
export const adminService = new AdminService();
export const movieService = new MovieService();
export const cinemaService = new CinemaService();
export const showTimeService = new ShowTimeService();
export const bookingService = new BookingService();

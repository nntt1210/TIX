import { Avatar, Box, Typography, List, ListItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './style';
import useContainerStyles from './../MyContainer/style';

export default function Footer() {
  const styles = useStyles();
  const containerStyles = useContainerStyles();

  return (
    <footer className={styles.footer}>
      <Box className={containerStyles.root}>
        <Box>
          <Typography variant='body2'>
            <NavLink to='#!'>Bạn có câu hỏi? Liên hệ với chúng tôi.</NavLink>
          </Typography>
          <List className={styles.footerList}>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Câu hỏi thường gặp</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Trung tâm trợ giúp</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Tài khoản</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Quan hệ với nhà đầu tư</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Việc làm</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Điều khoản sử dụng</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Quyền riêng tư</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Tùy chọn cookie</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Thông tin đối tác</NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Liên hệ với chúng tôi </NavLink>
            </ListItem>
            <ListItem className='footer__item'>
              <NavLink to='#!'>Thông báo pháp lý</NavLink>
            </ListItem>
          </List>
        </Box>
        <Box className={styles.footerBottom}>
          <Box className='row'>
            <Box className='col-md-1 text-center text-md-left mb-3'>
              <NavLink to='#!'>
                <Avatar
                  variant='square'
                  src='/img/coop20.jpg'
                  alt='zion'
                  sx={{
                    width: 'fit-content',
                    height: 'fit-content',
                    borderRadius: '0.25rem',
                  }}
                />
              </NavLink>
            </Box>
            <Box className='col-md-9 text-md-left text-center'>
              <Typography variant='span'>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </Typography>
              <Typography variant='span'>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </Typography>
              <Typography variant='span'>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </Typography>
              <Typography variant='span'>
                Số Điện Thoại (Hotline): 1900 545 436
              </Typography>
              <Typography variant='span'>
                Email:
                <NavLink to='#!'>support@tix.vn</NavLink>
              </Typography>
              <Typography variant='span'>
                * Đây là trang web đc clone bởi Tam Nguyen với mục đích học tập.
              </Typography>
            </Box>
            <Box className='col-md-2 text-center text-md-right mt-3 mt-md-0'>
              <NavLink to='#!'>
                <Avatar
                  sx={{ width: 'fit-content', height: 'fit-content' }}
                  variant='square'
                  className={styles.footerBCT}
                  src='/img/bocongthuong.png'
                  alt='bocongthuong'
                />
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

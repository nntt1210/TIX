import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Search from "../../components/Search";
import { Box } from "@mui/material";
import Table from "../DataTable";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./style";
// import {
//   GET_EDIT_STATUS,
//   GET_EDITED_ACCOUNT,
//   GET_KEYWORD_ACCOUNT,
// } from "../../redux/actions/actionType";

import * as ActionType from "./../../Containers/AdminTemplate/modules/constants";
import {
  actDeleteUser,
  actGetAccountsApi,
} from "./../../Containers/AdminTemplate/modules/action";

export default function UserTable() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const accounts = useSelector((state) => state.accountsReducer.list);
  // console.log(accounts);
  const user = useSelector((state) => state.userLoginReducer.login);
  // const keyWord = useSelector((state) => state.accounts.keyWord);

  let headers = [
    "Tên tài khoản",
    "Họ và tên",
    "Loại người dùng",
    "Email",
    "Số điện thoại",
    "Chỉnh sửa",
    "Xoá",
  ];

  useEffect(() => {
    dispatch(actGetAccountsApi());
  }, [dispatch]);

  const handleEdit = (user) => {
    dispatch({ type: ActionType.GET_EDIT_STATUS, payload: true });
    dispatch({ type: ActionType.GET_EDITED_USER, payload: user });
    // window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(actDeleteUser(id, user.accessToken));
  };

  // const handleSearch = () => {
  //   dispatch(getAccounts(keyWord));
  // };

  let data = accounts.map((account) => ({
    id: account.taiKhoan,
    fullName: account.hoTen,
    type: account.maLoaiNguoiDung,
    emal: account.email,
    phoneNumber: account.soDt,
    edit: (
      <IconButton
        onClick={() => handleEdit(account)}
        className={styles.iconButton}
        size="large">
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton
        type="button"
        onClick={() => handleDelete(account.taiKhoan)}
        className={styles.iconButton}
        size="large">
        <DeleteIcon color="error" />
      </IconButton>
    ),
  }));

  return (
    <>
      {/* <Box className={styles.search}>
        <Search
          placeholder="Nhập tên người dùng..."
          state={keyWord}
          dispatchType={GET_KEYWORD_ACCOUNT}
          searchAction={handleSearch}
        />
      </Box> */}
      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={data}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
}

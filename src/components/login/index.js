function Login() {
  const isLogin = true;
  if (isLogin === true) {
    return (
      <>
        <div>Thông tin người dùng, nút logout</div>
      </>
    );
  } else {
    return (
      <>
        <div>Nút đăng nhập, đăng ký</div>
      </>
    );
  }
}
export default Login;

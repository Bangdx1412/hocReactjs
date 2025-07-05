function Login() {
  const isLogin = false;

  return (
    <>
      {isLogin === true ? (
        <><div>Thông tin người dùng, logout</div></>
      ) : (
        <> <div>Nút đăng ký, đăng nhập</div></>
       
      )}
      {isLogin && <div>Avarta</div>}
    </>
  );
}
export default Login;

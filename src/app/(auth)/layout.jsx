const AuthLayout = ({ children }) => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <div className="w-96">{children}</div>
    </main>
  );
};

export default AuthLayout;

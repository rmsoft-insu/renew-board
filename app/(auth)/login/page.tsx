import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-200">
        <div className="min-h-[320px] w-[400px] rounded-md bg-white p-4">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;

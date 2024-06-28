import Link from "next/link";
import { Button } from "./ui/button";

export const LoggedInComponent = () => {
  return (
    <>
      <div>Logged In</div>
    </>
  );
};

export const LogInComponent = () => {
  return (
    <>
      <div className="h-[200px] w-[400px] bg-white p-4">
        <h1 className="text-center">카테고리</h1>
        <div className="mt-4 flex flex-col space-y-4">
          <Button asChild>
            <Link href="/signin">회원가입</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">로그인</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

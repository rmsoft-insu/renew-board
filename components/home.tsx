import Link from "next/link";
import { Button } from "./ui/button";

import { Session } from "next-auth";

export const LoggedInComponent = ({ session }: { session: Session }) => {
  const { user } = session;

  return (
    <>
      <div>
        <div className="rounded-md bg-white p-4">
          <h1 className="mb-2 text-xl font-bold">로그인 정보</h1>
          <div className="flex gap-2">
            <span>이메일</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex gap-2">
            <span>이름</span>
            <span>{user?.name}</span>
          </div>
        </div>
      </div>
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
            <Link href="/auth/signup">회원가입</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/signin">로그인</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

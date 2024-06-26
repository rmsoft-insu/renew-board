import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="h-[200px] w-[400px] bg-white p-4">
        <h1 className="text-center">카테고리</h1>
        <div className="mt-4 flex flex-col space-y-4">
          <Button asChild>
            <Link href="/sign-up">회원가입</Link>
          </Button>
          <Button asChild>
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

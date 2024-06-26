import { FormTestComponent } from "@/components/form-test";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>카테고리</h1>
      <Link href="/sign-up">회원가입</Link>
    </main>
  );
}

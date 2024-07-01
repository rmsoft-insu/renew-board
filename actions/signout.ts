"use server";

import { signOut } from "@/auth";

export const signout = async () => {
  // 서버에서 사용할 동작 코드가 있다면 작성
  await signOut({ redirectTo: "/auth/signin" });
};

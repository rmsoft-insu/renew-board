"use client";

import { signout } from "@/actions/signout";
import { Button } from "../ui/button";

export const SignOutButton = () => {
  const onClick = () => signout();

  return (
    <>
      <Button onClick={onClick}>로그아웃</Button>
    </>
  );
};

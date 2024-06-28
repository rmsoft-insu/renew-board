"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const MainComponent = () => {
  const { data: session } = useSession();
  return (
    <>
      <div>Main Page {JSON.stringify(session)}</div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  );
};

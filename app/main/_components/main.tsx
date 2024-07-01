import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const MainComponent = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <>
      <div>Main Page {JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </>
  );
};

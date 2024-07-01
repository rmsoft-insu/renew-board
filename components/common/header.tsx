import { ExtendedUser } from "@/next-auth";
import { signout } from "@/actions/signout";
import { SignOutButton } from "@/components/common/sign-out-button";

type Props = {
  user?: ExtendedUser;
};

export const MainHeader = async ({ user }: Props) => {
  const onSignOut = async () => signout();

  return (
    <>
      <div className="flex h-[48px] items-center justify-between bg-indigo-800 px-4">
        <div>{user?.name}</div>
        <SignOutButton />
      </div>
    </>
  );
};

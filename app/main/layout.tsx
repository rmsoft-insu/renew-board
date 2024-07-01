import { MainHeader } from "@/components/common/header";
import { currentUser } from "@/lib/auth";

type Props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: Props) => {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-slate-200">
      <MainHeader user={user} />
      {children}
    </div>
  );
};

export default MainLayout;

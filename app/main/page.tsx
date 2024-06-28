import { SessionProvider } from "next-auth/react";
import { MainComponent } from "./_components/main";

const MainPage = () => {
  return (
    <SessionProvider>
      <MainComponent />
    </SessionProvider>
  );
};

export default MainPage;

import { auth } from "@/auth";
import { LogInComponent, LoggedInComponent } from "@/components/home";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      {session ? <LoggedInComponent session={session} /> : <LogInComponent />}
    </main>
  );
}

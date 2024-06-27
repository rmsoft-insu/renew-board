import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="h-[200px] w-auto rounded-md bg-white p-4">
        <h1 className="text-center">{JSON.stringify(session)}</h1>
      </div>
    </main>
  );
}

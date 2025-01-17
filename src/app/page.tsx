import Content from "@/components/Content";

// https://portal.thirdweb.com/references/typescript/v5 => Docs for UI components, React Hooks and Core Functions
// https://playground.thirdweb.com/connect/sign-in/button => Playground for thirdweb interactions
// https://portal.thirdweb.com/react/v5/getting-started
export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="container max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Hello Thirdweb!
        </h1>
      </header>

      {/* Content Section */}
      <Content />

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Example App. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

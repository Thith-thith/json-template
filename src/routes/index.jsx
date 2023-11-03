import { useAuth } from "~/context/useAuth";

export default function Home() {
  const { data } = useAuth();
  const { content } = data?.homePage;

  console.log("content", content);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-9xl">{content.banner.title}</h1>
      <p>{content.banner.description}</p>
    </main>
  );
}

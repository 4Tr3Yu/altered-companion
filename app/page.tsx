import Image from "next/image";
import GameTracker from "./components/GameTracker";

export default function Home() {
  return (
    <>
      <section className="mb-4">
        <Image src="/altered-logo-white.png" alt="Altered Companion logo" width={500} height={148} />
      </section>
      <GameTracker />
    </>
  );
}

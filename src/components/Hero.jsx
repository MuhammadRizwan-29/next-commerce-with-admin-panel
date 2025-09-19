import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
    </section>
  );
}

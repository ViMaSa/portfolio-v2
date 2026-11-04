import Image from "next/image";

export default function ProfileHero() {
  return (
    <div className="profile-photo-frame">
      <Image
        src="/images/victor_sarmiento_profile.jpg"
        alt="Portrait ofVictor Sarmiento"
        fill
        preload
        sizes="(max-width: 760px) 300px, 30vw"
        className="object-cover object-center"
      />
    </div>
  );
}

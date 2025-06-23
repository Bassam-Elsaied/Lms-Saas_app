import Image from "next/image";
import Link from "next/link";

interface CompanionsCardProps {
  id: string;
  title: string;
  topic: string;
  subject: string;
  color: string;
  duration: number;
}

export default function CompanionsCard({
  id,
  title,
  topic,
  subject,
  color,
  duration,
}: CompanionsCardProps) {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src={"/icons/bookmark.svg"}
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-sm">Topic: {topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/clock.svg"}
          alt="clock"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} mins duration</p>
      </div>

      <Link href={`/companians/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
}

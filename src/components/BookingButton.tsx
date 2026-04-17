import Link from "next/link";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xZH1VXDVjTyJGYTH-ygHvf3JFgbZ7DLUxk3epoqNZwxFwLcQqb4Fti-C2z8kkThjHPylSlBno";

interface BookingButtonProps {
  variant?: "primary" | "outline";
  label?: string;
  className?: string;
  external?: boolean;
}

export default function BookingButton({
  variant = "primary",
  label = "Book Your Session",
  className = "",
  external = true,
}: BookingButtonProps) {
  const base =
    "inline-block font-body font-medium text-sm tracking-wide px-7 py-3 rounded-full transition-all duration-200";

  const styles =
    variant === "primary"
      ? `${base} bg-brand-white text-white hover:bg-[#333333] ${className}`
      : `${base} border border-[rgba(26,26,26,0.25)] text-brand-white hover:border-[rgba(26,26,26,0.6)] hover:bg-[rgba(26,26,26,0.04)] ${className}`;

  if (external) {
    return (
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles}>
        {label}
      </a>
    );
  }

  return (
    <Link href="/book" className={styles}>
      {label}
    </Link>
  );
}

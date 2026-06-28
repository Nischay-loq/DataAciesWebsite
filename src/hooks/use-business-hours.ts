"use client";

import { useEffect, useState } from "react";

type BusinessStatus = {
  isAvailable: boolean;
  label: "Available Now" | "Currently Offline";
};

function getBusinessStatus(timeZone: string): BusinessStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const isWeekday = weekday !== "Sat" && weekday !== "Sun";
  const isAvailable = isWeekday && hour >= 9 && hour < 18;

  return {
    isAvailable,
    label: isAvailable ? "Available Now" : "Currently Offline",
  };
}

export function useBusinessHours(timeZone: string) {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getBusinessStatus(timeZone));
    const initialTimer = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 60_000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, [timeZone]);

  return status;
}

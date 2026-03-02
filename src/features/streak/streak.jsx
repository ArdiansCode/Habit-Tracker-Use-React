import useStorage from "../habits/hooks/useLocalStorage";
import { useState } from "react";

function useStreak() {
  const [dateTime] = useStorage("DateTime", []);

  let maxStreak = 0;
  let tempStreak = 0;

  (dateTime || []).forEach((time) => {
    if (time.count > 0) {
      tempStreak++;
      if (tempStreak > maxStreak) maxStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
  });

  return { totalStreak: maxStreak, tempStreak, dateTime};
}

export default useStreak;
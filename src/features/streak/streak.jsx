import useStorage from "../habits/hooks/useLocalStorage";
import { useState } from "react";

function useStreak() {
  const [dateTime] = useStorage("DateTime", []);

  let maxStreak = 0;
  let tempStreak = 0;

  (dateTime || []).forEach((time) => {
    if (time.count > 0) {
      tempStreak++;
      // Update maxStreak jika tempStreak saat ini lebih besar
      if (tempStreak > maxStreak) maxStreak = tempStreak;
    } else {
      // Reset hitungan sementara ke 0 karena ketemu count 0
      tempStreak = 0;
    }
  });

  return { totalStreak: maxStreak, tempStreak, dateTime};
}

export default useStreak;
import { NextFont } from "@next/font/dist/types";
import localFont from "@next/font/local";

const aeonikBold: NextFont = localFont({
  src: "../public/fonts/AeonikTRIAL-Bold.woff2",
});
const aeonikRegular: NextFont = localFont({
  src: "../public/fonts/AeonikTRIAL-Regular.woff2",
});
const kallistoBold: NextFont = localFont({
  src: "../public/fonts/KallistoBold.woff2",
});
const kallistoHeavy: NextFont = localFont({
  src: "../public/fonts/KallistoHeavy.woff2",
});
const kallistoMedium: NextFont = localFont({
  src: "../public/fonts/KallistoMedium.woff2",
});

export default aeonikRegular;
export { aeonikBold, kallistoBold, kallistoHeavy, kallistoMedium };

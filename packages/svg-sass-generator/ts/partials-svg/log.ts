// import * as fs from "fs/promises";
import { join } from "path";
import { promises } from "fs";
const { mkdir, appendFile } = promises;

/**
 * @param description It writes any kind of messages to a log file.
 */
export const log = (
  message: string,
  LOG_PATH: string,
  shouldWriteToLog: boolean = true,
  logType: logType = "error"
) => {
  if (!shouldWriteToLog) {
    return;
  }

  let icon;
  if (logType === "success") {
    icon = "✅";
  } else if (logType === "warning") {
    icon = "⚠️";
  } else if (logType === "error") {
    icon = "❌";
  }

  // The file and directory are cleaned on processor-svg.ts

  // Ensure log directory exists
  mkdir(LOG_PATH, { recursive: true });

  // Append the message to the file
  appendFile(
    join(LOG_PATH, "svg-log.txt"),
    `\n ${icon} \n ${message} \n 〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️◦ \n`
    // (err: any) => {
    //   if (err) {
    //     console.error(
    //       `${RED} "Errors writing to file:", ${err} ${RESET_COLOR}`
    //     );
    //   }
    // }
  );
};

export type logType = "success" | "warning" | "error";

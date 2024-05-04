// import * as fs from "fs/promises";
import { join } from "path";
import { promises } from "fs";
const { mkdir, appendFile } = promises;
/**
 * @param description It writes any kind of messages to a log file.
 */
export const log = (message, LOG_PATH, shouldWriteToLog = true, logType = "error") => {
    if (!shouldWriteToLog) {
        return;
    }
    let icon;
    if (logType === "success") {
        icon = "✅";
    }
    else if (logType === "warning") {
        icon = "⚠️";
    }
    else if (logType === "error") {
        icon = "❌";
    }
    // The file and directory are cleaned on processor-svg.ts
    // Ensure log directory exists
    mkdir(LOG_PATH, { recursive: true });
    // Append the message to the file
    appendFile(join(LOG_PATH, "icons-log.txt"), `\n ${icon} \n ${message} \n 〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️◦ \n`
    // (err: any) => {
    //   if (err) {
    //     console.error(
    //       `${RED} "Errors writing to file:", ${err} ${RESET_COLOR}`
    //     );
    //   }
    // }
    );
};

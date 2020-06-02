import { format } from "winston";
export const prettyJson = format.printf((info) => {
  if (info.message.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 4);
  }
  return `${info.level}: ${info.message}`;
});

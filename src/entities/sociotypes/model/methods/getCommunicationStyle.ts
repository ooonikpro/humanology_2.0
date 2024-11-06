import type { CommunicationStyleType } from "@types";
import { COMMUNICATION_STYLE } from "../../config";

const getCommunicationStyle = (communicationStyle: CommunicationStyleType) => {
  return COMMUNICATION_STYLE[communicationStyle];
};

export default getCommunicationStyle;

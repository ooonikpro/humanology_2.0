import { COMMUNICATION_STYLE } from "@entities/sociotypes/config/communicationStyle";

import type { CommunicationStyle } from "@types";

const getCommunicationStyle = (communicationStyle: CommunicationStyle) => {
  return COMMUNICATION_STYLE[communicationStyle];
};

export default getCommunicationStyle;

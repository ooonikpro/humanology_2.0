import type { SociotypeIdType } from "@types";
import getSociotypeBy from "./getSociotypeBy";
import getSociotypesByQuadra from "./getSociotypesByQuadra";
import getQuadras from "./getQuadras";

const getNextSociotypeId = (id: SociotypeIdType) => {
  const sociotype = getSociotypeBy(id);
  const quadrasList = getQuadras();
  const quadra = sociotype.quadra;

  let quadraIndex = quadrasList.indexOf(quadra);
  let sociotypesSiblings = getSociotypesByQuadra(quadra);
  let sociotypeIndex = sociotypesSiblings.indexOf(id);

  if (sociotypeIndex === sociotypesSiblings.length - 1) {
    if (quadraIndex === quadrasList.length - 1) {
      quadraIndex = 0;
    } else {
      quadraIndex = quadraIndex + 1;
    }

    sociotypesSiblings = getSociotypesByQuadra(quadrasList[quadraIndex]);
    sociotypeIndex = 0;
  } else {
    sociotypeIndex = sociotypeIndex + 1;
  }

  return sociotypesSiblings[sociotypeIndex];
};

export default getNextSociotypeId;

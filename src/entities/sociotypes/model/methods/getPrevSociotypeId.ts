import type { SociotypeIdType } from "@types";
import getSociotypeBy from "./getSociotypeBy";
import getSociotypesByQuadra from "./getSociotypesByQuadra";
import getQuadras from "./getQuadras";

const getPrevSociotypeId = (id: SociotypeIdType) => {
  const sociotype = getSociotypeBy(id);
  const quadrasList = getQuadras();
  const quadra = sociotype.quadra;

  let quadraIndex = quadrasList.indexOf(quadra);
  let sociotypesSiblings = getSociotypesByQuadra(quadra);
  let sociotypeIndex = sociotypesSiblings.indexOf(id);

  if (sociotypeIndex === 0) {
    if (quadraIndex === 0) {
      quadraIndex = quadrasList.length - 1;
    } else {
      quadraIndex = quadraIndex - 1;
    }

    sociotypesSiblings = getSociotypesByQuadra(quadrasList[quadraIndex]);
    sociotypeIndex = sociotypesSiblings.length - 1;
  } else {
    sociotypeIndex = sociotypeIndex - 1;
  }

  return sociotypesSiblings[sociotypeIndex];
};

export default getPrevSociotypeId;

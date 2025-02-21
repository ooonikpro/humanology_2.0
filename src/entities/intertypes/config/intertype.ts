import type {
  IntertypeDataType,
  IntertypeGroupIdType,
  IntertypeIdType,
} from "@types";
import dual from "./intertypes/dual";
import activity from "./intertypes/activity";
import mirror from "./intertypes/mirror";
import identical from "./intertypes/identical";
import kindred from "./intertypes/kindred";
import semidual from "./intertypes/semidual";
import pragmatic from "./intertypes/pragmatic";
import illusionary from "./intertypes/illusionary";
import beneficiary from "./intertypes/beneficiary";
import giver from "./intertypes/giver";
import supervisor from "./intertypes/supervisor";
import underling from "./intertypes/underling";
import quasidentical from "./intertypes/quasidentical";
import parallel from "./intertypes/parallel";
import contrary from "./intertypes/contrary";
import superego from "./intertypes/superego";

export const INTERTYPES: Record<IntertypeIdType, IntertypeDataType> = {
  dual,
  activity,
  mirror,
  identical,
  kindred,
  semidual,
  pragmatic,
  illusionary,
  beneficiary,
  giver,
  supervisor,
  underling,
  quasidentical,
  parallel,
  contrary,
  superego,
} as const;

export const INTERTYPES_ORDER: Record<IntertypeGroupIdType, IntertypeIdType[]> =
  {
    quadral: ["dual", "activity", "mirror", "identical"],
    favorable: ["kindred", "semidual", "pragmatic", "illusionary"],
    neutral: ["beneficiary", "giver", "supervisor", "underling"],
    unfavorable: ["quasidentical", "parallel", "contrary", "superego"],
  } as const;

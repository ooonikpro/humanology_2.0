import type { AspectsRoutesTypes } from "./routes/aspects";
import type { FunctionsRoutesTypes } from "./routes/functions";
import type { IntertypesRoutesTypes } from "./routes/intertypes";
import type { SociotypesRoutesTypes } from "./routes/sociotypes";
import type { StaticRoutesTypes } from "./routes/staticRoutesTypedMap";

export interface RouteNamedMap
  extends AspectsRoutesTypes,
    FunctionsRoutesTypes,
    IntertypesRoutesTypes,
    SociotypesRoutesTypes,
    StaticRoutesTypes {}

export type { AspectsRoutesTypes } from "./routes/aspects";
export type { FunctionsRoutesTypes } from "./routes/functions";
export type { IntertypesRoutesTypes } from "./routes/intertypes";
export type { SociotypesRoutesTypes } from "./routes/sociotypes";
export type { StaticRoutesTypes } from "./routes/staticRoutesTypedMap";

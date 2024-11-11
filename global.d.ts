import { NavigationLink } from "@app/router";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    NavigationLink: typeof NavigationLink;
  }
}

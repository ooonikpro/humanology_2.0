const sociotypePageRegExp = new RegExp("/s/.+");
const sociotypeKidsPageRegExp = new RegExp("/k/.+");
const intertypePageRegExp = new RegExp("/t/i/.+");

export default defineNuxtRouteMiddleware((to) => {
  if (sociotypePageRegExp.test(to.path)) {
    setPageLayout("sociotype");
  }

  if (sociotypeKidsPageRegExp.test(to.path)) {
    setPageLayout("kids");
  }

  if (intertypePageRegExp.test(to.path)) {
    setPageLayout("intertype");
  }
});

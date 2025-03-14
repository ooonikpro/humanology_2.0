const sociotypePageRegExp = new RegExp("/s/.+");
const sociotypeKidsPageRegExp = new RegExp("/k/.+");

export default defineNuxtRouteMiddleware((to) => {
  if (sociotypePageRegExp.test(to.path)) {
    setPageLayout("sociotype");
  }

  if (sociotypeKidsPageRegExp.test(to.path)) {
    setPageLayout("kids");
  }
});

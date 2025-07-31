// @ts-nocheck
const addScrollspy = (
  defalutClass: string = "",
  linksContainer: string = ".scrollspy-link",
  activeClass: string = "active"
): void => {
  var section = document.querySelectorAll(".scrollSpysection");
  // console.log(section);

  var sections: { [key: string]: number } = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e: any) {
    sections[e.id] = e.offsetTop;
  });
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (const i in sections) {
    if (sections[i] <= scrollPosition) {
      document
        .querySelector(linksContainer + ` .${activeClass}`)
        ?.setAttribute("class", defalutClass);
      const navLink = document.querySelector(
        linksContainer + " a[href*=" + i + "]"
      );

      navLink?.setAttribute("class", `${defalutClass} ${activeClass}`);
    }
  }
};
export default addScrollspy;

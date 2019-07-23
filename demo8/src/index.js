import "./css/base.css";
import "./scss/main.scss";
document.addEventListener("click", function() {
  // import(/* webpackChunkName: 'use-lodash'*/ "lodash").then(function(_) {
  //   console.log(_.join(["3", "4"]));
  // });
  //
  // const element = document.createElement("div");
  // element.innerHTML = "hello world";
  // document.body.appendChild(element);
  //
  // import("./click.js").then("click", () => {
  //   func();
  // });
  import(/* webpackPrefetch: true */ "./click.js").then(({ default: func }) => {
    func();
  });
});

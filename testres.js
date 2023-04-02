const test = () => {
  (function () {
    var a = (b = 5);
  })();
  console.log(b);
};

test();

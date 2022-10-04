// Problem 01
((foo, p, list1, list2) => (
  (foo = (x, y = x * 2) =>
    function bar(z, baz, obj) {
      if (z.length > 3) {
        return z.map((baz = (v) => (v > 3 ? v + y : baz(v * 4))));
      } else {
        obj = [];

        setTimeout(() => ((obj.length = 1), (obj[0] = this.w)), 100);

        return obj;
      }
    }),
  (p = foo(2)),
  (list1 = [1, 3, 4]),
  (list2 = list1.concat(6)),
  (list1 = p.call({ w: 42 }, list1)),
  (list2 = p(list2)),
  setTimeout(
    () => console.log(list1[0] === list2.reduce((s, v) => s + v, 0)),
    200
  )
))();

// Problem 02
const x = 2;
var fns = [];

{
  const x = 5;
  for (let i = 0; i < x; i++) {
    fns[i] = function num() {
      return i;
    };
  }
}

console.log(x * 2 === fns[x * 2]());
// true

// Problem 03
function foo([first], [ ,...rest]) {
  // join first of a1 with rest of a2 
  return [first, ...rest];
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(a1, a2);
}
var handleJoin = bar().join("");

console.log(bar().join("") === "281012");

// Problem 04
function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12,
    },
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14,
  },
};

function response({
  foo = defaults.foo,
  bar = defaults.bar,
  baz,
  bam: { qux = defaults.bam.qux, qam = defaults.bam.qam } = {},
} = {}) {
  check({
    foo,
    bar,
    baz,
    bam: {
      qux,
      qam,
    },
  });
}

ajax("http://fun.tld", response);

// Problem 05
function upper(strings, ...values) {
  var s = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      s += values[i - 1].toUpperCase();
    }
    s += strings[i];
  }
  return s;
}

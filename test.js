var callback = abc => {
  console.log(abc);
};

function fnLimiter(limit, callback) {
  return function() {
    if (limit <= 0) {
      console.log("error");
    }
    if (limit > 0) {
      limit--;
      callback(limit);
    }
  };
}

a = fnLimiter(5, callback);

function truncate(str, maxlength) {
  console.log( (str.length > maxlength) ?
    str.slice(0, maxlength -1) + '...' : str);
}

truncate("what I'd like to tell on this topic is:", 20);
truncate("Hi every one!", 20);
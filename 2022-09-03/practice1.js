function truncate(str, maxlength) {
  return (str.length > maxlength) ?
  str.slice(0, maxlength - 1) + '...' : 'str';
  console.log(str);
}

truncate("What I`d like to tell on this topic is:", 20);
truncate("Hi everyone!", 20); 
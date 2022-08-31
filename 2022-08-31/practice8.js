class ValidationError extends Error {
  constructor(message) {
    super(message); 
    this.name = "ValidationError"; 
  }
}

function test() {
  throw new ValidationError("에러 발생!");
}

try {
  test();
} catch(err) {
  alert(err.message); 
  alert(err.name); 
  alert(err.stack); 
}
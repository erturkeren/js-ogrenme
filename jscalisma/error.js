////// Error Handling TRY CATCH

let user = {
  name: "EREN ERTÜRK",
};

try {
  // console.log(myFunction());
  console.log(user.name);

  if (!user.mail) {
    throw new Error("USER HAS NO MAİL");
  }
  console.log(user.mail);
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
  console.log(typeof e);
} finally {
  console.log("finally block");
}

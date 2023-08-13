fetch(
  "https://www.google.com/recaptcha/api2/reload?k=6LeEnLkmAAAAAEnJPIawDj2uxkWM7BjsErRz_Oi-",
  {
    method: "post",
    headers: {},
  }
).then((response) => {
  console.log(JSON.stringify(response))
})

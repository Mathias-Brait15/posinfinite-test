async function errHandler(err, req, res, next) {
  let message;
  let status_code;

  switch (err.name) {
    case "Item not found":
      message = "Item not found";
      status_code = 404;
      break;

    case "User not found":
      message = "User not found";
      status_code = 400;
      break;

    case "Not Enough User Balance":
      message = "Not Enough User Balance";
      status_code = 400;
      break;

    case "Name is required":
      message = "Name cannot be empty";
      status_code = 400;
      break;

    case "Image is required":
      message = "Image cannot be empty";
      status_code = 400;
      break;

    case "Item not found":
      message = "Item not found";
      status_code = 404;
      break;

    case "Quantity is required":
      message = "Image cannot be empty";
      status_code = 400;
      break;

    case "Not Enough Stock":
      message = "Not Enough Stock";
      status_code = 400;
      break;

    case "Email or Password undefined":
      message = "Email does not exist";
      status_code = 401;
      break;

    case "Invalid Email Or Password":
      message = "Invalid Email Or Password";
      status_code = 401;
      break;

    default:
      status_code = 500;
      message = "Internal server error";
      break;
  }
  res.status(status_code).json({ message });
}

module.exports = { errHandler };

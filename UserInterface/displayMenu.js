const displayMenu = (title, options, actions) => {
  let isGoingAgain = true;

  while (isGoingAgain) {
    const choice = prompt(`${title}\n\n${options.join("\n")}`);

    if (
      !isNaN(choice) &&
      parseInt(choice) >= 1 &&
      parseInt(choice) <= options.length
    ) {
      isGoingAgain = false;
      actions[parseInt(choice) - 1]();
    } else {
      alert("Your input was invalid, please try again");
    }
  }
};

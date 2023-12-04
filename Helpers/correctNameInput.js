const correctNameInput = (string) => {
  return string
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
};

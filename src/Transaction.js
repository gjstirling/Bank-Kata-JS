class Transaction {
  addDeposit(amount) {
    if (this.#argumentError(amount)) {
      return { error: "argument invalid" };
    }
    let currentDate = new Date();
    currentDate = this.#formatDate(currentDate);
    return { credit: amount, date: currentDate };
  }

  #argumentError(value) {
    return value === undefined || typeof value !== "number";
  }

  #formatDate(date) {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

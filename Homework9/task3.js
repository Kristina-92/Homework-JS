class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accNumber = accountNumber;
    this.accHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`The new balance on your account is: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      console.log(`The new balance on your account is: ${this.balance}`);
    } else {
      console.log(
        `The transaction is not approved! Your current balance is ${this.balance}.`
      );
    }
  }

  getBalance() {
    console.log(this.balance);
  }
}

const mimibankAccount = new BankAccount(200223541266, "Mimi", 20000);
mimibankAccount.getBalance();
mimibankAccount.deposit(25000);
mimibankAccount.withdraw(55000);
mimibankAccount.withdraw(25000);

const krstebankAccount = new BankAccount(300548952365, "Krste", 1500);
krstebankAccount.deposit(5000);
krstebankAccount.withdraw(10000);
krstebankAccount.withdraw(2000);

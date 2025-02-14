class BankAccount {
    constructor(name,age,balance,city,street,buildingNum,appartmentNum){
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.address = {
            city: city,
            street: street,
            buildingNum: buildingNum,
            appartmentNum: appartmentNum
        }
    }
    accountInfo(){
        console.log(`Name: ${this.name}. Balance: ${this.balance}. `)
    }
    deposite(amount){
        new Promise((resolve, reject) => {
            console.log("contacting the bank....");
            if(amount > 0){
                setTimeout(() => {
                resolve(`Deposited amount is $${amount}.`);
            }, 1000)
            } else{
                reject(`amount is less than or equal zero`);
            }
        })
    }
    
    addAmount(amount){
        this.balance += amount;
        console.log(`New balance after deposit is ${this.balance}.`);
    }
    
    balanceCompare(amountW){
        return new Promise((resolve) => {
            if(amountW <= this.balance){
            setTimeout(() =>{
                resolve(true) ;
            }, 1000)
            } else {
                resolve(false) ;
        }
        })
    }
    
    async Withdraw(amountW){
        const check = await this.balanceCompare(amountW);
        if (check == true){
            this.balance -= amountW;
            console.log(`New balance after withdrawal is ${this.balance}.`);
        } else{
            console.log("No enough balance!!");
        }
    }
}

const newuser= new BankAccount("Hamdy",37,2000,"Cairo","street",5,7);
newuser.accountInfo()
newuser.deposite(100)
newuser.addAmount(100)
newuser.balanceCompare(200)
newuser.Withdraw(200)
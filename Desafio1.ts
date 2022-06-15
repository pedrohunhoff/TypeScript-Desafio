// Como podemos rodar isso em um arquivo .ts sem causar erros? 

const employee = {
    code: 10,
    name: "John"
};

const employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}

interface Employee {
    code: number,
    name: string
}

const employee3: Employee = {
    code:10,
    name: "John"
}

const employee4 = {} as Employee;
employee4.code = 10;
employee4.name = "John";
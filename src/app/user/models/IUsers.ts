
export interface IUsers {
    id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
}

export interface IUsersRes {
    data: IUsers[],
    status: string,
}

export interface ICreateUser {
    name: string,
    salary: string,
    age: string,
    id: number
}

export interface ICreateUserRes {
    status: string,
    data: ICreateUser
}
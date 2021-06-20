import { Injectable } from '@nestjs/common';
import { Employees, EmployeeTier } from './Employees.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {
    private employees: Employees[] = []
    getAllEmployee(){
        return this.employees;
    }
    createEmployee(firstName: String, lastName: String, designation: String){
        const employee = {
            id:uuid(),
            firstName,
            lastName,
            designation
        }
        this.employees.push(employee);
        return employee;
    }
}

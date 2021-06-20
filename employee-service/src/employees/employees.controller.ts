import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService: EmployeesService){}

    @Get()
    getAllEmployees(){
        return this.employeeService.getAllEmployee();
    }

    @Post()
    creteEmployee(
        @Body('firstName') firstName: String,
        @Body('lastName') lastName: String,
        @Body('designation') designation: String,
        ){
            return this.employeeService.createEmployee(firstName,lastName,designation);
    }
}

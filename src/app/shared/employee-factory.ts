import { Employee } from "./employee";
import { EmployeeRaw } from "./employee-raw";

export class EmployeeFactory {

    static empty(): Employee {
        return new Employee(0,'','','','',0,'','',[{quality:0,quantity:0,knowledge:0,initiative:0,communication:0,team:0,learning:0,motivation:0,performance:0,organization:0,total:0}]);
    }

    static fromObject(rawEmployee: EmployeeRaw): Employee {
        return new Employee(
            rawEmployee.id,
            rawEmployee.img,
            rawEmployee.name,
            rawEmployee.city,
            rawEmployee.gender,
            rawEmployee.age,
            rawEmployee.position,
            rawEmployee.departement,
            rawEmployee.ratings
        );
    }
}

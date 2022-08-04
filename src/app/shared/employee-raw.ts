export interface EmployeeRaw {
    id: number;
    img: string;
    name: string;
    city: string;
    gender: string;
    age: number;
    position: string;
    departement: string;
    ratings: {
        quality: number;
        quantity: number;
        knowledge: number;
        initiative: number;
        communication: number;
        team: number;
        learning: number;
        motivation: number;
        performance: number;
        organization: number;
        total: number;
    }[];
}
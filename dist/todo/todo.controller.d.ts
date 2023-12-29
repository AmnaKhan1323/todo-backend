import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): {
        id: string;
        title?: string;
        description?: string;
        completed?: boolean;
    }[];
    findOne(id: string): {
        id: string;
        title?: string;
        description?: string;
        completed?: boolean;
    };
    create(data: any): {
        id: string;
        title?: string;
        description?: string;
        completed?: boolean;
    };
    update(id: string, data: any): {
        id: string;
        title?: string;
        description?: string;
        completed?: boolean;
    };
    remove(id: string): {
        id: string;
        title?: string;
        description?: string;
        completed?: boolean;
    };
}

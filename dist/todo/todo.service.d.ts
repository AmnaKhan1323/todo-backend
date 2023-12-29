type Todo = {
    id: string;
    title?: string;
    description?: string;
    completed?: boolean;
};
export declare class TodoService {
    private todos;
    findAll(): Todo[];
    findOne(id: string): Todo | null;
    create(data: Partial<Todo>): Todo;
    update(id: string, data: Partial<Todo>): Todo | null;
    remove(id: string): Todo | null;
}
export {};

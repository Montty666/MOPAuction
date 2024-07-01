export type TStatus = 'active' | 'done'

export type TTask = {
    value: string
    status: TStatus
}

export interface IToDo {
    tasks: TTask[];
    addTask: (t: TTask) => void;
    updateTask: (t: TTask, idx: number) => void;
    deleteTask: (idx: number) => void;
}
export type Board = {
	id: string;
	title: string;
	columns: Column[];
	isCollaborative: boolean;
};

export type Column = {
	id: string;
	title: string;
	tasks: Task[];
};

export type Task = {
	id: string;
	title: string;
	description: string;
	subtasks: Subtask[];
	status: string;
};

export type Subtask = {
	id: string;
	title: string;
	isDone: boolean;
};

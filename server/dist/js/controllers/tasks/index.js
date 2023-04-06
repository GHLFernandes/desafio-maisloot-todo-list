"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../../models/task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find();
        res.status(200).json({ tasks });
    }
    catch (error) {
        throw error;
    }
});
exports.getTasks = getTasks;
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (!body || !body.task) {
            throw new Error("Task field is missing or undefined");
        }
        const task = new task_1.default({
            task: body.task,
            status: body.status,
            description: body.description,
        });
        const newTask = yield task.save();
        const allTasks = yield task_1.default.find();
        res.status(201).json({
            message: "Task added",
            task: newTask,
            tasks: allTasks
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addTask = addTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        const updatedTask = yield task_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTasks = yield task_1.default.find();
        res.status(200).json({
            message: "Task Updated",
            task: updatedTask,
            tasks: allTasks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_1.default.findByIdAndRemove(req.params.id);
        const allTasks = yield task_1.default.find();
        res.status(200).json({
            message: "Task Deleted",
            task: deletedTask,
            tasks: allTasks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTask = deleteTask;

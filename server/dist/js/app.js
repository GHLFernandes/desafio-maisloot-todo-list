"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
const uri = `mongodb+srv://gfernandes:7QYCowspdQwrv1WF@todo-list.ttjg8n4.mongodb.net/?retryWrites=true&w=majority`;
// if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD || !process.env.MONGO_DB) {
//     console.error('MongoDB environment variables not defined');
//     process.exit(1);
// }
mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(error => {
        console.error(error);
    });
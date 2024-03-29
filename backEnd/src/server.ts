import app from "./app";
import {
    AppDataSource 
} from "./data-source";

(async () => {
    await AppDataSource.initialize().catch((err: any) => {
        console.error("Error during Data Source initialization", err);   
    });

    app.listen(process.env.PORT || 3000, () => console.log("Server running"));
})();
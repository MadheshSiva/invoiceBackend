const express = require("express");
const { createInvoice } = require("./invoice/createInvoice");
const { getInvoice } = require("./invoice/getInvoice");
const cors = require("cors");

const app = express();
const PORT = 3060;

// Middleware
app.use(express.json());
app.use(cors());

// Router
const router = express.Router();

router.post("/createinvoice", createInvoice);
router.get("/getinvoice", getInvoice);

app.use("/", router);

// Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

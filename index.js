const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const { extractFields } = require("./extract");
const { validateFields } = require("./validator");
const { decideWorkflow } = require("./router");

const app = express();

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send(`
    <h2>Autonomous Insurance Claims Processing Agent</h2>
    <p>API is running successfully 🚀</p>
    <p>Use <b>POST /process-claim</b> with <b>multipart/form-data</b></p>
    <p>Key: <code>file</code> (PDF or TXT FNOL document)</p>
  `);
});


app.post("/process-claim", upload.single("file"), async (req, res) => {
try {
    let text = "";
    if (req.file.mimetype === "application/pdf") {
     const data = await pdfParse(fs.readFileSync(req.file.path));
      text = data.text;
    } else {
      text = fs.readFileSync(req.file.path, "utf8");
    }

    const extractedFields = extractFields(text);

    const missingFields = validateFields(extractedFields);

    const decision = decideWorkflow(extractedFields, missingFields);

    res.json({
      extractedFields,
      missingFields,
      recommendedRoute: decision.route,
      reasoning: decision.reason,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to process claim",
      details: error.message,
    });
  }
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

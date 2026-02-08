A backend API that automatically extracts key fields from insurance FNOL (First Notice of Loss) documents, identifies missing or inconsistent fields, applies routing rules, and returns an explainable decision in JSON format.

What This Project Solves?

Insurance claims often arrive in document form (PDF/TXT).
This project builds a lightweight autonomous agent that:
-Extracts structured fields from FNOL documents
-Detects missing information and Applies business routing rules
- Returns a JSON decision with explanation  (Can be tested locally or deployed publicly)

<img width="585" height="575" alt="image" src="https://github.com/user-attachments/assets/6761c07b-50dd-45e8-9700-ce71ccc67a7f" />

Installation Guide: 
npm install ->(To install dependencies) 
npm install express multer pdf-parse

<img width="1492" height="631" alt="image" src="https://github.com/user-attachments/assets/6e99d007-2e50-4321-b190-3186a2ac8a1b" />

Deployment:
The application can be deployed as a public API (e.g., using Render).
The root endpoint displays a health message, while /process-claim handles FNOL document uploads.

Deployed url:https://autonomous-claims-agent-4pcb.onrender.com/

To test in Postman: https://autonomous-claims-agent-4pcb.onrender.com/process-claim (use post method and upload file in body)

This solution includes a REST API accepting FNOL documents, extracting key fields, applying routing logic, and returning an explainable JSON decision.

Sample generated output format in json:<img width="1781" height="947" alt="image" src="https://github.com/user-attachments/assets/bbb47bef-a553-409a-abe5-81baf995b93a" />







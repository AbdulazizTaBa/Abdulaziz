# Portfolio Projects Structure

## How to Add a New Project

Each project lives in its own folder under `images/projects/`.

### Folder Naming
Use lowercase kebab-case: `images/projects/project-name-here/`

### Required Files
| File        | Description                              |
|-------------|------------------------------------------|
| `cover.png` | Card cover image (displayed in the grid) |
| `step1.png` | Gallery step 1 image                     |
| `step2.png` | Gallery step 2 image                     |
| `step3.png` | Gallery step 3 image                     |
| `step4.png` | Gallery step 4 image                     |
| `README.md` | Image labels and descriptions            |

### Steps to Add a New Project
1. Create `images/projects/<project-name>/` folder
2. Place `cover.png` + `step1-4.png` inside it
3. In `index.html`, add a new `<div class="project-card-3col">` to the `.projects-3col-grid` div
4. In the `<script>` section, add a new `'projN': { ... }` entry to `projectData`

---

## Projects

### 1. AI Jobs Automation Pipeline
- **Folder**: `images/projects/ai-jobs-pipeline/`
- **Tools**: n8n · AI Model · ngrok · Docker · API · MCP
- **Steps**: Workflow canvas → Google Sheets "Suitable" → Google Sheets "Review" → Telegram alert

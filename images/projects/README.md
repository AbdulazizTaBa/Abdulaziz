# Portfolio Projects Structure

## How to Add a New Project

Each project lives in its own folder under `images/projects/`.

### Folder Naming
Use lowercase kebab-case: `images/projects/project-name-here/`

### Required Files
| File        | Description                              |
|-------------|------------------------------------------|
| `cover.png` | Card cover image (displayed in the grid) |
| `step1.jpg` | Gallery step 1 image (or another format matching the HTML path) |
| `step2.jpg` | Gallery step 2 image                     |
| `step3.jpg` | Gallery step 3 image                     |
| `step4.jpg` | Gallery step 4 image                     |
| `README.md` | Image labels and descriptions            |

### Steps to Add a New Project
1. Create `images/projects/<project-name>/` folder
2. Place `cover.png` and the project's step images inside it; use their actual filenames and formats
3. In `index.html`, add a new `<div class="project-card-3col">` to the `.projects-3col-grid` div
4. In `projects.js`, add a new `'projN': { ... }` entry to `projectData`
5. Review every screenshot for personal data, account identifiers, internal URLs, tokens, and client information before publication. Do not place original certificate files in the public repository.

---

## Projects

### 1. AI Jobs Automation Pipeline
- **Folder**: `images/projects/ai-jobs-pipeline/`
- **Tools**: n8n · AI Model · ngrok · Docker · API · MCP
- **Steps**: Workflow canvas → Google Sheets "Suitable" → Google Sheets "Review" → Telegram alert

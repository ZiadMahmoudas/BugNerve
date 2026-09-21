# BugNerve --- System Architecture

**AI-Powered Bug Triage & Decision Support System**

![BugNerve System Architecture](assets/BugNerve.webp)

## Main Components

1.  **Bug Creation**
    -   Manual bug reports
    -   Jira integration
    -   Summary, description, reproduction steps, and metadata
2.  **Frontend --- React**
    -   Create and view bugs
    -   View AI recommendations and similar bugs
    -   Role-based dashboards
    -   Project and integration management
3.  **Backend API --- ASP.NET Core**
    -   Authentication and authorization
    -   Bug management (CRUD)
    -   AI Service integration
    -   Jira and GitHub/GitLab integration
    -   Business logic
    -   Data storage and retrieval
4.  **AI Service --- Python**
    -   Severity prediction
    -   Priority prediction
    -   Component prediction
    -   Duplicate detection
    -   Developer recommendation
    -   Real-time model inference
5.  **GitHub / GitLab Integration**
    -   Repository connection
    -   Commit history
    -   File-level analysis
    -   Developer contributions
    -   Data for developer recommendation
6.  **Team Leader Review**
    -   Review AI recommendations
    -   Accept / Modify / Reject
    -   Assign developers
    -   Track bug lifecycle
7.  **PostgreSQL Database**
    -   Bugs / Issues
    -   Users
    -   Projects
    -   AI predictions
    -   Bug history and comments
    -   Integration and system data
8.  **AI Training & Evaluation Pipeline**
    -   Data preparation
    -   Data cleaning
    -   Text preprocessing
    -   Feature extraction (TF-IDF / embeddings)
    -   Train/test split
    -   Model training
    -   Model evaluation
9.  **Model Storage**
    -   Trained models
    -   Model versions
    -   Embeddings / indexes
    -   Metadata

## AI Capabilities

### Severity Prediction

Classifies bug severity based on labels available in the selected
dataset.

### Priority Prediction

Classifies bug priority based on labels available in the selected
dataset.

### Component Prediction

Identifies the affected component using dataset-defined component
labels.

### Duplicate Detection

Uses embeddings and semantic similarity to identify **potential
duplicate bugs**. Final confirmation remains with the human reviewer.

### Developer Recommendation

Ranks suitable developers using historical bug experience, GitHub/GitLab
contributions, component/file experience, similar resolved bugs, and
current workload.

## Main Flow

``` text
Bug Created
    ↓
React Frontend
    ↓
ASP.NET Core Backend
    ↓
Python AI Service
    ↓
AI Predictions & Recommendations
    ↓
Team Leader Review
    ↓
Accept / Modify / Reject
    ↓
Developer Assignment
    ↓
Bug Lifecycle Tracking
```

## Jira Integration

``` text
Jira Issue
    ↓
BugNerve
    ↓
AI Triage
    ↓
Human Review
    ↓
AI Results
    ↓
Jira
```

## GitHub / GitLab Integration

``` text
Repository
    ↓
Commit & File History
    ↓
Developer Contributions
    ↓
Developer Recommendation
```

## Human-in-the-Loop

BugNerve provides AI-generated recommendations rather than making final
decisions automatically.

The Team Leader can accept, modify, or reject recommendations and assign
the bug to a developer.

## Training and Runtime

### Offline Training

``` text
Historical Bug Dataset
        ↓
Data Preparation
        ↓
Train / Test Split
        ↓
Model Training
        ↓
Model Evaluation
        ↓
Saved Models
```

### Runtime Inference

``` text
New Bug
   ↓
ASP.NET Core
   ↓
Python AI Service
   ↓
Loaded Models
   ↓
Predictions / Recommendations
   ↓
ASP.NET Core
   ↓
React Dashboard
```

## Key Principles

-   AI provides recommendations, not final decisions.
-   Human-in-the-loop decision making.
-   Jira integration for issue synchronization.
-   GitHub/GitLab integration for repository and developer-history
    analysis.
-   Historical data is used for model training.
-   Modular and scalable architecture.
-   Model training is separated from real-time inference.

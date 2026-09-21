# AI / ML Pipeline – Bug Triage System

![AI / ML Pipeline](AI_ML_Pipeline.png)

## 1. Data Source

The AI/ML pipeline uses historical bug tracking data from the Eclipse Bug Dataset.

The dataset contains information such as:

* Bug ID
* Summary
* Description
* Severity
* Priority
* Component
* Assigned To
* Timestamps
* Status
* Resolution
* History and Comments

---

## 2. Data Preprocessing

Before training the models, the historical bug data is prepared and cleaned.

Main preprocessing steps include:

* Data cleaning
* Text normalization
* Handling class imbalance
* Train / Validation / Test split

---

## 3. NLP Pipeline

The bug **Summary** and **Description** are processed through an NLP pipeline.

### Text Processing

1. Summary + Description
2. Tokenization
3. Stopword Removal
4. Stemming / Lemmatization
5. Text Vectorization

The pipeline uses:

* TF-IDF
* CountVectorizer

---

## 4. Feature Extraction

The processed bug reports are converted into numerical representations that can be used by the AI models.

### TF-IDF Features

TF-IDF is used to represent important words and terms in bug reports.

### Sentence Embeddings

Transformer-based sentence embeddings are used to represent the semantic meaning of bug reports.

These embeddings are mainly used for semantic similarity and duplicate bug detection.

---

## 5. ML Models Training

The extracted features are used to train different AI/ML models.

### Classification Models

Used for:

* Severity Prediction
* Priority Prediction
* Component Prediction

Possible models include:

* Logistic Regression
* Random Forest
* SVM

### Similarity Models

Used for duplicate bug detection:

* Cosine Similarity

### Ranking Models

Used for developer recommendation based on:

* Component experience
* Similar resolved bugs
* Current workload

---

## 6. Model Storage

After training and evaluation, the required AI artifacts are saved for later inference.

Stored artifacts include:

* Trained models
* Vectorizers / tokenizers
* Preprocessing configurations
* Metadata
* Model versions

---

# 7. AI Inference Pipeline for a New Bug

When a new bug is submitted, it passes through several AI components.

## New Bug

The new bug contains information such as:

* Summary
* Description
* Metadata

The bug is then analyzed by the AI pipeline.

---

## 7.1 Severity Prediction

The system predicts the severity of the new bug.

### Input

* TF-IDF features
* Bug metadata

### Models

* Logistic Regression
* Random Forest

### Output

A predicted severity level such as:

* High
* Medium
* Low

---

## 7.2 Priority Prediction

The system predicts the priority of the new bug.

### Input

* TF-IDF features
* Bug metadata

### Models

* Logistic Regression
* Random Forest

### Output

A predicted priority level such as:

* P1
* P2
* P3
* P4

---

## 7.3 Component Prediction

The system predicts which software component the bug belongs to.

### Input

* Bug text features
* Bug metadata

### Models

* Random Forest
* SVM

### Output

A predicted component label.

---

## 7.4 Duplicate Bug Detection

The system checks whether the new bug is similar to previously reported bugs.

### Process

1. Generate a sentence embedding for the new bug.
2. Compare it with embeddings of historical bugs.
3. Calculate semantic similarity using Cosine Similarity.
4. Rank the most similar bugs.
5. Return the Top-K similar bugs.
6. Apply a similarity threshold to determine whether the bug is likely to be a duplicate.

### Output

* Top-K similar bugs
* Similarity scores
* Duplicate indication

---

## 7.5 Developer Recommendation

The system recommends suitable developers for the new bug.

The recommendation is based on factors such as:

* Component experience
* Similar resolved bugs
* Current workload

The system produces a ranked list of suitable developers.

### Output

* Top-K recommended developers

---

# 8. AI Results

After the AI components process the new bug, the system produces the combined AI results:

* Predicted Severity
* Predicted Priority
* Predicted Component
* Duplicate Bug Candidates
* Recommended Developers

These results are then sent back to the main application for review.

---

# 9. Model Evaluation

Different evaluation metrics are used depending on the AI task.

## Classification Tasks

Used for:

* Severity Prediction
* Priority Prediction
* Component Prediction

Evaluation metrics:

* Accuracy
* Precision
* Recall
* F1-Score

## Duplicate Bug Detection

Evaluation metrics:

* Precision
* Recall
* F1-Score
* Top-K evaluation

## Developer Recommendation

Evaluation metrics:

* Precision@K
* Recall@K
* Mean Reciprocal Rank (MRR)

---

# 10. Model Selection & Optimization

The trained models are compared and optimized before deployment.

Main steps include:

1. Hyperparameter tuning
2. Compare different models
3. Evaluate model performance
4. Select the best-performing model
5. Retrain using the full training data

---

# 11. Final AI Integration

The trained models are integrated into the application through a Python AI Service.

The AI service is responsible for:

* Loading saved models
* Receiving AI requests
* Preprocessing new bug data
* Running predictions
* Returning AI results
* Error handling
* Logging

The Python AI Service exposes the AI functionality through a REST API.

---

# 12. Production

In the final system, the AI service is deployed and connected to the main application.

The production flow is:

**New Bug → .NET API → Python AI Service → AI Processing → AI Results → .NET API → Frontend**

The deployed AI service provides:

* Real-time predictions
* Duplicate detection
* Developer recommendations
* Integration with the .NET backend
* Integration with the frontend
* Monitoring and model updates

---

# 13. Overall Goal

The goal of the AI/ML pipeline is to automate major parts of the bug triage process and provide intelligent, data-driven recommendations while keeping the final decision under human review.

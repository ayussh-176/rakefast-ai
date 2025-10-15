# 🚆 RakeMitra – AI/ML-Based Rake Optimization System for SAIL

## 📘 Overview
*RakeMitra* is an Artificial Intelligence and Machine Learning (AI/ML)–powered decision support system developed to optimize *rake formation strategies* for the *Steel Authority of India Limited (SAIL), starting with the **Bokaro Steel Plant*.  
The system uses data from *Freight Operations Information System (FOIS)* and *Systems Applications and Products (SAP)* to generate efficient, data-driven rake plans that reduce logistics costs, improve wagon utilization, and streamline multi-stockyard dispatch operations.

---

## 🎯 Problem Statement
Currently, rake formation at SAIL plants is a *manual, rule-based process* that requires coordination between:
- Material availability at plants and stockyards  
- Pending customer orders and priorities  
- Wagon/rake availability and capacity  
- Route and siding constraints  

This results in:
- Delayed rake formation and dispatch  
- Underutilized wagons or partial rake loads  
- Increased freight and demurrage costs  
- Sub-optimal resource allocation  

---

## 💡 Proposed Solution
*RakeMitra* introduces an AI/ML-driven system that:
- Uses existing FOIS and SAP data for real-time analysis  
- Applies *Mixed Integer Linear Programming (MILP)* and *Google OR-Tools* for optimization  
- Uses *TensorFlow* for predictive modeling and continuous learning  
- Offers a *dashboard interface* for human-in-loop decision-making  
- Scales seamlessly across all SAIL plants through a cloud-ready architecture  

---

## ⚙ System Workflow
1. *Data Input:* Pull FOIS (wagon/route) and SAP (orders/inventory) data  
2. *Data Preprocessing:* Clean and map operational data  
3. *AI/ML Optimization Engine:* Generate optimal rake formations  
4. *Dashboard Interface:* Visualize, review, and modify suggestions  
5. *Approval & Execution:* Finalize rake plan and dispatch  
6. *Feedback Loop:* Learn from outcomes to improve future recommendations  

---

## 🧠 Technical Stack
| Component | Technology Used |
|------------|-----------------|
| Data Handling | PostgreSQL, Python (Pandas) |
| Optimization | Google OR-Tools, MILP |
| AI/ML | TensorFlow |
| Dashboard | React / Flask (or Streamlit prototype) |
| Deployment | Cloud-based (GCP / AWS ready) |

---

## 🚀 Key Features
- AI-driven rake formation optimization  
- Predictive demand and wagon forecasting  
- Human-in-loop decision support system  
- What-if simulation and cost analysis  
- Scalable and cloud-ready design  

---

## 📊 Expected Impact
- Up to *25–30% reduction* in logistics and demurrage costs  
- *Higher wagon utilization* and fewer idle resources  
- *Improved dispatch accuracy* and turnaround time  
- *Predictive readiness* for future demand and disruptions  

---

## 👥 Team
Developed by the *RakeMitra Team* for *Smart India Hackathon 2025*.  
Our goal: Digitally transform SAIL’s rail logistics with intelligence, efficiency, and transparency.  

---

## 📎 License
This project is developed for research and demonstration under the *Smart India Hackathon 2025* and is intended for internal use by SAIL.

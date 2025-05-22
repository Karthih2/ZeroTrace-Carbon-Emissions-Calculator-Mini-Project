# 🌍 ZeroTrace: Carbon Emissions Calculator Mini Project

A lightweight web app to **calculate, store, and visualize your carbon footprint** from daily activities like electricity, transport, waste, and water consumption. Track your emissions and explore interactive graphs! 📉♻️

---

## 🚀 Project Overview

ZeroTrace enables you to:

- Submit carbon emission entries with fields:
  - **Name**
  - **Electricity** (kWh)
  - **Transport** (fuel consumption)
  - **Waste**
  - **Water**
  - **Total Emission** (sum of above) ⚡🛢️♻️💧

- View all your emission records in a clean, tabular format.
- See your **Top 3 highest emission records**.
- Visualize your emissions via multiple chart types (line, bar, pie, scatter, area) through an interactive graph. 📊

---

## 💻 Tech Stack

- **Backend:** Python Flask 🐍  
- **Frontend:** HTML, CSS 🎨  
- **Database:** MySQL 🗄️  
- **Graphs:** Interactive charts embedded in Flask templates 📈  

---

## 📄 Pages & Features

| Page           | Purpose                                               |
|----------------|-------------------------------------------------------|
| `index.html`   | Homepage with intro and navigation                     |
| `top3.html`    | Displays top 3 emission records by total emission     |
| `view.html`    | Shows all saved emission records in a table           |
| `graph.html`   | Interactive graph with selectable chart types          |

---

## ⚙️ Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/zerotrace.git
   cd zerotrace

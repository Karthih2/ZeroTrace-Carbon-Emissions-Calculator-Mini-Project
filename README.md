# 🌱 ZeroTrace

## Carbon Emission Tracking & Analytics Platform

⭐ A full-stack **carbon emissions analytics system** built using **Python, Flask, MySQL, and data visualization tools** to analyze historical emissions and provide meaningful environmental insights.

---

## 📌 Overview

**ZeroTrace** is a data-driven web application designed to track, analyze, and visualize **carbon emission data** across countries, sectors, and years. The project demonstrates strong fundamentals in **data engineering, backend development, and analytics**, using real-world datasets and structured storage.

The platform enables users to explore emission trends, compare regions, and understand environmental impact through interactive dashboards.

---

## 🔥 Highlights

* 🌍 Historical carbon emission analysis
* 📊 Interactive charts & dashboards
* 🗄️ MySQL-based structured data storage
* 🧮 Emission calculation & data views
* ⚡ Fast data querying and visualization
* 📱 Clean, responsive web interface

---

## 📁 Project Structure

```bash
ZeroTrace/
│
├── static/
│   ├── images/
│   │   ├── about.avif
│   │   ├── blogbg1.jpg
│   │   ├── calbg2.jpg
│   │   ├── graphbg.jpeg
│   │   ├── homebg4.jpg
│   │   ├── tablebg.jpg
│   │   └── viewbg.jpg
│   └── js/
│       └── script.js
│
├── templates/
│   ├── index.html
│   ├── about.html
│   ├── blog.html
│   ├── cal.html
│   ├── graph.html
│   ├── top3.html
│   └── view.html
│
├── db.py
├── emissions.sql
├── historical_emissions.csv
├── normalized_historical_emissions.csv
├── sources.csv
├── sql_preprocessing.ipynb
├── requirements.txt
└── README.md
```

---

## 🛠 Tech Stack

### 🔹 Backend

* Python 3.x
* Flask
* MySQL
* SQL

### 🔹 Data & Analytics

* Pandas
* NumPy
* CSV-based real-world emissions datasets

### 🔹 Frontend

* HTML5, CSS3
* JavaScript (ES6)
* Jinja2 Templates

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ZeroTrace.git
cd ZeroTrace
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate    # macOS/Linux
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Setup Database

* Create a MySQL database
* Run `emissions.sql` to create tables
* Import the provided CSV files

### 5️⃣ Run the Application

```bash
python app.py
```

### 6️⃣ Open in Browser

```
http://127.0.0.1:5000
```

---

## 🎯 Usage

* 📊 View historical carbon emission trends
* 🌍 Compare emissions by country and sector
* 📋 Explore structured emission datasets
* 🧮 Analyze data through interactive visuals

---

## 📊 Data Processing

* Raw emission datasets cleaned using **Pandas**
* Normalization and preprocessing via **SQL & Python**
* Stored in **MySQL** for efficient querying

---

## 🔮 Future Enhancements

* ML-based emission forecasting
* Automated ETL pipelines
* Cloud deployment (AWS / Azure)
* User authentication & dashboards
* Public API for emission data

---

## 👤 Author

**Karthick S**
Developer | AI Enthusiast | Aspiring Data Engineer

📧 [h2karthi04@gmail.com](mailto:h2karthi04@gmail.com)
🌐 GitHub: [https://github.com/Karthih2](https://github.com/Karthih2)
🔗 LinkedIn: [https://www.linkedin.com/in/karthick-s-70108128a](https://www.linkedin.com/in/karthick-s-70108128a)

---

⭐ If you found this project useful, consider giving it a star!

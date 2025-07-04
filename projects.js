const projects = [
    {
        "title": "EmployeeSync Payroll Management",
        "description": "A cross-platform payroll system for managing employee salaries, attendance, and tax deductions with real-time reporting and compliance tracking.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=301",
            "https://picsum.photos/1200/900?random=302"
        ],
        "tags": [
            "SQL",
            "Flask",
            "Dashboard",
            "Payroll"
        ],
        "color": "blue",
        "majorCategory": "Desktop Apps",
        "market": "Fiverr",
        "comments": [
            {
                "client": "HR Solutions Inc.",
                "text": "Streamlined our payroll process significantly."
            }
        ]
    },
    {
        "title": "StockFlow Inventory Manager",
        "description": "An automated inventory management system with real-time stock tracking, predictive restocking, and customizable reporting dashboards.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=302",
            "https://picsum.photos/1200/900?random=303"
        ],
        "tags": [
            "VBA",
            "Dashboard",
            "Inventory",
            "Reporting"
        ],
        "color": "orange",
        "majorCategory": "Desktop Apps",
        "market": "Freelance",
        "comments": [
            {
                "client": "Retail Chain Co.",
                "text": "Improved stock accuracy by 40%."
            }
        ]
    },
    {
        "title": "RetailPro ePOS System",
        "description": "A robust point-of-sale system with seamless inventory integration, sales analytics, and multi-store support for retail businesses.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=303",
            "https://picsum.photos/1200/900?random=304"
        ],
        "tags": [
            "SQL",
            "ETL",
            "Retail",
            "Analytics"
        ],
        "color": "blue",
        "majorCategory": "ETL",
        "market": "Upwork",
        "comments": [
            {
                "client": "ShopEasy LLC",
                "text": "Enhanced our sales process efficiency."
            }
        ]
    },
    {
        "title": "ShiftTrack Attendance App",
        "description": "A desktop application for tracking employee shifts, working hours, and attendance with automated overtime calculations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=304",
            "https://picsum.photos/1200/900?random=305"
        ],
        "tags": [
            "Excel",
            "Dashboard",
            "Automation",
            "HR"
        ],
        "color": "red",
        "majorCategory": "Automation",
        "market": "Fiverr",
        "comments": [
            {
                "client": "Workforce Solutions",
                "text": "Simplified our attendance tracking."
            }
        ]
    },
    {
        "title": "QRLabel Automation Tool",
        "description": "An automated system for generating and printing QR code-based shipping labels with integration to logistics platforms.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=305",
            "https://picsum.photos/1200/900?random=306"
        ],
        "tags": [
            "Python",
            "ETL",
            "Logistics",
            "Automation"
        ],
        "color": "teal",
        "majorCategory": "Web Development",
        "market": "Freelance",
        "comments": [
            {
                "client": "ShipFast Corp.",
                "text": "Reduced label processing time by 50%."
            }
        ]
    },
    {
        "title": "PDFSync Excel Converter",
        "description": "A web-based tool for extracting tabular data from PDFs and converting it into structured Excel spreadsheets with data validation.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=306",
            "https://picsum.photos/1200/900?random=307"
        ],
        "tags": [
            "Flask",
            "SQL",
            "Data Extraction",
            "Excel"
        ],
        "color": "purple",
        "majorCategory": "Web Development",
        "market": "Enterprise",
        "comments": [
            {
                "client": "DataCorp Ltd.",
                "text": "Accurate and fast PDF data extraction."
            }
        ]
    },
    {
        "title": "InsightPro Analytics Dashboard",
        "description": "An enterprise-grade data analytics platform with interactive dashboards for visualizing complex datasets and generating actionable insights.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=307",
            "https://picsum.photos/1200/900?random=308"
        ],
        "tags": [
            "Python",
            "Flask",
            "Data Visualization",
            "Analytics"
        ],
        "color": "indigo",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Insight Analytics",
                "text": "Transformed our data reporting process."
            }
        ]
    },
    {
        "title": "StitchCalc Garment Estimator",
        "description": "A desktop tool for garment manufacturers to estimate production costs and timelines based on fabric and labor inputs.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=308",
            "https://picsum.photos/1200/900?random=309"
        ],
        "tags": [
            "Excel",
            "Automation",
            "Cost Estimation",
            "Manufacturing"
        ],
        "color": "orange",
        "majorCategory": "Data Analysis",
        "market": "Fiverr",
        "comments": [
            {
                "client": "Textile Innovations",
                "text": "Accurate cost predictions saved us thousands."
            }
        ]
    },
    {
        "title": "UrduMaster Learning App",
        "description": "An Android app for teaching Urdu through interactive lessons, quizzes, and speech recognition for pronunciation practice.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=309",
            "https://picsum.photos/1200/900?random=310"
        ],
        "tags": [
            "Android",
            "Education",
            "SQL",
            "Flask"
        ],
        "color": "teal",
        "majorCategory": "Mobile Apps",
        "market": "Private Client",
        "comments": [
            {
                "client": "EduTech Solutions",
                "text": "Engaging and effective for Urdu learners."
            }
        ]
    },
    {
        "title": "ExcelBoost Formula Optimizer",
        "description": "A VBA-based tool to audit and optimize complex Excel formulas, improving spreadsheet performance and reducing errors.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=310",
            "https://picsum.photos/1200/900?random=311"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Optimization",
            "Automation"
        ],
        "color": "yellow",
        "majorCategory": "Desktop Apps",
        "market": "Upwork",
        "comments": [
            {
                "client": "Finance Analytics",
                "text": "Significantly improved our spreadsheet efficiency."
            }
        ]
    },
    {
        "title": "eCommerce StockSync",
        "description": "A Python and Excel-based inventory management system for eCommerce sellers with automated stock updates and sales forecasting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=311",
            "https://picsum.photos/1200/900?random=312"
        ],
        "tags": [
            "Python",
            "Excel",
            "eCommerce",
            "Automation"
        ],
        "color": "indigo",
        "majorCategory": "Reporting",
        "market": "Fiverr",
        "comments": [
            {
                "client": "Online Retail Co.",
                "text": "Streamlined our inventory operations."
            }
        ]
    },
    {
        "title": "BulkSync Product Processor",
        "description": "An automated system for processing bulk eCommerce product data, including SKU mapping and pricing updates, using Flask and SQL.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=312",
            "https://picsum.photos/1200/900?random=313"
        ],
        "tags": [
            "Flask",
            "SQL",
            "eCommerce",
            "Data Processing"
        ],
        "color": "orange",
        "majorCategory": "Desktop Apps",
        "market": "Upwork",
        "comments": [
            {
                "client": "Marketplace Solutions",
                "text": "Saved hours of manual product updates."
            }
        ]
    },
    {
        "title": "VisitorTrack Management System",
        "description": "A visitor management system with digital check-in, badge printing, and real-time tracking for corporate facilities.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=313",
            "https://picsum.photos/1200/900?random=314"
        ],
        "tags": [
            "Flask",
            "Excel",
            "Security",
            "Dashboard"
        ],
        "color": "green",
        "majorCategory": "ETL",
        "market": "Private Client",
        "comments": [
            {
                "client": "Corporate Security Ltd.",
                "text": "Enhanced our visitor management process."
            }
        ]
    },
    {
        "title": "CarePoint Medical Records",
        "description": "A desktop application for managing patient records, prescriptions, and appointment scheduling with data encryption.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=314",
            "https://picsum.photos/1200/900?random=315"
        ],
        "tags": [
            "Excel",
            "Healthcare",
            "Automation",
            "Security"
        ],
        "color": "teal",
        "majorCategory": "Automation",
        "market": "Private Client",
        "comments": [
            {
                "client": "HealthCare Systems",
                "text": "Secure and efficient patient data management."
            }
        ]
    },
    {
        "title": "ExcelReport VSTO Add-in",
        "description": "A VSTO-based Excel add-in for automating PDF report generation from complex datasets with customizable templates.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=315",
            "https://picsum.photos/1200/900?random=316"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Reporting",
            "Automation"
        ],
        "color": "teal",
        "majorCategory": "Web Development",
        "market": "Freelance",
        "comments": [
            {
                "client": "ReportGenix",
                "text": "Automated our reporting process seamlessly."
            }
        ]
    },
    {
        "title": "ETLPipe Visualizer",
        "description": "A Python and Excel-based tool for visualizing ETL pipelines, with drag-and-drop interface and performance metrics.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=316",
            "https://picsum.photos/1200/900?random=317"
        ],
        "tags": [
            "Python",
            "Excel",
            "ETL",
            "Visualization"
        ],
        "color": "green",
        "majorCategory": "Web Development",
        "market": "Private Client",
        "comments": [
            {
                "client": "DataFlow Inc.",
                "text": "Made ETL pipeline management intuitive."
            }
        ]
    },
    {
        "title": "ProjectPulse Gantt Tracker",
        "description": "An interactive Excel-based Gantt chart tool for project management with task dependencies and progress tracking.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=317",
            "https://picsum.photos/1200/900?random=318"
        ],
        "tags": [
            "Excel",
            "Project Management",
            "Visualization",
            "Automation"
        ],
        "color": "red",
        "majorCategory": "Automation",
        "market": "Fiverr",
        "comments": [
            {
                "client": "PM Solutions",
                "text": "Great tool for project timeline management."
            }
        ]
    },
    {
        "title": "ReportScheduler Automation",
        "description": "A system for generating and emailing scheduled reports from Excel datasets, with customizable email templates.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=318",
            "https://picsum.photos/1200/900?random=319"
        ],
        "tags": [
            "Python",
            "Excel",
            "Automation",
            "Email"
        ],
        "color": "indigo",
        "majorCategory": "Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "AutoReports Co.",
                "text": "Saved us hours on report distribution."
            }
        ]
    },
    {
        "title": "WebScrape Pro",
        "description": "A Python and C# tool for extracting structured data from websites, with support for dynamic content and API integration.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=319",
            "https://picsum.photos/1200/900?random=320"
        ],
        "tags": [
            "Python",
            "C#",
            "Scraping",
            "Data Extraction"
        ],
        "color": "purple",
        "majorCategory": "Reporting",
        "market": "Fiverr",
        "comments": [
            {
                "client": "DataHarvest Inc.",
                "text": "Efficiently gathered critical web data."
            }
        ]
    },
    {
        "title": "TicketTrack Support System",
        "description": "A Google App Script-based tool for tracking and resolving customer support tickets with automated notifications.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=320",
            "https://picsum.photos/1200/900?random=321"
        ],
        "tags": [
            "Google Quentin",
            "SQL",
            "Customer Support",
            "Automation"
        ],
        "color": "purple",
        "majorCategory": "Data Analysis",
        "market": "Fiverr",
        "comments": [
            {
                "client": "SupportPro Ltd.",
                "text": "Improved our ticket resolution time."
            }
        ]
    },
    {
        "title": "BI Dashboard for Excel",
        "description": "A dynamic Excel dashboard for business intelligence, featuring interactive charts and real-time data updates.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=321",
            "https://picsum.photos/1200/900?random=322"
        ],
        "tags": [
            "Excel",
            "VBA",
            "Business Intelligence",
            "Dashboard"
        ],
        "color": "blue",
        "majorCategory": "Web Development",
        "market": "Upwork",
        "comments": [
            {
                "client": "InsightCorp",
                "text": "Powerful and user-friendly BI solution."
            }
        ]
    },
    {
        "title": "StockManager VBA Tool",
        "description": "An Excel VBA-based system for managing inventory and stock flow, with automated low-stock alerts and reporting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=322",
            "https://picsum.photos/1200/900?random=323"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Inventory",
            "Automation"
        ],
        "color": "orange",
        "majorCategory": "Web Development",
        "market": "Private Client",
        "comments": [
            {
                "client": "Logistics Solutions",
                "text": "Streamlined our inventory tracking."
            }
        ]
    },
    {
        "title": "MultiSource Data Analyzer",
        "description": "A Python and SQL-based tool for analyzing data from multiple sources, with automated data cleaning and visualization.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=323",
            "https://picsum.photos/1200/900?random=324"
        ],
        "tags": [
            "Python",
            "SQL",
            "Data Analysis",
            "Visualization"
        ],
        "color": "blue",
        "majorCategory": "ETL",
        "market": "Freelance",
        "comments": [
            {
                "client": "Data Insights Ltd.",
                "text": "Made multi-source analysis effortless."
            }
        ]
    },
    {
        "title": "DataMerge Consolidation Tool",
        "description": "A tool for consolidating data from multiple Excel and SQL sources into a unified dataset for reporting and analysis.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=324",
            "https://picsum.photos/1200/900?random=325"
        ],
        "tags": [
            "VBA",
            "SQL",
            "Data Consolidation",
            "Excel"
        ],
        "color": "blue",
        "majorCategory": "Data Analysis",
        "market": "Enterprise",
        "comments": [
            {
                "client": "Enterprise Analytics",
                "text": "Unified our data sources effectively."
            }
        ]
    },
    {
        "title": "LargeScale Report Generator",
        "description": "A Python and SQL-based system for generating large-scale reports from complex datasets with automated scheduling.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=325",
            "https://picsum.photos/1200/900?random=326"
        ],
        "tags": [
            "Python",
            "SQL",
            "Reporting",
            "Automation"
        ],
        "color": "indigo",
        "majorCategory": "Web Development",
        "market": "Upwork",
        "comments": [
            {
                "client": "ReportWorks Inc.",
                "text": "Handled our large datasets with ease."
            }
        ]
    },
    {
        "title": "CleanSheet Data Organizer",
        "description": "A Python-based tool for cleaning, structuring, and validating spreadsheet data for improved data quality and reporting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=326",
            "https://picsum.photos/1200/900?random=327"
        ],
        "tags": [
            "Python",
            "Excel",
            "Data Cleaning",
            "Automation"
        ],
        "color": "red",
        "majorCategory": "Reporting",
        "market": "Enterprise",
        "comments": [
            {
                "client": "DataQuality Corp.",
                "text": "Improved our data accuracy significantly."
            }
        ]
    },
    {
        "title": "ExcelMerge Pro",
        "description": "A VBA-based tool for merging multiple Excel sheets into a single unified dataset with error checking and deduplication.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=327",
            "https://picsum.photos/1200/900?random=328"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Data Merging",
            "ETL"
        ],
        "color": "teal",
        "majorCategory": "Data Analysis",
        "market": "Fiverr",
        "comments": [
            {
                "client": "MergeTech Solutions",
                "text": "Simplified our data consolidation process."
            }
        ]
    },
    {
        "title": "AccessToPowerBI Migrator",
        "description": "A tool for migrating MS Access databases to Excel and Power BI, with automated data mapping and visualization.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=328",
            "https://picsum.photos/1200/900?random=329"
        ],
        "tags": [
            "VBA",
            "Power BI",
            "Data Migration",
            "ETL"
        ],
        "color": "red",
        "majorCategory": "Automation",
        "market": "Freelance",
        "comments": [
            {
                "client": "BI Solutions Ltd.",
                "text": "Seamless migration to Power BI."
            }
        ]
    },
    {
        "title": "ExcelToAccess Importer",
        "description": "A desktop tool for importing structured Excel data into MS Access databases with data validation and schema mapping.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=329",
            "https://picsum.photos/1200/900?random=330"
        ],
        "tags": [
            "VBA",
            "SQL",
            "Data Import",
            "Access"
        ],
        "color": "blue",
        "majorCategory": "Reporting",
        "market": "Enterprise",
        "comments": [
            {
                "client": "Database Solutions",
                "text": "Efficient and reliable data import tool."
            }
        ]
    },
    {
        "title": "RentalTrack Reporting App",
        "description": "A VBA and SQL-based tool for generating monthly rental income reports from Excel data with tenant tracking.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=330",
            "https://picsum.photos/1200/900?random=331"
        ],
        "tags": [
            "VBA",
            "SQL",
            "Reporting",
            "Real Estate"
        ],
        "color": "purple",
        "majorCategory": "Data Analysis",
        "market": "Freelance",
        "comments": [
            {
                "client": "Property Management Co.",
                "text": "Made rental reporting quick and accurate."
            }
        ]
    },
    {
        "title": "SalesTrend Predictor",
        "description": "A Python-based tool for forecasting sales trends using time-series analysis and visualization in interactive dashboards.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=400",
            "https://picsum.photos/1200/900?random=401"
        ],
        "tags": [
            "Python",
            "Time Series",
            "Analytics",
            "Visualization"
        ],
        "color": "blue",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Retail Analytics Ltd.",
                "text": "Accurate sales forecasts improved our planning."
            }
        ]
    },
    {
        "title": "CustomerSegment Analyzer",
        "description": "A Flask-based tool for segmenting customers based on purchasing behavior, with clustering algorithms and visual reports.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=401",
            "https://picsum.photos/1200/900?random=402"
        ],
        "tags": [
            "Flask",
            "SQL",
            "Clustering",
            "Analytics"
        ],
        "color": "red",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Market Insights Co.",
                "text": "Enhanced our customer targeting strategy."
            }
        ]
    },
    {
        "title": "FraudRisk Detector",
        "description": "A Python-based tool using machine learning to analyze transaction data and flag potential fraud with high accuracy.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=402",
            "https://picsum.photos/1200/900?random=403"
        ],
        "tags": [
            "Python",
            "Machine Learning",
            "Fraud Detection",
            "Analytics"
        ],
        "color": "yellow",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "SecurePay Solutions",
                "text": "Reduced fraudulent transactions significantly."
            }
        ]
    },
    {
        "title": "InventoryDemand Forecaster",
        "description": "A tool for predicting inventory demand using statistical models, with Excel-based visualizations for stock planning.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=403",
            "https://picsum.photos/1200/900?random=404"
        ],
        "tags": [
            "Python",
            "Excel",
            "Forecasting",
            "Analytics"
        ],
        "color": "blue",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "SupplyChain Pro",
                "text": "Optimized our inventory management."
            }
        ]
    },
    {
        "title": "EnergyUse Analyzer",
        "description": "A Python-based tool for analyzing energy consumption patterns from IoT data, with predictive cost-saving insights.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=404",
            "https://picsum.photos/1200/900?random=405"
        ],
        "tags": [
            "Python",
            "IoT",
            "Analytics",
            "Visualization"
        ],
        "color": "red",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "GreenEnergy Inc.",
                "text": "Helped us cut energy costs by 15%."
            }
        ]
    },
    {
        "title": "HRTalent Analytics",
        "description": "A SQL-based dashboard for analyzing recruitment metrics, candidate performance, and hiring trends with visualizations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=405",
            "https://picsum.photos/1200/900?random=406"
        ],
        "tags": [
            "SQL",
            "Dashboard",
            "HR",
            "Analytics"
        ],
        "color": "orange",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "TalentCorp",
                "text": "Made our hiring process data-driven."
            }
        ]
    },
    {
        "title": "BudgetVariance Tracker",
        "description": "An Excel-based tool for analyzing budget variances, with automated reporting and trend analysis for financial planning.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=406",
            "https://picsum.photos/1200/900?random=407"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Finance",
            "Analytics"
        ],
        "color": "orange",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "FinancePro Ltd.",
                "text": "Improved our financial oversight."
            }
        ]
    },
    {
        "title": "CustomerChurn Predictor",
        "description": "A Python-based tool for predicting customer churn using machine learning, with visualizations of risk factors.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=407",
            "https://picsum.photos/1200/900?random=408"
        ],
        "tags": [
            "Python",
            "Machine Learning",
            "Analytics",
            "CRM"
        ],
        "color": "purple",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Customer Insights",
                "text": "Helped reduce churn rates effectively."
            }
        ]
    },
    {
        "title": "ComplianceAudit Analyzer",
        "description": "A SQL-based tool for analyzing compliance data, generating audit reports with visualizations of regulatory gaps.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=408",
            "https://picsum.photos/1200/900?random=409"
        ],
        "tags": [
            "SQL",
            "Compliance",
            "Reporting",
            "Analytics"
        ],
        "color": "purple",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "AuditPro Ltd.",
                "text": "Streamlined our compliance reporting."
            }
        ]
    },
    {
        "title": "PriceTrend Scraper",
        "description": "A Python-based tool for scraping and analyzing competitor pricing trends, with Excel-based visualizations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=409",
            "https://picsum.photos/1200/900?random=410"
        ],
        "tags": [
            "Python",
            "Scraping",
            "Excel",
            "Analytics"
        ],
        "color": "green",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "MarketWatch Co.",
                "text": "Provided actionable pricing insights."
            }
        ]
    },
    {
        "title": "HealthMetrics Analyzer",
        "description": "A Flask-based dashboard for analyzing health metrics from IoT devices, with statistical models for patient trends.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=410",
            "https://picsum.photos/1200/900?random=411"
        ],
        "tags": [
            "Flask",
            "IoT",
            "Healthcare",
            "Analytics"
        ],
        "color": "yellow",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "HealthTech Solutions",
                "text": "Enhanced patient data analysis."
            }
        ]
    },
    {
        "title": "StockFlow Analyzer",
        "description": "A SQL-based tool for analyzing inventory turnover rates, with predictive models for optimizing stock levels.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=411",
            "https://picsum.photos/1200/900?random=412"
        ],
        "tags": [
            "SQL",
            "Inventory",
            "Analytics",
            "Forecasting"
        ],
        "color": "red",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Warehouse Pro",
                "text": "Improved stock management efficiency."
            }
        ]
    },
    {
        "title": "RetailSales Dashboard",
        "description": "A Python-based dashboard for analyzing retail sales data, with visualizations of trends and performance metrics.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=412",
            "https://picsum.photos/1200/900?random=413"
        ],
        "tags": [
            "Python",
            "Dashboard",
            "Retail",
            "Analytics"
        ],
        "color": "red",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Retail Insights",
                "text": "Boosted our sales strategy with insights."
            }
        ]
    },
    {
        "title": "FeedbackSentiment Analyzer",
        "description": "A Python-based tool for analyzing customer feedback using NLP, with sentiment scoring and trend visualizations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=413",
            "https://picsum.photos/1200/900?random=414"
        ],
        "tags": [
            "Python",
            "NLP",
            "Analytics",
            "Visualization"
        ],
        "color": "red",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "FeedbackPro",
                "text": "Valuable insights from customer feedback."
            }
        ]
    },
    {
        "title": "ExpensePattern Analyzer",
        "description": "A VBA-based tool for analyzing corporate expense patterns, with visualizations and cost-saving recommendations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=414",
            "https://picsum.photos/1200/900?random=415"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Finance",
            "Analytics"
        ],
        "color": "purple",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Corporate Finance Ltd.",
                "text": "Helped optimize expense allocation."
            }
        ]
    },
    {
        "title": "SocialMedia Insights Tool",
        "description": "A Python-based tool for analyzing social media engagement metrics, with visualizations of audience trends.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=415",
            "https://picsum.photos/1200/900?random=416"
        ],
        "tags": [
            "Python",
            "Scraping",
            "Analytics",
            "Social Media"
        ],
        "color": "green",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "BrandMonitor Inc.",
                "text": "Improved our social media strategy."
            }
        ]
    },
    {
        "title": "MarketTrend Forecaster",
        "description": "A Python-based tool for analyzing market trends using statistical models, with Excel-based visualizations.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=416",
            "https://picsum.photos/1200/900?random=417"
        ],
        "tags": [
            "Python",
            "Excel",
            "Analytics",
            "Forecasting"
        ],
        "color": "orange",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "TrendWatch Co.",
                "text": "Provided clear market trend insights."
            }
        ]
    },
    {
        "title": "EmployeeEngage Analytics",
        "description": "A Flask-based tool for analyzing employee engagement survey data, with visualizations of satisfaction trends.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=417",
            "https imgs": [
            "https://picsum.photos/1200/900?random=418",
            "https://picsum.photos/1200/900?random=419"
        ],
        "tags": [
            "Flask",
            "SQL",
            "HR",
            "Analytics"
        ],
        "color": "orange",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "HR Analytics Ltd.",
                "text": "Enhanced our employee engagement insights."
            }
        ]
    },
    {
        "title": "SupplyChain Analytics",
        "description": "A SQL-based tool for analyzing supply chain performance metrics, with dashboards for bottleneck identification.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=419",
            "https://picsum.photos/1200/900?random=420"
        ],
        "tags": [
            "SQL",
            "Supply Chain",
            "Analytics",
            "Dashboard"
        ],
        "color": "yellow",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "Logistics Insights",
                "text": "Optimized our supply chain operations."
            }
        ]
    },
    {
        "title": "DataQuality Validator",
        "description": "A Python and VBA-based tool for validating and analyzing data quality, with reports on inconsistencies and errors.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=420",
            "https://picsum.photos/1200/900?random=421"
        ],
        "tags": [
            "Python",
            "VBA",
            "Data Quality",
            "Analytics"
        ],
        "color": "yellow",
        "majorCategory": "Data Analysis",
        "market": "Upwork",
        "comments": [
            {
                "client": "DataPro Solutions",
                "text": "Improved our data quality significantly."
            }
        ]
    }
]

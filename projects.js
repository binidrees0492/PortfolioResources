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
            "Google Apps Script",
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
            "https://picsum.photos/1200/900 | random=328",
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
        "title": "SupplyChain Optimizer",
        "description": "A Python-based tool for optimizing supply chain logistics, with demand forecasting and route planning features.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=400",
            "https://picsum.photos/1200/900?random=401"
        ],
        "tags": [
            "Python",
            "Optimization",
            "Supply Chain",
            "Analytics"
        ],
        "color": "blue",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Logistics Pro",
                "text": "Reduced logistics costs by 20%."
            }
        ]
    },
    {
        "title": "CustomerInsight CRM Dashboard",
        "description": "A Flask-based CRM dashboard for tracking customer interactions, sales pipelines, and performance metrics.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=401",
            "https://picsum.photos/1200/900?random=402"
        ],
        "tags": [
            "Flask",
            "SQL",
            "CRM",
            "Dashboard"
        ],
        "color": "red",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "SalesForce Inc.",
                "text": "Enhanced our customer relationship management."
            }
        ]
    },
    {
        "title": "FraudDetect Transaction Monitor",
        "description": "A Python-based tool for detecting fraudulent transactions using machine learning and real-time data analysis.",
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
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "SecurePay Ltd.",
                "text": "Improved fraud detection accuracy."
            }
        ]
    },
    {
        "title": "EventSync Scheduler",
        "description": "A web-based event scheduling tool with automated reminders, attendee management, and calendar integration.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=403",
            "https://picsum.photos/1200/900?random=404"
        ],
        "tags": [
            "Flask",
            "SQL",
            "Event Management",
            "Automation"
        ],
        "color": "blue",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "EventPro Organizers",
                "text": "Streamlined our event planning process."
            }
        ]
    },
    {
        "title": "EnergyTrack Consumption Analyzer",
        "description": "A tool for analyzing energy consumption data from IoT devices, with predictive maintenance and cost-saving insights.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=404",
            "https://picsum.photos/1200/900?random=405"
        ],
        "tags": [
            "Python",
            "IoT",
            "Analytics",
            "ETL"
        ],
        "color": "red",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "GreenEnergy Co.",
                "text": "Helped optimize our energy usage."
            }
        ]
    },
    {
        "title": "HRInsight Recruitment Tracker",
        "description": "A dashboard for tracking recruitment pipelines, candidate progress, and hiring metrics with automated reporting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=405",
            "https://picsum.photos/1200/900?random=406"
        ],
        "tags": [
            "SQL",
            "Dashboard",
            "HR",
            "Automation"
        ],
        "color": "orange",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "TalentCorp",
                "text": "Made hiring decisions more data-driven."
            }
        ]
    },
    {
        "title": "BudgetPro Financial Planner",
        "description": "An Excel-based financial planning tool with automated budgeting, forecasting, and variance analysis features.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=406",
            "https://picsum.photos/1200/900?random=407"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Finance",
            "Automation"
        ],
        "color": "orange",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Finance Solutions",
                "text": "Simplified our budgeting process."
            }
        ]
    },
    {
        "title": "SalesInsight Forecasting Tool",
        "description": "A Python-based sales forecasting tool with predictive analytics and integration with CRM systems for real-time insights.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=407",
            "https://picsum.photos/1200/900?random=408"
        ],
        "tags": [
            "Python",
            "Analytics",
            "CRM",
            "Forecasting"
        ],
        "color": "purple",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "SalesBoost Inc.",
                "text": "Accurate forecasts improved our planning."
            }
        ]
    },
    {
        "title": "ComplianceTrack Audit System",
        "description": "A tool for automating compliance audits, with data validation and reporting for regulatory requirements.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=408",
            "https://picsum.photos/1200/900?random=409"
        ],
        "tags": [
            "SQL",
            "Automation",
            "Compliance",
            "Reporting"
        ],
        "color": "purple",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "AuditPro Ltd.",
                "text": "Streamlined our compliance process."
            }
        ]
    },
    {
        "title": "PriceScrape Competitor Analyzer",
        "description": "A web scraping tool for monitoring competitor pricing, with automated data aggregation and visualization in Excel.",
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
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "MarketWatch Co.",
                "text": "Provided critical pricing insights."
            }
        ]
    },
    {
        "title": "HealthMonitor IoT Dashboard",
        "description": "A Flask-based dashboard for monitoring health metrics from IoT devices, with real-time alerts and data visualization.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=410",
            "https://picsum.photos/1200/900?random=411"
        ],
        "tags": [
            "Flask",
            "IoT",
            "Healthcare",
            "Dashboard"
        ],
        "color": "yellow",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "HealthTech Solutions",
                "text": "Improved patient monitoring efficiency."
            }
        ]
    },
    {
        "title": "InventorySync Multi-Warehouse",
        "description": "A tool for synchronizing inventory across multiple warehouses, with real-time updates and discrepancy alerts.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=411",
            "https://picsum.photos/1200/900?random=412"
        ],
        "tags": [
            "SQL",
            "Python",
            "Inventory",
            "Automation"
        ],
        "color": "red",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Warehouse Pro",
                "text": "Unified our multi-warehouse operations."
            }
        ]
    },
    {
        "title": "RetailAnalytics Sales Dashboard",
        "description": "A dashboard for analyzing retail sales data, with interactive charts and predictive sales trends using ETL processes.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=412",
            "https://picsum.photos/1200/900?random=413"
        ],
        "tags": [
            "ETL",
            "Dashboard",
            "Retail",
            "Analytics"
        ],
        "color": "red",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Retail Insights",
                "text": "Actionable insights for our sales team."
            }
        ]
    },
    {
        "title": "CustomerFeedback Analyzer",
        "description": "A tool for analyzing customer feedback from multiple sources, with sentiment analysis and automated reporting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=413",
            "https://picsum.photos/1200/900?random=414"
        ],
        "tags": [
            "Python",
            "NLP",
            "Reporting",
            "Analytics"
        ],
        "color": "red",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "FeedbackPro",
                "text": "Valuable insights from customer feedback."
            }
        ]
    },
    {
        "title": "ExpenseTrack Corporate Tool",
        "description": "A VBA-based tool for tracking and categorizing corporate expenses, with automated reporting and budget alerts.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=414",
            "https://picsum.photos/1200/900?random=415"
        ],
        "tags": [
            "VBA",
            "Excel",
            "Finance",
            "Reporting"
        ],
        "color": "purple",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Corporate Finance Ltd.",
                "text": "Simplified expense tracking for our team."
            }
        ]
    },
    {
        "title": "SocialMedia Sentiment Tracker",
        "description": "A tool for scraping and analyzing social media sentiment, with real-time dashboards and trend reporting.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=415",
            "https://picsum.photos/1200/900?random=416"
        ],
        "tags": [
            "Python",
            "Scraping",
            "NLP",
            "Dashboard"
        ],
        "color": "green",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "BrandMonitor Inc.",
                "text": "Enhanced our social media strategy."
            }
        ]
    },
    {
        "title": "TaskAutomate Workflow Manager",
        "description": "A Python-based workflow automation tool for managing repetitive tasks, with integration to project management systems.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=416",
            "https://picsum.photos/1200/900?random=417"
        ],
        "tags": [
            "Python",
            "Automation",
            "Workflow",
            "Integration"
        ],
        "color": "orange",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "Workflow Solutions",
                "text": "Automated our routine tasks effectively."
            }
        ]
    },
    {
        "title": "MarketTrend Analyzer",
        "description": "A tool for scraping and analyzing market trends from multiple sources, with automated visualization in Excel dashboards.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=417",
            "https://picsum.photos/1200/900?random=418"
        ],
        "tags": [
            "Python",
            "Scraping",
            "Excel",
            "Analytics"
        ],
        "color": "purple",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "TrendWatch Co.",
                "text": "Provided clear market trend insights."
            }
        ]
    },
    {
        "title": "EmployeeEngage Survey Tool",
        "description": "A Flask-based tool for conducting employee engagement surveys, with automated analysis and reporting features.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
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
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "HR Analytics Ltd.",
                "text": "Improved our employee engagement insights."
            }
        ]
    },
    {
        "title": "DataClean Automation Suite",
        "description": "A Python and VBA-based suite for automating data cleaning, validation, and structuring for large datasets.",
        "videoUrl": "https://www.youtube.com/embed/3CIxz9h2wHA",
        "images": [
            "https://picsum.photos/1200/900?random=419",
            "https://picsum.photos/1200/900?random=420"
        ],
        "tags": [
            "Python",
            "VBA",
            "Data Cleaning",
            "Automation"
        ],
        "color": "yellow",
        "majorCategory": "Data Automation",
        "market": "Upwork",
        "comments": [
            {
                "client": "DataPro Solutions",
                "text": "Streamlined our data preparation process."
            }
        ]
    }
]

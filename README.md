<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    
</head>

<body>
    <h1>Employee Management System</h1>
    <p>Welcome to the Employee Management System built with Django and Chart.js! This web application is designed to streamline employee management, making it easy for administrators to handle employee and department information, assign projects, and track task distribution efficiently. It also provides a user-friendly interface for employees to manage their daily tasks and visualize their performance using informative charts.</p>
    <h2>Features</h2>
    <h3>Admin Panel</h3>
    <ol>
        <li><strong>Authentication</strong>: Utilizes Django's built-in authentication system for secure admin login and registration via email.</li>
        <li><strong>Employee Management</strong>:
            <ul>
                <li>Add new employees to the system.</li>
                <li>Delete existing employees.</li>
                <li>Assign departments to employees.</li>
                <li>Assign projects to employees.</li>
            </ul>
        </li>
        <li><strong>Department Management</strong>:
            <ul>
                <li>Add new departments.</li>
                <li>Delete departments as needed.</li>
            </ul>
        </li>
        <li><strong>Project Management</strong>:
            <ul>
                <li>Assign projects to employees, making project allocation straightforward.</li>
            </ul>
        </li>
        <li><strong>Employee Details</strong>:
            <ul>
                <li>Admins can add employee details, including personal information and email.</li>
                <li>Upon adding an employee, an automated email is sent to the employee containing login details and a login link for accessing their panel.</li>
            </ul>
        </li>
    </ol>
    <h3>Employee Panel</h3>
    <ol>
        <li><strong>Personal Details</strong>: Employees can view and update their personal information from their dashboard.</li>
        <li><strong>Daily Task Management</strong>: Employees can add and manage their daily tasks, providing a simple way to keep track of their work.</li>
        <li><strong>Task Analytics</strong>:
            <ul>
                <li>Daily tasks are automatically transformed into bar and pie charts using Chart.js, offering a visual representation of task distribution over time.</li>
                <li>Employees can access these charts from their dashboard to monitor their performance and productivity.</li>
            </ul>
        </li>
    </ol>
    <h3>Admin Task Analysis</h3>
    <ol>
        <li><strong>Task Distribution</strong>: Admins have the ability to view task distribution across employees, enabling them to assess overall productivity and workload allocation within the organization.</li>
    </ol>
    <h2>Usage</h2>
    <p>To get started with this Employee Management Web App, follow these steps:</p>
    <ol>
        <li>Clone this repository to your local machine.</li>
        <li>Set up a virtual environment and install the required dependencies by running:
            <pre>pip install -r requirements.txt</pre>
        </li>
        <li>Configure your database settings in the <code>settings.py</code> file.</li>
        <li>Run migrations to set up the database:
            <pre>python manage.py migrate</pre>
        </li>
        <li>Create an admin account using the following command and follow the prompts:
            <pre>python manage.py createsuperuser</pre>
        </li>
        <li>Start the development server:
            <pre>python manage.py runserver</pre>
        </li>
        <li>Access the web app at <a href="http://localhost:8000">http://localhost:8000</a> and log in with the admin account to begin managing employees, departments, and projects.</li>
        <li>Employees can access their personal dashboard by clicking the provided link in their email and use the Employee Panel to manage tasks and view task analytics.</li>
    </ol>
    <h2>Technologies Used</h2>
    <ul>
        <li>Django: A high-level Python web framework.</li>
        <li>Chart.js: A JavaScript library for creating interactive charts and graphs.</li>
    </ul>
   
</body>

</html>

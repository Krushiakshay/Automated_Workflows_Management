Create a separate Landing Page and Home Page for the project.

The Landing Page is a marketing page.
The Home Page is the actual application dashboard.

Do NOT merge them.

Do NOT modify Redux, services, or backend logic.

---

ROUTING STRUCTURE:

"/" → LandingPage  
"/home" → HomePage  

---

LANDING PAGE REQUIREMENTS:

1. Route: "/"
2. No application sidebar or dashboard layout.
3. Marketing-style layout.
4. Includes:
   - Navbar (logo + section links + "View Dashboard" button)
   - Hero Section:
       Title: "Automated Workforce Management"
       Subtitle: "Using Real-Time Analytics"
       Short description from abstract
       Primary button: "Get Started"
       Secondary button: "Project Overview"
   - Feature cards section
   - Problem section
   - Solution section
   - Benefits section
   - Footer
5. Clean enterprise premium design.
6. Fully responsive.

---

IMPORTANT:

When user clicks "Get Started":

- Use React Router navigation
- Use useNavigate() from react-router-dom
- Navigate to "/home"
- Do NOT reload the page
- Do NOT use <a href="">
- Must be client-side navigation

---

HOME PAGE REQUIREMENTS:

1. Route: "/home"
2. This is the actual application dashboard.
3. Should include:
   - App navigation layout
   - Sidebar (if exists)
   - Dashboard components
   - Real application content

---

EXPECTED USER FLOW:

User visits "/"
User sees Landing Page
User clicks "Get Started"
App navigates smoothly to "/home"
Home Page loads with dashboard layout

---

CONSTRAINTS:

- No page refresh
- No breaking existing logic
- No architecture changes
- Keep folder structure clean
- Separate layout wrappers for Landing and Home

Implement this routing and separation cleanly.

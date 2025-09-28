// Energy Club Application JavaScript

// Sample Data
const sampleUsers = [
    {
        email: "backup1@energyclub.com",
        user_id: "BACKUP001",
        password: "backup123",
        role: "backup_member",
        name: "Rahul Sharma",
        join_date: "2024-01-15"
    },
    {
        email: "backup2@energyclub.com", 
        user_id: "BACKUP002",
        password: "backup123",
        role: "backup_member",
        name: "Priya Patel",
        join_date: "2024-01-20"
    },
    {
        email: "backup3@energyclub.com",
        user_id: "BACKUP003", 
        password: "backup123",
        role: "backup_member",
        name: "Amit Kumar",
        join_date: "2024-02-01"
    },
    {
        email: "backup4@energyclub.com",
        user_id: "BACKUP004",
        password: "backup123", 
        role: "backup_member",
        name: "Sneha Singh",
        join_date: "2024-02-10"
    },
    {
        email: "council1@energyclub.com",
        user_id: "COUNCIL001",
        password: "council123",
        role: "council_member",
        name: "Arjun Mehta",
        join_date: "2024-03-01"
    },
    {
        email: "council2@energyclub.com",
        user_id: "COUNCIL002", 
        password: "council123",
        role: "council_member",
        name: "Kavya Reddy",
        join_date: "2024-03-05"
    },
    {
        email: "council3@energyclub.com",
        user_id: "COUNCIL003",
        password: "council123",
        role: "council_member",
        name: "Vikram Singh",
        join_date: "2024-03-10"
    },
    {
        email: "council4@energyclub.com",
        user_id: "COUNCIL004",
        password: "council123",
        role: "council_member",
        name: "Anita Sharma",
        join_date: "2024-03-15"
    },
    {
        email: "club1@energyclub.com",
        user_id: "CLUB001",
        password: "club123",
        role: "club_member", 
        name: "Rohan Gupta",
        join_date: "2024-04-01"
    },
    {
        email: "club2@energyclub.com",
        user_id: "CLUB002",
        password: "club123",
        role: "club_member",
        name: "Ananya Jain",
        join_date: "2024-04-10"
    },
    {
        email: "club3@energyclub.com",
        user_id: "CLUB003",
        password: "club123",
        role: "club_member",
        name: "Karan Mishra",
        join_date: "2024-04-15"
    },
    {
        email: "club4@energyclub.com",
        user_id: "CLUB004",
        password: "club123",
        role: "club_member",
        name: "Isha Verma",
        join_date: "2024-04-20"
    }
];

let sampleEvents = [
    {
        id: 1,
        title: "Solar Panel Workshop",
        date: "2025-10-15",
        time: "10:00",
        description: "Learn about solar panel installation and maintenance techniques. This hands-on workshop will cover practical aspects of solar technology.",
        location: "Energy Lab, Building A"
    },
    {
        id: 2, 
        title: "Wind Energy Seminar",
        date: "2025-10-22",
        time: "14:00", 
        description: "Understanding wind turbine technology and applications. Industry experts will share insights on wind energy developments.",
        location: "Auditorium Hall"
    },
    {
        id: 3,
        title: "Clean Energy Competition",
        date: "2025-11-05",
        time: "09:00",
        description: "Inter-college competition on renewable energy projects. Students will present innovative clean energy solutions.", 
        location: "Main Campus Ground"
    },
    {
        id: 4,
        title: "Sustainability Fair",
        date: "2025-11-12",
        time: "11:00",
        description: "Annual sustainability fair showcasing eco-friendly technologies and green innovations from local companies.",
        location: "Exhibition Center"
    },
    {
        id: 5,
        title: "Energy Efficiency Workshop",
        date: "2025-11-20",
        time: "15:30",
        description: "Learn practical tips for energy conservation at home and workplace. Interactive session with energy audit demonstrations.",
        location: "Conference Room B"
    }
];

let sampleQuiz = [
    {
        id: 1,
        question: "Which renewable energy source is most widely used globally?",
        options: ["Solar", "Wind", "Hydroelectric", "Geothermal"],
        correct_answer: 2
    },
    {
        id: 2,
        question: "What is the unit of electrical power?",
        options: ["Volt", "Ampere", "Watt", "Ohm"],
        correct_answer: 2
    },
    {
        id: 3,
        question: "Which gas is primarily responsible for the greenhouse effect?", 
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct_answer: 2
    },
    {
        id: 4,
        question: "What percentage of sunlight can modern solar panels convert to electricity?",
        options: ["10-15%", "20-25%", "30-35%", "40-45%"],
        correct_answer: 1
    },
    {
        id: 5,
        question: "Which country leads the world in wind energy production?",
        options: ["United States", "Germany", "China", "Denmark"],
        correct_answer: 2
    },
    {
        id: 6,
        question: "What does 'kWh' stand for?",
        options: ["Kilowatt-hour", "Kilowatt-hertz", "Kilo-watt-heat", "Kinetic-watt-hour"],
        correct_answer: 0
    },
    {
        id: 7,
        question: "Which is NOT a fossil fuel?",
        options: ["Coal", "Natural Gas", "Uranium", "Petroleum"],
        correct_answer: 2
    },
    {
        id: 8,
        question: "What is the main advantage of LED bulbs over incandescent bulbs?",
        options: ["Brighter light", "Lower cost", "Energy efficiency", "Better color"],
        correct_answer: 2
    },
    {
        id: 9,
        question: "Geothermal energy comes from:",
        options: ["Solar radiation", "Earth's core heat", "Wind patterns", "Ocean currents"],
        correct_answer: 1
    },
    {
        id: 10,
        question: "What is the primary component of biogas?",
        options: ["Carbon Dioxide", "Hydrogen", "Methane", "Nitrogen"],
        correct_answer: 2
    }
];

let pageContent = {
    home: "Welcome to The Energy Club - a community dedicated to promoting renewable energy and sustainability. Join us in our mission to create a cleaner, greener future through innovation and education.",
    about: "The Energy Club was founded in 2024 with the vision of advancing renewable energy technologies and educating students about sustainable practices. Our members work on various projects related to solar, wind, and other clean energy sources.",
    join: "Interested in joining The Energy Club? We welcome students passionate about renewable energy and sustainability. Fill out our membership form and become part of our growing community of environmental enthusiasts."
};

// Application State
let currentUser = null;
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = [];
let currentEditingContent = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadEvents();
    loadPageContent();
    updateAuthUI();
    showPage('home');
}

// Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Special handling for dashboard
        if (pageId === 'dashboard') {
            if (!currentUser || currentUser.role === 'student_member') {
                showPage('home');
                alert('Access denied. Please login with appropriate credentials.');
                return;
            }
            loadDashboard();
        }
        
        // Update page-specific controls
        updatePageControls(pageId);
    }
}

function updatePageControls(pageId) {
    // Hide all management buttons
    document.getElementById('add-event-btn').classList.add('hidden');
    document.getElementById('manage-quiz-btn').classList.add('hidden');
    document.getElementById('edit-about-btn').classList.add('hidden');
    document.getElementById('edit-join-btn').classList.add('hidden');
    
    // Show appropriate buttons based on user role and page
    if (currentUser && currentUser.role === 'council_member') {
        if (pageId === 'events') {
            document.getElementById('add-event-btn').classList.remove('hidden');
        } else if (pageId === 'quiz') {
            document.getElementById('manage-quiz-btn').classList.remove('hidden');
        } else if (pageId === 'about') {
            document.getElementById('edit-about-btn').classList.remove('hidden');
        } else if (pageId === 'join') {
            document.getElementById('edit-join-btn').classList.remove('hidden');
        }
    }
}

// Authentication
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const userId = document.getElementById('login-userid').value;
    const password = document.getElementById('login-password').value;
    
    const user = sampleUsers.find(u => 
        u.email === email && 
        u.user_id === userId && 
        u.password === password
    );
    
    if (user) {
        currentUser = user;
        updateAuthUI();
        hideLoginModal();
        showPage('dashboard');
        
        // Reset form
        document.getElementById('login-email').value = '';
        document.getElementById('login-userid').value = '';
        document.getElementById('login-password').value = '';
    } else {
        alert('Invalid credentials. Please check your email, user ID, and password.');
    }
}

function logout() {
    currentUser = null;
    updateAuthUI();
    showPage('home');
}

function updateAuthUI() {
    const loggedOut = document.getElementById('logged-out');
    const loggedIn = document.getElementById('logged-in');
    const dashboardBtn = document.getElementById('dashboard-btn');
    
    if (currentUser) {
        loggedOut.classList.add('hidden');
        loggedIn.classList.remove('hidden');
        document.getElementById('current-user-name').textContent = currentUser.name;
        
        // Show/hide dashboard button based on role
        if (currentUser.role === 'student_member') {
            dashboardBtn.classList.add('hidden');
        } else {
            dashboardBtn.classList.remove('hidden');
        }
    } else {
        loggedOut.classList.remove('hidden');
        loggedIn.classList.add('hidden');
    }
}

// Dashboard
function loadDashboard() {
    const userName = document.getElementById('dashboard-user-name');
    const userRole = document.getElementById('dashboard-user-role');
    const memberManagement = document.getElementById('member-management');
    const contentManagement = document.getElementById('content-management');
    
    userName.textContent = currentUser.name;
    userRole.textContent = getRoleDisplayName(currentUser.role);
    
    // Show appropriate management options
    memberManagement.classList.add('hidden');
    contentManagement.classList.add('hidden');
    
    if (currentUser.role === 'backup_member') {
        memberManagement.classList.remove('hidden');
    } else if (currentUser.role === 'council_member') {
        memberManagement.classList.remove('hidden');
        contentManagement.classList.remove('hidden');
    }
}

function getRoleDisplayName(role) {
    const roleNames = {
        'student_member': 'Student Member',
        'club_member': 'Club Member',
        'council_member': 'Council Member',
        'backup_member': 'Backup Member'
    };
    return roleNames[role] || role;
}

// Events Management
function loadEvents() {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';
    
    sampleEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventsList.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    card.innerHTML = `
        <div class="event-date">${formattedDate} • ${event.time}</div>
        <h3 class="event-title">${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-location">📍 ${event.location}</div>
        ${currentUser && currentUser.role === 'council_member' ? 
            `<div style="margin-top: 16px;">
                <button class="btn btn--outline btn--sm" onclick="deleteEvent(${event.id})">Delete</button>
            </div>` : ''
        }
    `;
    
    return card;
}

function addEvent(event) {
    event.preventDefault();
    
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;
    
    const newEvent = {
        id: Date.now(),
        title,
        date,
        time,
        location,
        description
    };
    
    sampleEvents.push(newEvent);
    loadEvents();
    hideAddEventModal();
    
    // Reset form
    event.target.reset();
}

function deleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        sampleEvents = sampleEvents.filter(event => event.id !== eventId);
        loadEvents();
    }
}

// Quiz Management
function startQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    userAnswers = [];
    
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-questions').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    document.getElementById('total-questions').textContent = sampleQuiz.length;
    loadCurrentQuestion();
}

function loadCurrentQuestion() {
    const question = sampleQuiz[currentQuizIndex];
    
    document.getElementById('question-number').textContent = currentQuizIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectOption(index, button);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('next-btn').textContent = 
        currentQuizIndex === sampleQuiz.length - 1 ? 'Finish Quiz' : 'Next Question';
}

function selectOption(optionIndex, buttonElement) {
    // Remove previous selection
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    buttonElement.classList.add('selected');
    userAnswers[currentQuizIndex] = optionIndex;
}

function nextQuestion() {
    if (userAnswers[currentQuizIndex] === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    // Check if answer is correct
    if (userAnswers[currentQuizIndex] === sampleQuiz[currentQuizIndex].correct_answer) {
        quizScore++;
    }
    
    currentQuizIndex++;
    
    if (currentQuizIndex < sampleQuiz.length) {
        loadCurrentQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-questions').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    const percentage = Math.round((quizScore / sampleQuiz.length) * 100);
    document.getElementById('final-score').textContent = `${quizScore}/${sampleQuiz.length} (${percentage}%)`;
}

function resetQuiz() {
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');
}

function showQuizManagement() {
    alert('Quiz management feature: Here you can add, edit, or delete quiz questions. This would open a detailed management interface.');
}

// Content Management
function loadPageContent() {
    document.getElementById('home-content').textContent = pageContent.home;
    document.getElementById('about-content').textContent = pageContent.about;
    document.getElementById('join-content').textContent = pageContent.join;
}

function editContent(contentType) {
    currentEditingContent = contentType;
    const modal = document.getElementById('content-edit-modal');
    const editor = document.getElementById('content-editor');
    
    editor.value = pageContent[contentType];
    modal.classList.remove('hidden');
}

function saveContent(event) {
    event.preventDefault();
    
    const newContent = document.getElementById('content-editor').value;
    pageContent[currentEditingContent] = newContent;
    
    // Update the display
    document.getElementById(currentEditingContent + '-content').textContent = newContent;
    
    hideContentEditModal();
}

// Member Management
function showMemberManagement() {
    const modal = document.getElementById('member-modal');
    const memberList = document.getElementById('member-list');
    
    loadMemberList(memberList);
    modal.classList.remove('hidden');
}

function loadMemberList(container) {
    container.innerHTML = '';
    
    // Filter members based on current user's role
    let allowedMembers = [];
    if (currentUser.role === 'backup_member') {
        allowedMembers = sampleUsers.filter(user => user.role === 'council_member');
    } else if (currentUser.role === 'council_member') {
        allowedMembers = sampleUsers.filter(user => user.role !== 'backup_member');
    }
    
    allowedMembers.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = 'member-item';
        
        memberItem.innerHTML = `
            <div class="member-info">
                <h4>${member.name}</h4>
                <p>${member.email} • ${getRoleDisplayName(member.role)}</p>
            </div>
            <div class="member-actions">
                <button class="btn btn--outline btn--sm" onclick="deleteMember('${member.user_id}')">Remove</button>
            </div>
        `;
        
        container.appendChild(memberItem);
    });
}

function showAddMemberForm() {
    const modal = document.getElementById('add-member-modal');
    const roleSelect = document.getElementById('member-role');
    
    // Set available roles based on current user
    roleSelect.innerHTML = '<option value="">Select Role</option>';
    
    if (currentUser.role === 'backup_member') {
        roleSelect.innerHTML += '<option value="council_member">Council Member</option>';
    } else if (currentUser.role === 'council_member') {
        roleSelect.innerHTML += `
            <option value="student_member">Student Member</option>
            <option value="club_member">Club Member</option>
            <option value="council_member">Council Member</option>
        `;
    }
    
    modal.classList.remove('hidden');
}

function addMember(event) {
    event.preventDefault();
    
    const name = document.getElementById('member-name').value;
    const email = document.getElementById('member-email').value;
    const userId = document.getElementById('member-userid').value;
    const password = document.getElementById('member-password').value;
    const role = document.getElementById('member-role').value;
    
    // Check if user already exists
    const existingUser = sampleUsers.find(u => u.email === email || u.user_id === userId);
    if (existingUser) {
        alert('A user with this email or User ID already exists.');
        return;
    }
    
    const newMember = {
        name,
        email,
        user_id: userId,
        password,
        role,
        join_date: new Date().toISOString().split('T')[0]
    };
    
    sampleUsers.push(newMember);
    hideAddMemberModal();
    
    // Refresh member list if modal is open
    const memberList = document.getElementById('member-list');
    if (!document.getElementById('member-modal').classList.contains('hidden')) {
        loadMemberList(memberList);
    }
    
    // Reset form
    event.target.reset();
}

function deleteMember(userId) {
    if (confirm('Are you sure you want to remove this member?')) {
        const index = sampleUsers.findIndex(user => user.user_id === userId);
        if (index > -1) {
            sampleUsers.splice(index, 1);
            
            // Refresh member list
            const memberList = document.getElementById('member-list');
            loadMemberList(memberList);
        }
    }
}

// Join Form
function submitJoinRequest(event) {
    event.preventDefault();
    alert('Thank you for your interest! Your application has been submitted and will be reviewed by our council members.');
    event.target.reset();
}

// Modal Controls
function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function hideLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

function showAddEventModal() {
    document.getElementById('add-event-modal').classList.remove('hidden');
}

function hideAddEventModal() {
    document.getElementById('add-event-modal').classList.add('hidden');
}

function hideContentEditModal() {
    document.getElementById('content-edit-modal').classList.add('hidden');
    currentEditingContent = null;
}

function hideMemberModal() {
    document.getElementById('member-modal').classList.add('hidden');
}

function hideAddMemberModal() {
    document.getElementById('add-member-modal').classList.add('hidden');
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        if (event.target.id === 'login-modal') hideLoginModal();
        if (event.target.id === 'add-event-modal') hideAddEventModal();
        if (event.target.id === 'content-edit-modal') hideContentEditModal();
        if (event.target.id === 'member-modal') hideMemberModal();
        if (event.target.id === 'add-member-modal') hideAddMemberModal();
    }
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideLoginModal();
        hideAddEventModal();
        hideContentEditModal();
        hideMemberModal();
        hideAddMemberModal();
    }
});
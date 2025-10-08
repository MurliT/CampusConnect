// Sample data for demonstration
const clubs = [{
    id: 'C1',
    name: 'Computer Science Club',
    category: 'technology',
    description: 'Exploring the world of programming and technology',
    president: 'S1001',
    members: ['S1001', 'S1002', 'S1003', 'S1004', 'S1005', 'S1006', 'S1007'],
    createdDate: new Date('2023-01-15')
}, {
    id: 'C2',
    name: 'Basketball Team',
    category: 'sports',
    description: 'Competitive basketball team representing the university',
    president: 'S1008',
    members: ['S1008', 'S1009', 'S1010', 'S1011', 'S1012'],
    createdDate: new Date('2023-02-20')
}, {
    id: 'C3',
    name: 'Debate Society',
    category: 'academic',
    description: 'Developing public speaking and critical thinking skills',
    president: 'S1013',
    members: ['S1013', 'S1014', 'S1015', 'S1016'],
    createdDate: new Date('2023-01-10')
}];

const students = [{
    id: 'S1001',
    name: 'Alex Smith',
    major: 'Computer Science',
    year: 'Sophomore',
    clubs: ['C1']
}, {
    id: 'S1002',
    name: 'Jordan Johnson',
    major: 'Computer Science',
    year: 'Junior',
    clubs: ['C1']
}, {
    id: 'S1003',
    name: 'Taylor Williams',
    major: 'Computer Science',
    year: 'Senior',
    clubs: ['C1']
}, {
    id: 'S1004',
    name: 'Morgan Brown',
    major: 'Computer Science',
    year: 'Freshman',
    clubs: ['C1']
}, {
    id: 'S1005',
    name: 'Casey Jones',
    major: 'Computer Science',
    year: 'Sophomore',
    clubs: ['C1']
}, {
    id: 'S1006',
    name: 'Riley Garcia',
    major: 'Computer Science',
    year: 'Junior',
    clubs: ['C1']
}, {
    id: 'S1007',
    name: 'Avery Miller',
    major: 'Computer Science',
    year: 'Senior',
    clubs: ['C1']
}, {
    id: 'S1008',
    name: 'Quinn Davis',
    major: 'Business',
    year: 'Sophomore',
    clubs: ['C2']
}, {
    id: 'S1009',
    name: 'Peyton Rodriguez',
    major: 'Business',
    year: 'Junior',
    clubs: ['C2']
}, {
    id: 'S1010',
    name: 'Dakota Martinez',
    major: 'Business',
    year: 'Senior',
    clubs: ['C2']
}, {
    id: 'S1011',
    name: 'Alex Johnson',
    major: 'Business',
    year: 'Freshman',
    clubs: ['C2']
}, {
    id: 'S1012',
    name: 'Jordan Williams',
    major: 'Business',
    year: 'Sophomore',
    clubs: ['C2']
}, {
    id: 'S1013',
    name: 'Taylor Brown',
    major: 'Psychology',
    year: 'Junior',
    clubs: ['C3']
}, {
    id: 'S1014',
    name: 'Morgan Jones',
    major: 'Psychology',
    year: 'Senior',
    clubs: ['C3']
}, {
    id: 'S1015',
    name: 'Casey Garcia',
    major: 'Psychology',
    year: 'Freshman',
    clubs: ['C3']
}, {
    id: 'S1016',
    name: 'Riley Miller',
    major: 'Psychology',
    year: 'Sophomore',
    clubs: ['C3']
}];

const interviews = [{
    id: 'I1001',
    studentId: 'S1017',
    studentName: 'Jamie Wilson',
    clubId: 'C1',
    clubName: 'Computer Science Club',
    date: new Date('2023-10-15T10:00:00'),
    status: 'scheduled',
    feedback: ''
}, {
    id: 'I1002',
    studentId: 'S1018',
    studentName: 'Sam Taylor',
    clubId: 'C2',
    clubName: 'Basketball Team',
    date: new Date('2023-10-16T14:00:00'),
    status: 'scheduled',
    feedback: ''
}, {
    id: 'I1003',
    studentId: 'S1019',
    studentName: 'Jordan Lee',
    clubId: 'C3',
    clubName: 'Debate Society',
    date: new Date('2023-10-17T11:00:00'),
    status: 'completed',
    feedback: 'Good communication skills'
}, {
    id: 'I1004',
    studentId: 'S1020',
    studentName: 'Alex Kim',
    clubId: 'C1',
    clubName: 'Computer Science Club',
    date: new Date('2023-10-18T15:00:00'),
    status: 'passed',
    feedback: 'Excellent technical knowledge'
}, {
    id: 'I1005',
    studentId: 'S1021',
    studentName: 'Taylor Chen',
    clubId: 'C2',
    clubName: 'Basketball Team',
    date: new Date('2023-10-19T13:00:00'),
    status: 'failed',
    feedback: 'Needs improvement in teamwork'
}];

const projects = [{
    id: 'P1',
    name: 'Campus App Development',
    clubId: 'C1',
    description: 'Developing a mobile app for campus navigation and event management',
    status: 'active',
    progress: 75,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-06-15'),
    members: ['S1001', 'S1002', 'S1003']
}, {
    id: 'P2',
    name: 'Charity Basketball Tournament',
    clubId: 'C2',
    description: 'Organizing a tournament to raise funds for local charity organizations',
    status: 'active',
    progress: 40,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-05-01'),
    members: ['S1008', 'S1009', 'S1010']
}, {
    id: 'P3',
    name: 'Debate Competition',
    clubId: 'C3',
    description: 'Hosting an inter-collegiate debate competition',
    status: 'completed',
    progress: 100,
    startDate: new Date('2024-01-10'),
    endDate: new Date('2024-03-15'),
    members: ['S1013', 'S1014', 'S1015']
}];

// Main Application Controller
class CampusConnectApp {
    constructor() {
        this.currentSection = 'dashboard';
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.currentRole = 'student';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupSetOperations();
        this.loadClubs();
        this.loadInterviews();
        this.loadProjects();
        this.loadAnalytics();
    }

    setupEventListeners() {
        // Role switching
        const roleSwitch = document.getElementById('roleSwitch');
        if (roleSwitch) {
            roleSwitch.addEventListener('change', (e) => {
                this.switchRole(e.target.value);
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection(link.getAttribute('href').substring(1));
            });
        });

        // Form submissions
        const registrationForm = document.getElementById('registrationForm');
        if (registrationForm) {
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }

        const addClubForm = document.getElementById('addClubForm');
        if (addClubForm) {
            addClubForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddClub();
            });
        }

        const scheduleInterviewForm = document.getElementById('scheduleInterviewForm');
        if (scheduleInterviewForm) {
            scheduleInterviewForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleScheduleInterview();
            });
        }

        const addProjectForm = document.getElementById('addProjectForm');
        if (addProjectForm) {
            addProjectForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddProject();
            });
        }

        // Project filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterProjects(e.target.dataset.filter);
            });
        });
    }

    setupNavigation() {
        // Highlight active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${this.currentSection}`) {
                link.classList.add('active');
            }
        });

        // Show active section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            if (section.id === this.currentSection) {
                section.classList.add('active');
            }
        });
    }

    setupSetOperations() {
        // Set up operation tabs
        document.querySelectorAll('.operation-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.operation-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.updateOperationSymbol();
            });
        });

        // Update operation symbol when clubs are selected
        document.getElementById('clubA').addEventListener('change', () => this.updateOperationSymbol());
        document.getElementById('clubB').addEventListener('change', () => this.updateOperationSymbol());
    }

    updateOperationSymbol() {
        const activeTab = document.querySelector('.operation-tab.active');
        const operation = activeTab.dataset.operation;
        let symbol = '∩';

        switch (operation) {
            case 'union':
                symbol = '∪';
                break;
            case 'difference':
                symbol = '-';
                break;
            case 'symmetric':
                symbol = 'Δ';
                break;
        }

        document.getElementById('operationSymbol').textContent = symbol;
    }

    showSection(sectionId) {
        this.currentSection = sectionId;
        this.setupNavigation();

        // Load section-specific data
        switch (sectionId) {
            case 'clubs':
                this.loadClubs();
                break;
            case 'interviews':
                this.loadInterviews();
                break;
            case 'projects':
                this.loadProjects();
                break;
            case 'analytics':
                this.loadAnalytics();
                break;
        }
    }

    switchRole(role) {
        const userName = document.getElementById('userName');
        const userRole = document.getElementById('userRole');

        switch (role) {
            case 'student':
                userName.textContent = 'John Doe';
                userRole.textContent = 'Student';
                break;
            case 'teacher':
                userName.textContent = 'Dr. Jane Smith';
                userRole.textContent = 'Teacher';
                break;
            case 'president':
                userName.textContent = 'Alex Johnson';
                userRole.textContent = 'Club President';
                break;
        }

        this.currentRole = role;
        this.showNotification(`Role changed to ${role}`, 'info');
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyTheme();
    }

    applyTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    loadClubs() {
            const grid = document.getElementById('clubsGrid');
            if (!grid) return;

            grid.innerHTML = clubs.map(club => {
                        const members = club.members.length;
                        const clubProjects = projects.filter(p => p.clubId === club.id);
                        const activeProjects = clubProjects.filter(p => p.status === 'active').length;

                        return `
                <div class="club-card">
                    <div class="club-header">
                        <h3 class="club-name">${club.name}</h3>
                        <span class="club-category">${club.category}</span>
                    </div>
                    <div class="club-body">
                        <p>${club.description}</p>
                        <div class="club-stats">
                            <div class="club-stat">
                                <span class="stat-value">${members}</span>
                                <span class="stat-label">Members</span>
                            </div>
                            <div class="club-stat">
                                <span class="stat-value">${clubProjects.length}</span>
                                <span class="stat-label">Projects</span>
                            </div>
                            <div class="club-stat">
                                <span class="stat-value">${activeProjects}</span>
                                <span class="stat-label">Active</span>
                            </div>
                        </div>
                        <div class="club-actions">
                            <button class="btn-primary" onclick="viewClubMembers('${club.id}')">
                                View Members
                            </button>
                            ${this.currentRole === 'student' ? `
                                <button class="btn-secondary" onclick="joinClub('${club.id}')">
                                    Join Club
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    loadInterviews() {
        const container = document.getElementById('interviewsList');
        if (!container) return;
        
        const scheduledInterviews = document.getElementById('scheduledInterviews');
        const completedInterviews = document.getElementById('completedInterviews');
        const passedInterviews = document.getElementById('passedInterviews');
        
        if (scheduledInterviews) scheduledInterviews.textContent = interviews.filter(i => i.status === 'scheduled').length;
        if (completedInterviews) completedInterviews.textContent = interviews.filter(i => i.status === 'completed' || i.status === 'passed' || i.status === 'failed').length;
        if (passedInterviews) passedInterviews.textContent = interviews.filter(i => i.status === 'passed').length;

        container.innerHTML = interviews.map(interview => {
            const statusClass = {
                'scheduled': 'warning',
                'completed': 'info',
                'passed': 'success',
                'failed': 'danger'
            }[interview.status];

            return `
                <div class="interview-item">
                    <div class="interview-info">
                        <h4>${interview.studentName} - ${interview.clubName}</h4>
                        <p>${interview.date.toLocaleDateString()} • ${interview.date.toLocaleTimeString()}</p>
                        ${interview.feedback ? `<p><small>Feedback: ${interview.feedback}</small></p>` : ''}
                    </div>
                    <div class="interview-status ${statusClass}">
                        ${interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                    </div>
                    ${this.currentRole !== 'student' && interview.status === 'scheduled' ? `
                        <div class="interview-actions">
                            <button class="btn-primary" onclick="updateInterviewStatus('${interview.id}', 'passed')">Pass</button>
                            <button class="btn-secondary" onclick="updateInterviewStatus('${interview.id}', 'failed')">Fail</button>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    loadProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = projects.map(project => {
            const club = clubs.find(c => c.id === project.clubId);
            const progressClass = project.progress < 50 ? 'danger' : project.progress < 80 ? 'warning' : 'success';

            return `
                <div class="project-card">
                    <div class="project-header">
                        <h3>${project.name}</h3>
                        <span class="project-club">${club?.name}</span>
                    </div>
                    <div class="project-body">
                        <p>${project.description}</p>
                        <div class="project-progress">
                            <div class="progress-bar">
                                <div class="progress-fill ${progressClass}" style="width: ${project.progress}%"></div>
                            </div>
                            <span class="progress-text">${project.progress}% Complete</span>
                        </div>
                        <div class="project-dates">
                            <span>Start: ${project.startDate.toLocaleDateString()}</span>
                            <span>End: ${project.endDate.toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="project-status ${project.status}">
                        ${project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                </div>
            `;
        }).join('');
    }

    filterProjects(filter) {
        let filteredProjects = projects;
        
        if (filter === 'active') {
            filteredProjects = projects.filter(p => p.status === 'active');
        } else if (filter === 'completed') {
            filteredProjects = projects.filter(p => p.status === 'completed');
        }
        
        this.displayFilteredProjects(filteredProjects);
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    displayFilteredProjects(filteredProjects) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = filteredProjects.map(project => {
            const club = clubs.find(c => c.id === project.clubId);
            const progressClass = project.progress < 50 ? 'danger' : project.progress < 80 ? 'warning' : 'success';

            return `
                <div class="project-card">
                    <div class="project-header">
                        <h3>${project.name}</h3>
                        <span class="project-club">${club?.name}</span>
                    </div>
                    <div class="project-body">
                        <p>${project.description}</p>
                        <div class="project-progress">
                            <div class="progress-bar">
                                <div class="progress-fill ${progressClass}" style="width: ${project.progress}%"></div>
                            </div>
                            <span class="progress-text">${project.progress}% Complete</span>
                        </div>
                        <div class="project-dates">
                            <span>Start: ${project.startDate.toLocaleDateString()}</span>
                            <span>End: ${project.endDate.toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="project-status ${project.status}">
                        ${project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                </div>
            `;
        }).join('');
    }

    loadAnalytics() {
        this.loadMetrics();
    }

    loadMetrics() {
        const grid = document.getElementById('metricsGrid');
        if (!grid) return;

        const metrics = clubs.map(club => {
            const clubProjects = projects.filter(p => p.clubId === club.id);
            const activeProjects = clubProjects.filter(p => p.status === 'active').length;
            const completionRate = clubProjects.length > 0 ? 
                (clubProjects.filter(p => p.status === 'completed').length / clubProjects.length) * 100 : 0;

            return {
                clubId: club.id,
                clubName: club.name,
                members: club.members.length,
                projects: clubProjects.length,
                activeProjects: activeProjects,
                completionRate: Math.round(completionRate)
            };
        });

        grid.innerHTML = metrics.map(metric => `
            <div class="metric-card">
                <span class="metric-value">${metric.members}</span>
                <span class="metric-label">${metric.clubName} Members</span>
                <div class="metric-details">
                    <small>Projects: ${metric.projects} (${metric.activeProjects} active)</small><br>
                    <small>Completion: ${metric.completionRate}%</small>
                </div>
            </div>
        `).join('');
    }

    handleRegistration() {
        const userType = document.getElementById('userType').value;
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        
        if (!userType || !name || !email) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }
        
        // In a real app, you would send this data to a server
        this.showNotification(`Successfully registered ${name} as a ${userType}`, 'success');
        closeModal('registrationModal');
        
        // Reset form
        document.getElementById('registrationForm').reset();
        document.querySelectorAll('.user-type-fields').forEach(field => field.style.display = 'none');
    }

    handleAddClub() {
        const clubName = document.getElementById('clubName').value;
        const clubCategory = document.getElementById('clubCategory').value;
        const clubDescription = document.getElementById('clubDescription').value;

        if (!clubName || !clubCategory) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }

        const newClub = {
            id: `C${clubs.length + 1}`,
            name: clubName,
            category: clubCategory,
            description: clubDescription,
            president: '',
            members: [],
            createdDate: new Date()
        };

        clubs.push(newClub);
        this.loadClubs();
        closeModal('addClubModal');
        document.getElementById('addClubForm').reset();
        this.showNotification(`Club "${newClub.name}" created successfully!`, 'success');
    }

    handleScheduleInterview() {
        const studentSelect = document.getElementById('interviewStudent');
        const clubSelect = document.getElementById('interviewClub');
        const dateInput = document.getElementById('interviewDate');
        
        if (!studentSelect.value || !clubSelect.value || !dateInput.value) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }

        const newInterview = {
            id: `I${interviews.length + 1001}`,
            studentId: studentSelect.value,
            studentName: studentSelect.options[studentSelect.selectedIndex].text,
            clubId: clubSelect.value,
            clubName: clubSelect.options[clubSelect.selectedIndex].text,
            date: new Date(dateInput.value),
            status: 'scheduled',
            feedback: ''
        };

        interviews.push(newInterview);
        this.loadInterviews();
        closeModal('scheduleInterviewModal');
        document.getElementById('scheduleInterviewForm').reset();
        this.showNotification(`Interview scheduled for ${newInterview.studentName} with ${newInterview.clubName}`, 'success');
    }

    handleAddProject() {
        const projectName = document.getElementById('projectName').value;
        const projectClub = document.getElementById('projectClub').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const projectStartDate = document.getElementById('projectStartDate').value;
        const projectEndDate = document.getElementById('projectEndDate').value;

        if (!projectName || !projectClub || !projectDescription || !projectStartDate || !projectEndDate) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }

        const newProject = {
            id: `P${projects.length + 1}`,
            name: projectName,
            clubId: projectClub,
            description: projectDescription,
            status: 'active',
            progress: 0,
            startDate: new Date(projectStartDate),
            endDate: new Date(projectEndDate),
            members: []
        };

        projects.push(newProject);
        this.loadProjects();
        closeModal('addProjectModal');
        document.getElementById('addProjectForm').reset();
        this.showNotification(`Project "${newProject.name}" created successfully!`, 'success');
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Set Operations Logic
function performSetOperation() {
    const clubAId = document.getElementById('clubA').value;
    const clubBId = document.getElementById('clubB').value;
    const activeTab = document.querySelector('.operation-tab.active');
    const operation = activeTab.dataset.operation;
    
    if (!clubAId || !clubBId) {
        app.showNotification('Please select both clubs', 'error');
        return;
    }
    
    const clubA = clubs.find(c => c.id === clubAId);
    const clubB = clubs.find(c => c.id === clubBId);
    
    if (!clubA || !clubB) {
        app.showNotification('Invalid club selection', 'error');
        return;
    }
    
    const setA = new Set(clubA.members);
    const setB = new Set(clubB.members);
    let resultSet;
    
    switch(operation) {
        case 'intersection':
            resultSet = new Set([...setA].filter(x => setB.has(x)));
            break;
        case 'union':
            resultSet = new Set([...setA, ...setB]);
            break;
        case 'difference':
            resultSet = new Set([...setA].filter(x => !setB.has(x)));
            break;
        case 'symmetric':
            resultSet = new Set([...setA].filter(x => !setB.has(x)).concat([...setB].filter(x => !setA.has(x))));
            break;
    }
    
    displayResult(resultSet, clubA, clubB, operation);
}

function displayResult(resultSet, clubA, clubB, operation) {
    const resultCount = document.getElementById('resultCount');
    const resultStudents = document.getElementById('resultStudents');
    
    resultCount.textContent = resultSet.size;
    
    let html = '';
    resultSet.forEach(studentId => {
        const student = students.find(s => s.id === studentId);
        if (student) {
            html += `
                <div class="result-student">
                    <span>${student.name}</span>
                    <span>${student.major}</span>
                </div>
            `;
        }
    });
    
    if (resultSet.size === 0) {
        html = '<div class="result-student"><span>No students found</span></div>';
    }
    
    resultStudents.innerHTML = html;
}

// Set Operations Functions for Dashboard
function performUnionOperation() {
    const result = new Set();
    clubs.forEach(club => {
        club.members.forEach(memberId => {
            result.add(memberId);
        });
    });
    
    const resultElement = document.getElementById('unionResult');
    resultElement.innerHTML = `
        <div class="operation-result-content">
            <h4>Union of All Club Members</h4>
            <p>Total unique members: ${result.size}</p>
            <div class="student-list-small">
                ${Array.from(result).slice(0, 5).map(memberId => {
                    const student = students.find(s => s.id === memberId);
                    return student ? `
                        <div class="student-item">
                            <span>${student.name}</span>
                            <small>${student.major}</small>
                        </div>
                    ` : '';
                }).join('')}
                ${result.size > 5 ? `<div class="more-items">+ ${result.size - 5} more members</div>` : ''}
            </div>
        </div>
    `;
}

function performIntersectionOperation() {
    const memberCount = new Map();
    
    clubs.forEach(club => {
        club.members.forEach(memberId => {
            memberCount.set(memberId, (memberCount.get(memberId) || 0) + 1);
        });
    });
    
    const multiClubMembers = Array.from(memberCount.entries())
        .filter(([_, count]) => count > 1)
        .map(([memberId]) => students.find(s => s.id === memberId))
        .filter(student => student !== undefined);
        
    const resultElement = document.getElementById('intersectionResult');
    resultElement.innerHTML = `
        <div class="operation-result-content">
            <h4>Intersection of Club Members</h4>
            <p>Students in multiple clubs: ${multiClubMembers.length}</p>
            <div class="student-list-small">
                ${multiClubMembers.slice(0, 5).map(student => `
                    <div class="student-item">
                        <span>${student.name}</span>
                        <small>Clubs: ${student.clubs.length}</small>
                    </div>
                `).join('')}
                ${multiClubMembers.length > 5 ? `<div class="more-items">+ ${multiClubMembers.length - 5} more members</div>` : ''}
            </div>
        </div>
    `;
}

function performDifferenceOperation() {
    if (clubs.length < 2) {
        const resultElement = document.getElementById('differenceResult');
        resultElement.innerHTML = `
            <div class="operation-result-content">
                <h4>Difference Operation</h4>
                <p>Not enough clubs for comparison</p>
            </div>
        `;
        return;
    }
    
    const csClub = clubs.find(c => c.name.includes('Computer Science'));
    const otherClubs = clubs.filter(c => !c.name.includes('Computer Science'));
    
    if (!csClub) {
        const resultElement = document.getElementById('differenceResult');
        resultElement.innerHTML = `
            <div class="operation-result-content">
                <h4>Difference Operation</h4>
                <p>Computer Science Club not found</p>
            </div>
        `;
        return;
    }
    
    const otherClubMembers = new Set();
    otherClubs.forEach(club => {
        club.members.forEach(memberId => otherClubMembers.add(memberId));
    });
    
    const difference = csClub.members
        .filter(memberId => !otherClubMembers.has(memberId))
        .map(memberId => students.find(s => s.id === memberId))
        .filter(student => student !== undefined);
        
    const resultElement = document.getElementById('differenceResult');
    resultElement.innerHTML = `
        <div class="operation-result-content">
            <h4>Difference Operation</h4>
            <p>CS Club members not in other clubs: ${difference.length}</p>
            <div class="student-list-small">
                ${difference.slice(0, 5).map(student => `
                    <div class="student-item">
                        <span>${student.name}</span>
                        <small>${student.major}</small>
                    </div>
                `).join('')}
                ${difference.length > 5 ? `<div class="more-items">+ ${difference.length - 5} more members</div>` : ''}
            </div>
        </div>
    `;
}

// Modal Functions
function showRegistrationModal() {
    document.getElementById('registrationModal').classList.add('active');
}

function showAddClubModal() {
    document.getElementById('addClubModal').classList.add('active');
}

function showScheduleInterviewModal() {
    const modal = document.getElementById('scheduleInterviewModal');
    const studentSelect = document.getElementById('interviewStudent');
    
    // Populate students without clubs
    studentSelect.innerHTML = '<option value="">Select Student</option>';
    students.filter(s => s.clubs.length === 0).forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = `${student.name} (${student.major})`;
        studentSelect.appendChild(option);
    });
    
    modal.classList.add('active');
}

function showAddProjectModal() {
    const modal = document.getElementById('addProjectModal');
    
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('projectStartDate').value = today;
    
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    document.getElementById('projectEndDate').value = nextMonth.toISOString().split('T')[0];
    
    modal.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function toggleRegistrationFields() {
    const userType = document.getElementById('userType').value;
    
    document.querySelectorAll('.user-type-fields').forEach(field => {
        field.style.display = 'none';
    });
    
    if (userType === 'student') {
        document.getElementById('studentFields').style.display = 'block';
    } else if (userType === 'teacher') {
        document.getElementById('teacherFields').style.display = 'block';
    } else if (userType === 'president') {
        document.getElementById('presidentFields').style.display = 'block';
    }
}

function viewClubMembers(clubId) {
    const club = clubs.find(c => c.id === clubId);
    if (!club) return;

    // In a real app, you would show a modal with club members
    app.showNotification(`Viewing members of ${club.name}`, 'info');
}

function joinClub(clubId) {
    // In a real app, you would add the current user to the club
    app.showNotification('Successfully joined the club!', 'success');
}

function updateInterviewStatus(interviewId, status) {
    const interview = interviews.find(i => i.id === interviewId);
    if (interview) {
        interview.status = status;
        interview.feedback = status === 'passed' ? 'Excellent performance in the interview' : 'Needs improvement in technical skills';
        app.loadInterviews();
        app.showNotification(`Interview marked as ${status}`, 'success');
    }
}

function generateRecommendations() {
    // In a real app, you would generate recommendations based on user data
    app.showNotification('Recommendations generated successfully!', 'success');
}

function generateReport() {
    // In a real app, you would generate and download a report
    app.showNotification('Report generated and downloaded successfully!', 'success');
}

// Initialize the application
const app = new CampusConnectApp();
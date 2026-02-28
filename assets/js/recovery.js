const milestones = [
    { name: "Start of Journey", completed: true },
    { name: "1 Week Milestone", completed: false },
    { name: "1 Month Milestone", completed: false },
    { name: "3 Months Milestone", completed: false },
    { name: "6 Months Milestone", completed: false },
    { name: "1 Year Milestone", completed: false }
];

function updateProgress() {
    const completedMilestones = milestones.filter(m => m.completed).length;
    const progress = (completedMilestones / milestones.length) * 100;
    const progressBar = document.getElementById("recoveryProgress");
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

function renderMilestones() {
    const milestonesContainer = document.getElementById("milestones");
    if (!milestonesContainer) return;
    milestonesContainer.innerHTML = "";
    milestones.forEach((milestone, index) => {
        const milestoneElement = document.createElement("div");
        milestoneElement.classList.add("milestone");
        if (milestone.completed) milestoneElement.classList.add("milestone-completed");
        milestoneElement.innerHTML = `
      <div class="milestone-icon">${index + 1}</div>
      <div class="milestone-text">${milestone.name}</div>
    `;
        milestonesContainer.appendChild(milestoneElement);
    });
}

function saveEntry() {
    const mood = document.getElementById("moodTracker").value;
    const journal = document.getElementById("journalEntry").value;
    if (mood && journal) {
        alert("Entry saved successfully!");
        document.getElementById("moodTracker").value = "";
        document.getElementById("journalEntry").value = "";
        // Here you would typically send this data to a server to be stored
    } else {
        alert("Please fill in both mood and journal entry.");
    }
}

function addGoal() {
    const newGoal = document.getElementById("newGoal").value;
    if (newGoal) {
        milestones.push({ name: newGoal, completed: false });
        renderMilestones();
        updateProgress();
        document.getElementById("newGoal").value = "";
        alert("New goal added successfully!");
    } else {
        alert("Please enter a goal.");
    }
}

// New functions for the added features
function loadDailyQuote() {
    const quotes = [
        "The only way out is through.",
        "Recovery is not for people who need it. It's for people who want it.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Your future is created by what you do today, not tomorrow."
    ];
    const dailyQuote = document.getElementById("dailyQuote");
    if (dailyQuote) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        dailyQuote.textContent = randomQuote;
    }
}

document.querySelectorAll(".choose-assistant").forEach(button => {
    button.addEventListener("click", function () {
        const assistant = this.getAttribute("data-assistant");
        alert(`You've chosen ${assistant.charAt(0).toUpperCase() + assistant.slice(1)} as your AI assistant!`);
        // Here you would typically update the UI to reflect the chosen assistant
    });
});

function openProfileBuilder() {
    alert("Opening profile builder...");
    // Here you would typically open a modal or navigate to a profile building page
}

function downloadApp() {
    alert("Downloading Recovery Tracker App...");
    // Here you would typically initiate the app download process
}

function toggleVoiceComm() {
    alert("Voice communication activated!");
    // Here you would typically implement voice recognition functionality
}

function evaluateVibrationalState() {
    alert("Starting vibrational state evaluation...");
    // Here you would typically implement the evaluation process
}

// Initialize the tracker when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderMilestones();
    updateProgress();
    loadDailyQuote();
});

// Load results on page load
document.addEventListener("DOMContentLoaded", loadResults);

// Helper function to display data
function displayData(data, elementId) {
    const dataList = document.getElementById(elementId);
    dataList.innerHTML = ""; // Clear existing content
    if (Object.keys(data).length === 0) {
        dataList.innerHTML = "<li>No data available</li>";
    } else {
        for (const [key, value] of Object.entries(data)) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key.replace(/([A-Z])/g, " $1")}: ${value}`;
            dataList.appendChild(listItem);
        }
    }
}

function loadResults() {
    try {
        // Retrieve data from localStorage
        const personalData = JSON.parse(localStorage.getItem("personalData")) || {};
        const geneticData = JSON.parse(localStorage.getItem("geneticData")) || {};
        const microbiomeData = JSON.parse(localStorage.getItem("microbiomeData")) || {};
        const biochemicalData = JSON.parse(localStorage.getItem("biochemicalData")) || {};

        // Display data in respective sections
        displayData(personalData, "personal-data");
        displayData(geneticData, "genetic-data");
        displayData(microbiomeData, "microbiome-data");
        displayData(biochemicalData, "biochemical-data");
    } catch (error) {
        console.error("Error loading results:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const downloadAllButton = document.getElementById("download-all-btn");

    downloadAllButton.addEventListener("click", () => {
        // Helper function to get data from a section
        const getSectionData = (sectionId, title) => {
            const sectionElement = document.getElementById(sectionId);
            const listItems = Array.from(sectionElement.querySelectorAll("li"));
            const data = listItems.map((li) => li.textContent).join("\n");
            return `${title}:\n${data}\n\n`;
        };

        // Retrieve data from each section
        const personalData = getSectionData("personal-data", "Personal Data");
        const geneticData = getSectionData("genetic-data", "Genetic Data");
        const microbiomeData = getSectionData("microbiome-data", "Microbiome Data");
        const biochemicalData = getSectionData("biochemical-data", "Biochemical Data");
        const dietRecommendations = getSectionData("diet-recommendations", "Diet Recommendations");
        const lifestyleRecommendations = getSectionData("lifestyle-recommendations", "Lifestyle Recommendations");

        // Combine all data
        const allData = personalData + geneticData + microbiomeData + biochemicalData + dietRecommendations + lifestyleRecommendations;

        // Create a Blob and download the file
        const blob = new Blob([allData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "All_Health_Data.txt";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        URL.revokeObjectURL(url);
    });
});

    

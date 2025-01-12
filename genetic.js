// Genetic data for risk levels, based on the provided document data
const geneticRiskData = {
    MTHFR: ["No Risk (CC)", "Moderate Risk (CT)", "High Risk (TT)"],
    APOE: ["No Risk (ε2/ε2)", "Moderate Risk (ε3/ε3)", "High Risk (ε4/ε4 or ε3/ε4)"],
    FTO: ["No Risk (AA)", "Moderate Risk (AT)", "High Risk (TT)"],
    COMT: ["No Risk (Val/Val)", "Moderate Risk (Val/Met)", "High Risk (Met/Met)"],
    GSTT1_GSTM1: ["No Risk (Both Present)", "Moderate Risk (One Absent)", "High Risk (Both Absent)"],
    CYP1A2: ["No Risk (AA)", "Moderate Risk (AC)", "High Risk (CC)"],
    LPL: ["No Risk (AA)", "Moderate Risk (AG)", "High Risk (GG)"],
    VEGFA: ["No Risk (CC)", "Moderate Risk (CT)", "High Risk (TT)"],
    TNF_alpha: ["No Risk (CC)", "Moderate Risk (CT)", "High Risk (TT)"],
    PON1: ["No Risk (QQ)", "Moderate Risk (QR)", "High Risk (RR)"]
};

// Function to populate dropdown options for each gene
function populateGeneticDropdowns() {
    for (const [gene, riskLevels] of Object.entries(geneticRiskData)) {
        const selectElement = document.getElementById(gene);
        if (selectElement) {
            riskLevels.forEach(level => {
                const option = document.createElement("option");
                option.value = level;
                option.textContent = level;
                selectElement.appendChild(option);
            });
        }
    }
}

// Populate dropdowns on page load
document.addEventListener("DOMContentLoaded", populateGeneticDropdowns);



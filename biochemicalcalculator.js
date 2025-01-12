// Sample data for each biochemical test
const testData = {
    fastingBloodGlucose: ["70-99 mg/dL", "100-125 mg/dL", "126+ mg/dL"],
    HbA1c: ["4-5.6%", "5.7-6.4%", "6.5%+"],
    totalCholesterol: ["0-200 mg/dL", "201-239 mg/dL", "240+ mg/dL"],
    ldlCholesterol: ["0-100 mg/dL", "101-159 mg/dL", "160+ mg/dL"],
    hdlCholesterol: ["60 mg/dL", "40-59 mg/dL", "0-39 mg/dL"],
    triglycerides: ["0-149 mg/dL", "150-199 mg/dL", "200+ mg/dL"],
    serumCreatinine: ["0.5-1.2 mg/dL", "1.3-1.9 mg/dL", "2.0+ mg/dL"],
    eGFR: [">90 mL/min", "60-89 mL/min", "0-59 mL/min"],
    ALT: ["7-56 U/L", "57-100 U/L", "101+ U/L"],
    AST: ["10-40 U/L", "41-80 U/L", "81+ U/L"],
    TSH: ["0.4-4.0 mIU/L", "4.1-10.0 mIU/L", "10.1+ mIU/L"],
    freeT4: ["0.8-1.7 ng/dL", "0.6-0.79 ng/dL", "0-0.59 ng/dL"],
    BNP: ["<100 pg/mL", "101-300 pg/mL", ">301 pg/mL"],
    CRP: ["<1 mg/L", "1.1-3 mg/L", ">3.1 mg/L"],
    vitaminD: ["<30 ng/mL", "20-29 ng/mL", ">19 ng/mL"],
    serumFerritin: ["30-300 ng/mL", "10-29 ng/mL", "0-9 ng/mL"],
    omega3Index: ["8%", "4-7.9%", "0-3.9%"],
    IGF1: ["100-300 ng/mL", "70-99 ng/mL", "0-69 ng/mL"],
    vitaminB12: ["200-900 pg/mL", "150-199 pg/mL", "0-149 pg/mL"],
    vitaminB9: ["3-17 ng/mL", "2-2.9 ng/mL", "0-1.9 ng/mL"],
    calcium: ["8.5-10.5 mg/dL", "7.5-804 mg/dL", "0-7.4 mg/dL"],
    zinc: ["70-120 mcg/dL", "50-69 mcg/dL", "0-49 mcg/dL"],
    magnesium: ["1.7-2.2 mg/dL", "1.4-1.6 mg/dL", ">1.3 mg/dL"],
    troponins: ["0-0.01 ng/mL", "0.01-0.1 ng/mL", ">0.1 ng/mL"]
};

// Function to populate dropdown options
function populateDropdown(id, options) {
    const selectElement = document.getElementById(id);
    if (selectElement) {
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            selectElement.appendChild(optionElement);
        });
    }
}

// Populate each select dropdown with the corresponding test data on page load
document.addEventListener("DOMContentLoaded", () => {
    for (const [testId, options] of Object.entries(testData)) {
        populateDropdown(testId, options);
    }
});
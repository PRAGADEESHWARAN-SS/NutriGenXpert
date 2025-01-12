const microbiomeData = {
    Bacteroidia: ["30-40%", "20-30%", "<20%"],
    Clostridia: ["20-30%", "15-20%", ">30%"],
    Actinobacteria: ["5-10%", "2-5%", "<2%"],
    Verrucomicrobiae: ["1-5%", "0-1%", "-1-0%"],
    Gammaproteobacteria: ["<1%", "1-5%", ">5%"],
    Bacilli: ["1-5%", "5-10%", ">10%"],
    Erysipelotrichia: ["<1%", "1-3%", ">3%"],
    Bifidobacterium: [">1%", "0.1%-1%", "<0.1%"],
    Lactobacillus: [">1%", "0.1%-1%", "<0.1%"],
    Akkermansia_muciniphila: [">1%", "0.1%-1%", "<0.1%"],
    Prevotella: [">1%", "0.1%-1%", "<0.1%"],
    Faecalibacterium_prausnitzii: [">1%", "0.1%-1%", "<0.1%"],
    Clostridium_difficile: ["<0.01%", "0.01%-0.1%", ">0.1%"],
    Escherichia_coli: ["<0.01%", "0.01%-0.1%", ">0.1%"],
    Methanobrevibacter_smithii: [">1%", "0.1%-1%", "<0.1%"],
    Bacteriophages: [">1%", "0.1%-1%", "<0.1%"],
    Candida: ["<0.01%", "0.01%-0.1%", ">0.1%"],
    Saccharomyces: ["<0.01%", "0.01%-0.1%", ">0.1%"]
};

// Function to populate dropdown options dynamically
function populateDropdown(selectId, data) {
    const selectElement = document.getElementById(selectId);
    
    // Clear existing options
    selectElement.innerHTML = '';

    // Create and append new options
    data.forEach(optionText => {
        const optionElement = document.createElement('option');
        optionElement.value = optionText;
        optionElement.textContent = optionText;
        selectElement.appendChild(optionElement);
    });
}

// Call this function for each dropdown in the form
document.addEventListener('DOMContentLoaded', function() {
    populateDropdown("BacteroidiaGroup", microbiomeData.Bacteroidia);
    populateDropdown("ProvotellaGroup", microbiomeData.Prevotella);
    populateDropdown("ActinobacteriaGroup", microbiomeData.Actinobacteria);
    populateDropdown("BifidobacteriumGroup", microbiomeData.Bifidobacterium);
    populateDropdown("BacilliGroup", microbiomeData.Bacilli);
    populateDropdown("LactobacillusGroup", microbiomeData.Lactobacillus);
    populateDropdown("VerrucomicrobiaeGroup", microbiomeData.Verrucomicrobiae);
    populateDropdown("AkkermansiaMuciniphiliaGroup", microbiomeData.Akkermansia_muciniphila);
    populateDropdown("GammaproteobacteriumGroup", microbiomeData.Gammaproteobacteria);
    populateDropdown("EcoliGroup", microbiomeData.Escherichia_coli);
    populateDropdown("ErysipelotrichiaGroup", microbiomeData.Erysipelotrichia);
    populateDropdown("ClostridiaGroup", microbiomeData.Clostridia);
    populateDropdown("FaecalibacteriumPrausnitziiGroup", microbiomeData.Faecalibacterium_prausnitzii);
    populateDropdown("ClostridiumDifficileGroup", microbiomeData.Clostridium_difficile);
    populateDropdown("CandidaGroup", microbiomeData.Candida);
    populateDropdown("SaccharomycesGroup", microbiomeData.Saccharomyces);
    populateDropdown("BacteriophagesGroup", microbiomeData.Bacteriophages);
    populateDropdown("MethanobrevibacterSmithiiGroup", microbiomeData.Methanobrevibacter_smithii);
});

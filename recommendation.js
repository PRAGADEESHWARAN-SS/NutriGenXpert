function loadResults() {
    // Retrieve data from localStorage
    const personalData = JSON.parse(localStorage.getItem("personalData")) || {};
    const geneticData = JSON.parse(localStorage.getItem("geneticData")) || {};
    const microbiomeData = JSON.parse(localStorage.getItem("microbiomeData")) || {};
    const biochemicalData = JSON.parse(localStorage.getItem("biochemicalData")) || {};

    // Function to map risk levels and provide recommendations
    function getRecommendations(geneticData, microbiomeData, biochemicalData) {
        const recommendations = {
            diet: [],
            lifestyle: [],
        }; 
        addGeneticRecommendations(geneticData, recommendations);
    addMicrobiomeRecommendations(microbiomeData, recommendations);
    addBiochemicalRecommendations(biochemicalData, recommendations);

    return recommendations;
}
};

function addGeneticRecommendations(geneticData, recommendations) {
     const geneticMarkers = {
        MTHFR: {
            "No Risk (CC)": {
                Diet: "Balanced diet with folate-rich foods like leafy greens and fortified cereals.",
                Lifestyle: "Regular exercise and maintain hydration."
            },
            "Moderate Risk (CT)": {
                Diet: "Folate-rich foods such as spinach, lentils, and avocados.",
                Lifestyle: "Manage stress with activities like yoga or meditation."
            },
            "High Risk (TT)": {
                Diet: "Methylated folate (supplements if necessary) and folate-rich foods.",
                Lifestyle: "Focus on cardiovascular health through exercise and stress reduction."
            }
        },
        APOE: {
            "No Risk (ε2/ε2)": {
                Diet: "Heart-healthy diet rich in fruits, vegetables, whole grains, and healthy fats.",
                Lifestyle: "Engage in regular exercise and cognitive activities."
            },
            "Moderate Risk (ε3/ε3)": {
                Diet: "Include omega-3 fatty acids, antioxidants, and limit saturated fats.",
                Lifestyle: "Exercise regularly and monitor cholesterol levels."
            },
            "High Risk (ε4/ε4 or ε3/ε4)": {
                Diet: "Strict heart-healthy diet, high in omega-3s and antioxidants; avoid trans fats.",
                Lifestyle: "Regular cardiovascular exercise and cognitive training; consult for medication if needed."
            }
        },
        FTO: {
            "No Risk (AA)": {
                Diet: "Standard balanced diet with portion control.",
                Lifestyle: "Engage in moderate physical activity regularly."
            },
            "Moderate Risk (AT)": {
                Diet: "High-fiber diet with fruits, vegetables, and whole grains.",
                Lifestyle: "Include strength training and mindful eating habits."
            },
            "High Risk (TT)": {
                Diet: "Calorie-controlled diet, high in fiber and healthy fats, low in refined sugars.",
                Lifestyle: "Regular vigorous exercise and weight monitoring."
            }
        },
        COMT: {
            "No Risk (Val/Val)": {
                Diet: "Balanced diet with foods rich in B vitamins.",
                Lifestyle: "Regular mental activities and stress management techniques."
            },
            "Moderate Risk (Val/Met)": {
                Diet: "Focus on brain-healthy foods like fish, nuts, and green leafy vegetables.",
                Lifestyle: "Incorporate relaxation techniques like yoga."
            },
            "High Risk (Met/Met)": {
                Diet: "Include antioxidant-rich foods and omega-3 fatty acids.",
                Lifestyle: "Intensive stress management and physical activity."
            }
        },
        GSTT1_GSTM1: {
            "No Risk (Both Present)": {
                Diet: "Antioxidant-rich diet with berries, leafy greens, and whole grains.",
                Lifestyle: "Engage in physical activities like brisk walking."
            },
            "Moderate Risk (One Absent)": {
                Diet: "Focus on sulfur-rich foods like garlic and onions.",
                Lifestyle: "Avoid exposure to environmental toxins."
            },
            "High Risk (Both Absent)": {
                Diet: "Strict sulfur-rich diet; include cruciferous vegetables.",
                Lifestyle: "Adopt a detox routine under professional guidance."
            }
        },
        CYP1A2: {
            "No Risk (AA)": {
                Diet: "Balanced diet and moderate caffeine intake.",
                Lifestyle: "Exercise regularly and consume caffeine as tolerated."
            },
            "Moderate Risk (AC)": {
                Diet: "Limit caffeine and focus on metabolism-supporting foods.",
                Lifestyle: "Engage in regular exercise and monitor caffeine sensitivity."
            },
            "High Risk (CC)": {
                Diet: "Avoid caffeine and include liver-supporting foods like leafy greens.",
                Lifestyle: "Ensure regular exercise and maintain adequate sleep."
            }
        },
        LPL: {
            "No Risk (AA)": {
                Diet: "Include healthy fats like olive oil and avocados.",
                Lifestyle: "Regular cardio exercise and weight maintenance."
            },
            "Moderate Risk (AG)": {
                Diet: "Omega-3 fatty acids and high-fiber foods; reduce saturated fats.",
                Lifestyle: "Focus on cardiovascular health through regular exercise."
            },
            "High Risk (GG)": {
                Diet: "Strict low-fat diet and avoid refined carbs.",
                Lifestyle: "Intensive exercise and regular lipid monitoring."
            }
        },
        VEGFA: {
            "No Risk (CC)": {
                Diet: "Maintain a balanced diet with fruits and vegetables.",
                Lifestyle: "Engage in regular cardiovascular activities."
            },
            "Moderate Risk (CT)": {
                Diet: "Antioxidant-rich diet with omega-3 fatty acids.",
                Lifestyle: "Monitor vascular health with regular exercise."
            },
            "High Risk (TT)": {
                Diet: "Anti-inflammatory diet, limit sodium intake.",
                Lifestyle: "Avoid smoking and maintain a healthy lifestyle."
            }
        },
        "TNF-alpha": {
            "No Risk (CC)": {
                Diet: "Balanced diet with anti-inflammatory foods like turmeric and fatty fish.",
                Lifestyle: "Engage in regular physical activities."
            },
            "Moderate Risk (CT)": {
                Diet: "Increase intake of anti-inflammatory foods and avoid processed foods.",
                Lifestyle: "Practice stress management to reduce inflammation."
            },
            "High Risk (TT)": {
                Diet: "Strict anti-inflammatory diet rich in fruits, vegetables, and omega-3s.",
                Lifestyle: "Adopt intensive exercise and monitor inflammation markers."
            }
        },
        PON1: {
            "No Risk (QQ)": {
                Diet: "Balanced diet with antioxidant-rich foods like berries and nuts.",
                Lifestyle: "Engage in physical activities and avoid toxins."
            },
            "Moderate Risk (QR)": {
                Diet: "Antioxidant-rich foods; consider moderate red wine if advised.",
                Lifestyle: "Avoid environmental toxins and stay active."
            },
            "High Risk (RR)": {
                Diet: "Focus on a strict antioxidant diet; avoid alcohol and toxins.",
                Lifestyle: "Regular cardiovascular exercise and avoid toxins."
            }
        },
    };
    
    for (const [gene, value] of Object.entries(geneticData)) {
        if (geneticMarkers[gene]) {
            const marker = geneticMarkers[gene][value];
            if (marker) {
                recommendations.diet.push(marker.Diet);
                recommendations.lifestyle.push(marker.Lifestyle);
            }
        }
    }
};

    function addMicrobiomeRecommendations(microbiomeData, recommendations) {
    const microbiomeMarkers = {
        Bacteroidia: {
            "30-40%": {
                Diet: "Maintain a balanced fiber-rich diet with whole grains, fruits, and vegetables.",
                Lifestyle: "Regular moderate exercise and maintain a healthy gut environment."
            },
            "20-30%": {
                Diet: "Increase intake of prebiotic foods like bananas, onions, and garlic.",
                Lifestyle: "Focus on hydration and light physical activities."
            },
            "<20%": {
                Diet: "High-fiber diet including legumes, oats, and leafy greens; consider probiotic supplements.",
                Lifestyle: "Regular exercise and stress management for gut health."
            }
        },
        Clostridia: {
            "20-30%": {
                Diet: "Include fermented foods like yogurt, kefir, and sauerkraut in your diet.",
                Lifestyle: "Engage in light physical activity like yoga and maintain hydration."
            },
            "15-20%": {
                Diet: "Focus on diverse fiber sources and fermented foods.",
                Lifestyle: "Moderate exercise with mindfulness practices like meditation."
            },
            ">30%": {
                Diet: "Reduce intake of processed foods and sugars; focus on anti-inflammatory foods.",
                Lifestyle: "Intensive exercise and regular monitoring of gut health."
            }
        },
        Actinobacteria: {
            "5-10%": {
                Diet: "Consume probiotic foods and increase dietary fiber.",
                Lifestyle: "Maintain an active lifestyle and manage stress effectively."
            },
            "2-5%": {
                Diet: "Include fermented foods and prebiotics like inulin and chicory root.",
                Lifestyle: "Engage in regular physical activity and ensure proper hydration."
            },
            "<2%": {
                Diet: "Focus on a high-fiber, low-fat diet; consider probiotic supplementation.",
                Lifestyle: "Monitor gut health and engage in stress-relieving activities."
            }
        },
        Verrucomicrobiae: {
            "1-5%": {
                Diet: "Include polyphenol-rich foods like berries, green tea, and dark chocolate.",
                Lifestyle: "Maintain an active lifestyle and practice good sleep hygiene."
            },
            "0-1%": {
                Diet: "Increase intake of whole grains and fermented foods.",
                Lifestyle: "Engage in light exercises and avoid high-stress environments."
            },
            "-1-0%": {
                Diet: "Strict focus on polyphenol- and prebiotic-rich foods.",
                Lifestyle: "Seek professional advice for gut microbiome support."
            }
        },
        Gammaproteobacteria: {
            "<1%": {
                Diet: "Maintain a balanced diet with limited intake of red meat.",
                Lifestyle: "Focus on regular exercise and avoid excessive stress."
            },
            "1-5%": {
                Diet: "Increase intake of anti-inflammatory foods and probiotics.",
                Lifestyle: "Engage in regular physical activity and ensure proper sleep."
            },
            ">5%": {
                Diet: "Avoid processed and sugary foods; focus on a plant-based diet.",
                Lifestyle: "Intensive exercise and gut health monitoring."
            }
        },
        Bacilli: {
            "1-5%": {
                Diet: "Consume yogurt and other fermented dairy products.",
                Lifestyle: "Moderate physical activity and stress management techniques."
            },
            "5-10%": {
                Diet: "Focus on increasing dietary fiber and probiotics.",
                Lifestyle: "Engage in light aerobic exercises."
            },
            ">10%": {
                Diet: "Limit intake of high-sugar and processed foods.",
                Lifestyle: "Include intensive cardio exercises and maintain hydration."
            }
        },
        Erysipelotrichia: {
            "<1%": {
                Diet: "Include whole grains and vegetables; avoid high-fat diets.",
                Lifestyle: "Light exercise and regular sleep schedule."
            },
            "1-3%": {
                Diet: "Add prebiotic and fermented foods to your meals.",
                Lifestyle: "Focus on aerobic exercises and mindfulness."
            },
            ">3%": {
                Diet: "Reduce intake of high-fat foods; focus on anti-inflammatory foods.",
                Lifestyle: "Intensive physical activity and regular gut health checkups."
            }
        },
        Bifidobacterium: {
            ">1%": {
                Diet: "Maintain a balanced diet with prebiotic and probiotic foods.",
                Lifestyle: "Regular exercise and stress management."
            },
            "0.1%-1%": {
                Diet: "Increase intake of fermented foods like yogurt and kimchi.",
                Lifestyle: "Moderate physical activity and ensure adequate hydration."
            },
            "<0.1%": {
                Diet: "Consider probiotic supplementation and fiber-rich foods.",
                Lifestyle: "Consult a professional for gut health support."
            }
        },
        Lactobacillus: {
            ">1%": {
                Diet: "Balanced diet with regular consumption of fermented dairy products.",
                Lifestyle: "Engage in regular physical activities."
            },
            "0.1%-1%": {
                Diet: "Focus on probiotic and high-fiber foods.",
                Lifestyle: "Practice mindfulness and moderate exercise."
            },
            "<0.1%": {
                Diet: "Consider probiotics and increase dietary fiber intake.",
                Lifestyle: "Ensure proper hydration and consult a healthcare provider if needed."
            }
        },
        Akkermansia_muciniphila: {
            ">1%": {
                Diet: "Focus on a diet with high polyphenols and prebiotic fibers.",
                Lifestyle: "Engage in light-to-moderate exercises and manage stress levels."
            },
            "0.1%-1%": {
                Diet: "Increase consumption of whole grains, fruits, and vegetables.",
                Lifestyle: "Regular physical activity and mindfulness practices."
            },
            "<0.1%": {
                Diet: "Consider prebiotic and probiotic-rich foods or supplements.",
                Lifestyle: "Monitor gut health regularly and seek medical advice."
            }
        },
        Prevotella: {
            ">1%": {
                Diet: "Increase intake of fiber-rich and plant-based foods.",
                Lifestyle: "Engage in regular physical activity to support gut diversity."
            },
            "0.1%-1%": {
                Diet: "Incorporate legumes, whole grains, and fermented foods.",
                Lifestyle: "Practice moderate exercise and stay hydrated."
            },
            "<0.1%": {
                Diet: "Focus on high-fiber foods and consider prebiotic supplementation.",
                Lifestyle: "Consult a healthcare professional for gut health improvement."
            }
        },
        Faecalibacterium_prausnitzii: {
            ">1%": {
                Diet: "Maintain a balanced diet rich in fiber and whole grains.",
                Lifestyle: "Regular aerobic exercise and stress management practices."
            },
            "0.1%-1%": {
                Diet: "Increase consumption of foods like oats, barley, and leafy greens.",
                Lifestyle: "Engage in light physical activities and ensure proper sleep."
            },
            "<0.1%": {
                Diet: "Strict focus on prebiotic foods; consider gut health supplements.",
                Lifestyle: "Seek professional advice and monitor gut health regularly."
            }
        },
        Clostridium_difficile: {
            "<0.01%": {
                Diet: "Maintain a balanced diet with probiotic foods to prevent overgrowth.",
                Lifestyle: "Practice good hygiene and avoid unnecessary antibiotic use."
            },
            "0.01%-0.1%": {
                Diet: "Focus on fiber-rich and probiotic foods like yogurt and kefir.",
                Lifestyle: "Engage in moderate exercise and stay hydrated."
            },
            ">0.1%": {
                Diet: "Strictly avoid processed foods; focus on gut-healing diets under supervision.",
                Lifestyle: "Consult a healthcare provider and practice stress reduction."
            }
        },
        Escherichia_coli: {
            "<0.01%": {
                Diet: "Balanced diet with sufficient fiber and hydration.",
                Lifestyle: "Regular moderate exercise and healthy hygiene practices."
            },
            "0.01%-0.1%": {
                Diet: "Incorporate probiotic foods like yogurt and miso into your diet.",
                Lifestyle: "Focus on maintaining a healthy weight and gut environment."
            },
            ">0.1%": {
                Diet: "Limit intake of sugar and processed foods; adopt an anti-inflammatory diet.",
                Lifestyle: "Seek medical advice to manage gut balance and engage in stress management."
            }
        },
        Methanobrevibacter_smithii: {
            ">1%": {
                Diet: "Maintain a diet with balanced fiber and protein sources.",
                Lifestyle: "Regular physical activity and stress management to support gut health."
            },
            "0.1%-1%": {
                Diet: "Increase intake of foods like garlic, onions, and asparagus (prebiotics).",
                Lifestyle: "Engage in light exercises like walking or yoga."
            },
            "<0.1%": {
                Diet: "Focus on high-fiber foods and fermented products; consider supplements.",
                Lifestyle: "Monitor gut health and seek professional guidance if needed."
            }
        },
        Bacteriophages: {
            ">1%": {
                Diet: "Balanced diet with adequate hydration and nutrient diversity.",
                Lifestyle: "Engage in regular physical activity and avoid stress."
            },
            "0.1%-1%": {
                Diet: "Include whole grains and probiotics to maintain gut health.",
                Lifestyle: "Practice mindfulness and ensure adequate sleep."
            },
            "<0.1%": {
                Diet: "Focus on prebiotic and probiotic-rich foods; avoid processed foods.",
                Lifestyle: "Seek advice for supporting a healthy gut microbiome."
            }
        },
        Candida: {
            "<0.01%": {
                Diet: "Maintain a balanced diet with limited refined carbs and sugars.",
                Lifestyle: "Regular physical activity and proper oral hygiene."
            },
            "0.01%-0.1%": {
                Diet: "Increase intake of anti-fungal foods like coconut oil and garlic.",
                Lifestyle: "Monitor stress levels and ensure adequate sleep."
            },
            ">0.1%": {
                Diet: "Adopt a strict anti-fungal diet under medical supervision; avoid sugars.",
                Lifestyle: "Consult a healthcare provider for targeted treatments."
            }
        },
        Saccharomyces: {
            "<0.01%": {
                Diet: "Balanced diet with adequate hydration; include fermented foods.",
                Lifestyle: "Engage in light exercise and maintain good hygiene."
            },
            "0.01%-0.1%": {
                Diet: "Focus on fermented foods like kombucha and kimchi.",
                Lifestyle: "Regular physical activity and adequate sleep for gut health."
            },
            ">0.1%": {
                Diet: "Avoid high-sugar and yeast-heavy foods; focus on balanced meals.",
                Lifestyle: "Seek professional advice to balance gut flora."
            }
        },
    };
    
    for (const [bacteria, level] of Object.entries(microbiomeData)) {
        if (microbiomeMarkers[bacteria]) {
            const marker = microbiomeMarkers[bacteria][level];
            if (marker) {
                recommendations.diet.push(marker.diet);
                recommendations.lifestyle.push(marker.lifestyle);
            }
        }
    }
};
    function addBiochemicalRecommendations(biochemicalData, recommendations) {
    const biochemicalMarkers = {
        fastingBloodGlucose: {
            "70-99 mg/dL": {
                Diet: "Maintain a balanced diet with low glycemic index foods and complex carbs.",
                Lifestyle: "Regular physical activity and maintain healthy weight."
            },
            "100-125 mg/dL": {
                Diet: "Focus on reducing refined sugars; incorporate more fiber and whole grains.",
                Lifestyle: "Engage in regular aerobic exercise and monitor blood glucose levels."
            },
            "126+ mg/dL": {
                Diet: "Adopt a low-carb, high-fiber diet; avoid sugary and processed foods.",
                Lifestyle: "Consult a healthcare provider; follow a structured exercise plan."
            }
        },
        HbA1c: {
            "<5.7%": {
                Diet: "Balanced diet with controlled portions of carbohydrates.",
                Lifestyle: "Maintain regular exercise and monitor glucose levels."
            },
            "5.7-6.4%": {
                Diet: "Emphasize low-GI foods, increase fiber, and reduce sugar intake.",
                Lifestyle: "Increase physical activity and consider weight management strategies."
            },
            "6.5%+": {
                Diet: "Strict low-carb, high-fiber diet; avoid trans fats and sugars.",
                Lifestyle: "Follow medical advice for glucose control and engage in supervised exercise."
            }
        },
        totalCholesterol: {
            "<200 mg/dL": {
                Diet: "Include healthy fats like olive oil and avocados; maintain balanced nutrition.",
                Lifestyle: "Engage in regular aerobic exercise and manage stress."
            },
            "200-239 mg/dL": {
                Diet: "Reduce intake of saturated fats; increase fiber and omega-3 fatty acids.",
                Lifestyle: "Focus on regular cardio exercises and weight control."
            },
            "240+ mg/dL": {
                Diet: "Adopt a heart-healthy diet, avoid trans fats, and increase soluble fiber.",
                Lifestyle: "Seek medical advice and engage in intensive physical activity."
            }
        },
        ldlCholesterol: {
            "<100 mg/dL": {
                Diet: "Maintain balanced nutrition with heart-healthy fats.",
                Lifestyle: "Engage in regular physical activity."
            },
            "100-129 mg/dL": {
                Diet: "Reduce saturated fats and increase intake of fruits, vegetables, and whole grains.",
                Lifestyle: "Regular exercise focusing on cardiovascular health."
            },
            "130+ mg/dL": {
                Diet: "Strictly avoid trans fats; focus on omega-3 and fiber-rich foods.",
                Lifestyle: "Intensive exercise and regular lipid monitoring."
            }
        },
        hdlCholesterol: {
            "<40 mg/dL": {
                Diet: "Increase healthy fats from nuts, seeds, and fatty fish.",
                Lifestyle: "Engage in vigorous exercise to boost HDL levels."
            },
            "40-59 mg/dL": {
                Diet: "Maintain a balanced diet with adequate healthy fats.",
                Lifestyle: "Regular physical activity and stress management."
            },
            "60+ mg/dL": {
                Diet: "Continue with a balanced diet rich in healthy fats and antioxidants.",
                Lifestyle: "Sustain active lifestyle habits."
            }
        },
        triglycerides: {
            "<150 mg/dL": {
                Diet: "Maintain a balanced diet; avoid excessive sugar and refined carbs.",
                Lifestyle: "Regular aerobic exercise and weight management."
            },
            "150-199 mg/dL": {
                Diet: "Limit simple sugars; focus on omega-3-rich and fiber-rich foods.",
                Lifestyle: "Engage in regular cardio and reduce alcohol consumption."
            },
            "200+ mg/dL": {
                Diet: "Adopt a low-carb, high-fiber diet; avoid fried and processed foods.",
                Lifestyle: "Consult a healthcare provider and follow a structured lifestyle plan."
            }
        },
        serumCreatinine: {
            "0.6-1.2 mg/dL": {
                Diet: "Maintain a balanced diet with controlled protein intake.",
                Lifestyle: "Stay hydrated and engage in moderate physical activity."
            },
            "1.3-1.9 mg/dL": {
                Diet: "Limit protein intake; focus on plant-based proteins and hydration.",
                Lifestyle: "Monitor kidney function and avoid overexertion."
            },
            "2.0+ mg/dL": {
                Diet: "Adopt a renal-friendly diet under professional supervision.",
                Lifestyle: "Seek medical advice and avoid strenuous activities."
            }
        },
        eGFR: {
            ">90 mL/min": {
                Diet: "Maintain a balanced diet with adequate hydration.",
                Lifestyle: "Engage in regular physical activity."
            },
            "60-89 mL/min": {
                Diet: "Limit protein and sodium intake; ensure hydration.",
                Lifestyle: "Monitor kidney health and avoid excessive physical strain."
            },
            "<60 mL/min": {
                Diet: "Follow a kidney-friendly diet under medical supervision.",
                Lifestyle: "Consult healthcare provider and engage in safe physical activities."
            }
        },
        ALT: {
            "7-56 U/L": {
                Diet: "Balanced diet with liver-supporting foods like leafy greens.",
                Lifestyle: "Avoid excessive alcohol and maintain a healthy weight."
            },
            "57-100 U/L": {
                Diet: "Adopt an anti-inflammatory diet; limit alcohol and fried foods.",
                Lifestyle: "Focus on moderate physical activity and stress management."
            },
            "101+ U/L": {
                Diet: "Strict liver-supportive diet under medical guidance.",
                Lifestyle: "Seek medical advice; avoid alcohol and toxins."
            }
        },
        AST: {
            "10-40 U/L": {
                Diet: "Balanced diet with liver-friendly foods.",
                Lifestyle: "Moderate exercise and avoid excessive alcohol."
            },
            "41-80 U/L": {
                Diet: "Limit fried and processed foods; increase antioxidant-rich foods.",
                Lifestyle: "Monitor liver health and engage in light physical activity."
            },
            "81+ U/L": {
                Diet: "Adopt a strict liver-friendly diet under professional supervision.",
                Lifestyle: "Consult a healthcare provider; avoid alcohol and toxins."
            }
        },
        TSH: {
            "0.4-4.0 mIU/L": {
                Diet: "Balanced diet with iodine-rich foods like fish and dairy.",
                Lifestyle: "Maintain regular physical activity and manage stress."
            },
            "4.1-10.0 mIU/L": {
                Diet: "Increase iodine intake cautiously; avoid goitrogens like raw cruciferous vegetables.",
                Lifestyle: "Monitor thyroid health; consult a healthcare provider for guidance."
            },
            "10.1+ mIU/L": {
                Diet: "Adopt a thyroid-supportive diet under medical supervision.",
                Lifestyle: "Seek professional advice for appropriate lifestyle adjustments."
            }
        },
        freeT4: {
            "0.8-1.8 ng/dL": {
                Diet: "Balanced diet with adequate selenium and iodine intake.",
                Lifestyle: "Regular physical activity and stress management."
            },
            "1.9-2.5 ng/dL": {
                Diet: "Increase selenium-rich foods like Brazil nuts and eggs.",
                Lifestyle: "Monitor thyroid function; maintain moderate physical activity."
            },
            ">2.5 ng/dL": {
                Diet: "Follow a medically supervised diet; avoid excessive iodine intake.",
                Lifestyle: "Consult a healthcare provider and avoid strenuous activities."
            }
        },
        BNP: {
            "<100 pg/mL": {
                Diet: "Balanced diet with low sodium and high potassium.",
                Lifestyle: "Engage in regular cardiovascular exercise."
            },
            "100-400 pg/mL": {
                Diet: "Focus on heart-healthy foods; limit sodium and saturated fats.",
                Lifestyle: "Monitor heart health; engage in moderate physical activity."
            },
            ">400 pg/mL": {
                Diet: "Adopt a heart-friendly diet under medical guidance.",
                Lifestyle: "Seek medical advice; avoid excessive physical exertion."
            }
        },
        CRP: {
            "<1 mg/L": {
                Diet: "Balanced diet with anti-inflammatory foods like fatty fish and turmeric.",
                Lifestyle: "Regular exercise and stress management."
            },
            "1-3 mg/L": {
                Diet: "Increase intake of omega-3 and antioxidant-rich foods.",
                Lifestyle: "Focus on regular physical activity and stress reduction."
            },
            ">3 mg/L": {
                Diet: "Strict anti-inflammatory diet; avoid processed foods.",
                Lifestyle: "Consult a healthcare provider; focus on inflammation management."
            }
        },
        vitaminD: {
            "<20 ng/mL": {
                Diet: "Increase intake of vitamin D-rich foods like fatty fish and fortified products.",
                Lifestyle: "Get sunlight exposure; consider supplements under medical advice."
            },
            "20-30 ng/mL": {
                Diet: "Include more vitamin D-rich foods; consider moderate supplementation.",
                Lifestyle: "Regular sunlight exposure and mild physical activity."
            },
            ">30 ng/mL": {
                Diet: "Maintain balanced vitamin D intake.",
                Lifestyle: "Sustain active lifestyle and regular check-ups."
            }
        },
        serumFerritin: {
            "20-500 ng/mL": {
                Diet: "Balanced diet with moderate iron intake from meat and leafy greens.",
                Lifestyle: "Maintain regular physical activity and hydration."
            },
            "501-800 ng/mL": {
                Diet: "Limit iron-rich foods; focus on antioxidants.",
                Lifestyle: "Monitor ferritin levels and avoid unnecessary supplements."
            },
            ">800 ng/mL": {
                Diet: "Avoid iron-rich foods; follow a diet under medical guidance.",
                Lifestyle: "Seek healthcare advice for proper ferritin management."
            }
        },
        omega3Index: {
            "<4%": {
                Diet: "Increase omega-3 intake through fatty fish or supplements.",
                Lifestyle: "Engage in heart-healthy activities like swimming or yoga."
            },
            "4-8%": {
                Diet: "Maintain a diet rich in omega-3s and healthy fats.",
                Lifestyle: "Regular cardiovascular exercises and balanced diet."
            },
            ">8%": {
                Diet: "Sustain a balanced diet with omega-3 sources.",
                Lifestyle: "Continue active and healthy lifestyle habits."
            }
        },
        IGF1: {
            "<200 ng/mL": {
                Diet: "Balanced diet with adequate protein and micronutrient intake.",
                Lifestyle: "Regular exercise and avoid extreme calorie restriction."
            },
            "200-350 ng/mL": {
                Diet: "Maintain balanced macronutrient intake; consider healthy fats.",
                Lifestyle: "Sustain regular physical activity and adequate sleep."
            },
            ">350 ng/mL": {
                Diet: "Limit protein intake; focus on plant-based foods.",
                Lifestyle: "Consult a healthcare provider for proper IGF-1 management."
            }
        },
        vitaminB12: {
            "200-900 pg/mL": {
                Diet: "Include B12-rich foods like eggs, meat, and fortified cereals.",
                Lifestyle: "Regular physical activity and hydration."
            },
            "<200 pg/mL": {
                Diet: "Focus on B12-rich or supplemented foods.",
                Lifestyle: "Consult a healthcare provider for supplementation."
            },
            ">900 pg/mL": {
                Diet: "Avoid excessive B12 supplementation.",
                Lifestyle: "Monitor levels under medical guidance."
            }
        },
        vitaminB9: {
            "3-17 ng/mL": {
                Diet: "Include folate-rich foods like leafy greens and citrus fruits.",
                Lifestyle: "Maintain balanced physical activity."
            },
            "<3 ng/mL": {
                Diet: "Increase folate intake from natural or fortified sources.",
                Lifestyle: "Consider supplementation under medical guidance."
            },
            ">17 ng/mL": {
                Diet: "Avoid excessive folate supplementation.",
                Lifestyle: "Monitor levels and consult a healthcare provider."
            }
        },
        calcium: {
            "8.5-10.2 mg/dL": {
                Diet: "Balanced diet with calcium-rich foods like dairy and leafy greens.",
                Lifestyle: "Regular weight-bearing exercises."
            },
            "<8.5 mg/dL": {
                Diet: "Increase calcium intake; consider supplements under medical advice.",
                Lifestyle: "Engage in bone-strengthening activities."
            },
            ">10.2 mg/dL": {
                Diet: "Avoid excessive calcium intake.",
                Lifestyle: "Consult a healthcare provider for calcium level management."
            }
        },
        zinc: {
            "60-130 mcg/dL": {
                Diet: "Maintain zinc-rich foods like meat, nuts, and legumes.",
                Lifestyle: "Regular physical activity and hydration."
            },
            "<60 mcg/dL": {
                Diet: "Increase zinc intake through diet or supplements.",
                Lifestyle: "Seek medical advice for supplementation."
            },
            ">130 mcg/dL": {
                Diet: "Avoid unnecessary zinc supplementation.",
                Lifestyle: "Monitor zinc levels under professional guidance."
            }
        },
        magnesium: {
            "1.7-2.2 mg/dL": {
                Diet: "Include magnesium-rich foods like nuts, seeds, and whole grains.",
                Lifestyle: "Maintain regular physical activity."
            },
            "<1.7 mg/dL": {
                Diet: "Increase magnesium intake through diet or supplements.",
                Lifestyle: "Consult a healthcare provider for supplementation."
            },
            ">2.2 mg/dL": {
                Diet: "Avoid excessive magnesium intake.",
                Lifestyle: "Monitor levels and seek medical advice."
            }
        },
        troponins: {
            "<0.04 ng/mL": {
                Diet: "Balanced diet with heart-healthy foods.",
                Lifestyle: "Regular cardiovascular exercise and stress management."
            },
            "0.04-0.39 ng/mL": {
                Diet: "Focus on heart-friendly, low-sodium, and low-fat diet.",
                Lifestyle: "Monitor heart health; consult a healthcare provider."
            },
            ">0.40 ng/mL": {
                Diet: "Strict heart-healthy diet under medical supervision.",
                Lifestyle: "Seek immediate healthcare advice for proper management."
            }
        },
    };
    
    for (const [marker, value] of Object.entries(biochemicalData)) {
        if (biochemicalMarkers[marker]) {
            const markerDetails = biochemicalMarkers[marker][value];
            if (markerDetails) {
                recommendations.diet.push(markerDetails.diet);
                recommendations.lifestyle.push(markerDetails.lifestyle);
            }
        }
    }
};

function renderRecommendations(elementId, recommendations) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = ""; // Clear previous content

    if (recommendations.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "No recommendations available.";
        listElement.appendChild(emptyMessage);
        return;
    }

    recommendations.forEach((recommendation) => {
        const listItem = document.createElement("li");
        listItem.textContent = recommendation;
        listElement.appendChild(listItem);
    })
};

// Load results when the page is fully loaded
document.addEventListener("DOMContentLoaded", loadResults);

interface ResearchProject {
    title: string;
    grant: string;
    investigators: string;
    agency: string;
    duration: string;
    funding?: string;
    description: string[];
    image?: string;
}

const researchProjects: ResearchProject[] = [
    {
        title: "Prediction of Anti-Cancer Medication Discontinuation via Patient Portal Messages and Structured Electronic Medical Records.",
        grant: "R37CA237452",
        investigators: "Zhijun Yin",
        agency: "NIH/ NCI (MERIT Award)",
        duration: "05/01/2020 - 04/30/2026",
        funding: "$2,298,657",
        description: [
            "In this project, we will analyze the online communications between patients and healthcare providers in a patient portal and apply them as well as structured electronic medical records to predict medication discontinuation.",
            "Note: The Method to Extend Research in Time (MERIT) (R37) Award provides longer-term grant support (up to 7 years) to Early Stage Investigators (ESIs). ESI R01 applications that receive a score within the NCI payline for experienced and new investigators are eligible for consideration to be converted to an ESI MERIT Award. The two-year extension of this award was approved in 05/2024 based on the outstanding performance in the original R01 research."
        ],
        // image: "./Project1.jpg"
    },
    {
        title: "Human Centered Design of an Ethical Evaluation Strategy for Chatbot Hallucinations in Healthcare.",
        grant: "1AY2AX000044-01",
        investigators: "Rose, Susannah; Yin, Zhijun",
        agency: "ARPA-H",
        duration: "09/19/2024 - 09/18/2026",
        funding: "$7,334,527",
        description: [
            "Our goal is to create the Vanderbilt Chatbot Accuracy and Reliability Evaluation System (V-CARES) to effectively and efficiently detect hallucinations, omissions, and misaligned values from LLM responses in the healthcare domain."
        ]
    },
    {
        title: "Assessing Potential Bias in Machine Learning Models for Heart Failure Predictions.",
        grant: "25DECCAGWTG1372664",
        investigators: "Zhijun Yin",
        agency: "American Heart Association",
        duration: "09/01/2024 - 08/31/2025",
        funding: "$200,000",
        description: [
            "In the project, we will use heart failure data to train machine learning models to predict heart failure-related outcomes. We will examine any potential bias that exists in the built models and propose methods to correct the bias if it exists."
        ]
    },

    {
        title: "Genetic Privacy and Identity in Community Settings - GetPreCiSe.",
        grant: "5RM1HG00934-08",
        investigators: "Bradley Malin",
        agency: "NIH/NHGRI",
        duration: "09/08/2016 - 06/30/2025",
        funding: "$200,000",
        description: [
            "The Genetic Privacy and Identity in Community Settings (GetPreCiSe), an NHGRI Center of Excellence in Ethical, Legal, and Social Implications Research (CEER) will 1) characterize how social practices and genetic data access affect notions of genetic privacy and identity, 2) assess the impact of emerging laws and regulatory frameworks in the US and abroad, and 3) gauge how new technologies compromise but also uphold protections."
        ]
    },

    {
        title: "Genetic Privacy and Identity in Community Settings - GetPreCiSe.",
        grant: "5RM1HG00934-08",
        investigators: "Bradley Malin",
        agency: "NIH/NHGRI",
        duration: "09/08/2016 - 06/30/2025",
        funding: "$200,000",
        description: [
            "The Genetic Privacy and Identity in Community Settings (GetPreCiSe), an NHGRI Center of Excellence in Ethical, Legal, and Social Implications Research (CEER) will 1) characterize how social practices and genetic data access affect notions of genetic privacy and identity, 2) assess the impact of emerging laws and regulatory frameworks in the US and abroad, and 3) gauge how new technologies compromise but also uphold protections."
        ]
    },

    {
        title: "IC Ethics Core for the AIM-AHEAD Project.",
        grant: "3OT2OD032581-01S1",
        investigators: "Jamboor Vishwanatha",
        agency: "University of North Texas Health Science Center at Fort Worth/NIH",
        duration: "09/17/2022 - 03/16/2025",
        funding: "$1,445,088 current year direct costs; $2,890,175 entire period direct costs (subaward)",
        description: [
            "The AIM-AHEAD Coordinating Center (A-CC) will establish an environment that enhances the participation and representation of researchers and communities that are underrepresented with respect to artificial intelligence and machine learning (AI/ML) as it pertains to biomedical research and, eventually, clinical application."
        ]
    },

    {
        title: "FAIR AI Bridge Center (FABRIC) - Ethics Core.",
        grant: "1U54HG012510",
        investigators: "Lucila Ohno-Machado",
        agency: "Yale University/NIH",
        duration: "07/08/2022 - 04/30/2026",
        funding: "$219,249 current year direct costs; $1,652,183 entire period direct costs (subaward)",
        description: [
            "The FAIR AI Bridge Center - Ethics Core (FABRIC-Ethics) aims to ensure that AI/ML is developed and applied in an ethical and trustworthy manner. FABRIC-Ethics will support the Bridge2AI program to become sustainable and generalizable by the end of the four-year project period."
        ]
    },
];

export default researchProjects;
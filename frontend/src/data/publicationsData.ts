export interface Publication {
    title: string;
    authors: string;
    keywords: string[];
    source: string;
    link: string;
}

export interface YearGroup {
    year: string;
    publications: Publication[];
}

const publicationsData: YearGroup[] = [
    {
        year: "2025",
        publications: [
            {
                title: "Examining Oral Anti Cancer Medication Continuation Using Questionnaires, Prescription Refills, and Structured Electronic Health Records.",
                authors: "Ni, Congning; Song, Qingyuan; Warner, Jeremy L.; Chen, Qingxia; Song, Lijun; Rosenbloom, S. Trent; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["medication adherence", "oral oncology", "EHR analysis"],
                source: "AMIA Annual Symposium Proceedings 2024, pp. 865-874",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12099425/ "
            },
            {
                title: "Exploring the Potential of GPT 4 in Creating Billing Codes from Clinic Notes.",
                authors: "Song, Qingyuan; Li, Yike; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["CPT/HCPCS codes", "clinic notes", "GPT 4", "natural language processing"],
                source: "Studies in Health Technology and Informatics, vol. 327, pp. 882-883, 2025",
                link: "https://doi.org/10.3233/SHTI250490"
            },
            {
                title: "Catalysts of Conversation: Examining Interaction Dynamics Between Topic Initiators and Commenters in Alzheimer's Disease Online Communities.",
                authors: "Ni, Congning; Chen, Qingxia; Song, Lijun; Commiskey, Patricia A.; Song, Qingyuan; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["Alzheimer's disease", "online communities", "informal caregivers", "user engagement", "social media analytics"],
                source: "Proceedings of the ACM Web Conference 2025, pp. 4913-4924, 2025",
                link: "https://doi.org/10.1145/3696410.3714736 "
            },
            {
                title: "Using Large Language Model for Efficient Extraction of Treatment Discontinuation Information: A Study of Online Breast Cancer Community Posts.",
                authors: "Song, Qingyuan; Yang, Jessie; Obi, Ndidiamaka; Ni, Congning; Warner, Jeremy L.; Chen, Qingxia; Song, Lijun; Rosenbloom, S. Trent; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["breast cancer", "hormone therapy", "treatment discontinuation", "GPT 4"],
                source: "Proceedings of AIME 2025 (Lecture Notes in Artificial Intelligence, vol. 15735), pp. 379-383, 2025",
                link: "https://doi.org/10.1007/978-3-031-95841-0_70"
            },

        ]
        
    },
    {
        year: '2024',
        publications: [
            {
                title: "Sentiment Dynamics Among Informal Caregivers in Web Based Alzheimer Communities: Systematic Analysis of Emotional Support and Interaction Patterns.",
                authors: "Ni, Congning; Song, Qingyuan; Chen, Qingxia; Song, Lijun; Commiskey, Patricia; Stratton, Lauren; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["informal caregivers", "Alzheimer's disease", "sentiment analysis"],
                source: "JMIR Aging, 7(1): e60050, 2024",
                link: "https://doi.org/10.2196/60050"
            },
            {
                title: "Applications and Concerns of ChatGPT and Other Conversational Large Language Models in Health Care: Systematic Review.",
                authors: "Wang, Leyao; Wan, Zhiyu; Ni, Congning; Song, Qingyuan; Li, Yang; Clayton, Ellen W.; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["ChatGPT", "large language models", "health care"],
                source: "Journal of Medical Internet Research, 26: e22769, 2024",
                link: "https://doi.org/10.2196/22769 "
            },
            {
                title: "Improving Genetic Perturbation Response Prediction with an Enhanced Biological Knowledge Graph.",
                authors: "Li, Yang; Chen, Rui-Jia; Tan, Yuting; Zhong, Xue; Li, Bingshan; Yin, Zhijun.",
                keywords: ["genetic perturbation", "knowledge graph", "predictive modeling"],
                source: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2024, pp. 2337-2344, 2024",
                link: "https://doi.org/10.1109/BIBM62325.2024.10822049 "
            },
            {
                title: "Fact Check: Assessing the Response of ChatGPT to Alzheimer's Disease Myths.",
                authors: "Huang, Sean S.; Song, Qingyuan; Beiting, Kimberly J.; Duggan, Maria C.; Hines, Kristin; Murff, Harvey; Leung, Vania; Powers, James; Harvey, T. S.; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["ChatGPT", "Alzheimer's disease", "misinformation"],
                source: "Journal of the American Medical Directors Association, 25(10): 105178, 2024",
                link: "https://doi.org/10.1016/j.jamda.2024.105178"
            },
            {
                title: "Optimizing Word Embeddings for Small Datasets: A Case Study on Patient Portal Messages from Breast Cancer Patients.",
                authors: "Song, Qingyuan; Ni, Congning; Warner, Jeremy L.; Chen, Qingxia; Song, Lijun; Rosenbloom, S. Trent; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["word embeddings", "patient portals", "breast cancer "],
                source: "Scientific Reports, 14: 16117, 2024",
                link: "https://doi.org/10.1038/s41598-024-66319-z"
            },
            {
                title: "Perceptions and Utilization of Online Peer Support Among Informal Dementia Caregivers: Survey Study.",
                authors: "Yin, Zhijun; Stratton, Lauren; Song, Qingyuan; Ni, Congning; Song, Lijun; Commiskey, Patricia A.; Chen, Qingxia; Moreno, Monica; Fazio, Sam; Malin, Bradley A.",
                keywords: ["dementia caregivers", "online peer support", "survey"],
                source: "JMIR Aging, 7(1): e55169, 2024",
                link: "https://doi.org/10.2196/55169"
            },
        ]
    },
    {
        year: '2023',
        publications: [
            {
                title: "Fatigue, Pain, and Medication: Mining Online Posts Regarding Rheumatoid Arthritis from Reddit.",
                authors: "Xin, Yi; Ni, Congning; Song, Qingyuan; Yin, Zhijun.",
                keywords: ["rheumatoid arthritis", "Reddit", "text mining"],
                source: "AMIA Annual Symposium Proceedings 2023, pp. 754-763, 2023",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10785940/"
            },
            {
                title: "Examining Online Behaviors of Adult Child and Spousal Caregivers for People Living with Alzheimer's Disease or Related Dementias: Comparative Study in an Open Online Community.",
                authors: "Ni, Congning; Song, Qingyuan; Malin, Bradley A.; Song, Lijun; Commiskey, Patricia; Stratton, Lauren; Yin, Zhijun.",
                keywords: ["Alzheimer's caregivers", "online community", "comparative study"],
                source: "Journal of Medical Internet Research, 25(25): e48193, 2023",
                link: "https://doi.org/10.2196/48193"
            },
            {
                title: "The Hidden Patient Connections: Predicting Hormonal Therapy Medication Discontinuation Using Hypergraph Neural Network on Clinical Communications.",
                authors: "Song, Qingyuan; Hu, Yunfei; Ni, Congning; Yin, Zhijun.",
                keywords: ["hormonal therapy", "medication discontinuation", "hypergraph neural network"],
                source: "AMIA Joint Summits on Translational Science Proceedings 2023, pp. 505-514, 2023",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10283142/"
            },
        ]
    },
    {
        year: '2022',
        publications: [
            {
                title: "'Rough Day … Need a Hug': Learning Challenges and Experiences of Alzheimer's Disease and Related Dementia Caregivers on Reddit.",
                authors: "Ni, Congning; Malin, Bradley A.; Song, Lijun; Jefferson, Angela L.; Commiskey, Patricia; Yin, Zhijun.",
                keywords: ["dementia caregivers", "Reddit", "topic modeling"],
                source: "Proceedings of the 16th International AAAI Conference on Web and Social Media (ICWSM), 16(1): 711-722, 2022",
                link: "https://doi.org/10.1609/icwsm.v16i1.19328"
            },
            {
                title: "Predicting Hormonal Therapy Medication Discontinuation for Breast Cancer Patients Using Structured Data in Electronic Medical Records.",
                authors: "Ni, Congning; Warner, Jeremy L.; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["breast cancer", "medication discontinuation", "electronic health records"],
                source: "AMIA Joint Summits on Translational Science Proceedings 2022, pp. 359-368, 2022",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285143/"
            },
            {
                title: "'Please Advise': Understanding the Needs of Informal Caregivers of People with Alzheimer's Disease and Related Dementias from Online Communities Through a Structured Topic Modeling Approach.",
                authors: "Cheng, Kerou; Yin, Zhijun.",
                keywords: ["informal caregivers", "online communities", "topic modeling"],
                source: "AMIA Joint Summits on Translational Science Proceedings 2022, pp. 149-158, 2022",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285182/"
            },
            {
                title: "Mining Medication Use Patterns from Clinical Notes for Breast Cancer Patients Through a Two Stage Topic Modeling Approach.",
                authors: "Kondratieff, Kimberley E.S.; Brown, J. Thomas; Barron, Marily; Warner, Jeremy L.; Yin, Zhijun.",
                keywords: ["breast cancer", "clinical notes", "topic modeling"],
                source: "AMIA Annual Symposium Proceedings 2022, pp. 303-312, 2022",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285151/"
            },
            {
                title: "The Public Perception of the #GeneEditedBabies Event Across Multiple Social Media Platforms: Observational Study.",
                authors: "Ni, Congning; Wan, Zhiyu; Yan, Chao; Liu, Yongtai; Clayton, Ellen W.; Malin, Bradley A.; Yin, Zhijun.",
                keywords: ["gene editing", "social media", "public perception"],
                source: "Journal of Medical Internet Research, 24(3): e31687, 2022",
                link: "https://doi.org/10.2196/31687"
            },
            {
                title: "Detecting Personal Health Mentions from Social Media Using Supervised Machine Learning.",
                authors: "Yin, Zhijun; Ni, Congning; Fabbri, Daniel; Rosenbloom, S. Trent; Malin, Bradley A.",
                keywords: ["social media", "personal health", "machine learning"],
                source: "In Personal Health Informatics: Patient Participation in Precision Health (eds. D. Luxton et al.), Springer, pp. 247-266, 2022",
                link: "https://doi.org/10.1007/978-3-031-07696-1_12"
            },
        ]
    },
    {
        year: '2021',
        publications: [
            {
                title: "Contribution of Free Text Comments to the Burden of Documentation: Assessment and Analysis of Vital Sign Comments in Flowsheets.",
                authors: "Yin, Zhijun; Liu, Yongtai; McCoy, Allison B.; Malin, Bradley A.; Sengstack, Patricia R.",
                keywords: ["documentation burden", "free-text comments", "EHR"],
                source: "Journal of Medical Internet Research, 23(3): e22806, 2021",
                link: "https://doi.org/10.2196/22806"
            },
        ]
    },
    {
        year: '2020',
        publications: [
            {
                title: "Health and Kinship Matter: Learning About Direct to Consumer Genetic Testing User Experiences via Online Discussions.",
                authors: "Yin, Zhijun; Song, Lijun; Clayton, Ellen W.; Malin, Bradley A.",
                keywords: ["direct-to-consumer genetic testing", "online discussions", "user experience"],
                source: "PLOS ONE, 15(9): e0238644, 2020",
                link: "https://doi.org/10.1371/journal.pone.0238644"
            },
            {
                title: "Understanding Weight Loss via Online Discussions: Content Analysis of Reddit Posts Using Topic Modeling and Word Clustering Techniques.",
                authors: "Liu, Yang; Yin, Zhijun.",
                keywords: ["weight loss", "Reddit", "topic modeling"],
                source: "Journal of Medical Internet Research, 22(6): e13745, 2020",
                link: "https://doi.org/10.2196/13745"
            },
        ]
    },
    {
        year: '2019',
        publications: [
            {
                title: "A Systematic Literature Review of Machine Learning in Online Personal Health Data.",
                authors: "Yin, Zhijun; Sulieman, Lama; Malin, Bradley A.",
                keywords: ["machine learning", "personal health data", "literature review"],
                source: "Journal of the American Medical Informatics Association, 26(6): 561–576, 2019",
                link: "https://pubmed.ncbi.nlm.nih.gov/30908576/"
            },
        ]
    }
]

export default publicationsData;
// import React from "react";
import './ResearchPage.scss';
import researchProjects from '../../data/researchProjects'

function ResearchPage() {
  return (
    <div className="research-page">
      <div className="research-hero">
        <h1 className="page-title">Our Research</h1>
        <p className="page-subtitle">
          These are funded projects and collaborations driving our research in
          AI, eitcs, and health data.
        </p>
      </div>

      {/* <div className="research-projects">
        <div className="project-card">
          <h2 className="project-title">
            Prediction of Anti-Cancer Medication Discontinuation via Patient
            Portal Messages and Structured Electronic Medical Records.
          </h2>
          <p className="project-meta">Grant: R37CA237452</p>
          <div className="project-grid">
            <p>
              <strong>Principal Investigator/s:</strong> Zhijun Yin
            </p>
            <p>
              <strong>Agency:</strong> NIH/ NCI (MERIT Award)
            </p>
            <p>
              <strong>Duration:</strong> 05/01/2020 - 04/30/2026
            </p>
            <p>
              <strong>Funding:</strong> $2,298,657
            </p>
          </div>

          <p className="project-description">
            In this project, we will analyze the online communications between
            patients and healthcare providers in a patient portal and apply them
            as well as structured electronic medical records to predict
            medication discontinuation.
          </p>
          <p className="project-description">
            Note: The Method to Extend Research in Time (MERIT) (R37) Award provides longer-term grant support (up to 7 years) to Early Stage Investigators (ESIs). ESI R01 applications that receive a score within the NCI payline for experienced and new investigators are eligible for consideration to be converted to an ESI MERIT Award. The two-year extension of this award was approved in 05/2024 based on the outstanding performance in the original R01 research.
          </p>
        </div>

        <div className="project-card">
          <h2 className="project-title">
            Human Centered Design of an Ethical Evaluation Strategy for Chatbot Hallucinations in Healthcare.
          </h2>
          <p className="project-meta">Grant: 1AY2AX000044-01</p>
          <div className="project-grid">
            <p>
              <strong>Principal Investigator/s:</strong> Rose, Susannah; Yin, Zhijun
            </p>
            <p>
              <strong>Agency:</strong> ARPA-H
            </p>
            <p>
              <strong>Duration:</strong> 09/19/2024 - 09/18/2026
            </p>
            <p>
              <strong>Funding:</strong> $7,334,527
            </p>
          </div>

          <p className="project-description">
            Our goal is to create the Vanderbilt Chatbot Accuracy and Reliability Evaluation System (V-CARES) to effectively and efficiently detect hallucinations, omissions, and misaligned values from LLM responses in the healthcare domain.
          </p>
        </div>
      </div> */}

      <div className="research-projects">
        {researchProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-meta">Grant: {project.grant}</p>

            <div className="project-grid">
              <p>
                <strong>Principal Investigator/s:</strong> {project.investigators}
              </p>
              <p>
                <strong>Agency:</strong> {project.agency}
              </p>
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              {project.funding && (
                <p>
                  <strong>Funding:</strong> {project.funding}
                </p>
              )}
            </div>

            {project.description.map((para, i) => (
              <p className="project-description" key={i}>
                {para}
              </p>
            ))}

            {project.image && (
              <div className="project-image">
                <img src={project.image} alt="Project Visual" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchPage;

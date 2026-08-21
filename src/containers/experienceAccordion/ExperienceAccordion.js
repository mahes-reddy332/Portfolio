import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    // Keep Positions of Responsibility open by default when available.
    const defaultIndex = props.sections && props.sections.length > 1 ? 1 : 0;
    this.state = { activeIndex: defaultIndex };
  }

  handleSectionClick = (index) => {
    this.setState((state) => ({
      activeIndex: state.activeIndex === index ? -1 : index,
    }));
  };

  render() {
    const theme = this.props.theme;
    const sections = this.props.sections || [];

    return (
      <div className="experience-accord">
        {sections.map((section, index) => {
          const isOpen = this.state.activeIndex === index;

          return (
            <div key={section.title} className="accord-panel">
              <button
                type="button"
                className="experience-accordion-header"
                onClick={() => this.handleSectionClick(index)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: theme.body,
                  border: "1px solid",
                  borderRadius: "5px",
                  borderColor: theme.headerColor,
                  marginBottom: "3px",
                  fontFamily: "Google Sans Regular",
                  color: theme.text,
                  cursor: "pointer",
                  padding: "16px 20px",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{section.title}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div
                  style={{
                    backgroundColor: theme.body,
                  }}
                >
                  {section.experiences.map((experience, experienceIndex) => (
                    <ExperienceCard
                      key={`${section.title}-${experience.title}-${experienceIndex}`}
                      index={experienceIndex}
                      totalCards={section.experiences.length}
                      experience={experience}
                      theme={theme}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;

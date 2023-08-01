import React, { useState } from 'react';
import '../../common/style-modalSkill.css';
import { ResponsivePie } from '@nivo/pie';

const Modal = ({ isOpen, handleCloseModal, technologySkills, toolsSkills }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className={`modal-container ${isOpen ? 'active' : ''}`} onClick={handleCloseModal}>
            <div className={`modal-content ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="skill-container">
                    <h2>Tecnologías</h2>
                    {technologySkills.map((skill) => (
                        <div
                            className={`skill-row ${selectedSkill === skill.name ? 'selected' : ''}`}
                            key={skill.name}
                            onClick={() => handleSkillClick(skill.name)}
                        >
                            <span className="skill-name">{skill.name}</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${skill.percentage}%` }}>
                                    <span>{skill.percentage}%</span>
                                </div>
                            </div>
                            <div className="nivo-pie-container">
                                <ResponsivePie
                                    data={[
                                        { id: 'Porcentaje', value: skill.percentage, color: '#007bff' },
                                        { id: 'Diferencia', value: 100 - skill.percentage, color: '#f0f0f0' },
                                    ]}
                                    colors={{ datum: 'data.color' }}
                                    enableRadialLabels={false}
                                    enableSliceLabels={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skill-container">
                    <h2>Herramientas</h2>
                    {toolsSkills.map((skill) => (
                        <div
                            className={`skill-row ${selectedSkill === skill.name ? 'selected' : ''}`}
                            key={skill.name}
                            onClick={() => handleSkillClick(skill.name)}
                        >
                            <span className="skill-name">{skill.name}</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${skill.percentage}%` }}>
                                    <span>{skill.percentage}%</span>
                                </div>
                            </div>
                            <div className="nivo-pie-container">
                                <ResponsivePie
                                    data={[
                                        { id: 'Porcentaje', value: skill.percentage, color: '#007bff' },
                                        { id: 'Diferencia', value: 100 - skill.percentage, color: '#f0f0f0' },
                                    ]}
                                    colors={{ datum: 'data.color' }}
                                    enableRadialLabels={false}
                                    enableSliceLabels={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="close-button" onClick={handleCloseModal}>
                    X
                </button>
            </div>
        </div>
    );
};

export default Modal;

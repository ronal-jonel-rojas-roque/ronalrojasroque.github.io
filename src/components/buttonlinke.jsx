import React, { useState } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { GiSkills } from 'react-icons/gi';
import Modal from '../components/modal/modal-skills';

const LinkedInButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSkillsClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Habilidades predeterminadas de tecnología
  const technologySkills = [
    { name: 'C#', percentage: 50 },
    { name: 'HTML5, CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'NestJs', percentage: 80 },
    { name: 'NodeJs', percentage: 80 },
    { name: 'ReactJS', percentage: 85 },
    { name: 'SQL Server', percentage: 80 },
    { name: 'TypeScript', percentage: 70 },
    { name: '.Net 6', percentage: 50 },
  ];

  // Habilidades predeterminadas de herramientas
  const toolsSkills = [
    { name: 'GitHub', percentage: 90 },
    { name: 'Postman', percentage: 85 },
    { name: 'VS Code', percentage: 80 },
    { name: 'Postgresql', percentage: 70 },
    { name: 'MongoDB', percentage: 50 },
    { name: 'Docker', percentage: 40 },
  ];

  return (
    <div>
      <div onClick={handleSkillsClick}>
        <i className="cv-link no-underline">
          <GiSkills />
        </i>
      </div>
      <a href="https://www.linkedin.com/in/ronal-rojas-a39772276">
        <div className="icon">
          <i className="cv-link no-underline">
            <FiLinkedin /> Habla conmigo
          </i>
        </div>
      </a>

      {/* Modal */}
      <Modal isOpen={modalOpen} handleCloseModal={handleCloseModal} technologySkills={technologySkills} toolsSkills={toolsSkills} />
    </div>
  );
};

export default LinkedInButton;

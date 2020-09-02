import React, { useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import '../style/projectImage.css';

const Project = ({ project: { name, projectInfo, siteInfo, technos, image, link, link2 } }) => {

  return (
    <div>
      <Accordion className='project-accordion'>
        <AccordionSummary>
          <figure class="snip1585">
            <img src={require(`../images/${image}`)} className='project-image' />
            <figcaption>
              <h3>{name}</h3>
            </figcaption>
          </figure>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
          <table className='project-table'>
            <tr>
              <td className='project-table-title'>Contexte</td>
              <td>{projectInfo}</td>
            </tr>
            <tr>
              <td className='project-table-title'>Infos</td>
              <td>{siteInfo}</td>
            </tr>
            <tr>
              <td className='project-table-title'>Technos</td>
              <td>{technos.map(t => ` ${t}`)}</td>
            </tr>
          </table>
          <a href={link} target='_blank' rel="noopener noreferrer">Visiter le site</a>
          {link2 && <><a href={link2} target='_blank' rel="noopener noreferrer">Visiter le back-office</a><p>(mail: admin@demo.fr / mdp: admin)</p></>}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Project;

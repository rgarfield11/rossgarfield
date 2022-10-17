import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {/* Tulane */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Sep 2014 - Dec 2018' 
          iconStyle={{background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Tulane University
          </h3>
          <p><i>New Orleans, LA</i></p>
          <p>Bachelor of Science, Architecture</p>
          <p>Minor, General Business</p>
        </VerticalTimelineElement>
        {/* Picnic */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='Jan 2019 - Oct 2020' 
          iconStyle={{background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Picnic Provisions & Whiskey
          </h3>
          <p><i>New Orleans, LA</i></p>
          <p>Kitchen Manager, Purchaser, Lead Line Cook</p>
        </VerticalTimelineElement>
        {/* NOCHI */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Jul 2019 - Dec 2019' 
          iconStyle={{background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            New Orleans Culinary & Hospitaliy Institute
          </h3>
          <p><i>New Orleans, LA</i></p>
          <p>Certificate, Culinary Arts</p>
        </VerticalTimelineElement>
        {/* Commanders */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='Oct 2020 - Apr 2022' 
          iconStyle={{background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Commander's Palace
          </h3>
          <p><i>New Orleans, LA</i></p>
          <p>Butcher, Seafood Purchaser, Expediter, Lead Line Cook</p>
        </VerticalTimelineElement>
        {/* Flatiron */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Apr 2022 - Aug 2022' 
          iconStyle={{background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Flatiron School
          </h3>
          <p><i>New York, NY</i></p>
          <p>Certificate, Software Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline >
    </div>
  )
}

export default Experience
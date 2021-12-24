import React from 'react';
import { PageHead, SectionHead } from '../modules/displayModules';
import { about } from '../siteData/siteData';


function MePage() {
    return(
        <>
            <div>
                <PageHead title="About Scott" />
                <SectionHead title="Developer Journey" />
                <p>{about.developer}</p>
                <SectionHead title="Career" />
                <p>{about.work}</p>
                <SectionHead title="Personal" />
                <p>{about.personal}</p>
            </div>
        </>
    )
}

export default MePage;
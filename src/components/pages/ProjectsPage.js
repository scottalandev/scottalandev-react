import React from 'react';
import { PageHead, SectionHead } from '../modules/displayModules';

function ProjectsPage() {
	return (
		<>
			<div>
				<PageHead title="Projects" />
				<SectionHead
					title="Current Public Deployments"
					text="Here are projects which are currently deployed publicly on the web. Click on each project for design/development notes or to navigate to the
					live page."
				/>
				<hr />
				<SectionHead title="Demos" text="Small projects demonstrating concepts or programming technique." />
				<hr />
				<SectionHead title="Under Development" text="Projects in the planning/development stages." />
			</div>
		</>
	);
}

export default ProjectsPage;

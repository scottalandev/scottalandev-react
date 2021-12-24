import React from 'react';
import { PageHead, SectionHead, RenderTech } from '../modules/displayModules';
import { techHead, tech } from '../siteData/siteData';
import './pages.css';

function TechPage() {
	return (
		<>
			<div>
				<PageHead title={techHead.title} text={techHead.text} />

				<SectionHead title="Deployed" text="Technologies used in currently-deployed projects." />
				{tech.map((item) =>
					item.type === 'deployed' ? (
						<div className="tech-cont" key={item.id}>
							<RenderTech item={item} />
						</div>
					) : null
				)}
				<hr />

				<SectionHead title="Obtained Learning" text="Technologies learned but not used in current projects." />
				{tech.map((item) =>
					item.type === 'obtained' ? (
						<div className="tech-cont" key={item.id}>
							<RenderTech item={item} />
						</div>
					) : null
				)}
				<hr />

				<SectionHead title="Planned Learning" text="Technologies identified for future professional development." />
				{tech.map((item) =>
					item.type === 'planned' ? (
						<div className="tech-cont" key={item.id}>
							<RenderTech item={item} />
						</div>
					) : null
				)}
			</div>
		</>
	);
}

export default TechPage;

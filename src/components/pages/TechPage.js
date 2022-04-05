import React from 'react';
import { PageHead, SectionHead, RenderTech } from '../modules/displayModules';
import { techHead, tech } from '../siteData/siteData';
import './pages.css';

function TechPage() {
	return (
		<>
			<div>
				<PageHead title={techHead.title} text={techHead.text} />

				<SectionHead title="Deployed" text="Technologies applied in projects currently live on the web." />
				{tech.map((item) =>
					item.type === 'deployed' ? (
						<div className="tech-cont" key={item.id}>
							<RenderTech item={item} />
						</div>
					) : null
				)}
				<hr />

				<SectionHead title="Proficiencies" text="Technologies ready for use but not deployed in currently live projects." />
				{tech.map((item) =>
					item.type === 'obtained' ? (
						<div className="tech-cont" key={item.id}>
							<RenderTech item={item} />
						</div>
					) : null
				)}
				<hr />

				<SectionHead title="Current Learning" text="Technologies currently being addressed in professional development." />
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

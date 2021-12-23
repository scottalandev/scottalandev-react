import './displayModules.css';

export function PageHead({ title, text }) {
	return (
		<div className="page-head">
			<h1 className="page-head-title">{title}</h1>
			<h3 className="page-head-text">{text}</h3>
		</div>
	);
}

export function SectionHead({ title, text }) {
    return (
        <div className="section-head">
            <h2 className="section-title">{title}</h2>
            <h6 className="section-sub">{text}</h6>
        </div>
    );
}

export function RenderTech({ item }) {
	return (
		<>
			<div className="tech-row-upper">
				<img src={item.logo} alt={`${item.title} logo`} className="tech-img" />
				<span className="tech-title">{item.title}</span>
			</div>
			<div className="tech-row-lower">
				{(item.level === 0 && <span className="tech-text">I do not yet have functional knowledge of {item.title}. </span>) ||
					(item.level === 1 && <span className="tech-text">I do not yet have functional knowledge of {item.title}. </span>) ||
					(item.level === 2 && <span className="tech-text">I have basic, perfunctory knowledge of {item.title}. </span>) ||
					(item.level === 3 && <span className="tech-text">I have good working knowledge of {item.title}. </span>) ||
					(item.level === 4 && (
						<span className="tech-text">I am comfortable and experienced working with {item.title} in a variety of contexts. </span>
					)) ||
					(item.level === 5 && <span className="tech-text col">My knowledge of and experience with {item.title} is extensive. </span>) ||
					null}
				{item.addText.length > 0 ? <span className="tech-text">{item.addText}.</span> : null}
			</div>
		</>
	);
}

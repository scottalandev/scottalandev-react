import React from "react";
import { PageHead, SectionHead, RenderProject } from "../modules/displayModules";
import { projects } from "../siteData/siteData";

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
        {projects.map((item) =>
          item.type === "public" ? (
            <div className="proj-cont" key={item.id}>
              <RenderProject item={item} />
            </div>
          ) : null
        )}
        <hr />
				
        <SectionHead title="Demos" text="Small projects demonstrating concepts or programming technique." />
        {projects.map((item) =>
          item.type === "demo" ? (
            <div className="proj-cont" key={item.id}>
              <RenderProject item={item} />
            </div>
          ) : null
        )}
        <hr />

        <SectionHead title="Under Development" text="Projects in the planning/development stages." />
        {projects.map((item) =>
          item.type === "development" ? (
            <div className="proj-cont" key={item.id}>
              <RenderProject item={item} />
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default ProjectsPage;

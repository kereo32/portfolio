import { InfoStaticContent, PlayablesStaticContent, ProjectFolders, WebStaticContent, GamesStaticContent, FinderFolders, PersonalStaticContent, ContactStaticContent } from '../Constants/FinderContent';
import { BasicNote, PlayablePreview, Folder, ProjectPreview, ContactRedirect } from '../Components/Shared';

import web from '/images/web.png'
import game from '/images/game.png'



const generateContent = (title: string, changeTitle: (title: string) => void) => {
  switch (title) {
    case 'Info':
      return InfoStaticContent.map((item) => (
        <BasicNote key={item.name} name={item.name} title={item.title} content={item.content} />
      ));
    case 'Projects':
      return ProjectFolders.map((item) => (
        <Folder key={item.title} title={item.title} isOpen={false} customClickHandler={changeTitle} />
      ));
    case 'Playables':
      return PlayablesStaticContent.map((item) => (
        <PlayablePreview key={item.title} title={item.title} description={item.description} url={item.url} solution={item.solution} />
      ));
    case 'Web':
      return WebStaticContent.map((item) => (
        <ProjectPreview key={item.title} title={item.title} description={item.description} liveUrl={item.liveUrl} githubUrl={item.githubUrl} techStack={item.techStack} imgUrl={web} />
      ));
    case 'Games':
      return GamesStaticContent.map((item) => (
        <ProjectPreview key={item.title} title={item.title} description={item.description} liveUrl={item.liveUrl} githubUrl={item.githubUrl} techStack={item.techStack} imgUrl={game} />
      ));
    case 'Finder':
      return FinderFolders.map((item) => (
        <Folder key={item.title} title={item.title} isOpen={false} customClickHandler={changeTitle} />
      ));
    case 'Personal':
      return PersonalStaticContent.map((item) => (
        <BasicNote key={item.name} name={item.name} title={item.title} content={item.content} />
      ));
    case 'Contact':
      return ContactStaticContent.map((item) => (
        <ContactRedirect title={item.title} url={item.url} imgUrl={item.imgUrl} />
      ));
    default:
      return [];
  }
};

export { generateContent }
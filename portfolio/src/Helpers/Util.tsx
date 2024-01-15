import { InfoStaticContent, PlayablesStaticContent, ProjectFolders, WebStaticContent } from '../Constants/FinderContent';
import { BasicNote, PlayablePreview, Folder, WebPreview } from '../Components/Shared';

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
        <WebPreview key={item.title} title={item.title} description={item.description} liveUrl={item.liveUrl} githubUrl={item.githubUrl} techStack={item.techStack} />
      ));
    default:
      return [];
  }
};

export { generateContent }
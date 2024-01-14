import { InfoStaticContent,ProjectsStaticContent,ProjectFolders } from '../Constants/FinderContent';
import {BasicNote,ProjectPreview,Folder} from '../Components/Shared';

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
      return ProjectsStaticContent.map((item) => (
        <ProjectPreview key={item.title} title={item.title} description={item.description} url={item.url} />
      ));
    default:
      return [];
  }
};

export { generateContent}